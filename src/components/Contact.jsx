import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  // Initialize EmailJS on component mount
  useEffect(() => {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    // Get it from https://dashboard.emailjs.com/admin (Account > API Keys)
    emailjs.init('8pdXjSezNZ-wcuo1M');
  }, []);

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
      // Service ID: https://dashboard.emailjs.com/admin/services
      // Template ID: https://dashboard.emailjs.com/admin/templates
      await emailjs.send(
        'service_q3c6juh',           // Service ID
        'template_q3c6juh',          // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '8pdXjSezNZ-wcuo1M'            // Public Key
      );

      // Success state
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setValidationErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      console.log('Error code:', err.status);
      console.log('Error message:', err.text);
      setError(`Failed to send message. Error: ${err.text || err.message || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({ ...validationErrors, [name]: '' });
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-mono tracking-tight mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden"
        >
          {/* Decorative background for the form */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 flex flex-col items-center justify-center text-center relative z-10"
            >
              <CheckCircle className="text-green-400 mb-6" size={64} />
              <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
              <p className="text-text-muted">Thanks for reaching out. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Error message display */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                >
                  <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
                  <p className="text-red-300">{error}</p>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">
                    Name {validationErrors.name && <span className="text-red-400">*</span>}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-dark/50 border rounded-lg px-4 py-3 text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 transition-all ${
                      validationErrors.name
                        ? 'border-red-500/50 focus:ring-red-500/30 focus:border-red-500/50'
                        : 'border-white/10 focus:ring-primary/50 focus:border-primary/50'
                    }`}
                    placeholder="John Doe"
                  />
                  {validationErrors.name && (
                    <p className="text-red-400 text-sm mt-1">{validationErrors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">
                    Email {validationErrors.email && <span className="text-red-400">*</span>}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-dark/50 border rounded-lg px-4 py-3 text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 transition-all ${
                      validationErrors.email
                        ? 'border-red-500/50 focus:ring-red-500/30 focus:border-red-500/50'
                        : 'border-white/10 focus:ring-primary/50 focus:border-primary/50'
                    }`}
                    placeholder="john@example.com"
                  />
                  {validationErrors.email && (
                    <p className="text-red-400 text-sm mt-1">{validationErrors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-muted mb-2">
                  Subject {validationErrors.subject && <span className="text-red-400">*</span>}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-dark/50 border rounded-lg px-4 py-3 text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 transition-all ${
                    validationErrors.subject
                      ? 'border-red-500/50 focus:ring-red-500/30 focus:border-red-500/50'
                      : 'border-white/10 focus:ring-primary/50 focus:border-primary/50'
                  }`}
                  placeholder="What is this about?"
                />
                {validationErrors.subject && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.subject}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">
                  Message {validationErrors.message && <span className="text-red-400">*</span>}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-dark/50 border rounded-lg px-4 py-3 text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 transition-all resize-none ${
                    validationErrors.message
                      ? 'border-red-500/50 focus:ring-red-500/30 focus:border-red-500/50'
                      : 'border-white/10 focus:ring-primary/50 focus:border-primary/50'
                  }`}
                  placeholder="Hello, I'd like to talk about..."
                />
                {validationErrors.message && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.message}</p>
                )}
              </div>

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative cursor-pointer inline-flex items-center justify-center px-10 py-4 text-base font-bold text-dark bg-gradient-to-r from-primary to-accent rounded-full overflow-hidden transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="flex items-center">
                    {isSubmitting ? 'Sending...' : 'Say Hello'}
                    {!isSubmitting && <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />}
                  </span>
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
