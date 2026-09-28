"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
    IconActivity,
    IconChartBar,
    IconCheck,
    IconFlame,
    IconScan,
    IconTarget,
    IconToolsKitchen2,
} from "@tabler/icons-react";

const screens = [
    {
        title: "Dashboard",
        type: "dashboard",
    },
    {
        title: "Scanner",
        type: "scanner",
    },
    {
        title: "Meals",
        type: "meals",
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
        },
    },
};

const screenVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 35,
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

function PhoneHeader({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="flex items-center justify-between">
            <div>
                <p className="text-[8px] font-medium text-muted">
                    {subtitle || "Today"}
                </p>
                <h3 className="mt-0.5 text-xs font-bold text-fg">
                    {title}
                </h3>
            </div>

            <div className="flex size-7 items-center justify-center rounded-full bg-green-light text-green">
                <IconActivity size={13} />
            </div>
        </div>
    );
}

function DashboardScreen() {
    return (
        <div className="space-y-3">
            <PhoneHeader
                title="Good morning"
                subtitle="Monday, June 24"
            />

            <div className="rounded-xl bg-green p-3 text-white">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-[8px] text-white/65">
                            Calories remaining
                        </p>
                        <p className="mt-1 text-xl font-bold">
                            1,496
                        </p>
                    </div>

                    <IconFlame
                        size={17}
                        className="text-white/80"
                    />
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[68%] rounded-full bg-white" />
                </div>

                <div className="mt-2 flex justify-between text-[7px] text-white/60">
                    <span>684 eaten</span>
                    <span>2,180 goal</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
                {[
                    ["Protein", "92g"],
                    ["Carbs", "126g"],
                    ["Fat", "41g"],
                ].map(([label, value]) => (
                    <div
                        key={label}
                        className="rounded-lg border border-line bg-surface p-2"
                    >
                        <p className="text-[7px] text-muted">
                            {label}
                        </p>
                        <p className="mt-1 text-[10px] font-bold text-fg">
                            {value}
                        </p>
                    </div>
                ))}
            </div>

            <div className="rounded-xl border border-line bg-white p-2.5">
                <div className="flex items-center justify-between">
                    <span className="text-[8px] font-semibold text-fg">
                        Today&apos;s progress
                    </span>

                    <span className="text-[7px] font-medium text-green">
                        82%
                    </span>
                </div>

                <div className="mt-3 flex h-12 items-end gap-1">
                    {[30, 42, 35, 58, 48, 72, 85].map(
                        (height, index) => (
                            <div
                                key={index}
                                className="flex-1 rounded-t-sm bg-green/15"
                                style={{
                                    height: `${height}%`,
                                }}
                            >
                                <div
                                    className="h-full w-full rounded-t-sm bg-green"
                                    style={{
                                        opacity:
                                            0.35 +
                                            index * 0.08,
                                    }}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

function ScannerScreen() {
    return (
        <div className="space-y-3">
            <PhoneHeader
                title="Scan your meal"
                subtitle="Meal scanner"
            />

            <div className="relative aspect-[0.86] overflow-hidden rounded-2xl bg-gradient-to-br from-green-light via-white to-lime/20">
                <div className="absolute inset-3 rounded-xl border border-green/20" />
                <img src="/images/hero1.png" alt="image" className='w-full h-full object-cover' />
                <div className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border-2 border-green/40 bg-white/60 shadow-xl backdrop-blur">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-green text-white">
                        <IconScan size={22} />
                    </div>
                </div>

                <motion.div
                    animate={{
                        top: ["18%", "78%", "18%"],
                    }}
                    transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-6 right-6 h-px bg-green shadow-[0_0_10px_rgba(0,150,136,0.8)]"
                />

                <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-black/70 px-3 py-1.5 text-[8px] font-semibold text-white backdrop-blur">
                    <span className="size-1.5 rounded-full bg-green" />
                    Ready to scan
                </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-line bg-white p-2.5">
                <div>
                    <p className="text-[8px] font-semibold text-fg">
                        AI food recognition
                    </p>
                    <p className="mt-0.5 text-[7px] text-muted">
                        Identify your meal instantly
                    </p>
                </div>

                <IconCheck
                    size={15}
                    className="text-green"
                />
            </div>
        </div>
    );
}

function MealsScreen() {
    return (
        <div className="space-y-3">
            <PhoneHeader
                title="My meals"
                subtitle="Monday, June 24"
            />

            <div className="flex items-center justify-between rounded-xl bg-green-light p-3">
                <div>
                    <p className="text-[8px] font-medium text-green-dark">
                        Daily calories
                    </p>
                    <p className="mt-1 text-lg font-bold text-fg">
                        684
                        <span className="ml-1 text-[8px] font-medium text-muted">
                            / 2,180 kcal
                        </span>
                    </p>
                </div>

                <IconTarget
                    size={19}
                    className="text-green"
                />
            </div>

            <div className="space-y-1.5">
                {[
                    ["Breakfast", "420 kcal", "28g protein"],
                    ["Lunch", "684 kcal", "32g protein"],
                    ["Snack", "180 kcal", "8g protein"],
                ].map(([meal, calories, protein]) => (
                    <div
                        key={meal}
                        className="flex items-center gap-2 rounded-xl border border-line bg-white p-2.5"
                    >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-green-light text-green">
                            <IconToolsKitchen2 size={13} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-[8px] font-semibold text-fg">
                                {meal}
                            </p>
                            <p className="mt-0.5 text-[7px] text-muted">
                                {protein}
                            </p>
                        </div>

                        <span className="text-[8px] font-semibold text-fg">
                            {calories}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ScreenContent({ type }: { type: string }) {
    if (type === "dashboard") {
        return <DashboardScreen />;
    }

    if (type === "scanner") {
        return <ScannerScreen />;
    }

    return <MealsScreen />;
}

export default function AppExperience() {
    return (
        <section
            id="app-experience"
            className="relative overflow-hidden py-14 sm:py-20"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[-180px] size-[600px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute bottom-[-180px] left-[-120px] size-[400px] rounded-full bg-lime/20 blur-[120px]"
            />
            <div className="container relative mx-auto px-5 md:px-8">
                <div className="bg-green text-white rounded-3xl py-14 sm:py-20">
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
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold  tracking-wider text-white/80 backdrop-blur">
                            <IconScan className="me-2 text-white" size={13} stroke={2} />
                            Inside MacroMeals
                        </span>

                        <h2 className="mt-5 text-3xl font-semibold tracking-tight leading-[1.2] sm:text-4xl lg:text-5xl">
                            Everything at a glance.
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/90">
                            Your meals, macros, scans and progress — all in one
                            simple experience designed to keep you moving.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        className="mx-auto mt-16 flex max-w-6xl items-end justify-center gap-4 sm:gap-6 lg:gap-8"
                    >
                        <motion.div
                            variants={screenVariants}
                            className="hidden w-[220px] shrink-0 rotate-[-5deg] overflow-hidden rounded-[30px] border-[6px] border-white/20 bg-white p-2 shadow-2xl shadow-black/20 sm:block lg:w-[250px]"
                        >
                            <div className="overflow-hidden rounded-[22px] bg-white">
                                <div className="flex h-5 items-center justify-center">
                                    <div className="h-1 w-12 rounded-full bg-fg/10" />
                                </div>

                                <div className="px-3 pb-4">
                                    <ScreenContent type="dashboard" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={screenVariants}
                            whileHover={{
                                y: -8,
                            }}
                            className="relative z-10 w-[270px] shrink-0 overflow-hidden rounded-[34px] border-[7px] border-white/30 bg-white p-2 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:w-[300px] lg:w-[330px]"
                        >
                            <div className="overflow-hidden rounded-[25px] bg-white">
                                <div className="flex h-6 items-center justify-center">
                                    <div className="h-1 w-14 rounded-full bg-fg/10" />
                                </div>

                                <div className="px-3 pb-5 sm:px-4">
                                    <ScreenContent type="scanner" />
                                </div>
                            </div>

                            <div className="absolute bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-fg/10" />
                        </motion.div>

                        <motion.div
                            variants={screenVariants}
                            className="hidden w-[220px] shrink-0 rotate-[5deg] overflow-hidden rounded-[30px] border-[6px] border-white/20 bg-white p-2 shadow-2xl shadow-black/20 sm:block lg:w-[250px]"
                        >
                            <div className="overflow-hidden rounded-[22px] bg-white">
                                <div className="flex h-5 items-center justify-center">
                                    <div className="h-1 w-12 rounded-full bg-fg/10" />
                                </div>

                                <div className="px-3 pb-4">
                                    <ScreenContent type="meals" />
                                </div>
                            </div>
                        </motion.div>
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
                            delay: 0.6,
                            duration: 0.6,
                        }}
                        className="mx-auto mt-12 flex max-w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-medium text-white/70 backdrop-blur"
                    >
                        <IconChartBar
                            size={15}
                            className="text-white"
                        />
                        Track meals. Understand macros. See progress.
                    </motion.div>
                </div>
            </div>
        </section>
    );
}