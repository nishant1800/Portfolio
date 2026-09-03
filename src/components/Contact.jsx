import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle, Copy, ExternalLink, Code2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate secure client-side form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Divider */}
      <div className="section-divider mb-12">
        <span>06. GET IN TOUCH</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info & Social Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Let's Connect
            </h3>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              I am currently open to new opportunities, collaborations, and data science projects. Feel free to reach out to discuss a role, project, or opportunity.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 pt-2">
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-5 rounded-xl bg-[#172033]/90 border border-[#26344D] hover:border-[#00D084]/60 flex items-center gap-4 group transition-all cursor-pointer"
            >
              <Mail className="w-6 h-6 text-[#00D084] shrink-0" />
              <div className="min-w-0">
                <div className="text-sm sm:text-base font-bold text-white mb-0.5 group-hover:text-[#00D084] transition-colors">
                  Email
                </div>
                <div className="text-xs sm:text-sm text-[#94A3B8] truncate">
                  {personalInfo.email}
                </div>
              </div>
            </a>

            {/* Location Card */}
            <a
              // href={`https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#172033]/90 border border-[#26344D] hover:border-[#00D084]/60 flex items-center gap-4 group transition-all cursor-pointer"
            >
              <MapPin className="w-6 h-6 text-[#00D084] shrink-0" />
              <div className="min-w-0">
                <div className="text-sm sm:text-base font-bold text-white mb-0.5 group-hover:text-[#00D084] transition-colors">
                  Location
                </div>
                <div className="text-xs sm:text-sm text-[#94A3B8] truncate">
                  {personalInfo.location}
                </div>
              </div>
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#172033] border border-[#26344D] hover:border-[#00D084] hover:text-[#00D084] text-[#94A3B8] flex flex-col items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-xs font-mono">LinkedIn</span>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#172033] border border-[#26344D] hover:border-[#00D084] hover:text-[#00D084] text-[#94A3B8] flex flex-col items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5" />
              <span className="text-xs font-mono">GitHub</span>
            </a>

            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#172033] border border-[#26344D] hover:border-[#00D084] hover:text-[#00D084] text-[#94A3B8] flex flex-col items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <Code2 className="w-5 h-5" />
              <span className="text-xs font-mono">LeetCode</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#172033] border border-[#26344D] relative">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#00D084] font-mono">&gt;</span> Send a Message
            </h4>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-[#00D084]/15 border border-[#00D084]/30 flex items-start gap-3 animate-fadeIn">
                <CheckCircle className="w-5 h-5 text-[#00D084] shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-white">Thank you for reaching out!</p>
                  <p className="text-[#94A3B8] mt-0.5">Your message has been received. I will get back to you shortly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                    Your Name <span className="text-[#00D084]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-lg bg-[#0F172A] border text-sm text-white placeholder-[#94A3B8]/40 focus:outline-none focus:ring-1 focus:ring-[#00D084] transition-colors ${errors.name ? 'border-red-500/80' : 'border-[#26344D] focus:border-[#00D084]'
                      }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                    Your Email <span className="text-[#00D084]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-lg bg-[#0F172A] border text-sm text-white placeholder-[#94A3B8]/40 focus:outline-none focus:ring-1 focus:ring-[#00D084] transition-colors ${errors.email ? 'border-red-500/80' : 'border-[#26344D] focus:border-[#00D084]'
                      }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#26344D] focus:border-[#00D084] text-sm text-white placeholder-[#94A3B8]/40 focus:outline-none focus:ring-1 focus:ring-[#00D084] transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                  Message <span className="text-[#00D084]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className={`w-full px-4 py-3 rounded-lg bg-[#0F172A] border text-sm text-white placeholder-[#94A3B8]/40 focus:outline-none focus:ring-1 focus:ring-[#00D084] transition-colors resize-y ${errors.message ? 'border-red-500/80' : 'border-[#26344D] focus:border-[#00D084]'
                    }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1 font-mono flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#00D084] text-[#0B1220] font-semibold text-sm hover:bg-[#10B981] disabled:opacity-50 transition-all duration-300 shadow-md shadow-[#00D084]/20 active:scale-95"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#0B1220] border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;