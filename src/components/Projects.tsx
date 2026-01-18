import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import projectPool from '@/assets/project-pool.jpg';
import projectPaving from '@/assets/project-paving.jpg';
import projectFirepit from '@/assets/project-firepit.jpg';
import projectGarden from '@/assets/project-garden.jpg';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      image: projectPool,
      title: 'Luxury Pool & Patio',
      category: 'Hardscaping',
    },
    {
      image: projectPaving,
      title: 'Modern Stone Paving',
      category: 'Paving',
    },
    {
      image: projectFirepit,
      title: 'Evening Fire Pit Retreat',
      category: 'Outdoor Features',
    },
    {
      image: projectGarden,
      title: 'Tropical Garden Design',
      category: 'Landscaping',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Featured Projects
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Work Speaks for Itself
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of completed projects showcasing the quality and 
            craftsmanship that defines GreenForge.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mt-2 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5" />
                </h3>
              </div>

              {/* Always Visible Label */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm">
                <span className="text-xs font-medium text-foreground">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
