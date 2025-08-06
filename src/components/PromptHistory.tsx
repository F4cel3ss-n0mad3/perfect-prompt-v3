import React, { useState } from 'react';
import { GeneratedPrompt } from '../types';
import { History, Clock, Download, Copy, Trash2, Search } from 'lucide-react';

interface PromptHistoryProps {
  history: GeneratedPrompt[];
  onClearHistory: () => void;
  onLoadPrompt: (prompt: GeneratedPrompt) => void;
}

export const PromptHistory: React.FC<PromptHistoryProps> = ({
  history,
  onClearHistory,
  onLoadPrompt
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<GeneratedPrompt | null>(null);

  const filteredHistory = history.filter(item =>
    item.template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.finalPrompt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopyPrompt = async (prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
    } catch (error) {
      console.error('Error copying prompt:', error);
    }
  };

  const handleExportPrompt = (item: GeneratedPrompt) => {
    const content = `# ${item.template.name}\n\n**Fecha:** ${item.createdAt.toLocaleDateString()}\n\n## Prompt Generado\n\n${item.finalPrompt}`;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `prompt_${item.createdAt.toISOString().split('T')[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (history.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <History className="w-6 h-6 mr-2 text-gray-600" />
          Historial de Prompts
        </h2>
        <div className="text-center py-8">
          <History className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No hay prompts guardados aún</p>
          <p className="text-gray-400 text-sm">Los prompts que guardes aparecerán aquí</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <History className="w-6 h-6 mr-2 text-gray-600" />
          Historial ({history.length})
        </h2>
        <button
          onClick={onClearHistory}
          className="text-red-600 hover:text-red-700 flex items-center text-sm"
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Limpiar Todo
        </button>
      </div>

      {/* Buscador */}
      <div className="mb-4 relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar en el historial..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {filteredHistory.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{item.template.name}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {item.createdAt.toLocaleDateString()} {item.createdAt.toLocaleTimeString()}
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {item.finalPrompt.substring(0, 150)}...
            </p>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setSelectedPrompt(selectedPrompt?.createdAt === item.createdAt ? null : item)}
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                {selectedPrompt?.createdAt === item.createdAt ? 'Ocultar' : 'Ver Completo'}
              </button>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCopyPrompt(item.finalPrompt)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                  title="Copiar prompt"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleExportPrompt(item)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                  title="Exportar prompt"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onLoadPrompt(item)}
                  className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Cargar
                </button>
              </div>
            </div>

            {selectedPrompt?.createdAt === item.createdAt && (
              <div className="mt-3 p-3 bg-gray-100 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
                  {item.finalPrompt}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredHistory.length === 0 && searchTerm && (
        <div className="text-center py-8 text-gray-500">
          <Search className="w-12 h-12 text-gray-300 mx-auto mb-2" />
          <p>No se encontraron prompts que coincidan con "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};