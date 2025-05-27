import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTrend } from '../types/trends';
import { Grid, Card } from '../styles/StyledComponents';

interface LayoutProps {
  layouts: LayoutTrend[];
}

const Layout: React.FC<LayoutProps> = ({ layouts }) => {
  const getGradientColor = (adoption: number) => {
    const hue = (adoption * 1.2).toFixed(0); // Higher adoption = more green
    return `hsl(${hue}, 70%, 50%)`;
  };

  return (
    <Grid>
      {layouts.map((layout, index) => (
        <Card
          key={layout.id}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 style={{ marginBottom: '1rem' }}>{layout.name}</h3>
          <p style={{ 
            color: '#666',
            marginBottom: '1rem',
            minHeight: '3em'
          }}>
            {layout.description}
          </p>
          <div
            style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#eee',
              borderRadius: '4px',
              overflow: 'hidden',
              marginBottom: '0.5rem'
            }}
          >
            <motion.div
              style={{
                width: `${layout.adoption}%`,
                height: '100%',
                background: getGradientColor(layout.adoption)
              }}
              initial={{ width: 0 }}
              animate={{ width: `${layout.adoption}%` }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
          </div>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>
              Уровень Внедрения
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              style={{ 
                fontWeight: 'bold',
                color: getGradientColor(layout.adoption)
              }}
            >
              {layout.adoption}%
            </motion.span>
          </div>
        </Card>
      ))}
    </Grid>
  );
};

export default Layout; 