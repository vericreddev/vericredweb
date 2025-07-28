import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      key: 'alexChen',
      image: '/api/placeholder/300/300'
    },
    {
      key: 'priyaSharma',
      image: '/api/placeholder/300/300'
    },
    {
      key: 'benCarter',
      image: '/api/placeholder/300/300'
    },
    {
      key: 'evelynReed',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            {t('team.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary/50 backdrop-blur-sm border border-accent/20 rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {t(`team.members.${member.key}.name`).charAt(0)}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {t(`team.members.${member.key}.name`)}
                </h3>
                <p className="text-accent font-semibold mb-4">
                  {t(`team.members.${member.key}.position`)}
                </p>
                <p className="text-light text-sm leading-relaxed">
                  {t(`team.members.${member.key}.bio`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;