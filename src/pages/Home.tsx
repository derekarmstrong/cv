import { motion } from 'framer-motion';
import { ActionButton } from '../components/ActionButton';
import { BentoCard } from '../components/BentoCard';
import { profile } from '../data/resume';
import { useNavigate } from 'react-router-dom';
import { MapPin, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

            {/* Hero Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                {/* Profile Card (2/3 width) */}
                <BentoCard className="md:col-span-2 min-h-[300px] justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-hover border border-border text-xs font-mono text-primary mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Available for opportunities
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                                {profile.name}
                            </h1>
                            <h2 className="text-xl md:text-2xl text-text-secondary font-medium mb-6">
                                {profile.title}
                            </h2>
                            <p className="text-text-tertiary max-w-xl leading-relaxed mb-8">
                                {profile.summary}
                            </p>

                            <div className="flex flex-wrap gap-4">

                                <ActionButton variant="secondary" onClick={() => navigate('/experience')}>
                                    Browse Experience
                                </ActionButton>
                                <ActionButton onClick={() => navigate('/projects')}>
                                    View Projects <ArrowRight size={16} />
                                </ActionButton>
                            </div>
                        </motion.div>
                    </div>
                </BentoCard>

                {/* Quick Stats / Info Column */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Location */}
                    <BentoCard title="Base of Operations" delay={0.1}>
                        <div className="flex items-center gap-3 h-full">
                            <div className="p-2 rounded-md bg-surface-hover text-white">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <div className="text-sm text-text-secondary">Location</div>
                                <div className="font-medium text-white">{profile.location.split(',')[0]}</div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Contact */}
                    <BentoCard title="Connect" delay={0.2}>
                        <div className="flex flex-col gap-3">
                            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-text-secondary hover:text-white transition-colors p-2 -mx-2 rounded-md hover:bg-surface-hover">
                                <Mail size={18} />
                                <span className="text-sm">{profile.email}</span>
                            </a>
                            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary hover:text-white transition-colors p-2 -mx-2 rounded-md hover:bg-surface-hover">
                                <Github size={18} />
                                <span className="text-sm">GitHub</span>
                            </a>
                            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary hover:text-white transition-colors p-2 -mx-2 rounded-md hover:bg-surface-hover">
                                <Linkedin size={18} />
                                <span className="text-sm">LinkedIn</span>
                            </a>
                        </div>
                    </BentoCard>

                    {/* Stack Snippet */}
                    <BentoCard title="Core Stack" delay={0.3} className="bg-gradient-to-br from-surface to-surface-hover">
                        <div className="flex flex-wrap gap-2">
                            {['React', 'TypeScript', 'Node.js', '.NET'].map(tech => (
                                <span key={tech} className="text-xs font-mono px-2 py-1 rounded border border-border bg-black/20 text-text-secondary">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </BentoCard>
                </div>
            </div>

        </div>
    );
};
