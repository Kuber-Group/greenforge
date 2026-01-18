import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Leaf, Users, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Shield,
      title: 'Full In-House Execution',
      description: 'Every project handled by our expert team from start to finish.',
    },
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'Premium materials and meticulous attention to detail.',
    },
    {
      icon: Leaf,
      title: 'Sustainability Focus',
      description: 'Eco-conscious practices that respect our environment.',
    },
    {
      icon: Users,
      title: 'Trusted Reliability',
      description: 'A proven track record of delivering on our promises.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About GreenForge
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafting Outdoor Excellence{' '}
              <span className="text-primary">Since Day One</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              GreenForge Outdoor Solutions is Zimbabwe's leading landscaping and outdoor construction company. 
              We transform ordinary spaces into extraordinary outdoor environments that inspire, function, 
              and endure.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our commitment to excellence means we handle every aspect of your project in-house — 
              from initial design concepts to final installation. No subcontractors, no shortcuts, 
              just pure quality craftsmanship delivered with integrity.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '500+', label: 'Projects' },
                { value: '15+', label: 'Years' },
                { value: '100%', label: 'In-House' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="card-nature"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
