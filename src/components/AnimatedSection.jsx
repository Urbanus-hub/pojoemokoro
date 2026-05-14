import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
