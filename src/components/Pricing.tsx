"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    IconArrowUpRight,
    IconBolt,
    IconCheck,
    IconCrown,
    IconSparkles,
} from "@tabler/icons-react";

const plans = {
    monthly: {
        premium: {
            price: "£9.99",
            period: "/month",
            oldPrice: null,
        },
        pro: {
            price: "£19.99",
            period: "/month",
            oldPrice: null,
        },
    },
    yearly: {
        premium: {
            price: "£83.92",
            period: "/year",
            oldPrice: "£119.88/year",
        },
        pro: {
            price: "£167.92",
            period: "/year",
            oldPrice: "£239.88/year",
        },
    },
};

const premiumFeatures = [
    "AI meal scanning",
    "AI-powered recipes",
    "Advanced nutrition features",
    "Nearby meal finder",
];

const proFeatures = [
    "Everything in Premium",
    "Indigenous meal scanning",
    "Fix scan results",
    "Advanced meal insights",
];

export default function Pricing() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

    const currentPlans = plans[billing];

    return (
        <section
            id="pricing"
            className="relative overflow-hidden py-16 sm:py-20"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 size-[500px] -translate-x-1/2 rounded-full bg-green-light/50 blur-[120px]"
            />

            <div className="container relative mx-auto px-5 md:px-8">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 24,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-green/15 bg-green-light px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-green-dark">
                        <IconSparkles size={13} />
                        Pricing
                    </span>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight leading-[1.2] sm:text-4xl lg:text-5xl">
                        Simple nutrition tracking.
                        <span className="block text-green">
                            Simple pricing.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
                        Get the tools you need to track meals, understand your
                        nutrition, and stay consistent with your goals.
                    </p>

                    <div className="mt-8 inline-flex rounded-full border border-line bg-white p-1 shadow-sm">
                        <button
                            type="button"
                            onClick={() => setBilling("monthly")}
                            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${billing === "monthly"
                                ? "bg-fg text-white shadow-sm"
                                : "text-muted hover:text-fg"
                                }`}
                        >
                            Monthly
                        </button>

                        <button
                            type="button"
                            onClick={() => setBilling("yearly")}
                            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${billing === "yearly"
                                ? "bg-fg text-white shadow-sm"
                                : "text-muted hover:text-fg"
                                }`}
                        >
                            Yearly

                            <span
                                className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${billing === "yearly"
                                    ? "bg-white/15 text-white"
                                    : "bg-green-light text-green-dark"
                                    }`}
                            >
                                Save 30%
                            </span>
                        </button>
                    </div>
                </motion.div>

                <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-2">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex h-full flex-col rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-bold text-fg">
                                    Premium
                                </p>

                                <p className="mt-1 text-sm text-muted">
                                    Everything you need for smarter nutrition
                                    tracking.
                                </p>
                            </div>

                            <div className="flex size-10 items-center justify-center rounded-xl bg-surface text-muted">
                                <IconSparkles size={19} />
                            </div>
                        </div>

                        <div className="mt-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={billing}
                                    initial={{
                                        opacity: 0,
                                        y: 8,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -8,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                    }}
                                    className="flex items-baseline"
                                >
                                    <span className="text-4xl font-bold tracking-tight text-fg">
                                        {currentPlans.premium.price}
                                    </span>

                                    <span className="ml-1 text-sm text-muted">
                                        {currentPlans.premium.period}
                                    </span>
                                </motion.div>
                            </AnimatePresence>

                            {currentPlans.premium.oldPrice && (
                                <p className="mt-1 text-xs text-muted line-through">
                                    {currentPlans.premium.oldPrice}
                                </p>
                            )}
                        </div>

                        <div className="my-8 h-px bg-line" />

                        <p className="text-xs font-bold uppercase tracking-wider text-muted">
                            Everything included
                        </p>

                        <ul className="mt-5 space-y-4">
                            {premiumFeatures.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-center gap-3 text-sm text-fg"
                                >
                                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-green-light text-green">
                                        <IconCheck
                                            size={12}
                                            stroke={3}
                                        />
                                    </span>

                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://www.macromealsapp.com/pricing"
                            className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-white px-5 py-3.5 text-sm font-semibold text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-green/30 hover:bg-green hover:text-white"
                        >
                            Get Premium

                            <IconArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-green p-6 text-white shadow-2xl shadow-green/20 sm:p-8"
                    >
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/10 blur-3xl"
                        />

                        <div
                            aria-hidden
                            className="pointer-events-none absolute -bottom-32 -left-20 size-64 rounded-full bg-lime/10 blur-3xl"
                        />

                        <div className="relative flex h-full flex-col">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-bold">
                                            Pro
                                        </p>

                                        <span className="rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                                            Full Access
                                        </span>
                                    </div>

                                    <p className="mt-1 text-sm text-white/80">
                                        Unlock the complete MacroMeals
                                        experience.
                                    </p>
                                </div>

                                <div className="flex size-10 items-center justify-center rounded-xl bg-white/15">
                                    <IconCrown size={19} />
                                </div>
                            </div>

                            <div className="mt-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={billing}
                                        initial={{
                                            opacity: 0,
                                            y: 8,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -8,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                        className="flex items-baseline"
                                    >
                                        <span className="text-4xl font-bold tracking-tight">
                                            {currentPlans.pro.price}
                                        </span>

                                        <span className="ml-1 text-sm text-white/60">
                                            {currentPlans.pro.period}
                                        </span>
                                    </motion.div>
                                </AnimatePresence>

                                {currentPlans.pro.oldPrice && (
                                    <p className="mt-1 text-xs text-white/45 line-through">
                                        {currentPlans.pro.oldPrice}
                                    </p>
                                )}
                            </div>

                            <div className="my-8 h-px bg-white/15" />

                            <p className="text-xs font-bold uppercase tracking-wider text-white/90">
                                Everything included
                            </p>

                            <ul className="mt-5 space-y-4">
                                {proFeatures.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-3 text-sm text-white"
                                    >
                                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                                            <IconCheck
                                                size={12}
                                                stroke={3}
                                            />
                                        </span>

                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://www.macromealsapp.com/pricing"
                                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-green transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                            >
                                Get Pro

                                <IconArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <p className="mt-8 text-center text-xs text-muted">
                    Pricing and features may change. Check the app for the
                    latest subscription details.
                </p>
            </div>
        </section>
    );
}