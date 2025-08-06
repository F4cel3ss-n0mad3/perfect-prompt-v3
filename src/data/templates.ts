import { Template } from '../types';

export const templates: Template[] = [
  {
    id: 'template-universal',
    name: 'Template Universal',
    description: 'Crea prompts optimizados para cualquier necesidad con variables genéricas adaptables',
    category: 'Universal',
    variables: [
      { 
        name: 'rol_ia', 
        label: 'Rol de la IA', 
        placeholder: 'Ej: experto en marketing digital, desarrollador senior, consultor financiero',
        type: 'text',
        required: true
      },
      { 
        name: 'objetivo', 
        label: 'Objetivo principal', 
        placeholder: 'Ej: crear una estrategia de marketing, optimizar código, analizar inversiones',
        type: 'textarea',
        required: true
      },
      { 
        name: 'tono', 
        label: 'Tono y estilo', 
        placeholder: 'Ej: profesional y técnico, casual y amigable, formal y académico',
        type: 'select',
        options: [
          'Profesional y técnico',
          'Casual y amigable', 
          'Formal y académico',
          'Creativo e inspirador',
          'Directo y conciso',
          'Empático y comprensivo'
        ],
        required: true
      },
      { 
        name: 'formato_salida', 
        label: 'Formato de salida', 
        placeholder: 'Ej: lista numerada, tabla comparativa, email estructurado, código JSON',
        type: 'select',
        options: [
          'Lista numerada',
          'Lista con viñetas',
          'Tabla comparativa',
          'Párrafos estructurados',
          'Email profesional',
          'Formato JSON',
          'Código de programación',
          'Informe ejecutivo'
        ],
        required: true
      },
      { 
        name: 'contexto', 
        label: 'Contexto relevante', 
        placeholder: 'Ej: empresa B2B tech, mercado latinoamericano, stack React/Node.js',
        type: 'textarea',
        required: false
      },
      { 
        name: 'restricciones', 
        label: 'Restricciones y limitaciones', 
        placeholder: 'Ej: presupuesto máximo $10,000, solo tecnologías open source, máximo 500 palabras',
        type: 'textarea',
        required: false
      },
      { 
        name: 'ejemplos', 
        label: 'Ejemplos (Few-Shot Learning)', 
        placeholder: 'Proporciona ejemplos de entrada y salida esperada para mejorar la precisión',
        type: 'textarea',
        required: false
      },
      { 
        name: 'tarea', 
        label: 'Tarea específica y pasos', 
        placeholder: 'Describe los pasos detallados o metodología que debe seguir la IA',
        type: 'textarea',
        required: true
      },
      { 
        name: 'input_usuario', 
        label: 'Input del usuario (variable)', 
        placeholder: 'Pregunta o problema específico que proporcionará el usuario final',
        type: 'textarea',
        required: true
      },
    ],
    promptTemplate: `# INSTRUCCIONES DEL SISTEMA

Eres un/a **{rol_ia}**. Tu objetivo principal es {objetivo}.

## Directrices de Respuesta
- Mantén un tono {tono} en toda tu respuesta
- Estructura tu respuesta en formato: {formato_salida}
- Si necesitas información adicional, especifica exactamente qué datos requieres
- Piensa paso a paso antes de generar tu respuesta final
- Verifica la coherencia y precisión de tu respuesta antes de entregarla

## Contexto Relevante
{contexto}

## Restricciones y Limitaciones
{restricciones}

## Ejemplos de Referencia
{ejemplos}

## Metodología y Pasos a Seguir
{tarea}

---

**ENTRADA DEL USUARIO:**
{input_usuario}

**Tu respuesta:**`
  },
  {
    id: 'template-creativo',
    name: 'Template Creativo',
    description: 'Especializado en generar contenido creativo con técnicas avanzadas de prompt engineering',
    category: 'Creatividad',
    variables: [
      {
        name: 'tipo_contenido',
        label: 'Tipo de contenido creativo',
        placeholder: 'Ej: historia corta, poema, guión publicitario, post social media',
        type: 'select',
        options: [
          'Historia corta',
          'Poema',
          'Guión publicitario',
          'Post para redes sociales',
          'Artículo de blog',
          'Copy de ventas',
          'Eslogan/Tagline',
          'Descripción de producto'
        ],
        required: true
      },
      {
        name: 'audiencia',
        label: 'Audiencia objetivo',
        placeholder: 'Ej: millennials urbanos, profesionales de IT, padres primerizos',
        type: 'text',
        required: true
      },
      {
        name: 'emocion',
        label: 'Emoción principal a transmitir',
        placeholder: 'Ej: inspiración, urgencia, confianza, nostalgia',
        type: 'select',
        options: [
          'Inspiración',
          'Urgencia',
          'Confianza',
          'Nostalgia',
          'Alegría',
          'Intriga',
          'Motivación',
          'Tranquilidad'
        ],
        required: true
      },
      {
        name: 'longitud',
        label: 'Longitud aproximada',
        placeholder: 'Ej: 50 palabras, 3 párrafos, 280 caracteres',
        type: 'text',
        required: true
      },
      {
        name: 'palabras_clave',
        label: 'Palabras clave a incluir',
        placeholder: 'Ej: innovación, sostenible, premium, exclusivo',
        type: 'text',
        required: false
      },
      {
        name: 'tema_principal',
        label: 'Tema o producto principal',
        placeholder: 'Describe el tema central del contenido creativo',
        type: 'textarea',
        required: true
      }
    ],
    promptTemplate: `# GENERADOR DE CONTENIDO CREATIVO

Eres un copywriter y creativo publicitario experto con más de 15 años de experiencia en crear contenido que conecta emocionalmente con las audiencias.

## Especificaciones del Proyecto
- **Tipo de contenido:** {tipo_contenido}
- **Audiencia objetivo:** {audiencia}  
- **Emoción principal:** {emocion}
- **Longitud requerida:** {longitud}
- **Palabras clave:** {palabras_clave}

## Metodología Creativa
1. **Análisis de audiencia:** Considera las motivaciones, miedos y deseos de {audiencia}
2. **Activación emocional:** Genera contenido que despierte {emocion} de forma auténtica
3. **Storytelling:** Utiliza técnicas narrativas apropiadas para el formato
4. **Call-to-action:** Si aplica, incluye una llamada a la acción clara y persuasiva

## Tema Principal
{tema_principal}

---

**INSTRUCCIONES FINALES:**
- Crea 3 versiones diferentes del contenido solicitado
- Explica brevemente la estrategia detrás de cada versión  
- Incluye variaciones de headlines o títulos cuando sea relevante
- Asegúrate de que el contenido sea original y evite clichés`
  },
  {
    id: 'template-analisis',
    name: 'Template de Análisis',
    description: 'Para realizar análisis profundos, investigación y evaluación crítica de temas complejos',
    category: 'Análisis',
    variables: [
      {
        name: 'tipo_analisis',
        label: 'Tipo de análisis',
        placeholder: 'Ej: competitivo, FODA, financiero, técnico, mercado',
        type: 'select',
        options: [
          'Análisis competitivo',
          'Análisis FODA/SWOT',
          'Análisis financiero',
          'Análisis técnico',
          'Análisis de mercado',
          'Análisis de riesgos',
          'Análisis de datos',
          'Análisis estratégico'
        ],
        required: true
      },
      {
        name: 'objeto_analisis',
        label: 'Objeto de análisis',
        placeholder: 'Ej: empresa tech startup, mercado de cryptomonedas, tecnología blockchain',
        type: 'text',
        required: true
      },
      {
        name: 'perspectiva',
        label: 'Perspectiva de análisis',
        placeholder: 'Ej: inversionista, CEO, consultor estratégico, analista de datos',
        type: 'text',
        required: true
      },
      {
        name: 'profundidad',
        label: 'Nivel de profundidad',
        placeholder: 'Superficial, intermedio o exhaustivo',
        type: 'select',
        options: [
          'Superficial (resumen ejecutivo)',
          'Intermedio (análisis estándar)',
          'Exhaustivo (análisis completo)'
        ],
        required: true
      },
      {
        name: 'fuentes_datos',
        label: 'Fuentes de datos disponibles',
        placeholder: 'Ej: estados financieros, estudios de mercado, métricas de usuario',
        type: 'textarea',
        required: false
      },
      {
        name: 'pregunta_investigacion',
        label: 'Pregunta de investigación específica',
        placeholder: 'La pregunta principal que debe responder el análisis',
        type: 'textarea',
        required: true
      }
    ],
    promptTemplate: `# ANALISTA ESTRATÉGICO ESPECIALIZADO

Actúa como un analista {perspectiva} con amplia experiencia en {tipo_analisis}. Tu misión es proporcionar un análisis {profundidad} y basado en datos.

## Marco Analítico
- **Objeto de análisis:** {objeto_analisis}
- **Tipo de análisis:** {tipo_analisis}
- **Nivel de detalle:** {profundidad}
- **Perspectiva:** {perspectiva}

## Fuentes de Información
{fuentes_datos}

## Estructura de Análisis Requerida
1. **Resumen Ejecutivo** (3-5 puntos clave)
2. **Contexto y Antecedentes**
3. **Análisis Principal** (dividido en subsecciones lógicas)
4. **Hallazgos Críticos** (fortalezas, debilidades, oportunidades, amenazas)
5. **Recomendaciones Estratégicas** (priorizadas y accionables)
6. **Próximos Pasos** (timeline y métricas de seguimiento)

## Metodología
- Utiliza pensamiento crítico y objetividad
- Presenta datos cuantitativos cuando sea posible
- Identifica sesgos potenciales en el análisis
- Compara con benchmarks de la industria
- Considera múltiples escenarios (optimista, pesimista, realista)

---

**PREGUNTA DE INVESTIGACIÓN:**
{pregunta_investigacion}

Procede con tu análisis siguiendo la estructura establecida y mantén un enfoque profesional y basado en evidencia.`
  }
];

export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id);
};

export const getTemplateCategories = (): string[] => {
  const categories = templates.map(t => t.category || 'Otros');
  return [...new Set(categories)];
};