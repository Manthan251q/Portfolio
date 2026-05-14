import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // particles
        const geometry = new THREE.BufferGeometry();
        const vertices = [];

        for (let i = 0; i < 3000; i++) {
            vertices.push(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            );
        }

        geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(vertices, 3)
        );

        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.02,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        const mouse = { x: 0, y: 0 };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX / window.innerWidth - 0.5;
            mouse.y = e.clientY / window.innerHeight - 0.5;
        };

        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);

            particles.rotation.y += 0.001;
            particles.rotation.x += mouse.y * 0.02;
            particles.rotation.y += mouse.x * 0.02;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
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