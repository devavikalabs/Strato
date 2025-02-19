"use client";
import { ArrowRight, Sparkles, X, Check, Users } from "lucide-react";
import Image from "next/image";
import productImage from "@/assets/product.svg";
import logo from "@/assets/logo.svg";
import groupPhoto from "@/assets/group_photo.svg";
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
                    <div className="mb-6 text-sm">
                        <span className="text-black bg-grayLight px-7 py-3 rounded-full">
                            Für Content Manager, Brand Manager und Marketing Leads
                        </span>
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
                    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
                        <Image
                            src={productImage}
                            alt="Sport bag product"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <div className="text-center mb-12">
                            <div className="inline-block bg-yellow-100 px-4 py-2 rounded-full text-sm text-gray-800 mb-6">
                                Du suchst eine Agentur, ohne die Nachteile einer Agentur?
                            </div>
                            <h2 className="text-3xl font-bold">Image Campaign</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold mb-6">Others</h3>
                                {otherFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <X className="w-5 h-5 text-[#707070] flex-shrink-0" />
                                        <span className="text-gray-600">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold mb-6">anton</h3>
                                {antonFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Churn Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-zinc-800 px-4 py-2 rounded-full text-sm text-white mb-8">
                            CONTENT CHURN
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-16">
                            Dein Content stirbt schneller,
                            <br />
                            als du ihn produzieren kannst
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contentChurnCards.map((card, index) => (
                            <div key={index} className="relative group">
                                <div className="relative aspect-[4/3] mb-6">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover rounded-lg brightness-75 group-hover:brightness-90 transition-all"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                                        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                        <p className="text-sm text-white/80">{card.subtitle}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400">{card.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-24">
                        <h2 className="text-5xl sm:text-6xl font-bold">
                            Content is the
                            <br />
                            new Fast Fashion.
                        </h2>
                    </div>
                </div>
            </section>

            {/* Studio Section */}
            <section className="bg-black text-white py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-5xl sm:text-6xl font-bold mb-4">
                            anton Studio
                        </h2>
                        <div className="w-px h-16 bg-white/20 mx-auto mb-16"></div>
                        <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto text-gray-300">
                            Wir sind ein Next-Gen AI Design Studio für hochwertige, AI-generierte Visuals. Unser Team
                            aus Top-Level Designern und Art Directors schafft einzigartigen Content – abseits
                            generischer AI-Lösungen. Ästhetik und Qualität stehen im Fokus, während wir den kreativen
                            Workflow unserer Kunden auf ein Minimum reduzieren.
                        </p>
                    </div>

                    {/* <div className="bg-blue-600 rounded-3xl p-16 text-center">
                        <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                            Die Frage ist nicht ob, oder nicht.
                        </h3>
                        <p className="text-xl mb-12">
                            Finde in einem Call heraus, was für dich konkret möglich ist.
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors text-lg">
                            Kostenloses Erstgespräch vereinbaren
                        </button>
                    </div> */}
                </div>
            </section>

            {/* Booking Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Image
                            src={groupPhoto}
                            alt="Anton Team"
                            width={180}
                            height={180}
                            className="mx-auto mb-8 rounded-full"
                        />
                        <h2 className="text-4xl font-bold mb-16">Buche jetzt deinen Call.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Free Intro Card */}
                        <div className="bg-white border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-bold mb-2">Free Intro</h3>
                            <p className="text-gray-600 mb-6">Kennenlernen</p>
                            <div className="flex gap-4 mb-8">
                                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">15 MIN</span>
                                <span className="bg-yellow-100 px-4 py-2 rounded-full text-sm">15 MIN</span>
                            </div>
                            <div className="text-3xl font-bold">0€</div>
                        </div>

                        {/* AI-Content Assessment Card */}
                        <div className="bg-white border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-2 mb-2">
                                <Users className="w-6 h-6" />
                                <h3 className="text-2xl font-bold">AI-Content Assessment</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Strategische Beratung | Individuelle Integration von AI
                                in deine bestehende Marketingstrategie.
                            </p>
                            <div className="flex gap-4 mb-8">
                                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">60 MIN</span>
                            </div>
                            <div className="text-3xl font-bold">500€</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow"
                            >
                                <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Bereit für Ihre AI-Image-Kampagne?
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        Lassen Sie uns in einem kostenlosen Gespräch über Ihre Ziele sprechen
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                        Kostenloses Erstgespräch vereinbaren
                    </button>
                </div>
            </section> */}

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

const otherFeatures = [
    "Photograph Scouting",
    "Model Scouting",
    "Stylisten Scouting",
    "Make-up-Artists Scouting",
    "Location Scouting",
    "Buy-Out-Verhandlungen",
    "Nutzungsrechte klären",
    "Lizenzgebühren",
    "Limitierte Nutzungsdauer",
    "Shooting-Termine koordinieren",
    "Shooting-Organisation",
    "Hohe Produktionskosten",
    "Postproduktion & Retusche",
    "Lange Planungs- & Lieferzeiten",
];

const antonFeatures = [
    "2 Calls (Briefing & Korrektur)",
    "Weltweite, dauerhafte Lizenz",
];

const contentChurnCards = [
    {
        title: "IF YOU DON'T POST",
        subtitle: "YOU DON'T EXIST",
        description: "Das schadet der Brand Awareness.",
        image: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "QUANTITÄT ERHÖHT DIE CHANCEN",
        subtitle: "AUF VISIBILITY",
        description: "Konsistenz und Frequenz sind King.",
        image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "VERALTETER CONTENT",
        subtitle: "PERFORMT SCHLECHTER",
        description: "Plattformen pushen, was aktuell und relevant ist.",
        image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=800&q=80"
    }
];