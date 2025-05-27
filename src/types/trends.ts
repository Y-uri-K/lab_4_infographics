export interface TrendData {
  id: number;
  name: string;
  percentage: number;
  description: string;
  color: string;
}

export interface ColorTrend {
  id: number;
  name: string;
  hex: string;
  usage: number;
}

export interface TypographyTrend {
  id: number;
  fontFamily: string;
  popularity: number;
  category: 'serif' | 'sans-serif' | 'display' | 'monospace';
}

export interface LayoutTrend {
  id: number;
  name: string;
  adoption: number;
  description: string;
} 