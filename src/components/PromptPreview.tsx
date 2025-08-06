import React, { useState } from 'react';
import { Copy, Download, CheckCircle, Eye, Save } from 'lucide-react';

interface PromptPreviewProps {
  prompt: string;
  onCopy: () => Promise<boolean>;
  onExport: (format: 'txt' | 'json' | 'md') => void;
  onSave: () => void;
}

export const PromptPreview: React.FC<PromptPreviewProps> = ({
  prompt,
  onCopy,
  onExport,
  onSave
}) => {
  const [copied, setCopied] = useState(false);
  const [exportFormat, setExportFormat] = useState<'txt' | 'json' | 'md'>('txt');

  const handleCopy = async () => {
    const success = await onCopy();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleExport = () => {
    onExport(exportFormat);
  };

  const isEmpty = !prompt.trim();
  const wordCount = prompt.trim().split(/\s+/).length;
  const charCount = prompt.length;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Eye className="w-6 h-6 mr-2 text-purple-600" />
          Vista Previa del Prompt
        </h2>
        
        {!isEmpty && (
          <div className="text-sm text-gray-500">
            {wordCount} palabras • {charCount} caracteres
          </div>
        )}
      </div>

      {isEmpty ? (
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
          <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">
            Selecciona un template y completa las variables para ver la vista previa del prompt
          </p>
        </div>
      ) : (
        <>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 max-h-96 overflow-y-auto">
            <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 leading-relaxed">
              {prompt}
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCopy}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
            >
              {copied ? (
                <CheckCircle className="w-4 h-4 mr-2" />
              ) : (
                <Copy className="w-4 h-4 mr-2" />
              )}
              {copied ? 'Copiado!' : 'Copiar Prompt'}
            </button>

            <button
              onClick={onSave}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
            >
              <Save className="w-4 h-4 mr-2" />
              Guardar en Historial
            </button>

            <div className="flex-1 flex gap-2">
              <select
                value={exportFormat}
                onChange={(e) => setExportFormat(e.target.value as 'txt' | 'json' | 'md')}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500"
              >
                <option value="txt">TXT</option>
                <option value="json">JSON</option>
                <option value="md">Markdown</option>
              </select>
              
              <button
                onClick={handleExport}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </button>
            </div>
          </div>

          {/* Análisis del prompt */}
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">Análisis del Prompt:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-yellow-700 font-medium">Palabras:</span>
                <span className="ml-1 text-yellow-800">{wordCount}</span>
              </div>
              <div>
                <span className="text-yellow-700 font-medium">Caracteres:</span>
                <span className="ml-1 text-yellow-800">{charCount}</span>
              </div>
              <div>
                <span className="text-yellow-700 font-medium">Líneas:</span>
                <span className="ml-1 text-yellow-800">{prompt.split('\n').length}</span>
              </div>
              <div>
                <span className="text-yellow-700 font-medium">Secciones:</span>
                <span className="ml-1 text-yellow-800">{(prompt.match(/#/g) || []).length}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};