"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconQuote, IconStar, IconAdjustmentsStar, IconBrandAppstore, IconBrandGooglePlay, } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        quote: "I used to spend so much time trying to figure out the calories in my meals. The scanner makes tracking much easier.",
        name: "Ama K.",
        role: "Fitness & nutrition",
        initials: "AK",
        icon: IconBrandAppstore,
    },
    {
        quote: "What I like most is that it feels made for the food I actually eat. Logging my everyday meals is finally simple.",
        name: "David O.",
        role: "Active lifestyle",
        initials: "DO",
        icon: IconBrandGooglePlay,
    },
    {
        quote: "The meal scanning is really convenient. I can check my macros quickly without manually searching for every ingredient.",
        name: "Sarah M.",
        role: "Wellness enthusiast",
        initials: "SM",
        icon: IconBrandAppstore,
    },
    {
        quote: "I wanted something simple enough to use every day. MacroMeals gives me the information I need without making tracking feel like work.",
        name: "Michael A.",
        role: "Everyday tracker",
        initials: "MA",
        icon: IconBrandGooglePlay,
    },
    {
        quote: "Seeing protein, carbs and calories together makes it much easier for me to understand what I'm eating throughout the day.",
        name: "Nana E.",
        role: "Health-focused",
        initials: "NE",
        icon: IconBrandAppstore,
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="overflow-hidden bg-white py-16 sm:py-20"
        >
            <div className="container mx-auto px-5 md:px-8">
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

                    <span className="inline-flex items-center gap-2 rounded-full border border-green/15 bg-green-light px-3.5 py-1.5 text-xs font-bold tracking-wider text-green-dark">
                        <IconAdjustmentsStar size={14} stroke={2} />
                        Testimonials
                    </span>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight leading-[1.2] sm:text-4xl lg:text-5xl">
                        Built for people who actually track what they eat.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
                        A simpler way to understand your meals, stay consistent,
                        and keep your nutrition moving in the right direction.
                    </p>
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
                        amount: 0.15,
                    }}
                    transition={{
                        delay: 0.15,
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mt-16"
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={16}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 18,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className="!overflow-visible !pb-14"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide
                                key={testimonial.name}
                                className="h-auto"
                            >
                                <article className="group flex h-full min-h-[285px] flex-col rounded-[24px] border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green/20 hover:bg-white hover:shadow-xl hover:shadow-black/5 sm:p-7">
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <IconStar
                                                    key={star}
                                                    size={15}
                                                    stroke={0}
                                                    fill="currentColor"
                                                    className="text-green"
                                                />
                                            ))}
                                        </div>

                                        <IconQuote
                                            size={25}
                                            stroke={1.5}
                                            className="text-green/20 transition-colors duration-300 group-hover:text-green/40"
                                        />
                                    </div>

                                    <p className="mt-7 flex-1 text-[15px] leading-7 text-fg">
                                        “{testimonial.quote}”
                                    </p>
                                    <div className="mt-7 border-t border-line pt-5 flex items-center gap-3 justify-between">

                                        <div className="flex items-center gap-3 ">
                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-light text-xs font-bold text-green-dark">
                                                {testimonial.initials}
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-fg">
                                                    {testimonial.name}
                                                </p>

                                                <p className="mt-0.5 text-xs text-muted">
                                                    {testimonial.role}
                                                </p>
                                            </div>

                                        </div>
                                        <testimonial.icon
                                            size={22}
                                            stroke={1.8}
                                            className="text-green"
                                        />
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}