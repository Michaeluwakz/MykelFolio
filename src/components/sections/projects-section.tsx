"use client";

import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA } from '@/lib/constants';
import type { Project } from '@/types';
import ProjectCard from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Fullstack', 'Design'] as const;
type Category = typeof CATEGORIES[number];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here's a selection of projects I've worked on, showcasing my skills in development and design.
        </p>

        <Tabs defaultValue="All" onValueChange={(value) => setActiveFilter(value as Category)} className="mb-12 flex justify-center">
          <TabsList>
            {CATEGORIES.map(category => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
           <p className="text-center text-muted-foreground text-lg py-8">
            No projects found for the selected filter. More coming soon!
          </p>
        )}
      </div>
    </section>
  );
}
