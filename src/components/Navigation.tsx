import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, Cpu, Briefcase, FolderGit2, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navigation = () => {
    const location = useLocation();

    const links = [
        { name: 'Overview', path: '/', icon: <LayoutGrid size={16} /> },
        { name: 'Experience', path: '/experience', icon: <Briefcase size={16} /> },
        { name: 'Skills', path: '/skills', icon: <Cpu size={16} /> },
        { name: 'Projects', path: '/projects', icon: <FolderGit2 size={16} /> },
    ];

    const [isOpen, setIsOpen] = useState(false);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav className="sticky top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="text-sm font-bold text-white tracking-tight flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <span>Derek Armstrong</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-1">
                    {links.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link to={link.path} key={link.path} className="relative group">
                                <div className={`
                                    flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium
                                    ${isActive ? 'text-white bg-surface-hover' : 'text-text-secondary hover:text-white hover:bg-surface-hover/50'}
                                `}>
                                    <span className="opacity-70">{link.icon}</span>
                                    <span>{link.name}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-text-secondary hover:text-white"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-16 left-0 w-full bg-surface border-b border-border p-4 flex flex-col gap-2 shadow-2xl"
                >
                    {links.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                to={link.path}
                                key={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`
                                    flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-sm font-medium
                                    ${isActive ? 'bg-surface-hover text-white' : 'text-text-secondary hover:text-white hover:bg-surface-hover/50'}
                                `}
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        );
                    })}
                </motion.div>
            )}
        </nav>
    );
};
