import React, { useState } from 'react';
import { TemplateSelector } from './components/TemplateSelector';
import { VariableForm } from './components/VariableForm';
import { PromptPreview } from './components/PromptPreview';
import { PromptHistory } from './components/PromptHistory';
import { usePromptGenerator } from './hooks/usePromptGenerator';
import { Sparkles, Github, ExternalLink, BookOpen } from 'lucide-react';

function App() {
  const {
    selectedTemplate,
    selectedTemplateId,
    setSelectedTemplateId,
    variables,
    updateVariable,
    currentPrompt,
    resetForm,
    saveToHistory,
    history,
    exportPrompt,
    copyToClipboard
  } = usePromptGenerator();

  const [currentTab, setCurrentTab] = useState<'generator' | 'history'>('generator');
  const [historyState, setHistoryState] = useState(history);

  // Sincronizar historial
  React.useEffect(() => {
    setHistoryState(history);
  }, [history]);

  const handleClearHistory = () => {
    // En una implementación real, esto estaría en el hook
    setHistoryState([]);
  };

  const handleLoadPrompt = (promptItem: any) => {
    setSelectedTemplateId(promptItem.template.id);
    Object.entries(promptItem.variables).forEach(([key, value]) => {
      updateVariable(key, value as string);
    });
    setCurrentTab('generator');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Sparkles className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Prompt Generator Universal
                </h1>
                <p className="text-sm text-gray-600">
                  Crea prompts IA perfectos para cualquier finalidad
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/mosaikolabs/perfect-prompt-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="Ver código fuente"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://docs.anthropic.com/claude/docs/prompt-engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="Guía de Prompt Engineering"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setCurrentTab('generator')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                currentTab === 'generator'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BookOpen className="w-4 h-4 inline mr-2" />
              Generador
            </button>
            <button
              onClick={() => setCurrentTab('history')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                currentTab === 'history'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BookOpen className="w-4 h-4 inline mr-2" />
              Historial ({historyState.length})
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentTab === 'generator' ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left Column - Configuration */}
            <div className="space-y-6">
              <TemplateSelector
                selectedTemplateId={selectedTemplateId}
                onTemplateChange={setSelectedTemplateId}
              />

              {selectedTemplate && (
                <VariableForm
                  template={selectedTemplate}
                  variables={variables}
                  onVariableChange={updateVariable}
                  onReset={resetForm}
                />
              )}
            </div>

            {/* Right Column - Preview */}
            <div className="space-y-6">
              <PromptPreview
                prompt={currentPrompt}
                onCopy={copyToClipboard}
                onExport={exportPrompt}
                onSave={saveToHistory}
              />

              {/* Tips Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Mejores Prácticas de Prompt Engineering
                </h3>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li>• <strong>Sé específico:</strong> Cuanto más detallado, mejor resultado</li>
                  <li>• <strong>Define el contexto:</strong> Proporciona información relevante</li>
                  <li>• <strong>Especifica el formato:</strong> Lista, tabla, párrafos, etc.</li>
                  <li>• <strong>Usa ejemplos:</strong> El few-shot learning mejora la precisión</li>
                  <li>• <strong>Establece restricciones:</strong> Limita longitud, tono, etc.</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <PromptHistory
              history={historyState}
              onClearHistory={handleClearHistory}
              onLoadPrompt={handleLoadPrompt}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              Desarrollado con ❤️ para la comunidad de IA
            </p>
            <p className="text-sm">
              Basado en las mejores prácticas de Prompt Engineering y Context Engineering
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;