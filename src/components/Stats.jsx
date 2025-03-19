import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { number: 50000, label: 'Active Users', suffix: '+' },
    { number: 100, label: 'Campus Partners', suffix: '+' },
    { number: 1000000, label: 'Transactions', suffix: '+' },
    { number: 4.8, label: 'User Rating', suffix: '/5' }
  ];

  return (
    <section className="py-16 bg-primary" id="stats">
      <div className="container">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    separator=","
                    decimals={stat.number % 1 !== 0 ? 1 : 0}
                    suffix={stat.suffix}
                  />
                )}
              </h3>
              <p className="text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;