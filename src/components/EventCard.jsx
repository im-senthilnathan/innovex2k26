import React, { useState } from "react";
import { Clock, MapPin, ArrowUpRight, Users, X, ExternalLink } from "lucide-react";

const categoryStyles = {
    technical: {
        badge: "bg-green-50 text-green-600 border-green-100",
        accent: "from-green-500 to-indigo-500",
        hover: "group-hover:shadow-green-100",
        btn: "bg-green-600 hover:bg-green-700",
        leftPanel: "from-green-600 to-indigo-700",
        dot: "bg-green-400",
        registerBtn: "bg-green-600 hover:bg-green-700",
    },
    communication: {
        badge: "bg-blue-50 text-blue-600 border-blue-100",
        accent: "from-blue-500 to-cyan-400",
        hover: "group-hover:shadow-blue-100",
        btn: "bg-blue-600 hover:bg-blue-700",
        leftPanel: "from-blue-600 to-cyan-600",
        dot: "bg-blue-400",
        registerBtn: "bg-blue-600 hover:bg-blue-700",
    },
    business: {
        badge: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100",
        accent: "from-fuchsia-500 to-purple-400",
        hover: "group-hover:shadow-fuchsia-100",
        btn: "bg-fuchsia-600 hover:bg-fuchsia-700",
        leftPanel: "from-fuchsia-600 to-purple-700",
        dot: "bg-fuchsia-400",
        registerBtn: "bg-fuchsia-600 hover:bg-fuchsia-700",
    },
    other: {
        badge: "bg-purple-50 text-purple-600 border-purple-100",
        accent: "from-purple-500 to-blue-400",
        hover: "group-hover:shadow-purple-100",
        btn: "bg-purple-600 hover:bg-purple-700",
        leftPanel: "from-purple-600 to-blue-700",
        dot: "bg-purple-400",
        registerBtn: "bg-purple-600 hover:bg-purple-700",
    },
};

/* ── Details Modal — slides in from LEFT ── */
const EventDetailsModal = ({ event, style, onClose, onRegister }) => (
    <div
        className="fixed inset-0 z-50 flex items-stretch bg-black/40 backdrop-blur-sm"
        onClick={onClose}
    >
        <div
            className="relative bg-white h-full w-full max-w-md flex flex-col shadow-2xl animate-slide-in-left overflow-hidden"
            style={{ animation: "slideInLeft 0.3s ease forwards" }}
            onClick={(e) => e.stopPropagation()}
        >
            {/* Gradient Header */}
            <div className={`bg-gradient-to-br ${style.leftPanel} p-6 text-white shrink-0`}>
                <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
                        {event.category}
                    </span>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
                    >
                        <X size={16} />
                    </button>
                </div>

                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-36 object-cover rounded-xl opacity-80 mb-4"
                />

                <h2 className="text-2xl font-bold leading-snug">{event.title}</h2>

                <div className="flex flex-col gap-2 mt-3">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                        <Clock size={14} className="shrink-0" />
                        {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                        <MapPin size={14} className="shrink-0" />
                        {event.location}
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">About</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                </div>

                <div className="h-px bg-gray-100" />

                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Instructions</h4>
                    {event.instructions && event.instructions.length > 0 ? (
                        <ul className="space-y-2.5">
                            {event.instructions.map((instruction, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                                    <span className={`mt-0.5 w-5 h-5 rounded-full ${style.dot} text-white text-xs flex items-center justify-center shrink-0 font-bold`}>
                                        {index + 1}
                                    </span>
                                    {instruction}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-400 italic">Instructions will be updated soon.</p>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="flex gap-3 p-5 border-t border-gray-100 bg-gray-50/60 shrink-0">
                <button
                    onClick={onClose}
                    className="flex-1 border border-gray-200 text-gray-600 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-100 transition-all"
                >
                    Close
                </button>
                <button
                    onClick={onRegister}
                    className={`flex-1 ${style.registerBtn} text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2`}
                >
                    <Users size={14} />
                    Register Now
                </button>
            </div>
        </div>
    </div>
);

/* ── Registration Modal — slides in from RIGHT ── */
const RegisterModal = ({ event, style, onClose }) => {
    const hasForm = event.formUrl && event.formUrl.trim() !== "";

    const embedUrl = hasForm
        ? event.formUrl.includes("?embedded=true")
            ? event.formUrl
            : event.formUrl.replace("/viewform", "/viewform?embedded=true")
        : "";

    const cleanUrl = hasForm ? event.formUrl.replace("?embedded=true", "") : "";

    return (
        <div
            className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/40 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative bg-white h-full w-full max-w-md flex flex-col shadow-2xl overflow-hidden"
                style={{ animation: "slideInRight 0.3s ease forwards" }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className={`flex items-center justify-between px-5 py-4 bg-gradient-to-r ${style.leftPanel} text-white shrink-0`}>
                    <div>
                        <p className="text-xs text-white/70 uppercase tracking-widest font-semibold">Registration</p>
                        <h3 className="text-lg font-bold leading-tight">{event.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                        {hasForm && (
                            <a
                                href={cleanUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-all"
                            >
                                <ExternalLink size={13} />
                                New tab
                            </a>
                        )}
                        <button
                            onClick={onClose}
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>

                {/* Form / Fallback */}
                <div className="flex-1 overflow-hidden">
                    {hasForm ? (
                        <iframe
                            src={embedUrl}
                            title={`Register for ${event.title}`}
                            className="w-full h-full border-0"
                            loading="lazy"
                        >
                            Loading form...
                        </iframe>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full gap-3 p-8 text-gray-400">
                            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
                                <Users size={26} className="text-gray-300" />
                            </div>
                            <p className="font-semibold text-gray-500 text-center">Registration link coming soon!</p>
                            <p className="text-sm text-center">
                                The form for this event will be available shortly. Check back later.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

/* ── Keyframe styles injected once ── */
const modalStyles = `
    @keyframes slideInLeft {
        from { transform: translateX(-100%); opacity: 0; }
        to   { transform: translateX(0);     opacity: 1; }
    }
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to   { transform: translateX(0);    opacity: 1; }
    }
`;

/* ── Event Card ── */
const EventCard = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const style = categoryStyles[event.category?.toLowerCase()] || categoryStyles.technical;

    return (
        <>
            {/* Inject keyframes once */}
            <style>{modalStyles}</style>

            <div className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl ${style.hover} transition-all duration-300 hover:-translate-y-1 flex flex-col`}>

                {/* Image */}
                <div className="relative overflow-hidden h-48">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${style.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm bg-white/80 ${style.badge}`}>
                        {event.category}
                    </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-purple-700 transition-colors duration-200">
                        {event.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                        {event.description}
                    </p>

                    <div className="mt-auto space-y-2">
                        <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                            <Clock size={13} className="text-purple-400 shrink-0" />
                            <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                            <MapPin size={13} className="text-blue-400 shrink-0" />
                            <span>{event.location}</span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent mx-5" />

                {/* Buttons */}
                <div className="flex items-center gap-3 p-4">
                    <button
                        onClick={() => setShowDetails(true)}
                        className="flex-1 cursor-pointer border border-gray-200 text-gray-600 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 flex items-center justify-center gap-1.5"
                    >
                        View Details
                        <ArrowUpRight size={13} />
                    </button>
                    <button
                        onClick={() => setShowRegister(true)}
                        className={`flex-1 ${style.btn} cursor-pointer text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-1.5`}
                    >
                        <Users size={13} />
                        Register
                    </button>
                </div>
            </div>

            {/* Details Modal — LEFT */}
            {showDetails && (
                <EventDetailsModal
                    event={event}
                    style={style}
                    onClose={() => setShowDetails(false)}
                    onRegister={() => {
                        setShowDetails(false);
                        setShowRegister(true);
                    }}
                />
            )}

            {/* Register Modal — RIGHT */}
            {showRegister && (
                <RegisterModal
                    event={event}
                    style={style}
                    onClose={() => setShowRegister(false)}
                />
            )}
        </>
    );
};

export default EventCard;