import { useState, useCallback, useMemo } from 'react';
import { Template, PromptData, GeneratedPrompt } from '../types';
import { getTemplateById } from '../data/templates';

export const usePromptGenerator = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('');
  const [variables, setVariables] = useState<Record<string, string>>({});
  const [history, setHistory] = useState<GeneratedPrompt[]>([]);

  const selectedTemplate = useMemo(() => {
    return selectedTemplateId ? getTemplateById(selectedTemplateId) : null;
  }, [selectedTemplateId]);

  const generatePrompt = useCallback((templateId: string, vars: Record<string, string>): string => {
    const template = getTemplateById(templateId);
    if (!template) return '';

    let prompt = template.promptTemplate;
    
    // Reemplazar variables en el template
    Object.entries(vars).forEach(([key, value]) => {
      const placeholder = `{${key}}`;
      const processedValue = value || '[PENDIENTE: Completar este campo]';
      prompt = prompt.replaceAll(placeholder, processedValue);
    });

    return prompt;
  }, []);

  const currentPrompt = useMemo(() => {
    if (!selectedTemplateId) return '';
    return generatePrompt(selectedTemplateId, variables);
  }, [selectedTemplateId, variables, generatePrompt]);

  const updateVariable = useCallback((name: string, value: string) => {
    setVariables(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const resetForm = useCallback(() => {
    setVariables({});
  }, []);

  const saveToHistory = useCallback(() => {
    if (!selectedTemplate || !currentPrompt) return;

    const promptEntry: GeneratedPrompt = {
      template: selectedTemplate,
      variables: { ...variables },
      finalPrompt: currentPrompt,
      createdAt: new Date()
    };

    setHistory(prev => [promptEntry, ...prev].slice(0, 50)); // Mantener solo los últimos 50
  }, [selectedTemplate, variables, currentPrompt]);

  const exportPrompt = useCallback((format: 'txt' | 'json' | 'md' = 'txt') => {
    if (!currentPrompt) return;

    let content = '';
    let filename = '';
    let mimeType = '';

    switch (format) {
      case 'txt':
        content = currentPrompt;
        filename = 'prompt_generado.txt';
        mimeType = 'text/plain';
        break;
      case 'json':
        content = JSON.stringify({
          template: selectedTemplate?.name,
          variables,
          prompt: currentPrompt,
          createdAt: new Date().toISOString()
        }, null, 2);
        filename = 'prompt_generado.json';
        mimeType = 'application/json';
        break;
      case 'md':
        content = `# Prompt Generado\n\n**Template:** ${selectedTemplate?.name}\n**Fecha:** ${new Date().toLocaleDateString()}\n\n## Variables Utilizadas\n\n${Object.entries(variables).map(([key, value]) => `- **${key}:** ${value}`).join('\n')}\n\n## Prompt Final\n\n\`\`\`\n${currentPrompt}\n\`\`\``;
        filename = 'prompt_generado.md';
        mimeType = 'text/markdown';
        break;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }, [currentPrompt, selectedTemplate, variables]);

  const copyToClipboard = useCallback(async () => {
    if (!currentPrompt) return false;
    
    try {
      await navigator.clipboard.writeText(currentPrompt);
      return true;
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      return false;
    }
  }, [currentPrompt]);

  return {
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
    copyToClipboard,
    generatePrompt
  };
};