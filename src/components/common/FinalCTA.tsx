"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    IconArrowUpRight,
    IconBrandAppstore,
    IconBrandGooglePlay,
    IconScan,
} from "@tabler/icons-react";

export default function FinalCTA() {
    return (
        <section
            id="download"
            className="relative overflow-hidden pb-16 sm:pb-20"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[-280px] size-[700px] -translate-x-1/2 rounded-full bg-white/10 blur-[130px]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-40 -left-40 size-[500px] rounded-full bg-lime/10 blur-[120px]"
            />

            <div className="container relative mx-auto px-5 md:px-8">
                <div className="bg-green text-white rounded-3xl py-14 sm:py-20">
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
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold  tracking-wider text-white/90 backdrop-blur">
                            <IconScan className="me-2 text-white" size={13} stroke={2} />
                            Start Tracking Smarter
                        </span>

                        <h2 className="mt-6 text-4xl font-semibold leading-[1.2] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                            Ready to take control of your nutrition?
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/85">
                            Track smarter. Eat better. Start with MacroMeals.
                        </p>

                        <div className="mt-9 flex flex-col justify-center items-center gap-3 sm:flex-row">
                            <a
                                href="#"
                                className="group inline-flex  items-center gap-3 rounded-md border border-line bg-white px-5 py-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green/30 hover:bg-green-light hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green w-fit"
                            >


                                <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-green text-white">
                                    <IconBrandAppstore className="size-5" stroke={1.8} />
                                </span>

                                <span className="flex flex-col leading-none">
                                    <span className="text-[10px] font-medium uppercase tracking-wide text-muted">
                                        Get it on
                                    </span>
                                    <span className="mt-1 text-sm font-semibold tracking-tight text-fg">
                                        App Store
                                    </span>
                                </span>

                                <IconArrowUpRight
                                    className="ml-1 size-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green"
                                    stroke={1.8}
                                />

                            </a>

                            <a
                                href="#"
                                className="group inline-flex  items-center gap-3 rounded-md border border-line bg-white px-5 py-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green/30 hover:bg-green-light hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green w-fit"
                            >
                                <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-green text-white">
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


                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}