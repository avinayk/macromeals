"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    IconArrowUpRight,
    IconChevronDown,
    IconMessageCircle,
} from "@tabler/icons-react";

const faqs = [
    {
        question: "How does Macro Meals calculate my daily macronutrient needs?",
        answer:
            "We use industry-standard formulas that factor in your age, weight, height, sex, activity level, and fitness goals to calculate your ideal daily intake of protein, carbs, and fats.",
    },
    {
        question: "Can I use Macro Meals if I have dietary restrictions?",
        answer:
            "Yes! You can customize your preferences to exclude certain ingredients or food types, and our AI will suggest meals and restaurants that align with your restrictions.",
    },
    {
        question: "Do I need an internet connection to use the app?",
        answer:
            "Basic tracking and logging features work offline, but you'll need an internet connection for features like AI suggestions and nearby meal recommendations.",
    },
    {
        question: "What food recognition features are available?",
        answer:
            "You can currently log meals using manual input or barcode scanning. Camera-based food recognition is in development and coming soon.",
    },
    {
        question: "Is Macro Meals free to use ?",
        answer:
            "Yes, the core features are free. We also offer a premium version with advanced insights, priority AI suggestions, and exclusive meal recommendations.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section
            id="faq"
            className="relative bg-white py-14 sm:py-20"
        >
            <div className="container mx-auto px-5 md:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 xl:gap-28">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="lg:sticky lg:top-30 lg:self-start"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-green/15 bg-green-light px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-green-dark">
                            <IconMessageCircle size={13} />
                            FAQ
                        </span>

                        <h2 className="mt-5 max-w-md text-3xl font-semibold tracking-tight leading-[1.2] sm:text-4xl lg:text-5xl">
                            Frequently asked questions.
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
                            Everything you need to know about tracking meals,
                            scanning food, understanding your macros, and using
                            MacroMeals.
                        </p>

                        <div className="mt-8 rounded-xl border border-green/20 bg-green/10 p-5 sm:p-6">
                            <p className="text-sm font-semibold text-fg">
                                Can&apos;t find what you&apos;re looking for?
                            </p>

                            <p className="mt-1.5 text-sm leading-6 text-muted">
                                Our team is happy to help you with anything
                                else.
                            </p>

                            <a
                                href="/contact"
                                className="group mt-5 inline-flex items-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 bg-green"
                            >
                                Contact us

                                <IconArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.08,
                                },
                            },
                        }}
                        className="space-y-3"
                    >
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <motion.div
                                    key={faq.question}
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            y: 18,
                                        },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.55,
                                                ease: [0.22, 1, 0.36, 1],
                                            },
                                        },
                                    }}
                                    className={`overflow-hidden rounded-xl border transition-colors duration-300 ${isOpen
                                            ? "border-green/25 bg-green-light/30"
                                            : "border-line bg-white hover:border-green/20"
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={isOpen}
                                        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                                    >
                                        <span
                                            className={`text-sm font-semibold transition-colors duration-300 ${isOpen
                                                    ? "text-green-dark"
                                                    : "text-fg"
                                                }`}
                                        >
                                            {faq.question}
                                        </span>

                                        <span
                                            className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                                                    ? "border-green bg-green text-white"
                                                    : "border-line bg-surface text-muted"
                                                }`}
                                        >
                                            <motion.span
                                                animate={{
                                                    rotate: isOpen ? 180 : 0,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                            >
                                                <IconChevronDown
                                                    size={16}
                                                    stroke={2}
                                                />
                                            </motion.span>
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    height: {
                                                        duration: 0.35,
                                                        ease: [
                                                            0.22,
                                                            1,
                                                            0.36,
                                                            1,
                                                        ],
                                                    },
                                                    opacity: {
                                                        duration: 0.2,
                                                    },
                                                }}
                                            >
                                                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                                                    <div className="h-px bg-green/10" />

                                                    <p className="pt-4 text-sm leading-7 text-muted sm:text-[15px]">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}