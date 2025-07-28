import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import team1 from '../assets/1.png';
import team2 from '../assets/2.png';
import team3 from '../assets/3.png';
import team4 from '../assets/4.png';

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      key: 'alexChen',
      image: team1
    },
    {
      key: 'priyaSharma',
      image: team2
    },
    {
      key: 'benCarter',
      image: team3
    },
    {
      key: 'evelynReed',
      image: team4
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
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center overflow-hidden">
                <img 
                  src={member.image} 
                  alt={t(`team.members.${member.key}.name`)}
                  className="w-full h-full object-cover"
                />
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