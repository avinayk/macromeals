import React from 'react'
import {
    IconStarFilled,
    IconCheck,
    IconFlame,
    IconScan,
    IconToolsKitchen2,
    IconArrowUpRight,
    IconBrandAppstore,
    IconBrandGooglePlay,
} from '@tabler/icons-react'

const macros = [
    { label: 'Protein', value: '92g', pct: 78 },
    { label: 'Carbs', value: '140g', pct: 55 },
    { label: 'Fat', value: '48g', pct: 40 },
]

export default function HeroBanner() {
    return (
        <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
            {/* soft dotted grid, fades out toward the bottom */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 1px 1px, rgba(0,150,136,0.18) 1px, transparent 0)',
                    backgroundSize: '28px 28px',
                }}
            />

            <div className="container relative mx-auto px-5 md:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

                    <div className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/80 py-1.5 pl-1.5 pr-4 shadow-sm backdrop-blur">
                            <span className="rounded-full bg-green px-2.5 py-1 text-xs font-semibold text-white">
                                New
                            </span>
                            <span className="text-sm font-medium text-muted">
                                Smart food scanning is here
                            </span>
                        </div>

                        <h1 className="text-5xl font-semibold font-mono leading-[1.3] tracking-[-0.035em] text-fg sm:text-6xl lg:text-[80px]">
                            Eat better.
                            <br />
                            <span className="bg-gradient-to-r from-green to-green-dark bg-clip-text text-transparent">
                                Track smarter.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-muted sm:text-xl">
                            Log meals in seconds, see your macros at a glance, and
                            hit your nutrition goals without the guesswork.
                        </p>
                        <div className="mt-9 flex items-center gap-4">
                            <div className="flex -space-x-2">
                                <div className="size-9 rounded-full border-2 border-white bg-green-light rounded-full overflow-hidden">
                                    <img src="/images/hero6.png" alt="image" className='w-full h-full object-cover' />
                                </div>
                                <div className="size-9 rounded-full border-2 border-white bg-green-light rounded-full overflow-hidden">
                                    <img src="/images/hero5.png" alt="image" className='w-full h-full object-cover' />
                                </div>
                                <div className="size-9 rounded-full border-2 border-white bg-green-light rounded-full overflow-hidden">
                                    <img src="/images/hero7.png" alt="image" className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-1">
                                    <IconStarFilled className="size-3.5 fill-green text-green" />
                                    <IconStarFilled className="size-3.5 fill-green text-green" />
                                    <IconStarFilled className="size-3.5 fill-green text-green" />
                                    <IconStarFilled className="size-3.5 fill-green text-green" />
                                    <IconStarFilled className="size-3.5 fill-green text-green" />
                                </div>
                                <p className="mt-1 text-xs font-medium text-muted">
                                    Built for real-world nutrition tracking
                                </p>
                            </div>
                        </div>
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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


                        </div>

                        <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-muted">
                            {['Easy meal tracking', 'Smart food scanning', 'Clear macro insights'].map(
                                (item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <span className="flex size-5 items-center justify-center rounded-full bg-green-light">
                                            <IconCheck className="size-3 text-green" stroke={3} />
                                        </span>
                                        {item}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>


                    <div className="relative mx-auto w-full max-w-[500px]">

                        <div
                            aria-hidden
                            className="absolute inset-x-4 inset-y-8 -z-10 rounded-[40px] bg-gradient-to-br from-green-light via-white to-lime/30"
                        />

                        <div className="h-[600px]">
                            <img
                                src="/images/hero-image.jpg"
                                alt="Nutrition app showing a daily meal log"
                                className="relative mx-auto h-full object-cover w-full drop-shadow-2xl rounded-2xl overflow-hidden"
                            />
                        </div>

                        <div className="absolute -left-2 top-10 w-44 rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-black/10 backdrop-blur-md sm:-left-8">
                            <div className="flex items-center gap-2 text-xs font-medium text-muted">
                                <span className="flex size-8 items-center justify-center rounded-full bg-green/20">
                                    <IconFlame className="size-4 text-green-dark" />
                                </span>
                                Calories left
                            </div>
                            <p className="mt-2 text-2xl font-semibold tracking-tight text-fg">
                                640 <span className="text-sm font-medium text-muted">kcal</span>
                            </p>
                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted/10">
                                <div className="h-full w-[68%] rounded-full bg-green" />
                            </div>
                        </div>


                        <div className="absolute -right-2 top-1/3 flex items-center gap-3 rounded-xl border border-white/70 bg-white/85 py-2.5 pl-2.5 pr-4 shadow-xl shadow-black/10 backdrop-blur-md sm:-right-6">
                            <span className="flex size-9 items-center justify-center rounded-md bg-green text-white">
                                <IconScan className="size-5" />
                            </span>
                            <div className="text-xs">
                                <p className="font-semibold text-fg mb-[0.9px]">Grilled salmon</p>
                                <p className="text-muted">412 kcal · scanned</p>
                            </div>
                        </div>


                        <div className="absolute -bottom-12 left-4 right-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-black/10 backdrop-blur-md sm:left-8 sm:right-8">
                            <div className="mb-4 flex items-center gap-2 text-xs font-medium text-muted">
                                <IconToolsKitchen2 className="size-4 text-green" />
                                Today&apos;s macros
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {macros.map((m) => (
                                    <div key={m.label}>
                                        <div className="flex items-baseline justify-between text-xs">
                                            <span className="font-medium text-muted">{m.label}</span>
                                            <span className="font-semibold text-fg">{m.value}</span>
                                        </div>
                                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-line">
                                            <div
                                                className="h-full rounded-full bg-green"
                                                style={{ width: `${m.pct}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}