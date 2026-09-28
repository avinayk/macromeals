
import React from "react";
import {
    IconArrowUpRight,
    IconBrandAppstore,
    IconBrandGooglePlay,
    IconMail,
} from "@tabler/icons-react";

const productLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

const companyLinks = [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const legalLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
];

export default function Footer() {
    return (
        <footer className=" border-t border-line text-muted">
            <div className="container mx-auto px-5 md:px-8">
                <div className="grid gap-12 border-b border-line py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10 lg:py-20">
                    <div className="max-w-sm">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2.5"
                        >
                            <img
                                src="/images/logo.svg"
                                alt="MacroMeals"
                                className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                        </a>

                        <p className="mt-5 max-w-xs text-sm leading-6 text-muted">
                            Track smarter. Eat better. Make nutrition easier
                            to understand, one meal at a time.
                        </p>

                        <a
                            href="mailto:hello@macromealsapp.com"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-green"
                        >
                            <IconMail size={16} />
                            hello@macromealsapp.com
                        </a>

                        <div className="mt-7 flex flex-wrap gap-2.5">
                            <a
                                href="#download"
                                className="group inline-flex items-center gap-3 rounded-md border border-green/10 bg-green/[0.06] px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-green/20 hover:bg-green/10"
                            >
                                <IconBrandAppstore size={19} />

                                <span className="text-left">
                                    <span className="block text-[8px] leading-none text-muted/95">
                                        Download on the
                                    </span>
                                    <span className="mt-1 block text-xs font-semibold leading-none">
                                        App Store
                                    </span>
                                </span>
                            </a>

                            <a
                                href="#download"
                                className="group inline-flex items-center gap-3 rounded-md border border-green/10 bg-green/[0.06] px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-green/20 hover:bg-green/10"
                            >
                                <IconBrandGooglePlay size={19} />

                                <span className="text-left">
                                    <span className="block text-[8px] leading-none text-muted/95">
                                        GET IT ON
                                    </span>
                                    <span className="mt-1 block text-xs font-semibold leading-none">
                                        Google Play
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                            Product
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-1.5 text-sm text-muted/80 transition-colors hover:text-green"
                                    >
                                        {link.label}

                                        <IconArrowUpRight
                                            size={12}
                                            className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-1.5 text-sm text-muted/80 transition-colors hover:text-green"
                                    >
                                        {link.label}

                                        <IconArrowUpRight
                                            size={12}
                                            className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                            Legal
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-1.5 text-sm text-muted/80 transition-colors hover:text-green"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted">
                        © 2026 MacroMeals. All rights reserved.
                    </p>

                    <a
                        href="#"
                        className="text-xs font-medium text-muted transition-colors hover:text-white"
                    >
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}