'use client';

import { motion } from 'framer-motion';

interface FlowStep {
  title: string;
  description: string;
  icon: string;
}

interface FlowVisualizationProps {
  steps: FlowStep[];
  title: string;
}

export default function FlowVisualization({ steps, title }: FlowVisualizationProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-blue-800 mb-6">{title} Flow</h3>
      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-start gap-4"
            >
              {/* Step number circle */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold">{index + 1}</span>
              </div>
              
              {/* Step content */}
              <div className="flex-grow">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2 text-blue-800">{step.title}</h4>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 