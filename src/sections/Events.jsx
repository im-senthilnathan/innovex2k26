import React, { useState } from "react";
import { Mic, BriefcaseBusiness, Code, Star } from "lucide-react";
import { events } from "../data/EventDetails";
import EventCard from "../components/EventCard";

const tabs = [
    {
        key: "communication",
        label: "Communication",
        icon: Mic,
        activeColor: "bg-blue-600 text-white shadow-blue-200",
        inactiveColor: "bg-white text-gray-500 hover:bg-blue-50 hover:text-blue-600",
        iconBg: "bg-blue-100 text-blue-600",
        iconActiveBg: "bg-blue-500 text-white",
        dot: "bg-blue-500",
    },
    {
        key: "business",
        label: "Business",
        icon: BriefcaseBusiness,
        activeColor: "bg-fuchsia-600 text-white shadow-fuchsia-200",
        inactiveColor: "bg-white text-gray-500 hover:bg-fuchsia-50 hover:text-fuchsia-600",
        iconBg: "bg-fuchsia-100 text-fuchsia-600",
        iconActiveBg: "bg-fuchsia-500 text-white",
        dot: "bg-fuchsia-500",
    },
    {
        key: "technical",
        label: "Technical",
        icon: Code,
        activeColor: "bg-green-600 text-white shadow-green-200",
        inactiveColor: "bg-white text-gray-500 hover:bg-green-50 hover:text-green-600",
        iconBg: "bg-green-100 text-green-600",
        iconActiveBg: "bg-green-500 text-white",
        dot: "bg-green-500",
    },
    {
        key: "other",
        label: "Other",
        icon: Star,
        activeColor: "bg-purple-600 text-white shadow-purple-200",
        inactiveColor: "bg-white text-gray-500 hover:bg-purple-50 hover:text-purple-600",
        iconBg: "bg-purple-100 text-purple-600",
        iconActiveBg: "bg-purple-500 text-white",
        dot: "bg-purple-500",
    },
];

const Events = () => {
    const [activeTab, setActiveTab] = useState("technical");
    const activeTabData = tabs.find((t) => t.key === activeTab);

    return (
        <section id="events" className="pb-8 bg-gradient-to-br from-slate-400 via-blue-400/30 to-purple-400/40 min-h-screen">

            {/* Header */}
            <div className="bg-white w-full py-4 mb-4 shadow-md">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-500 bg-purple-50 border border-purple-100 px-4 py-1.5 rounded-full mb-4">
                        Explore Events
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                        Event{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                            Categories
                        </span>
                    </h2>
                    <p className="text-gray-500 mt-3 text-sm">
                        Browse and register for events across all categories
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.key;
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex items-center cursor-pointer gap-2.5 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 border
                ${isActive
                                        ? `${tab.activeColor} border-transparent shadow-lg scale-105`
                                        : `${tab.inactiveColor} border-gray-200`
                                    }`}
                            >
                                <span className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive ? tab.iconActiveBg : tab.iconBg}`}>
                                    <Icon size={14} />
                                </span>
                                {tab.label}
                                {isActive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 ml-1" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Active Tab Label */}
            <div className="flex items-center gap-2 max-w-6xl mx-auto mb-6">
                <span className={`w-2.5 h-2.5 rounded-full ${activeTabData?.dot}`} />
                <p className="text-sm font-semibold text-gray-700">
                    {activeTabData?.label} Events
                </p>
                <span className="ml-auto text-xs text-gray-400 bg-white border border-gray-100 px-3 py-1 rounded-full shadow-sm">
                    {events[activeTab]?.length || 0} events
                </span>
            </div>

            {/* Events Grid */}
            <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto [&>*]:w-full [&>*]:md:w-[calc(50%-12px)] [&>*]:lg:w-[calc(33.333%-16px)]">
                {events[activeTab]?.length > 0 ? (
                    events[activeTab].map((event, index) => (
                        <EventCard key={event.id} event={event} index={index} />
                    ))
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
                        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                            <Star size={28} className="text-gray-300" />
                        </div>
                        <p className="font-medium text-gray-500">No events available</p>
                        <p className="text-sm mt-1">Check back soon for updates</p>
                    </div>
                )}
            </div>

        </section>
    );
};

export default Events;