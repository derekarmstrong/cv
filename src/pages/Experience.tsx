import { experience } from '../data/resume';
import { BentoCard } from '../components/BentoCard';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
    return (
        <div className="max-w-4xl mx-auto pb-20 pt-10 px-4">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Experience Log</h2>
                <p className="text-text-secondary">Chronological selection of professional engagements.</p>
            </div>

            <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
                {experience.map((job, index) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="pl-8 md:pl-12 relative"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-5px] top-6 w-2.5 h-2.5 rounded-full bg-border border-2 border-bg ring-4 ring-bg" />

                        <BentoCard className="group transition-all hover:bg-surface-hover/50">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                        {job.role}
                                    </h3>
                                    <div className="text-lg text-text-secondary">
                                        {job.company}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 text-sm text-text-tertiary">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} />
                                        <span className="font-mono text-xs">{job.period}</span>
                                    </div>
                                    <div className="h-px w-full bg-border my-1" /> {/* Separator added here */}
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} />
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {job.description.map((item, i) => (
                                    <li key={i} className="flex items-start text-text-secondary text-sm leading-relaxed">
                                        <span className="mr-3 text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </BentoCard>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
