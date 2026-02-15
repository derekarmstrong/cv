import { skills } from '../data/resume';
import { BentoCard } from '../components/BentoCard';


export const Skills = () => {
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
                            {category.skills.map((skill, i) => (
                                <span key={i} className="px-3 py-1.5 text-sm bg-surface-hover text-text-secondary rounded-md border border-border hover:border-text-secondary transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </BentoCard>
                ))}
            </div>
        </div>
    );
};
