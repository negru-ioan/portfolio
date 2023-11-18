import { Link } from 'react-router-dom';
import React from 'react';
import SectionTitle from '../global/SectionTitle';
import projects from '../../../data/content/projects';

import ProjectCard from '../projects/ProjectCard';

function Projects() {
    return (
        <div className="flex flex-col text-left justify-between pt-8 relative">
            <div id="learnmore">
                <SectionTitle title="Here are a few of my favorite projects" />
            </div>
            <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
                {projects.slice(0, 6).map((item) => {
                    return <ProjectCard key={item.id} project={item} />;
                })}
            </div>
            <div className="relative w-full mt-2">
                <Link to="/projects">
                    <div className="btn max-w-sm md:max-w-2xl mt-20">
                        Load more
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Projects;
