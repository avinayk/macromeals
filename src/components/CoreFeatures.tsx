"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
    IconCalculator,
    IconCheck,
    IconChartBar,
    IconChefHat,
    IconPlus,
    IconScan,
    IconTarget,
    IconTrendingUp,
    IconAdjustmentsStar
} from "@tabler/icons-react";

const features = [
    {
        icon: IconCalculator,
        title: "Macro Calculator",
        description:
            "Set calorie and macro targets that match your body, activity and goals.",
        type: "calculator",
    },
    {
        icon: IconPlus,
        title: "Meal Logging",
        description:
            "Quickly log meals and keep your daily nutrition organized in one place.",
        type: "logging",
    },
    {
        icon: IconScan,
        title: "Meal Scanner",
        description:
            "Scan your food with AI and get a nutrition estimate in seconds.",
        type: "scanner",
    },
    {
        icon: IconChefHat,
        title: "AI Recipes",
        description:
            "Discover recipes designed around your calorie and macro targets.",
        type: "recipes",
    },
    {
        icon: IconChartBar,
        title: "Progress Dashboard",
        description:
            "Understand your daily nutrition with simple, useful progress insights.",
        type: "progress",
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

function FeaturePreview({ type }: { type: string }) {
    if (type === "calculator") {
        return (
            <div className="mt-7 rounded-xl border border-line bg-white p-3">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium text-muted">
                        Daily calorie goal
                    </span>
                    <IconTarget
                        size={14}
                        className="text-green"
                    />
                </div>

                <div className="mt-2 flex items-end gap-2">
                    <span className="text-xl font-bold tracking-tight text-fg">
                        2,180
                    </span>
                    <span className="mb-0.5 text-[10px] text-muted">
                        kcal
                    </span>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-1.5">
                    {[
                        ["Protein", "140g"],
                        ["Carbs", "230g"],
                        ["Fat", "70g"],
                    ].map(([label, value]) => (
                        <div
                            key={label}
                            className="rounded-lg bg-green-light/60 px-2 py-1.5"
                        >
                            <p className="text-[8px] text-muted">
                                {label}
                            </p>
                            <p className="mt-0.5 text-[10px] font-semibold text-fg">
                                {value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (type === "logging") {
        return (
            <div className="mt-7 rounded-xl border border-line bg-white p-3">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium text-muted">
                        Today
                    </span>

                    <span className="flex size-6 items-center justify-center rounded-lg bg-green text-white">
                        <IconPlus size={13} />
                    </span>
                </div>

                <div className="mt-3 space-y-2">
                    {[
                        ["Breakfast", "420 kcal"],
                        ["Lunch", "684 kcal"],
                    ].map(([meal, calories]) => (
                        <div
                            key={meal}
                            className="flex items-center justify-between rounded-lg bg-surface px-2.5 py-2"
                        >
                            <span className="text-[10px] font-medium text-fg">
                                {meal}
                            </span>

                            <span className="text-[9px] text-muted">
                                {calories}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (type === "scanner") {
        return (
            <div className="relative mt-7 overflow-hidden rounded-xl border border-line bg-gradient-to-br from-green-light to-white p-3">
                <div className="relative h-24 overflow-hidden rounded-lg bg-[#dce8df]">
                    <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(0,150,136,0.2)_1px,transparent_0)] [background-size:16px_16px]" />

                    <div className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-green text-white shadow-lg">
                        <IconScan size={17} />
                    </div>

                    <motion.div
                        animate={{
                            y: [0, 55, 0],
                        }}
                        transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute left-3 right-3 top-3 h-px bg-green shadow-[0_0_8px_rgba(0,150,136,0.8)]"
                    />
                </div>

                <div className="mt-2 flex items-center justify-between">
                    <span className="text-[9px] font-medium text-muted">
                        AI scanning
                    </span>

                    <span className="flex items-center gap-1 text-[9px] font-semibold text-green">
                        <IconCheck size={11} stroke={3} />
                        Detected
                    </span>
                </div>
            </div>
        );
    }

    if (type === "recipes") {
        return (
            <div className="mt-7 rounded-xl border border-line bg-white p-3">
                <div className="flex gap-2">
                    <div className="size-12 shrink-0 rounded-lg bg-gradient-to-br from-green-light to-lime/30" />

                    <div className="min-w-0">
                        <p className="truncate text-[10px] font-semibold text-fg">
                            High-protein chicken bowl
                        </p>

                        <p className="mt-1 text-[9px] text-muted">
                            520 kcal · 42g protein
                        </p>

                        <div className="mt-2 h-1 w-20 overflow-hidden rounded-full bg-line">
                            <div className="h-full w-[82%] rounded-full bg-green" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-7 rounded-xl border border-line bg-white p-3">
            <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-muted">
                    This week
                </span>

                <span className="flex items-center gap-1 text-[9px] font-semibold text-green">
                    <IconTrendingUp size={12} />
                    +18%
                </span>
            </div>

            <div className="mt-4 flex h-16 items-end gap-1.5">
                {[35, 52, 44, 68, 58, 82, 92].map((height, index) => (
                    <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.06,
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className="flex-1 rounded-t-md bg-green/20"
                    >
                        <div className="h-full w-full rounded-t-md bg-green" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default function CoreFeatures() {
    return (
        <section
            id="features"
            className="relative overflow-hidden bg-surface pb-14 sm:pb-20"
        >
            <div className="container relative mx-auto px-5 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-green/15 bg-green-light px-3.5 py-1.5 text-xs font-bold tracking-wider text-green-dark">
                        <IconAdjustmentsStar size={14} stroke={2} />
                        Core features
                    </span>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl lg:text-5xl">
                        Everything you need to stay on track.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
                        Simple tools for tracking your meals, understanding
                        your nutrition, and making better choices every day.
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
                    className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-6"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                variants={cardVariants}
                                whileHover={{
                                    y: -5,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                                className={`group relative overflow-hidden rounded-[24px] border border-line bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5 sm:p-6 ${index < 3
                                    ? "lg:col-span-2"
                                    : "lg:col-span-3"
                                    }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex size-11 items-center justify-center rounded-xl bg-green-light text-green transition-all duration-300 group-hover:bg-green group-hover:text-white">
                                        <Icon
                                            size={21}
                                            stroke={1.8}
                                        />
                                    </div>

                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted/60">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-lg font-semibold tracking-tight text-fg sm:text-xl">
                                    {feature.title}
                                </h3>

                                <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                                    {feature.description}
                                </p>

                                <FeaturePreview type={feature.type} />

                                <div className="pointer-events-none absolute -bottom-20 -right-20 size-40 rounded-full bg-green-light/40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}