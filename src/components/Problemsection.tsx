
"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
    IconArrowRight,
    IconCheck,
    IconScan,
    IconToolsKitchen2,
    IconSparkles2
} from "@tabler/icons-react";

const problems = [
    {
        number: "01",
        title: "No more guessing",
        description: "Know exactly what is on your plate without estimating portions.",
    },
    {
        number: "02",
        title: "No manual logging",
        description: "Scan your meal instead of searching and entering every ingredient.",
    },
    {
        number: "03",
        title: "No generic data",
        description: "Get nutrition insights based on the food you actually eat.",
    },
];

const mealItems = [
    {
        name: "Grilled chicken breast",
        calories: 284,
        protein: 53,
        carbs: 0,
        fat: 6,
    },
    {
        name: "Jasmine rice",
        calories: 205,
        protein: 4,
        carbs: 45,
        fat: 0,
    },
    {
        name: "Caesar salad",
        calories: 190,
        protein: 5,
        carbs: 8,
        fat: 16,
    },
];

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
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

const stagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export default function ProblemSection() {
    const totalCalories = mealItems.reduce(
        (total, item) => total + item.calories,
        0
    );

    return (
        <section className="relative overflow-hidden bg-white py-14 sm:py-20">
            <div className="container mx-auto px-5 md:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <motion.div variants={fadeUp}>
                            <span className="inline-flex items-center rounded-full bg-green-light px-3 py-2 text-xs font-semibold  tracking-wider text-green-dark">
                                <IconSparkles2 className="me-2" size={14} stroke={2} /> Why MacroMeals
                            </span>

                            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl lg:text-5xl">
                                Stop tracking food the hard way.
                            </h2>

                            <p className="mt-5 max-w-lg text-base leading-7 text-muted ">
                                Nutrition tracking should tell you what you need
                                to know — not make you spend your day entering it.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={stagger}
                            className="mt-10 space-y-7"
                        >
                            {problems.map((problem) => (
                                <motion.div
                                    key={problem.number}
                                    variants={fadeUp}
                                    className="group flex gap-4"
                                >
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-line bg-surface text-xs font-bold text-muted transition-colors duration-300 group-hover:border-green/30 group-hover:bg-green-light group-hover:text-green">
                                        {problem.number}
                                    </span>

                                    <div>
                                        <h3 className="text-base font-semibold text-fg ">
                                            {problem.title}
                                        </h3>

                                        <p className="mt-1 max-w-md text-sm leading-6 text-muted">
                                            {problem.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                    >
                        <div className="absolute -inset-8 -z-10 rounded-[48px] bg-gradient-to-br from-green-light via-white to-lime/20 blur-2xl" />

                        <div className="overflow-hidden rounded-[28px] border border-line bg-white shadow-2xl shadow-black/5">

                            <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-6">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                                        Meal scan
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-fg">
                                        Lunch
                                    </p>
                                </div>

                                <div className="flex size-10 items-center justify-center rounded-xl bg-green-light text-green">
                                    <IconScan size={20} stroke={1.8} />
                                </div>
                            </div>

                            <div className="grid gap-0 sm:grid-cols-[0.85fr_1.15fr]">

                                <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden bg-gradient-to-br from-green-light via-white to-lime/10 p-6">

                                    <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(0,150,136,0.2)_1px,transparent_0)] [background-size:22px_22px]" />

                                    <div className="relative w-full max-w-[210px]">
                                        <div className="aspect-square overflow-hidden rounded-[28px] border-4 border-white bg-[#e8eee9] shadow-xl">
                                            <img
                                                src="/images/hero1.png"
                                                alt="Scanned meal"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 0.7,
                                                duration: 1,
                                            }}
                                            className="absolute left-1/2 top-1/2 h-px w-[240px] origin-left -translate-y-1/2 bg-green/60"
                                        />

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 0.9,
                                                duration: 0.4,
                                            }}
                                            className="absolute -right-5 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-green text-white shadow-lg"
                                        >
                                            <IconCheck size={18} stroke={2.5} />
                                        </motion.div>
                                    </div>

                                    <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-2 text-xs font-semibold text-fg shadow-lg backdrop-blur">
                                        <span className="size-2 rounded-full bg-green" />
                                        Meal detected
                                    </div>
                                </div>

                                <div className="p-5 sm:p-6">
                                    <div className="mb-5 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <IconToolsKitchen2
                                                size={17}
                                                className="text-green"
                                            />

                                            <span className="text-sm font-semibold text-fg">
                                                Nutrition breakdown
                                            </span>
                                        </div>

                                        <span className="text-sm font-bold text-fg">
                                            {totalCalories} kcal
                                        </span>
                                    </div>

                                    <div className="space-y-1">
                                        {mealItems.map((item, index) => (
                                            <motion.div
                                                key={item.name}
                                                initial={{
                                                    opacity: 0,
                                                    y: 10,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                transition={{
                                                    delay:
                                                        0.45 + index * 0.1,
                                                    duration: 0.4,
                                                }}
                                                className="border-b border-line py-3 last:border-0"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-green-light text-green">
                                                        <IconCheck
                                                            size={13}
                                                            stroke={2.5}
                                                        />
                                                    </span>

                                                    <div className="min-w-0 flex-1">
                                                        <p className="truncate text-sm font-semibold text-fg">
                                                            {item.name}
                                                        </p>

                                                        <p className="mt-0.5 text-xs text-muted">
                                                            P {item.protein}g
                                                            <span className="mx-1.5">
                                                                ·
                                                            </span>
                                                            C {item.carbs}g
                                                            <span className="mx-1.5">
                                                                ·
                                                            </span>
                                                            F {item.fat}g
                                                        </p>
                                                    </div>

                                                    <span className="text-xs font-semibold tabular-nums text-fg">
                                                        {item.calories}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-5 rounded-xl bg-green-light p-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-medium text-green-dark">
                                                Tracking confidence
                                            </span>

                                            <span className="text-sm font-bold text-green-dark">
                                                98%
                                            </span>
                                        </div>

                                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-green/10">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: "98%",
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                transition={{
                                                    delay: 0.8,
                                                    duration: 0.9,
                                                    ease: "easeOut",
                                                }}
                                                className="h-full rounded-full bg-green"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: 0.9,
                                duration: 0.5,
                            }}
                            className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-xs font-semibold text-fg shadow-xl sm:flex"
                        >
                            <IconScan
                                size={15}
                                className="text-green"
                            />

                            Scan. Understand. Move on.

                            <IconArrowRight
                                size={14}
                                className="text-muted"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
