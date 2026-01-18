import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    {
      title: '100% In-House Execution',
      description: 'No subcontractors. Our skilled team handles every aspect of your project for consistent quality.',
    },
    {
      title: 'Sustainable Design Principles',
      description: 'Eco-friendly practices and materials that minimize environmental impact while maximizing beauty.',
    },
    {
      title: 'Durable, Long-Term Solutions',
      description: 'We build to last. Our work withstands the test of time and Zimbabwe\'s diverse climate.',
    },
    {
      title: 'Professional Project Management',
      description: 'Dedicated project managers ensure smooth execution, clear communication, and on-time delivery.',
    },
    {
      title: 'Trusted Zimbabwean Expertise',
      description: 'Local knowledge combined with international standards. We understand our land and climate.',
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Built Different.{' '}
              <span className="text-primary">Built Better.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              When you partner with GreenForge, you're choosing a team that's committed to 
              excellence at every level. Here's what sets us apart from the rest.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Right Column - Reasons List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-background shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
