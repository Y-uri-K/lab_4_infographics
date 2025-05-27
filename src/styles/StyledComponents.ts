import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Section = styled(motion.section)`
  margin-bottom: 4rem;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const Card = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const SvgContainer = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Tooltip = styled(motion.div)`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  pointer-events: none;
  z-index: 1000;
`;

export const Button = styled(motion.button)`
  background: #4a90e2;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background: #357abd;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`; 