import React from "react";
import { Target, Lightbulb, ArrowRight } from "lucide-react";

const pillars = [
    {
        icon: Target,
        title: "Our Goal",
        description:
            "To provide every student a structured platform to discover, compete, and grow across technical, business, and communication domains — all within their own campus.",
        color: "bg-purple-50 text-purple-600 border-purple-100",
        iconBg: "bg-purple-100 text-purple-600",
    },
    {
        icon: Lightbulb,
        title: "Our Vision",
        description:
            "To nurture a generation of industry-ready graduates by bridging the gap between academic learning and real-world skill requirements through meaningful campus experiences.",
        color: "bg-blue-50 text-blue-600 border-blue-100",
        iconBg: "bg-blue-100 text-blue-600",
    },
];

const themes = [
    { label: "Innovate", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { label: "Collaborate", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { label: "Compete", color: "bg-green-100 text-green-700 border-green-200" },
    { label: "Excel", color: "bg-violet-100 text-violet-700 border-violet-200" },
];

const About = () => {
    return (
        <section className="py-20 px-6 bg-slate-50 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Split Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* ── LEFT — Text Content ── */}
                    <div className="flex-1 space-y-7">

                        {/* Label */}
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-500 bg-purple-50 border border-purple-100 px-4 py-1.5 rounded-full">
                            About the Event
                        </span>

                        {/* Heading */}
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                                Where Campus Talent{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                                    Meets Opportunity
                                </span>
                            </h2>
                            <p className="text-gray-500 mt-4 text-base leading-relaxed">
                                FACE Prep Campus at Bharathidasan College of Arts and Science presents an
                                intra-campus event designed to challenge students across multiple disciplines.
                                This initiative brings together participants from all departments to showcase
                                their skills in a competitive, yet collaborative environment.
                            </p>
                            <p className="text-gray-500 mt-3 text-base leading-relaxed">
                                From technical problem-solving to business strategy and communication
                                excellence — this event is crafted to reflect the demands of the
                                professional world, giving students a head start in their careers.
                            </p>
                        </div>

                        {/* Theme Tags */}
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                                Event Themes
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {themes.map((theme) => (
                                    <span
                                        key={theme.label}
                                        className={`text-sm font-semibold px-4 py-1.5 rounded-full border ${theme.color}`}
                                    >
                                        {theme.label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="#events"
                            className="inline-flex cursor-pointer items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:shadow-purple-200 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Explore Events
                            <ArrowRight size={15} />
                        </a>

                    </div>

                    {/* ── RIGHT — Visual Cards ── */}
                    <div className="flex-1 w-full space-y-4">

                        {/* Decorative top card */}
                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 p-6 text-white shadow-xl shadow-purple-200">

                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10">
                                <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                                    23rd March 2026
                                </span>
                                <h3 className="text-2xl font-bold mt-2 leading-snug">
                                    FACE Prep Campus <br /> Intra Campus Event
                                </h3>
                                <p className="text-white/70 text-sm mt-2">
                                    Bharathidasan College of Arts and Science (Autonomous), Erode
                                </p>

                                <div className="flex flex-wrap gap-3 mt-5">
                                    {[
                                        { value: "4", label: "Categories" },
                                        { value: "10", label: "Events" },
                                    ].map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="bg-white/15 border border-white/20 rounded-xl px-4 py-2.5 text-center"
                                        >
                                            <p className="text-2xl font-black">{stat.value}</p>
                                            <p className="text-xs text-white/60 font-medium">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Goal & Vision cards */}
                        {pillars.map((pillar) => {
                            const Icon = pillar.icon;
                            return (
                                <div
                                    key={pillar.title}
                                    className={`flex items-start gap-4 p-5 rounded-2xl border ${pillar.color} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${pillar.iconBg}`}>
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">{pillar.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;