import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    title?: string;
}

export const BentoCard = ({ children, className = '', delay = 0, title }: BentoCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: delay }}
            className={`
        bg-surface border border-border rounded-lg overflow-hidden
        hover:border-border-hover transition-colors duration-300
        flex flex-col
        ${className}
      `}
        >
            {title && (
                <div className="px-6 py-4 border-b border-border bg-surface-hover/50">
                    <h3 className="text-sm font-mono font-bold text-text-secondary uppercase tracking-wider">
                        {title}
                    </h3>
                </div>
            )}
            <div className="p-4 md:p-6 flex-grow">
                {children}
            </div>
        </motion.div>
    );
};
