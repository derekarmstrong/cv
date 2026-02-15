import { skills, projects } from '../data/resume';
import { BentoCard } from '../components/BentoCard';
import { Link, useLocation } from 'react-router-dom';

export const Skills = () => {
    const location = useLocation();

    const hasProjects = (skill: string) => {
        return projects.some(p => p.tech.some(t => t.toLowerCase() === skill.toLowerCase()));
    };

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Skills and Tools</h2>
                <p className="text-text-secondary">These are the systems I've grown to love (or deal with).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((category, index) => (
                    <BentoCard key={index} delay={index * 0.1} title={category.title} className="h-full">
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => {
                                const linked = hasProjects(skill);
                                const baseStyles = "px-3 py-1.5 text-sm bg-surface-hover text-text-secondary rounded-md border border-border transition-all";

                                if (linked) {
                                    return (
                                        <Link
                                            key={i}
                                            to={`/projects?tech=${encodeURIComponent(skill)}`}
                                            state={{ from: location.pathname }}
                                            className={`${baseStyles} hover:border-primary hover:text-primary cursor-pointer`}
                                        >
                                            {skill}
                                        </Link>
                                    );
                                }
                                return (
                                    <span
                                        key={i}
                                        className={`${baseStyles} cursor-default opacity-80`}
                                    >
                                        {skill}
                                    </span>
                                );
                            })}
                        </div>
                    </BentoCard>
                ))}
            </div>
        </div>
    );
};
