'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProposalFormProps {
  onSubmit: (proposal: {
    title: string;
    hack: string;
    execution: string;
    whyItWorks: string;
    expectedImpact: string;
    targetAudience: string;
    implementationTime: string;
  }) => void;
}

export default function ProposalForm({ onSubmit }: ProposalFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    hack: '',
    execution: '',
    whyItWorks: '',
    expectedImpact: '',
    targetAudience: '',
    implementationTime: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      hack: '',
      execution: '',
      whyItWorks: '',
      expectedImpact: '',
      targetAudience: '',
      implementationTime: '',
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-blue-800 mb-6">Submit Your Growth Hack Proposal</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">The Hack</label>
          <textarea
            value={formData.hack}
            onChange={(e) => setFormData({ ...formData, hack: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Execution Plan</label>
          <textarea
            value={formData.execution}
            onChange={(e) => setFormData({ ...formData, execution: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Why It Works</label>
          <textarea
            value={formData.whyItWorks}
            onChange={(e) => setFormData({ ...formData, whyItWorks: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expected Impact</label>
          <textarea
            value={formData.expectedImpact}
            onChange={(e) => setFormData({ ...formData, expectedImpact: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={2}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Target Audience</label>
          <input
            type="text"
            value={formData.targetAudience}
            onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Implementation Time</label>
          <select
            value={formData.implementationTime}
            onChange={(e) => setFormData({ ...formData, implementationTime: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select time frame</option>
            <option value="1-2 weeks">1-2 weeks</option>
            <option value="2-4 weeks">2-4 weeks</option>
            <option value="1-2 months">1-2 months</option>
            <option value="2-3 months">2-3 months</option>
            <option value="3+ months">3+ months</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
        >
          Submit Proposal
        </button>
      </div>
    </motion.form>
  );
} 