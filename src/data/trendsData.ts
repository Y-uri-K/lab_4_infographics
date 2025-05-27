import { TrendData, ColorTrend, TypographyTrend, LayoutTrend } from '../types/trends';

export const designTrends: TrendData[] = [
  {
    id: 1,
    name: "Минимализм",
    percentage: 85,
    description: "Чистый, простой дизайн с большим количеством свободного пространства",
    color: "#FF6B6B"
  },
  {
    id: 2,
    name: "Тёмная тема",
    percentage: 75,
    description: "Тёмные цветовые схемы для снижения нагрузки на глаза",
    color: "#4ECDC4"
  },
  {
    id: 3,
    name: "Стекломорфизм",
    percentage: 65,
    description: "Эффект матового стекла в элементах интерфейса",
    color: "#45B7D1"
  },
  {
    id: 4,
    name: "3D Элементы",
    percentage: 55,
    description: "Трёхмерная графика и иллюстрации",
    color: "#96CEB4"
  }
];

export const colorTrends: ColorTrend[] = [
  {
    id: 1,
    name: "Нео Мята",
    hex: "#98FF98",
    usage: 78
  },
  {
    id: 2,
    name: "Классический Синий",
    hex: "#0F4C81",
    usage: 85
  },
  {
    id: 3,
    name: "Коралловый Розовый",
    hex: "#FF6F61",
    usage: 72
  },
  {
    id: 4,
    name: "Приглушённый Пурпурный",
    hex: "#8B7B8B",
    usage: 65
  }
];

export const typographyTrends: TypographyTrend[] = [
  {
    id: 1,
    fontFamily: "Inter",
    popularity: 90,
    category: "sans-serif"
  },
  {
    id: 2,
    fontFamily: "Playfair Display",
    popularity: 75,
    category: "serif"
  },
  {
    id: 3,
    fontFamily: "Fira Code",
    popularity: 60,
    category: "monospace"
  },
  {
    id: 4,
    fontFamily: "Abril Fatface",
    popularity: 55,
    category: "display"
  }
];

export const layoutTrends: LayoutTrend[] = [
  {
    id: 1,
    name: "Grid Layout",
    adoption: 95,
    description: "CSS Grid для сложных макетов"
  },
  {
    id: 2,
    name: "Flexbox",
    adoption: 98,
    description: "Гибкая система макетов для адаптивного дизайна"
  },
  {
    id: 3,
    name: "CSS Container Queries",
    adoption: 45,
    description: "Адаптивный дизайн на уровне компонентов"
  },
  {
    id: 4,
    name: "CSS Subgrid",
    adoption: 35,
    description: "Вложенные сетки макетов"
  }
]; 