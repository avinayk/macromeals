'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
    IconBrandAppstore,
    IconArrowUpRight,
    IconBrandGooglePlay,
    IconMenu2,
    IconX,
} from '@tabler/icons-react'

export default function Header() {
    const [open, setOpen] = useState(false)

    const links = [
        { label: 'Home', href: '#home' },
        { label: 'Features', href: '#features' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
    ]

    const closeMenu = () => setOpen(false)

    return (
        <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/90 backdrop-blur-xl py-3">
            <div className="container mx-auto px-5 md:px-8">
                <div className="flex items-center justify-between">

                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="group flex items-center"
                    >
                        <img
                            src="/images/logo.svg"
                            alt="MacroMeals"
                            className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                    </Link>

                    <nav className="hidden items-center gap-1 md:flex">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="group relative rounded-full px-4 py-2.5 text-sm font-medium text-fg/90 transition-all duration-200 hover:text-green"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="https://play.google.com/store/apps/details?id=com.macromeals.app&hl=en"
                            onClick={closeMenu}
                            className="ms-6 flex items-center justify-center gap-3 rounded-md border border-green/20 bg-green px-3 py-2.5 text-white shadow-lg shadow-green/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-dark hover:shadow-xl hover:shadow-green/20"
                        >
                            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-green">
                                <IconBrandGooglePlay size={16} stroke={1.5} />
                            </span>

                            <span className="text-sm font-semibold">
                                Download App
                            </span>

                            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-green">
                                <IconBrandAppstore size={16} stroke={1.5} />
                            </span>

                        </Link>
                    </nav>

                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="flex size-11 items-center justify-center rounded-full border border-green/15 bg-green-light text-green transition-all duration-300 hover:border-green/30 hover:bg-green hover:text-white md:hidden"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                    >
                        {open ? (
                            <IconX size={21} stroke={2} />
                        ) : (
                            <IconMenu2 size={21} stroke={2} />
                        )}
                    </button>
                </div>

                <div
                    className={`overflow-hidden transition-all mt-4 duration-300 md:hidden ${open
                        ? 'max-h-[420px] pb-5 opacity-100'
                        : 'max-h-0 opacity-0'
                        }`}
                >
                    <nav className="rounded-3xl border border-line bg-bg p-2 shadow-xl shadow-black/5">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-medium text-fg/75 transition-all duration-200 hover:bg-green-light hover:text-green"
                            >
                                {link.label}

                                <IconArrowUpRight
                                    size={18}
                                    stroke={2}
                                />
                            </Link>
                        ))}

                        <Link
                            href="#download"
                            onClick={closeMenu}
                            className="my-4 w-fit ms-5 flex items-center justify-center gap-3 rounded-md border border-green/20 bg-green px-3 py-2.5 text-white shadow-lg shadow-green/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-dark hover:shadow-xl hover:shadow-green/20"
                        >
                            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-green">
                                <IconBrandGooglePlay size={16} stroke={1.5} />
                            </span>

                            <span className="text-sm font-semibold">
                                Download App
                            </span>

                            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-green">
                                <IconBrandAppstore size={16} stroke={1.5} />
                            </span>

                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}