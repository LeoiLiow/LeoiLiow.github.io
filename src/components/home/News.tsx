'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMessages } from '@/lib/i18n/useMessages';

export interface NewsItem {
    date: string;
    content: string;
    href?: string;
}

interface NewsProps {
    items: NewsItem[];
    title?: string;
}

export default function News({ items, title }: NewsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.news;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                {resolvedTitle}
            </h2>

            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <span className="text-xs text-neutral-500 mt-1 w-16 flex-shrink-0">
                            {item.date}
                        </span>

                        <div className="text-sm text-neutral-700">
                            <span>{item.content}</span>

                            {item.href && (
                                <Link
                                    href={item.href}
                                    className="ml-2 text-accent hover:underline"
                                >
                                    Read more →
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
