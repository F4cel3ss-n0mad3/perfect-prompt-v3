import React from 'react';
import { templates, getTemplateCategories } from '../data/templates';
import { BookOpen, Sparkles, BarChart3 } from 'lucide-react';

interface TemplateSelectorProps {
  selectedTemplateId: string;
  onTemplateChange: (templateId: string) => void;
}

const getTemplateIcon = (templateId: string) => {
  if (templateId.includes('universal')) return <BookOpen className="w-5 h-5" />;
  if (templateId.includes('creativo')) return <Sparkles className="w-5 h-5" />;
  if (templateId.includes('analisis')) return <BarChart3 className="w-5 h-5" />;
  return <BookOpen className="w-5 h-5" />;
};

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplateId,
  onTemplateChange
}) => {
  const categories = getTemplateCategories();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
        Selecciona un Template
      </h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`cursor-pointer rounded-lg border-2 p-4 transition-all duration-200 hover:shadow-md ${
              selectedTemplateId === template.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onTemplateChange(template.id)}
          >
            <div className="flex items-center mb-2">
              <div className={`mr-2 ${selectedTemplateId === template.id ? 'text-blue-600' : 'text-gray-600'}`}>
                {getTemplateIcon(template.id)}
              </div>
              <h3 className="font-semibold text-lg text-gray-800">
                {template.name}
              </h3>
            </div>
            
            <p className="text-gray-600 text-sm mb-3">
              {template.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                selectedTemplateId === template.id 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {template.category || 'General'}
              </span>
              
              <span className="text-xs text-gray-500">
                {template.variables.length} campos
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};