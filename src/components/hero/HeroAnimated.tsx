'use client'
import React, { useEffect, useRef, useState } from 'react'
import { IconFlame, IconScan, IconToolsKitchen2 } from '@tabler/icons-react'


const slides = [
    {
        id: 'breakfast',
        image: '/images/hero-image.jpg',
        alt: 'Nutrition app showing a daily meal log',
        caloriesLeft: 640,
        caloriesPct: 68,
        meal: 'Grilled salmon',
        mealKcal: 412,
        macros: [
            { label: 'Protein', value: 92, pct: 78 },
            { label: 'Carbs', value: 140, pct: 55 },
            { label: 'Fat', value: 48, pct: 40 },
        ],
    },
    {
        id: 'lunch',
        image: '/images/hero-image1.jpg',
        alt: 'Nutrition app scanning a lunch bowl',
        caloriesLeft: 410,
        caloriesPct: 46,
        meal: 'Chicken poke bowl',
        mealKcal: 530,
        macros: [
            { label: 'Protein', value: 118, pct: 92 },
            { label: 'Carbs', value: 176, pct: 70 },
            { label: 'Fat', value: 61, pct: 58 },
        ],
    },
    {
        id: 'dinner',
        image: '/images/hero-image2.jpg',
        alt: 'Nutrition app showing a dinner log',
        caloriesLeft: 180,
        caloriesPct: 22,
        meal: 'Veggie pasta',
        mealKcal: 470,
        macros: [
            { label: 'Protein', value: 134, pct: 100 },
            { label: 'Carbs', value: 205, pct: 88 },
            { label: 'Fat', value: 72, pct: 76 },
        ],
    },
]

const INTERVAL = 3500


function useCountUp(target: number, duration = 900): number {
    const [value, setValue] = useState<number>(target);
    const current = useRef<number>(target);

    useEffect(() => {
        const reduce = window.matchMedia?.(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduce) {
            current.current = target;
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setValue(target);
            return;
        }

        const from = current.current;
        const start = performance.now();
        let raf: number;

        const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const next = Math.round(from + (target - from) * eased);

            current.current = next;
            setValue(next);

            if (t < 1) {
                raf = requestAnimationFrame(tick);
            }
        };

        raf = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(raf);
    }, [target, duration]);

    return value;
}

type MacroBarProps = {
    label: string;
    value: number;
    pct: number;
};

function MacroBar({ label, value, pct }: MacroBarProps) {
    const shown = useCountUp(value);

    return (
        <div>
            <div className="flex items-baseline justify-between text-xs">
                <span className="font-medium text-muted">{label}</span>

                <span className="font-semibold tabular-nums text-fg">
                    {shown}g
                </span>
            </div>

            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-line">
                <div
                    className="h-full rounded-full bg-green transition-[width] duration-[900ms] ease-out"
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    );
}

export default function HeroAnimated() {
    const [index, setIndex] = useState(0)
    const [paused, setPaused] = useState(false)
    const slide = slides[index]

    useEffect(() => {
        if (paused) return
        const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL)
        return () => clearInterval(id)
    }, [paused])

    const calories = useCountUp(slide.caloriesLeft)
    const mealKcal = useCountUp(slide.mealKcal)

    return (
        <div
            className="relative mx-auto w-full max-w-[500px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <style>{`
                @keyframes hero-float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes hero-pop {
                    0% { opacity: 0; transform: translateY(8px) scale(.96); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                .hero-float-a { animation: hero-float 6s ease-in-out infinite; }
                .hero-float-b { animation: hero-float 7s ease-in-out -2s infinite; }
                .hero-float-c { animation: hero-float 8s ease-in-out -4s infinite; }
                .hero-pop { animation: hero-pop .6s cubic-bezier(.22,1,.36,1) both; }
                @media (prefers-reduced-motion: reduce) {
                    .hero-float-a, .hero-float-b, .hero-float-c, .hero-pop { animation: none; }
                }
            `}</style>

            <div
                aria-hidden
                className="absolute inset-x-4 inset-y-8 -z-10 rounded-[40px] bg-gradient-to-br from-green-light via-white to-lime/30"
            />

            <div className="relative h-[600px] overflow-hidden rounded-2xl drop-shadow-2xl">
                {slides.map((s, i) => (
                    <img
                        key={s.id}
                        src={s.image}
                        alt={s.alt}
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-out ${i === index ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                            }`}
                    />
                ))}
            </div>

            <div className="hero-float-a absolute -left-2 top-10 sm:-left-8">
                <div className="w-44 rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-black/10 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted">
                        <span className="flex size-8 items-center justify-center rounded-full bg-green/20">
                            <IconFlame className="size-4 text-green-dark" />
                        </span>
                        Calories left
                    </div>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-fg">
                        <span className="tabular-nums">{calories}</span>{' '}
                        <span className="text-sm font-medium text-muted">kcal</span>
                    </p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted/10">
                        <div
                            className="h-full rounded-full bg-green transition-[width] duration-[900ms] ease-out"
                            style={{ width: `${slide.caloriesPct}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="hero-float-b absolute -right-2 top-1/3 sm:-right-6">
                <div
                    key={slide.id}
                    className="hero-pop flex items-center gap-3 rounded-xl border border-white/70 bg-white/85 py-2.5 pl-2.5 pr-4 shadow-xl shadow-black/10 backdrop-blur-md"
                >
                    <span className="relative flex size-9 items-center justify-center rounded-md bg-green text-white">
                        <IconScan className="size-5" />
                        <span className="absolute inset-0 animate-ping rounded-md bg-green/30 [animation-iteration-count:2]" />
                    </span>
                    <div className="text-xs">
                        <p className="mb-[0.9px] font-semibold text-fg">{slide.meal}</p>
                        <p className="text-muted">
                            <span className="tabular-nums">{mealKcal}</span> kcal · scanned
                        </p>
                    </div>
                </div>
            </div>

            <div className="hero-float-c absolute -bottom-12 left-4 right-4 sm:left-8 sm:right-8">
                <div className="rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-black/10 backdrop-blur-md">
                    <div className="mb-4 flex items-center justify-between text-xs font-medium text-muted">
                        <span className="flex items-center gap-2">
                            <IconToolsKitchen2 className="size-4 text-green" />
                            Today&apos;s macros
                        </span>

                        <span className="flex gap-1.5">
                            {slides.map((s, i) => (
                                <button
                                    key={s.id}
                                    type="button"
                                    aria-label={`Show ${s.id}`}
                                    onClick={() => setIndex(i)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-5 bg-green' : 'w-1.5 bg-line'
                                        }`}
                                />
                            ))}
                        </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {slide.macros.map((m) => (
                            <MacroBar key={m.label} {...m} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}