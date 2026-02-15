import { experience, skills as skillCategories, projects } from '../data/resume';
import { BentoCard } from '../components/BentoCard';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Experience = () => {
    const location = useLocation();
    // Flatten all skills to make matching easier
    const allSkills = skillCategories.flatMap(cat => cat.skills);

    const hasProjects = (skill: string) => {
        return projects.some(p => p.tech.some(t => t.toLowerCase() === skill.toLowerCase()));
    };

    const renderDescription = (text: string) => {
        // Create a regex to match any of the skills (case-insensitive)
        // We sort by length descending to match longer multi-word skills first (e.g. ".NET Core" before ".NET")
        // We only use \b word boundaries if the skill starts/ends with a word character
        // This ensures ".NET Core" (starts with .) and "C#" (ends with #) match correctly
        const sortedSkills = [...allSkills].sort((a, b) => b.length - a.length);
        const pattern = sortedSkills.map(skill => {
            const escaped = skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            let res = escaped;
            if (/^\w/.test(skill)) res = '\\b' + res;
            if (/\w$/.test(skill)) res = res + '\\b';
            return res;
        }).join('|');
        const regex = new RegExp(`(${pattern})`, 'gi');

        const parts = text.split(regex);

        return (
            <span>
                {parts.map((part, i) => {
                    const skillMatch = allSkills.find(s => s.toLowerCase() === part.toLowerCase());
                    const linked = skillMatch && hasProjects(skillMatch);

                    if (linked) {
                        return (
                            <Link
                                key={i}
                                to={`/projects?tech=${encodeURIComponent(part)}`}
                                state={{ from: location.pathname }}
                                className="text-primary hover:underline font-medium"
                            >
                                {part}
                            </Link>
                        );
                    }
                    return part;
                })}
            </span>
        );
    };

    return (
        <div className="max-w-4xl mx-auto px-4 md:px-6 pb-20">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Work Experience</h2>
                <p className="text-text-secondary">Here's what I've been up to.</p>
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
                                    <div className="h-px w-full bg-border my-1" />
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
                                        <span>{renderDescription(item)}</span>
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
