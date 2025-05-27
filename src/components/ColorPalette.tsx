import React from 'react';
import { motion } from 'framer-motion';
import { ColorTrend } from '../types/trends';
import { Grid, Card } from '../styles/StyledComponents';

interface ColorPaletteProps {
  colors: ColorTrend[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  return (
    <Grid>
      {colors.map((color, index) => (
        <Card
          key={color.id}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            style={{
              width: '100%',
              height: '120px',
              backgroundColor: color.hex,
              borderRadius: '8px',
              marginBottom: '1rem'
            }}
            whileHover={{
              boxShadow: `0 0 20px ${color.hex}80`
            }}
          />
          <h3 style={{ marginBottom: '0.5rem' }}>{color.name}</h3>
          <p style={{ color: '#666', marginBottom: '0.5rem' }}>{color.hex}</p>
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
                width: `${color.usage}%`,
                height: '100%',
                backgroundColor: color.hex
              }}
              initial={{ width: 0 }}
              animate={{ width: `${color.usage}%` }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
          </div>
          <p style={{ color: '#666', marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Usage: {color.usage}%
          </p>
        </Card>
      ))}
    </Grid>
  );
};

export default ColorPalette; 