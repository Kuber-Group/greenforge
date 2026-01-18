import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  TreeDeciduous,
  Fence,
  Droplets,
  Flame,
  Sun,
  Building2,
  Hammer,
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: TreeDeciduous,
      title: 'Landscaping & Garden Design',
      description:
        'Custom landscape designs that blend aesthetics with functionality, creating harmonious outdoor living spaces.',
    },
    {
      icon: Droplets,
      title: 'Lawn Installation & Maintenance',
      description:
        'Professional lawn services from installation to ongoing care, ensuring lush, healthy green spaces year-round.',
    },
    {
      icon: Fence,
      title: 'Paving & Hardscaping',
      description:
        'Premium stone, brick, and concrete paving solutions that add structure and elegance to your property.',
    },
    {
      icon: Building2,
      title: 'Outdoor Construction',
      description:
        'From pergolas to outdoor kitchens, we build lasting structures that extend your living space outdoors.',
    },
    {
      icon: Flame,
      title: 'Water Features & Fire Pits',
      description:
        'Create ambiance with custom water features and fire pits that become the heart of your outdoor gatherings.',
    },
    {
      icon: Sun,
      title: 'Solar Installations',
      description:
        'Sustainable energy solutions that reduce costs while powering your outdoor lighting and features.',
    },
    {
      icon: Hammer,
      title: 'Property Exterior Upgrades',
      description:
        'Comprehensive exterior renovations that enhance curb appeal and property value.',
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-muted/30"
      ref={ref}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Outdoor Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we offer a full range of landscaping and outdoor 
            construction services tailored to your vision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-nature hover:bg-primary hover:text-primary-foreground cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-5 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
