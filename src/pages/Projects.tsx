import { projects } from '../data/resume';
import { BentoCard } from '../components/BentoCard';

export const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
                <p className="text-text-secondary">Examples of work I have done for myself, clients, and employers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <BentoCard key={project.id} delay={index * 0.1} className="h-full group hover:border-primary/50">
                        <div className="flex flex-col h-full">
                            <div className="mb-4">
                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <div className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                                    {project.role}
                                </div>
                            </div>

                            <ul className="flex-grow space-y-2 mb-6">
                                {project.description.map((item, i) => (
                                    <li key={i} className="text-text-secondary text-sm leading-relaxed">
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4 border-t border-border mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 text-xs font-medium text-text-secondary bg-surface-hover rounded border border-border">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </BentoCard>
                ))}
            </div>
        </div>
    );
};
