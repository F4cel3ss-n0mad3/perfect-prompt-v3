# 🚀 Generador Universal de Prompts Perfectos

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)

> **Herramienta profesional para crear prompts IA optimizados usando las mejores prácticas de Prompt Engineering y Context Engineering**

## 🌟 Demo en Vivo

**🔗 [Ver Demo](https://brilliant-nougat-bf618a.netlify.app)**

![Generador Universal de Prompts](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Prompt+Generator+Universal)

## 📋 Descripción

El **Generador Universal de Prompts Perfectos** es una aplicación web moderna que permite crear prompts optimizados para cualquier inteligencia artificial (ChatGPT, Claude, Gemini, etc.) utilizando templates universales y técnicas avanzadas de prompt engineering.

### ✨ Características Principales

- 🎯 **Templates Universales**: Plantillas adaptables para cualquier caso de uso
- 🔧 **Variables Dinámicas**: Sistema de campos personalizables y reutilizables  
- 📊 **Vista Previa en Tiempo Real**: Visualización instantánea del prompt generado
- 💾 **Historial Inteligente**: Guarda y gestiona tus prompts con búsqueda avanzada
- 📤 **Múltiples Formatos de Exportación**: TXT, JSON, Markdown
- 📱 **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- ⚡ **Rendimiento Optimizado**: Carga rápida y experiencia fluida

## 🎨 Templates Disponibles

### 1. 🌐 Template Universal
Plantilla base adaptable para cualquier necesidad:
- Definición de rol de la IA
- Objetivo y contexto específico
- Formato de salida personalizable
- Ejemplos y restricciones
- Metodología paso a paso

### 2. 🎨 Template Creativo
Especializado en contenido creativo:
- Generación de copy publicitario
- Creación de contenido para redes sociales
- Storytelling y narrativa
- Múltiples variaciones creativas

### 3. 📊 Template de Análisis
Para análisis profundos y estratégicos:
- Análisis competitivo y de mercado
- Evaluación FODA/SWOT
- Investigación y datos
- Recomendaciones estratégicas

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/mosaikolabs/perfect-prompt-generator.git

# Navegar al directorio
cd perfect-prompt-generator

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Vista previa del build
npm run lint     # Linting con ESLint
```

## 💡 Cómo Usar

### 1. Seleccionar Template
Elige entre los templates disponibles según tu necesidad:
- **Universal**: Para cualquier propósito
- **Creativo**: Para contenido y marketing
- **Análisis**: Para investigación y estrategia

### 2. Completar Variables
Rellena los campos del formulario dinámico:
- Campos obligatorios marcados con *
- Barra de progreso visual
- Validación en tiempo real
- Sugerencias y placeholders

### 3. Vista Previa
Observa el prompt generado en tiempo real:
- Formato estructurado y legible
- Análisis de palabras y caracteres
- Detección de secciones y elementos

### 4. Exportar o Guardar
- **Copiar**: Un clic al portapapeles
- **Guardar**: Añadir al historial personal
- **Exportar**: Descargar en TXT, JSON o MD

## 🏗️ Arquitectura Técnica

### Stack Tecnológico
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Netlify

### Estructura del Proyecto
```
src/
├── components/          # Componentes React reutilizables
│   ├── TemplateSelector.tsx
│   ├── VariableForm.tsx
│   ├── PromptPreview.tsx
│   └── PromptHistory.tsx
├── hooks/              # Custom hooks
│   └── usePromptGenerator.ts
├── data/               # Datos y configuración
│   └── templates.ts
├── types/              # Definiciones TypeScript
│   └── index.ts
└── App.tsx            # Componente principal
```

### Principios de Diseño
- **Modularidad**: Componentes reutilizables y desacoplados
- **Responsividad**: Mobile-first design
- **Accesibilidad**: Cumple estándares WCAG
- **Performance**: Lazy loading y optimizaciones

## 🎯 Mejores Prácticas de Prompt Engineering

La aplicación implementa técnicas avanzadas de prompt engineering:

### 1. **Estructura Clara**
- Instrucciones del sistema bien definidas
- Separación de contexto y tarea
- Formato de salida específico

### 2. **Context Engineering**
- Definición de rol y personalidad de la IA
- Contexto relevante y específico
- Restricciones y limitaciones claras

### 3. **Few-Shot Learning**
- Soporte para ejemplos de entrada/salida
- Mejora la precisión de las respuestas
- Patrones de comportamiento consistentes

### 4. **Técnicas Avanzadas**
- Chain of Thought (pensamiento paso a paso)
- Validación y verificación de respuestas
- Manejo de casos edge y errores

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución
- Seguir las convenciones de código existentes
- Añadir tests para nuevas funcionalidades
- Actualizar documentación cuando sea necesario
- Usar commits semánticos

## 📈 Roadmap

### Versión 2.0
- [ ] Editor de templates personalizado
- [ ] Integración con APIs de IA
- [ ] Colaboración en tiempo real
- [ ] Biblioteca de templates comunitarios

### Versión 2.1
- [ ] Soporte multiidioma
- [ ] Análisis de calidad de prompts
- [ ] Exportación a PDF
- [ ] Integración con Notion/Obsidian

### Versión 3.0
- [ ] IA para optimización automática de prompts
- [ ] Métricas y analytics
- [ ] Versioning de prompts
- [ ] API pública

## 📊 Casos de Uso

### 🏢 Empresarial
- Automatización de procesos con IA
- Generación de contenido corporativo
- Análisis de datos y reportes
- Atención al cliente automatizada

### 🎓 Educativo
- Creación de material didáctico
- Evaluación y feedback automatizado
- Investigación académica
- Tutorías personalizadas

### 💼 Freelancers y Consultores
- Propuestas comerciales
- Análisis competitivo
- Estrategias de marketing
- Optimización de procesos

### 🎨 Creativos
- Copywriting y publicidad
- Contenido para redes sociales
- Storytelling y narrativa
- Brainstorming creativo

## 🔧 Configuración Avanzada

### Variables de Entorno
```env
VITE_APP_TITLE="Prompt Generator Universal"
VITE_APP_VERSION="1.0.0"
VITE_ANALYTICS_ID="your-analytics-id"
```

### Personalización de Templates
```typescript
// Añadir nuevo template en src/data/templates.ts
{
  id: 'mi-template-personalizado',
  name: 'Mi Template',
  description: 'Descripción del template',
  variables: [
    {
      name: 'variable_personalizada',
      label: 'Mi Variable',
      placeholder: 'Ejemplo de uso',
      type: 'textarea',
      required: true
    }
  ],
  promptTemplate: `Tu template aquí con {variable_personalizada}`
}
```

## 📚 Recursos Adicionales

### Documentación de Prompt Engineering
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [OpenAI Best Practices](https://platform.openai.com/docs/guides/prompt-engineering)
- [Google AI Prompt Design](https://ai.google.dev/docs/prompt_best_practices)

### Comunidad y Soporte
- [Discord Community](https://discord.gg/prompt-engineering)
- [GitHub Discussions](https://github.com/mosaikolabs/perfect-prompt-generator/discussions)
- [Twitter Updates](https://twitter.com/mosaikolabs)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Autores

- **MosaikoLabs** - *Desarrollo inicial* - [@mosaikolabs](https://github.com/mosaikolabs)

## 🙏 Agradecimientos

- Comunidad de Prompt Engineering
- Contribuidores de código abierto
- Beta testers y usuarios early adopters
- Inspiración de herramientas como PromptPerfect y ChatGPT

---

<div align="center">

**¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub!**

[🌐 Demo](https://brilliant-nougat-bf618a.netlify.app) • [📖 Docs](https://github.com/mosaikolabs/perfect-prompt-generator/wiki) • [🐛 Issues](https://github.com/mosaikolabs/perfect-prompt-generator/issues) • [💬 Discussions](https://github.com/mosaikolabs/perfect-prompt-generator/discussions)

</div>