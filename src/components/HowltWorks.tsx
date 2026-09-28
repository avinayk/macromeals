"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
    IconTargetArrow,
    IconScan,
    IconChartBar,
    IconArrowRight,
    IconSettingsCheck
} from "@tabler/icons-react";

const steps = [
    {
        number: "01",
        title: "Set your goals",
        description:
            "Tell us about your body, activity level, eating habits, and nutrition goals so MacroMeals can create a tracking experience that fits your needs.",
        icon: IconTargetArrow,
    },
    {
        number: "02",
        title: "Track your meals",
        description:
            "Log your meals manually or simply scan what you’re eating. MacroMeals turns everyday food into clear calorie and macro information in seconds.",
        icon: IconScan,
    },
    {
        number: "03",
        title: "See your progress",
        description:
            "Get a clear view of your calories, protein, carbs, and fat so you can understand your daily nutrition and stay on track with your goals.",
        icon: IconChartBar,
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="relative overflow-hidden  py-14 sm:py-20"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "30px 30px",
                }}
            />

            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]"
            />

            <div className="container relative mx-auto px-5 md:px-8 bg-green-dark text-white rounded-3xl py-14 sm:py-20">
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
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold  tracking-wider text-white/80 backdrop-blur">
                        <IconSettingsCheck className="me-2 text-white" size={14} stroke={2} />  How it works
                    </span>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight leading-[1.2] sm:text-4xl lg:text-5xl">
                        From meal to macro in seconds.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/90">
                        Set your goals, track what you eat, and get a clear
                        picture of your nutrition without the usual hassle.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative mx-auto mt-16 max-w-6xl"
                >
                    <div className="relative grid gap-4 lg:grid-cols-3">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <React.Fragment key={step.number}>
                                    <motion.div
                                        variants={cardVariants}
                                        whileHover={{ y: -6 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeOut",
                                        }}
                                        className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.08] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.12] sm:p-7"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="text-sm font-semibold tracking-wider text-white/60">
                                                {step.number}
                                            </span>

                                            <motion.div
                                                whileHover={{ rotate: 6, scale: 1.05 }}
                                                className="flex size-12 items-center justify-center rounded-lg bg-white text-green shadow-lg"
                                            >
                                                <Icon
                                                    size={23}
                                                    stroke={1.8}
                                                />
                                            </motion.div>
                                        </div>

                                        <div className="mt-8">
                                            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                                                {step.title}
                                            </h3>

                                            <p className="mt-2 max-w-sm text-sm leading-6 text-white">
                                                {step.description}
                                            </p>
                                        </div>


                                        <div className="pointer-events-none absolute -bottom-20 -right-20 size-40 rounded-full bg-white/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                                    </motion.div>

                                </React.Fragment>
                            );
                        })}
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.7,
                        duration: 0.6,
                    }}
                    className="mx-auto mt-16 flex max-w-md items-center justify-center gap-3 text-center "
                >
                    <IconScan
                        size={19}
                        stroke={1.8}
                        className="shrink-0 text-white/80"
                    />

                    <span className="text-sm font-medium text-white/75">
                        Scan your meal. Get your macros. Keep moving.
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
