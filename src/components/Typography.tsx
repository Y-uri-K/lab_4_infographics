import React from 'react';
import { motion } from 'framer-motion';
import { TypographyTrend } from '../types/trends';
import { Grid, Card } from '../styles/StyledComponents';

interface TypographyProps {
  fonts: TypographyTrend[];
}

const Typography: React.FC<TypographyProps> = ({ fonts }) => {
  return (
    <Grid>
      {fonts.map((font, index) => (
        <Card
          key={font.id}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 style={{ 
            marginBottom: '1rem',
            fontFamily: font.fontFamily,
            fontSize: '1.5rem'
          }}>
            {font.fontFamily}
          </h3>
          <p style={{ 
            fontFamily: font.fontFamily,
            marginBottom: '1rem',
            fontSize: '1.2rem'
          }}>
            Съешь же ещё этих мягких французских булок да выпей чаю
          </p>
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ 
              backgroundColor: '#f0f0f0',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              fontSize: '0.875rem'
            }}>
              {font.category}
            </span>
          </div>
          <div
            style={{
              width: '100%',
              height: '4px',
              backgroundColor: '#eee',
              borderRadius: '2px',
              overflow: 'hidden'
            }}
          >
            <motion.div
              style={{
                width: `${font.popularity}%`,
                height: '100%',
                backgroundColor: '#4a90e2'
              }}
              initial={{ width: 0 }}
              animate={{ width: `${font.popularity}%` }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
          </div>
          <p style={{ color: '#666', marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Popularity: {font.popularity}%
          </p>
        </Card>
      ))}
    </Grid>
  );
};

export default Typography; 