"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    IconArrowUpRight,
    IconBook2,
    IconChevronDown,
    IconClock,
    IconSearch,
} from "@tabler/icons-react";
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'


type Category =
    | "All"
    | "Nutrition"
    | "Meal Tracking"
    | "Macros"
    | "Recipes"
    | "Wellness";

type Article = {
    category: Exclude<Category, "All">;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
};

const categories: Category[] = [
    "All",
    "Nutrition",
    "Meal Tracking",
    "Macros",
    "Recipes",
    "Wellness",
];

const articles: Article[] = [
    {
        category: "Macros",
        title: "How to Track Your Macros Without Overcomplicating Your Diet",
        excerpt:
            "A simple approach to understanding calories, protein, carbs and fat without turning every meal into a calculation.",
        date: "Sep 18, 2026",
        readTime: "6 min read",
        image:
            "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=85",
    },
    {
        category: "Nutrition",
        title: "What Should You Actually Eat to Hit Your Protein Goal?",
        excerpt:
            "Learn how to build everyday meals around protein-rich foods that fit naturally into your routine.",
        date: "Sep 12, 2026",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    },
    {
        category: "Meal Tracking",
        title: "Why Consistent Meal Tracking Matters More Than Perfection",
        excerpt:
            "You don't need a perfect food diary. Here's why building a consistent tracking habit can be more useful.",
        date: "Sep 06, 2026",
        readTime: "4 min read",
        image:
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85",
    },
    {
        category: "Recipes",
        title: "Easy High-Protein Meals for Busy Weekdays",
        excerpt:
            "Simple meal ideas designed to help you stay on top of your nutrition when your schedule gets busy.",
        date: "Aug 29, 2026",
        readTime: "7 min read",
        image:
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    },
    {
        category: "Wellness",
        title: "Small Nutrition Habits That Make Healthy Eating Easier",
        excerpt:
            "Instead of changing everything at once, focus on a few practical habits that you can actually maintain.",
        date: "Aug 21, 2026",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    },
    {
        category: "Nutrition",
        title: "Calories, Macros and Nutrition Labels Explained",
        excerpt:
            "A straightforward guide to understanding the numbers behind the food you eat every day.",
        date: "Aug 14, 2026",
        readTime: "8 min read",
        image:
            "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&w=900&q=85",
    },
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] =
        useState<Category>("All");

    const [search, setSearch] = useState("");

    const filteredArticles = useMemo(() => {
        const query = search.trim().toLowerCase();

        return articles.filter((article) => {
            const matchesCategory =
                activeCategory === "All" ||
                article.category === activeCategory;

            const matchesSearch =
                !query ||
                article.title.toLowerCase().includes(query) ||
                article.excerpt.toLowerCase().includes(query) ||
                article.category.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, search]);

    return (
        <>
            <Header />

            <main className="min-h-screen bg-white text-fg">
                <section className="relative overflow-hidden bg-surface">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-[-260px] size-[650px] -translate-x-1/2 rounded-full bg-green-light/70 blur-[120px]"
                    />

                    <div className="container relative mx-auto px-5 pb-16 pt-20 md:px-8 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-32">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <span className="inline-flex items-center rounded-full border border-green/20 bg-green/10 px-3.5 py-1.5 text-xs font-semibold  tracking-wider text-green/80 backdrop-blur">
                                <IconBook2 className="me-2 text-green" size={14} stroke={2}  />
                                MacroMeals Journal
                            </span>

                            <h1 className="mt-5 text-3xl font-semibold tracking-tight leading-[1.2] sm:text-4xl lg:text-6xl">
                                Better nutrition starts with{" "} <br/>
                                <span className="text-green">
                                    better information.
                                </span>
                            </h1>

                            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted ">
                                Practical nutrition tips, meal ideas, macro
                                guidance, and insights to help you eat smarter.
                            </p>

                            <div className="mx-auto mt-9 flex max-w-xl items-center rounded-xl border border-line bg-white p-1.5 shadow-sm transition-all duration-300 focus-within:border-green/30 focus-within:shadow-md">
                                <IconSearch
                                    size={19}
                                    className="ml-3 shrink-0 text-muted"
                                />

                                <input
                                    type="search"
                                    value={search}
                                    onChange={(event) =>
                                        setSearch(event.target.value)
                                    }
                                    placeholder="Search articles..."
                                    className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-fg outline-none placeholder:text-muted"
                                />

                                <button
                                    type="button"
                                    className="hidden rounded-md bg-green px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green sm:block"
                                >
                                    Search
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="container mx-auto px-5 pb-16 md:px-8 sm:pb-20">
                    <motion.article
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
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group grid overflow-hidden rounded-[28px] border border-line bg-surface lg:grid-cols-2"
                    >
                        <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px]">
                            <img
                                src={articles[0].image}
                                alt={articles[0].title}
                                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                            <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-fg shadow-sm">
                                Featured
                            </span>
                        </div>

                        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                            <div className="flex items-center gap-3 text-xs font-semibold text-green-dark">
                                <span className="rounded-full bg-green-light px-3 py-1.5">
                                    {articles[0].category}
                                </span>

                                <span className="text-muted">
                                    {articles[0].readTime}
                                </span>
                            </div>

                            <h2 className="mt-6 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-fg sm:text-3xl lg:text-4xl">
                                {articles[0].title}
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
                                {articles[0].excerpt}
                            </p>

                            <a
                                href="#"
                                className="group/link mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-green-dark"
                            >
                                Read Article
                                <IconArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </motion.article>
                </section>

                <section className="border-t border-line bg-white">
                    <div className="container mx-auto px-5 py-16 md:px-8 sm:py-20 lg:py-24">
                        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.14em] text-green">
                                    Explore the journal
                                </span>

                                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                                    Nutrition insights for real life.
                                </h2>
                            </div>

                            <div className="relative">
                                <select
                                    value={activeCategory}
                                    onChange={(event) =>
                                        setActiveCategory(
                                            event.target.value as Category
                                        )
                                    }
                                    className="appearance-none rounded-xl border border-line bg-surface py-3 pl-4 pr-10 text-sm font-semibold text-fg outline-none transition focus:border-green/30 sm:hidden"
                                >
                                    {categories.map((category) => (
                                        <option
                                            key={category}
                                            value={category}
                                        >
                                            {category}
                                        </option>
                                    ))}
                                </select>

                                <IconChevronDown
                                    size={16}
                                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted sm:hidden"
                                />

                                <div className="hidden flex-wrap gap-2 sm:flex">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            type="button"
                                            onClick={() =>
                                                setActiveCategory(category)
                                            }
                                            className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${activeCategory === category
                                                ? "bg-green text-white"
                                                : "border border-line bg-white text-muted hover:border-green/30 hover:text-fg"
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {filteredArticles.length > 0 ? (
                            <motion.div
                                layout
                                className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                            >
                                {filteredArticles.map((article) => (
                                    <motion.article
                                        layout
                                        key={article.title}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="group overflow-hidden rounded-[22px] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green/20 hover:shadow-xl hover:shadow-black/5"
                                    >
                                        <a
                                            href="#"
                                            className="block overflow-hidden"
                                        >
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </a>

                                        <div className="p-5 sm:p-6">
                                            <div className="flex items-center justify-between gap-3">
                                                <span className="rounded-full bg-green-light px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-dark">
                                                    {article.category}
                                                </span>

                                                <span className="flex items-center gap-1 text-[11px] text-muted">
                                                    <IconClock size={13} />
                                                    {article.readTime}
                                                </span>
                                            </div>

                                            <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-fg transition-colors duration-300 group-hover:text-green-dark">
                                                {article.title}
                                            </h3>

                                            <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">
                                                {article.excerpt}
                                            </p>

                                            <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                                                <span className="text-xs text-muted">
                                                    {article.date}
                                                </span>

                                                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-fg transition-colors group-hover:text-green-dark">
                                                    Read more
                                                    <IconArrowUpRight
                                                        size={14}
                                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </motion.div>
                        ) : (
                            <div className="mt-10 rounded-2xl border border-dashed border-line bg-surface px-6 py-16 text-center">
                                <IconSearch
                                    size={28}
                                    className="mx-auto text-muted"
                                />

                                <h3 className="mt-4 text-lg font-semibold text-fg">
                                    No articles found
                                </h3>

                                <p className="mt-2 text-sm text-muted">
                                    Try another search or select a different
                                    category.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}