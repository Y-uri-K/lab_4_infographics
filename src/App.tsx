import React from 'react';
import { Container, Title, Section, SectionTitle, Description } from './styles/StyledComponents';
import TrendChart from './components/TrendChart';
import ColorPalette from './components/ColorPalette';
import Typography from './components/Typography';
import Layout from './components/Layout';
import { designTrends, colorTrends, typographyTrends, layoutTrends } from './data/trendsData';

const App: React.FC = () => {
  return (
    <Container>
      <Title>Тренды Веб-Дизайна 2024</Title>
      
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>Популярные Тренды Дизайна</SectionTitle>
        <Description>
          Исследуйте самые влиятельные тренды дизайна, формирующие веб в 2024 году.
          Эти тренды показывают процент веб-сайтов, использующих данные элементы дизайна.
        </Description>
        <TrendChart data={designTrends} />
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SectionTitle>Цветовые Тренды</SectionTitle>
        <Description>
          Откройте для себя самые популярные цветовые палитры, используемые в современном веб-дизайне.
          Эти цвета выбраны за их эстетическую привлекательность и психологическое воздействие.
        </Description>
        <ColorPalette colors={colorTrends} />
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SectionTitle>Тренды Типографики</SectionTitle>
        <Description>
          Исследуйте самые популярные шрифты и их сочетания, которые определяют визуальный язык веба.
          Узнайте, как различные семейства шрифтов используются для создания привлекательного пользовательского опыта.
        </Description>
        <Typography fonts={typographyTrends} />
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <SectionTitle>Техники Макетирования</SectionTitle>
        <Description>
          Узнайте о наиболее распространённых техниках и технологиях макетирования в современной веб-разработке.
          Эти подходы революционизируют способы структурирования веб-контента.
        </Description>
        <Layout layouts={layoutTrends} />
      </Section>
    </Container>
  );
};

export default App;
