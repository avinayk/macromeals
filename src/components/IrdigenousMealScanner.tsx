"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
    IconArrowUpRight,
    IconBolt,
    IconBrandGooglePlay,
    IconBrandAppstore,
    IconCheck,
    IconScan,
    IconSparkles,
} from "@tabler/icons-react";

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 28,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const resultItems = [
    {
        label: "Calories",
        value: "684",
        unit: "kcal",
    },
    {
        label: "Protein",
        value: "32",
        unit: "g",
    },
    {
        label: "Carbs",
        value: "78",
        unit: "g",
    },
];

export default function IndigenousMealScanner() {
    return (
        <section className="relative overflow-hidden bg-white py-14 sm:py-20">
            <div className="container mx-auto px-5 md:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.12,
                                },
                            },
                        }}
                        className="max-w-xl"
                    >
                        <motion.div variants={fadeUp}>
                            <span className="inline-flex items-center gap-2 rounded-full border border-green/15 bg-green-light px-3.5 py-1.5 text-xs font-bold tracking-wider text-green-dark">
                                <span className="size-1.5 rounded-full bg-green" />
                                Built around real food
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-[-0.035em] text-fg sm:text-5xl"
                        >
                            Your food isn&apos;t generic.
                            <span className="mt-2 block text-green">
                                Your nutrition app shouldn&apos;t be either.
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-xl text-base leading-7 text-muted"
                        >
                            Scan Ghanaian and Nigerian meals and get nutrition estimates based on
                            the foods you actually eat. Whether it’s jollof rice, waakye, egusi
                            soup, fufu, plantain, or your everyday home-cooked meals, MacroMeals
                            helps you understand what’s on your plate without forcing your food
                            into a generic nutrition database.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-9"
                        >

                            <motion.div
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.97 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="#"
                                    className="group inline-flex items-center gap-3 rounded-md bg-green px-4 py-3 text-left text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green hover:shadow-xl hover:shadow-green/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                                >
                                    <span className="flex size-9 shrink-0 text-green items-center justify-center rounded-md bg-white">
                                        <IconBrandAppstore className="size-5" stroke={1.8} />
                                    </span>

                                    <span className="flex flex-col leading-none">
                                        <span className="text-[10px] font-medium uppercase tracking-wide text-white/90">
                                            Download on the
                                        </span>
                                        <span className="mt-[1.5px] text-sm font-semibold tracking-tight">
                                            App Store
                                        </span>
                                    </span>

                                    <IconArrowUpRight
                                        className="ml-1 size-4 text-white/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                                        stroke={1.8}
                                    />
                                </a>

                                <a
                                    href="#"
                                    className="group inline-flex  items-center gap-3 rounded-md border border-line bg-white px-5 py-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green/30 hover:bg-green-light hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                                >
                                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-green-light text-green">
                                        <IconBrandGooglePlay className="size-5" stroke={1.8} />
                                    </span>

                                    <span className="flex flex-col leading-none">
                                        <span className="text-[10px] font-medium uppercase tracking-wide text-muted">
                                            Get it on
                                        </span>
                                        <span className="mt-1 text-sm font-semibold tracking-tight text-fg">
                                            Google Play
                                        </span>
                                    </span>

                                    <IconArrowUpRight
                                        className="ml-1 size-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green"
                                        stroke={1.8}
                                    />
                                </a>


                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-muted"
                        >
                            <span className="flex items-center gap-2">
                                <span className="flex size-5 items-center justify-center rounded-full bg-green-light">
                                    <IconCheck
                                        size={12}
                                        className="text-green"
                                        stroke={3}
                                    />
                                </span>
                                Ghanaian meals
                            </span>

                            <span className="flex items-center gap-2">
                                <span className="flex size-5 items-center justify-center rounded-full bg-green-light">
                                    <IconCheck
                                        size={12}
                                        className="text-green"
                                        stroke={3}
                                    />
                                </span>
                                Nigerian meals
                            </span>

                            <span className="flex items-center gap-2">
                                <span className="flex size-5 items-center justify-center rounded-full bg-green-light">
                                    <IconCheck
                                        size={12}
                                        className="text-green"
                                        stroke={3}
                                    />
                                </span>
                                AI-powered scanning
                            </span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                            scale: 0.96,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                    >
                        <div className="absolute -inset-10 -z-10 rounded-[60px] bg-green-light/60 blur-3xl" />

                        <div className="relative overflow-hidden rounded-[32px] border border-line bg-[#f7faf8] p-3 shadow-2xl shadow-black/10 sm:p-4">

                            <div className="relative min-h-[560px] overflow-hidden rounded-[24px] bg-[#dce8df]">
                                <img
                                    src="/images/chiken-rise.jpg"
                                    alt="Ghanaian and Nigerian meal being scanned"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/10" />

                                <motion.div
                                    initial={{ y: "-100%", opacity: 0 }}
                                    whileInView={{
                                        y: "100%",
                                        opacity: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: 0.6,
                                        duration: 1.5,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute left-[8%] right-[8%] top-0 h-px bg-green shadow-[0_0_16px_rgba(0,150,136,0.9)]"
                                />

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.85,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: 0.85,
                                        duration: 0.45,
                                    }}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                >
                                    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-4 py-2.5 text-xs font-semibold text-white shadow-xl backdrop-blur-xl">
                                        <IconScan
                                            size={16}
                                            className="text-green"
                                        />
                                        Scanning your meal
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: 1.2,
                                        duration: 0.6,
                                    }}
                                    className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-xs font-semibold text-white backdrop-blur-xl"
                                >
                                    <IconSparkles
                                        size={14}
                                        className="text-green"
                                    />
                                    AI food recognition
                                </motion.div>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: 1.45,
                                        duration: 0.65,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:p-5"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                                                Meal identified
                                            </p>

                                            <p className="mt-1 text-base font-semibold text-fg">
                                                Jollof Rice & Chicken
                                            </p>
                                        </div>

                                        <div className="flex size-9 items-center justify-center rounded-xl bg-green-light text-green">
                                            <IconCheck
                                                size={18}
                                                stroke={2.5}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-5 grid grid-cols-3 divide-x divide-line">
                                        {resultItems.map((item) => (
                                            <div
                                                key={item.label}
                                                className="px-3 first:pl-0 last:pr-0"
                                            >
                                                <p className="text-[10px] font-medium uppercase tracking-wide text-muted">
                                                    {item.label}
                                                </p>

                                                <p className="mt-1 text-lg font-bold tabular-nums text-fg">
                                                    {item.value}
                                                    <span className="ml-0.5 text-xs font-medium text-muted">
                                                        {item.unit}
                                                    </span>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: 1.6,
                                duration: 0.5,
                            }}
                            className="absolute -bottom-8 -left-5 hidden items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-xl sm:flex"
                        >
                            <span className="flex size-9 items-center justify-center rounded-xl bg-green text-white">
                                <IconBolt size={17} />
                            </span>

                            <div>
                                <p className="text-xs font-semibold text-fg">
                                    Ready in seconds
                                </p>
                                <p className="mt-0.5 text-[11px] text-muted">
                                    No manual searching
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}