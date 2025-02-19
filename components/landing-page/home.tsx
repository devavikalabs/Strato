"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

const Home = () => {
    return (
        <main className="min-h-screen bg-white" >
            {/* Navigation */}
            {/* <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-2xl font-bold">anton</div>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                            Free Intro Call
                        </button>
                    </div>
                </div>
            </nav> */}

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8" >
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-6 text-sm text-gray-600">
                        Für Content Manager, Brand Manager und Marketing Leads
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        So haben wir eine hochkarätige
                        <br />
                        AI-Image-Kampagne für{" "}
                        <span className="text-blue-600">Intersport</span>
                        <br />
                        umgesetzt - in 7 Tagen
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Arbeite mit Top Level Designern aus Deutschland
                        <br />
                        und profitiere von allen AI-Vorteilen direkt
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Home

const features = [
    {
        icon: Sparkles,
        title: "KI-optimierte Bildgenerierung",
        description:
            "Nutzen Sie modernste AI-Technologie für hochwertige Kampagnenbilder",
    },
    {
        icon: Sparkles,
        title: "Schnelle Umsetzung",
        description: "Komplette Kampagnen innerhalb von 7 Tagen realisiert",
    },
    {
        icon: Sparkles,
        title: "Professionelles Team",
        description: "Arbeiten Sie mit Top-Designern aus Deutschland zusammen",
    },
];
