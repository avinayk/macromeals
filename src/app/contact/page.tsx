import type { Metadata } from "next";
import { IconMail, IconHeadset } from "@tabler/icons-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact MacroMeals",
    description:
        "Get in touch with the MacroMeals support team. Questions about our plans, support, or feedback — we're ready to hear from you.",
};

export default function ContactPage() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-white text-fg">
                <section className="relative overflow-hidden bg-card border-b border-line">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-[-260px] size-[650px] -translate-x-1/2 rounded-full bg-green-light/70 blur-[120px]"
                    />

                    <div className="container relative mx-auto px-5 pb-16 pt-20 md:px-8 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-32">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="inline-flex items-center rounded-full border border-green/20 bg-green/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-green/80 backdrop-blur">
                                <IconHeadset
                                    className="me-2 text-green"
                                    size={14}
                                    stroke={2}
                                />
                                MacroMeals Support Team
                            </span>

                            <h1 className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl lg:text-6xl">
                                Contact{" "}
                                <span className="text-green">MacroMeals</span>
                            </h1>

                            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted">
                                Whether you&apos;re curious about our plans,
                                need support, or want to share your
                                experience, the MacroMeals team is ready to
                                hear from you. Drop us a message and
                                we&apos;ll get back to you as soon as
                                possible.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-5 py-16 md:px-8 sm:py-20 lg:py-24">
                    <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
                        <div className="h-fit rounded-[28px] border border-line bg-card p-7 sm:p-10">
                            <span className="flex size-12 items-center justify-center rounded-xl bg-green-light text-green">
                                <IconMail size={22} stroke={1.8} />
                            </span>

                            <h2 className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-green">
                                Email
                            </h2>

                            <a
                                href="mailto:support@macromealsapp.com"
                                className="mt-3 inline-block break-all text-lg font-semibold text-fg transition-colors hover:text-green-dark sm:text-xl"
                            >
                                support@macromealsapp.com
                            </a>

                            <p className="mt-4 text-sm leading-6 text-muted">
                                MacroMeals Support Team
                            </p>
                        </div>

                        <div className="rounded-[28px] border border-line bg-white p-7 shadow-sm sm:p-10">
                            <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                                Send a Message to MacroMeals
                            </h2>

                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
