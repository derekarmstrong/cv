import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface ActionButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
}

export const ActionButton = ({ children, variant = 'primary', className = '', ...props }: ActionButtonProps) => {
    const baseStyles = "px-4 py-2 rounded-md font-sans text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20",
        secondary: "bg-surface border border-border text-text-secondary hover:text-white hover:border-border-hover hover:bg-surface-hover",
        danger: "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};
