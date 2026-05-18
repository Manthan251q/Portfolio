import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background() {
    const mountRef = useRef(null);
    const animationIdRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        try {
            const scene = new THREE.Scene();

            const camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            camera.position.z = 5;

            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            mountRef.current.appendChild(renderer.domElement);

            // particles
            const geometry = new THREE.BufferGeometry();
            const vertices = [];

            for (let i = 0; i < 3000; i++) {
                vertices.push(
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20
                );
            }

            geometry.setAttribute(
                "position",
                new THREE.Float32BufferAttribute(vertices, 3)
            );

            const material = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.05,
            });

            const particles = new THREE.Points(geometry, material);
            scene.add(particles);

            const mouse = { x: 0, y: 0 };

            const handleMouseMove = (e) => {
                mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            };

            const handleResize = () => {
                const width = window.innerWidth;
                const height = window.innerHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            };

            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("resize", handleResize);

            let animationFrameId;
            const animate = () => {
                animationFrameId = requestAnimationFrame(animate);

                particles.rotation.y += 0.0003;
                particles.rotation.x += mouse.y * 0.0005;
                particles.rotation.y += mouse.x * 0.0005;

                renderer.render(scene, camera);
            };

            animate();
            animationIdRef.current = animationFrameId;

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                window.removeEventListener("resize", handleResize);
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
                if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
                    mountRef.current.removeChild(renderer.domElement);
                }
                geometry.dispose();
                material.dispose();
                renderer.dispose();
            };
        } catch (error) {
            console.error("Error initializing Three.js background:", error);
        }
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
                width: "100%",
                height: "100%",
            }}
        />
    );
}