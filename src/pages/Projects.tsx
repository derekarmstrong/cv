import { projects } from '../data/resume';
import { BentoCard } from '../components/BentoCard';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { XCircle, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const techFilter = searchParams.get('tech');
    const fromPage = location.state?.from;

    const filteredProjects = techFilter
        ? projects.filter(project =>
            project.tech.some(t => t.toLowerCase() === techFilter.toLowerCase())
        )
        : projects;

    const clearFilter = () => {
        if (fromPage) {
            navigate(fromPage);
        } else {
            setSearchParams({});
        }
    };

    const handleTechClick = (tech: string) => {
        setSearchParams({ tech });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
                    <p className="text-text-secondary">Examples of work I have done for myself, clients, and employers.</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <AnimatePresence>
                        {fromPage && (
                            <motion.button
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                onClick={() => navigate(fromPage)}
                                className="flex items-center gap-2 px-4 py-2 bg-surface border border-border text-text-secondary hover:bg-surface-hover hover:text-white rounded-lg transition-colors group"
                            >
                                <ArrowLeft size={16} />
                                <span className="text-sm font-medium">
                                    Back to {fromPage === '/skills' ? 'Skills' : fromPage === '/' ? 'Overview' : 'Experience'}
                                </span>
                            </motion.button>
                        )}

                        {techFilter && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="flex items-center gap-2 px-3 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg"
                            >
                                <span className="text-sm font-medium">
                                    Filtered by: <span className="font-bold">{techFilter}</span>
                                </span>
                                <button
                                    onClick={() => setSearchParams({})}
                                    className="p-0.5 hover:bg-primary/20 rounded-full transition-colors"
                                    title="Clear filter"
                                >
                                    <XCircle size={16} />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {filteredProjects.length === 0 ? (
                <div className="text-center py-20 bg-surface/30 rounded-2xl border border-dashed border-border">
                    <p className="text-text-tertiary mb-4">No projects found with this tag yet.</p>
                    <button onClick={clearFilter} className="text-primary hover:underline flex items-center gap-2 mx-auto">
                        <ArrowLeft size={16} />
                        Return to {fromPage ? (fromPage === '/skills' ? 'Skills' : 'Experience') : 'all projects'}
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
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
                                            <button
                                                key={i}
                                                onClick={() => handleTechClick(tech)}
                                                className={`px-2 py-1 text-xs font-medium rounded border transition-all ${techFilter?.toLowerCase() === tech.toLowerCase()
                                                    ? 'bg-primary/20 border-primary text-primary'
                                                    : 'text-text-secondary bg-surface-hover border-border hover:border-text-secondary'
                                                    }`}
                                            >
                                                {tech}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </BentoCard>
                    ))}
                </div>
            )}
        </div>
    );
};
