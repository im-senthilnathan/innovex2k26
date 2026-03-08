import React from "react";
import { MapPin, Mail, Phone, ArrowUpRight, ExternalLink } from "lucide-react";

const socialLinks = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/fpc_at_bharathidasan/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
        hoverColor: "hover:bg-pink-500",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/face-prep-campus",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        hoverColor: "hover:bg-blue-600",
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@faceprepcampus",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
        ),
        hoverColor: "hover:bg-red-600",
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/faceprepcampus/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
        hoverColor: "hover:bg-blue-700",
    },
];

const quickLinks = [
    { label: "Events", href: "#events" },
    { label: "BCAS Official", href: "https://www.bcas.ac.in/", external: true },
    { label: "FACE Prep Website", href: "https://faceprepcampus.com/", external: true },
];

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-blue-950 text-white">

            {/* Decorative background blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* Top accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-8">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* ── Col 1: Branding ── */}
                    <div className="space-y-5">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <img src="fpc_logo.png" alt="FPC Logo" className="w-10 h-10" />
                                <div>
                                    <p className="font-bold text-white text-sm leading-tight">FACE Prep Campus</p>
                                    <p className="text-xs text-white/50 leading-tight">Bharathidasan College of Arts ans Science</p>
                                </div>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Empowering students with industry-relevant skills and a platform to showcase their talents. Celebrating innovation and creativity.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Follow Us</p>
                            <div className="flex gap-2">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className={`w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 ${social.hoverColor} hover:border-transparent hover:shadow-lg`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Col 2: Quick Links ── */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Quick Links</p>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                        className="group flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400/50 group-hover:bg-purple-400 transition-colors duration-200" />
                                        {link.label}
                                        {link.external && (
                                            <ExternalLink size={11} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 3: Contact ── */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Contact Us</p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <MapPin size={13} className="text-blue-300" />
                                </div>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Bharathidasan College of Arts and Science, Erode.
                                </p>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/20 flex items-center justify-center shrink-0">
                                    <Mail size={13} className="text-blue-300" />
                                </div>
                                <a
                                    href="mailto:karthika.sundarrajan@faceacademy.in"
                                    className="text-sm text-white/70 hover:text-white transition-colors duration-200 break-all"
                                >
                                    karthika.sundarrajan@faceacademy.in
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/20 flex items-center justify-center shrink-0">
                                    <Phone size={13} className="text-blue-300" />
                                </div>
                                <a
                                    href="tel:+918148811627"
                                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                                >
                                    +91 81488 11627
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-white/40">
                        © 2026 FACE Prep Campus. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-1.5">
                        <span className="text-xs text-white/30">Powered by</span>
                        <a
                            href="https://faceprepcampus.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-purple-400/80 hover:text-purple-300 transition-colors duration-200 flex items-center gap-1"
                        >
                            FACE Prep Campus
                            <ArrowUpRight size={10} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;