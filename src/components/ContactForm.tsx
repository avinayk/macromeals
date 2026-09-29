"use client";

import React, { useState } from "react";
import { IconSend } from "@tabler/icons-react";

const SUPPORT_EMAIL = "support@macromealsapp.com";

const fieldClass =
    "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-fg outline-none transition placeholder:text-muted/60 focus:border-green/40 focus:shadow-sm";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const update =
        (field: keyof typeof form) =>
        (
            event: React.ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement
            >
        ) =>
            setForm((prev) => ({ ...prev, [field]: event.target.value }));

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // TODO: replace with a POST to your backend / email service.
        // Until then, open the visitor's email client with the message pre-filled.
        const subject = form.subject.trim() || "MacroMeals inquiry";
        const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;

        window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="name"
                        className="text-sm font-semibold text-fg"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Your name"
                        className={fieldClass}
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="text-sm font-semibold text-fg"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@example.com"
                        className={fieldClass}
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-fg"
                >
                    Subject{" "}
                    <span className="font-normal text-muted">(Optional)</span>
                </label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder="What is this about?"
                    className={fieldClass}
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="text-sm font-semibold text-fg"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="How can we help?"
                    className={`${fieldClass} resize-y`}
                />
            </div>

            <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-green px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-dark hover:shadow-xl hover:shadow-green/20"
            >
                Send Message
                <IconSend size={16} stroke={2} />
            </button>
        </form>
    );
}
