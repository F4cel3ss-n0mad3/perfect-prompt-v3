import React from 'react';
import { Template } from '../types';
import { Edit3, AlertCircle } from 'lucide-react';

interface VariableFormProps {
  template: Template;
  variables: Record<string, string>;
  onVariableChange: (name: string, value: string) => void;
  onReset: () => void;
}

export const VariableForm: React.FC<VariableFormProps> = ({
  template,
  variables,
  onVariableChange,
  onReset
}) => {
  const requiredFields = template.variables.filter(v => v.required);
  const filledRequired = requiredFields.filter(v => variables[v.name]?.trim()).length;
  const completionPercent = requiredFields.length > 0 ? (filledRequired / requiredFields.length) * 100 : 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Edit3 className="w-6 h-6 mr-2 text-green-600" />
          Completa las Variables
        </h2>
        <button
          onClick={onReset}
          className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Limpiar Todo
        </button>
      </div>

      {/* Barra de progreso */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Progreso: {filledRequired}/{requiredFields.length} campos requeridos
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(completionPercent)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              completionPercent === 100 ? 'bg-green-500' : 'bg-blue-500'
            }`}
            style={{ width: `${completionPercent}%` }}
          ></div>
        </div>
      </div>

      <div className="grid gap-6">
        {template.variables.map((variable) => {
          const value = variables[variable.name] || '';
          const isEmpty = !value.trim();
          const isRequired = variable.required;
          
          return (
            <div key={variable.name} className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                {variable.label}
                {isRequired && (
                  <span className="ml-1 text-red-500 text-xs">*</span>
                )}
                {isRequired && isEmpty && (
                  <AlertCircle className="w-4 h-4 ml-2 text-red-500" />
                )}
              </label>

              {variable.type === 'textarea' ? (
                <textarea
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-colors ${
                    isRequired && isEmpty
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  rows={4}
                  placeholder={variable.placeholder}
                  value={value}
                  onChange={(e) => onVariableChange(variable.name, e.target.value)}
                />
              ) : variable.type === 'select' && variable.options ? (
                <select
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    isRequired && isEmpty
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  value={value}
                  onChange={(e) => onVariableChange(variable.name, e.target.value)}
                >
                  <option value="">Selecciona una opción...</option>
                  {variable.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    isRequired && isEmpty
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  placeholder={variable.placeholder}
                  value={value}
                  onChange={(e) => onVariableChange(variable.name, e.target.value)}
                />
              )}

              {isRequired && isEmpty && (
                <p className="text-red-500 text-xs flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Este campo es requerido
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Consejos para mejores resultados:</p>
            <ul className="space-y-1 text-xs">
              <li>• Sé específico en tus descripciones</li>
              <li>• Incluye contexto relevante cuando sea posible</li>
              <li>• Los ejemplos mejoran significativamente la calidad del prompt</li>
              <li>• Define claramente el formato de salida deseado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};