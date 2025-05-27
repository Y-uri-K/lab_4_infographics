import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendData } from '../types/trends';
import { SvgContainer, Tooltip } from '../styles/StyledComponents';

interface TrendChartProps {
  data: TrendData[];
}

const TrendChart: React.FC<TrendChartProps> = ({ data }) => {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; content: string } | null>(null);

  const svgHeight = 200;
  const svgWidth = 600;
  const barWidth = (svgWidth - 100) / data.length;
  const padding = 40;

  const maxPercentage = Math.max(...data.map(item => item.percentage));

  return (
    <SvgContainer>
      <svg width="100%" height="100%" viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {/* Y-axis */}
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={svgHeight - padding}
          stroke="#ccc"
          strokeWidth="1"
        />
        
        {/* X-axis */}
        <line
          x1={padding}
          y1={svgHeight - padding}
          x2={svgWidth - padding}
          y2={svgHeight - padding}
          stroke="#ccc"
          strokeWidth="1"
        />

        {/* Bars */}
        {data.map((item, index) => {
          const barHeight = ((svgHeight - 2 * padding) * item.percentage) / maxPercentage;
          const x = padding + index * barWidth;
          const y = svgHeight - padding - barHeight;

          return (
            <motion.g
              key={item.id}
              onMouseEnter={(e) => {
                const rect = (e.target as SVGElement).getBoundingClientRect();
                setTooltip({
                  x: rect.left + rect.width / 2,
                  y: rect.top,
                  content: `${item.name}: ${item.percentage}%\n${item.description}`
                });
              }}
              onMouseLeave={() => setTooltip(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.rect
                x={x}
                y={y}
                width={barWidth - 10}
                height={barHeight}
                fill={item.color}
                rx={4}
                initial={{ height: 0 }}
                animate={{ height: barHeight }}
                transition={{ duration: 0.5 }}
              />
              <text
                x={x + (barWidth - 10) / 2}
                y={svgHeight - padding + 20}
                textAnchor="middle"
                fontSize="12"
                fill="#666"
              >
                {item.name}
              </text>
            </motion.g>
          );
        })}

        {/* Y-axis labels */}
        {[0, 25, 50, 75, 100].map((value) => (
          <text
            key={value}
            x={padding - 10}
            y={svgHeight - padding - ((svgHeight - 2 * padding) * value) / maxPercentage}
            textAnchor="end"
            fontSize="12"
            fill="#666"
          >
            {value}%
          </text>
        ))}
      </svg>
      {tooltip && (
        <Tooltip
          style={{
            left: tooltip.x,
            top: tooltip.y - 10,
            transform: 'translate(-50%, -100%)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {tooltip.content}
        </Tooltip>
      )}
    </SvgContainer>
  );
};

export default TrendChart; 