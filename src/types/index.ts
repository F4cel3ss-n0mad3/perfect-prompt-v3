export interface VariableField {
  name: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'textarea' | 'select';
  options?: string[];
  required?: boolean;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  variables: VariableField[];
  promptTemplate: string;
  category?: string;
}

export interface PromptData {
  templateId: string;
  variables: Record<string, string>;
}

export interface GeneratedPrompt {
  template: Template;
  variables: Record<string, string>;
  finalPrompt: string;
  createdAt: Date;
}