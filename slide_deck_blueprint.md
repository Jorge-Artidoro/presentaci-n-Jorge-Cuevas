# Blueprint: Retroalimentación y Justicia Epistémica Educativa
## High-Fidelity Slide Deck Structural and Content Blueprint

This document contains the structural specifications, global CSS design tokens, HTML layouts, and data content maps for a high-fidelity educational slide deck. It is optimized for direct translation into a frontend component.

---

## 1. Global CSS Design Tokens & Styles

```css
:root {
  /* Color Palette */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8F9FA;
  --accent-lime: #B2FF59;
  --bg-dark: #121212;
  --text-dark: #121212;
  --text-muted: #4A4A4A;
  --text-light: #FFFFFF;
  --border-color: rgba(18, 18, 18, 0.08);
  
  /* Typography */
  --font-family: 'Outfit', 'Inter', system-ui, sans-serif;
  --font-size-h1: 3.5rem;
  --font-size-h2: 2.25rem;
  --font-size-h3: 1.5rem;
  --font-size-body: 1rem;
  --font-size-small: 0.875rem;

  /* Geometry & Elevation */
  --border-radius-main: 30px;
  --border-radius-pill: 50px;
  --box-shadow-floating: 0px 10px 30px rgba(0, 0, 0, 0.08);
  --box-shadow-dark: 0px 10px 30px rgba(0, 0, 0, 0.4);
}

/* New Global Component: Floating Context Card */
.floating-context-card {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: #FFFFFF;
  color: var(--text-muted);
  border-left: 4px solid var(--accent-lime);
  border-radius: 12px;
  padding: 14px 20px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  max-width: 380px;
  z-index: 100;
  line-height: 1.4;
  text-align: left;
}
```

---

## 2. Layout Skeleton: Global Web-App Header

Every slide implements this standard header structure simulating a Web-App navbar:

```html
<header class="web-app-header">
  <div class="header-left">
    <span class="section-title">Justicia Epistémica</span>
  </div>
  <div class="header-center">
    <nav class="micro-menu">
      <a href="#slide-1" class="menu-item">Portada</a>
      <a href="#slide-2" class="menu-item">Derechos</a>
      <a href="#slide-3" class="menu-item">Inclusión</a>
      <a href="#slide-4" class="menu-item">Autoevaluación</a>
      <a href="#slide-5" class="menu-item">Vulneraciones</a>
      <a href="#slide-6" class="menu-item">Liderazgo</a>
    </nav>
  </div>
  <div class="header-right">
    <button class="dark-pill-button">Configuración UI</button>
  </div>
</header>
```

---

## 3. Slide-by-Slide Content & Component Blueprint

### Slide 1: Cover Node
* **Objective:** Establish the philosophical and systemic framework of epistemic justice in education.
* **UI Component:** Split-Screen Flexbox (50/50).

#### DOM Layout
```html
<section class="slide slide-1">
  <!-- Header Navbar -->
  <div class="split-container">
    <div class="split-left">
      <div class="visual-wrapper">
        <div class="masked-image-arc">
          <img src="epistemic_agency_visual.png" alt="Agencia Epistémica" />
        </div>
      </div>
    </div>
    <div class="split-right">
      <h1 class="massive-title">Retroalimentación y Justicia Epistémica Educativa</h1>
      <h2 class="muted-subtitle">Transformación estructural del paradigma evaluativo</h2>
    </div>
  </div>
</section>
```

---

### Slide 2: Node 1 - Fortalecimiento de Derechos Estudiantiles
* **Objective:** Map the legal framework supporting student epistemic rights.
* **UI Component:** CSS Grid 3-Columns (Floating Cards).

#### DOM Layout
```html
<section class="slide slide-2">
  <!-- Header Navbar -->
  <div class="grid-layout-3">
    <!-- Card 1 -->
    <div class="floating-card">
      <div class="card-badge">Dimensión Calidad</div>
      <h3>Progreso Continuo</h3>
      <p>Derecho fundamental a una educación de calidad orientada al progreso continuo de las potencialidades (Ley 20.370, 2009, Art. 3).</p>
    </div>
    <!-- Card 2 -->
    <div class="floating-card">
      <div class="card-badge">Dimensión Agencia</div>
      <h3>Sujeto Epistémico</h3>
      <p>Restitución de la potestad participativa: derecho inalienable a emitir juicios de valor propios respecto de su proceso cognitivo (Organización de las Naciones Unidas [ONU], 1989, Art. 12).</p>
    </div>
    <!-- Card 3 -->
    <div class="floating-card">
      <div class="card-badge">Dimensión Integridad</div>
      <h3>Protección Psíquica</h3>
      <p>Salvaguarda constitucional frente a la indefensión aprendida y dinámicas evaluativas coactivas (Constitución Política de la República, 1980, Art. 19 N° 1).</p>
    </div>
  </div>
  
  <!-- Floating Context Card -->
  <div class="floating-context-card">
    ¿Qué garantías fundamentales se restituyen cuando la retroalimentación se concibe como aprendizaje?
  </div>
</section>
```

---

### Slide 3: Node 2 - Inclusión, Equidad y Garantías de Calidad
* **Objective:** Establish the mandates of universal design and systemic equity.
* **UI Component:** Z-Pattern Layout with overlapping circular image.

#### DOM Layout
```html
<section class="slide slide-3">
  <!-- Header Navbar -->
  <div class="z-pattern-container">
    <div class="z-left">
      <ul class="bullet-ui-list">
        <li class="bullet-ui-item">
          <span class="bullet-index">01</span>
          <div class="bullet-content">
            <strong>Mandato de diversificación</strong>
            <span>Implementación del Diseño Universal para el Aprendizaje (DUA) (Decreto 83, 2015).</span>
          </div>
        </li>
        <li class="bullet-ui-item">
          <span class="bullet-index">02</span>
          <div class="bullet-content">
            <strong>Ajustes razonables</strong>
            <span>Garantía de equidad mediante la remoción activa y mitigación de barreras (Ley 20.422, 2010; Ley 20.845, 2015).</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="z-right">
      <div class="circle-visual-wrapper">
        <div class="masked-image-circle">
          <img src="intersectionality_diagram.png" alt="Interseccionalidad" />
        </div>
        <div class="floating-text-card">
          <h4>Capa Teórica</h4>
          <p>La equidad requiere abordar la <strong>"interseccionalidad"</strong> (Bešić, 2020) para desarticular la <strong>"violencia simbólica"</strong> (Bourdieu & Passeron, 1977).</p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Floating Context Card -->
  <div class="floating-context-card">
    ¿Cómo un feedback efectivo desarticula barreras y asegura calidad sin exclusión?
  </div>
</section>
```

---

### Slide 4: Node 3 - Autoevaluación y Derechos Democráticos
* **Objective:** Outline the process flow for self-regulation and democratic co-evaluation.
* **UI Component:** Horizontal Process Flowchart (Connected UI Nodes).

#### DOM Layout
```html
<section class="slide slide-4">
  <!-- Header Navbar -->
  <div class="flowchart-container">
    <div class="flowchart-node">
      <span class="node-phase">Fase A</span>
      <h3>Anticipación</h3>
      <p>Fases de autorregulación del aprendizaje (Zimmerman, 2008).</p>
    </div>
    <div class="flowchart-connector"></div>
    <div class="flowchart-node">
      <span class="node-phase">Fase B</span>
      <h3>Diálogo</h3>
      <p>La coevaluación previene dinámicas sistémicas de exclusión y asimetrías de poder (Ley 20.609, 2012).</p>
    </div>
    <div class="flowchart-connector"></div>
    <div class="flowchart-node highlight">
      <span class="node-phase">Fase C</span>
      <h3>Emancipación</h3>
      <p>Tránsito a "consciencia crítica", interrogando el poder de los criterios (Freire, 1970).</p>
    </div>
  </div>
  
  <!-- Floating Context Card -->
  <div class="floating-context-card">
    ¿De qué forma la autoevaluación y coevaluación operativizan el derecho a la participación?
  </div>
</section>
```

---

### Slide 5: Node 4 - Prácticas Evaluativas Vulneratorias
* **Objective:** Expose the cognitive, normative, and educational risks of punitive evaluations.
* **UI Component:** Dark Mode Alert Card.

#### DOM Layout
```html
<section class="slide slide-5 dark-mode">
  <!-- Header Navbar -->
  <div class="alert-layout">
    <div class="alert-header">
      <span class="warning-pill">Alerta Crítica</span>
      <h2>Riesgo Sistémico: Violencia Evaluativa</h2>
    </div>
    <div class="alert-grid">
      <div class="alert-item">
        <div class="item-title">Daño Psíquico</div>
        <p>La sanción pública del error genera estrés limitante y "feedback disconfort" (Kluger & DeNisi, 1996).</p>
      </div>
      <div class="alert-item">
        <div class="item-title">Evidencia</div>
        <p>Un tercio de intervenciones punitivas genera impacto negativo en el aprendizaje (Wisniewski et al., 2019).</p>
      </div>
      <div class="alert-item highlight">
        <div class="item-title">Infracción Normativa</div>
        <p>Vulneración de la accesibilidad y ajustes del Decreto Exento 550 (2023) y Decreto 170 (2009).</p>
      </div>
    </div>
  </div>
  
  <!-- Floating Context Card -->
  <div class="floating-context-card">
    ¿Qué prácticas evaluativas tradicionales amenazan la dignidad y la integridad psíquica?
  </div>
</section>
```

---

### Slide 6: Node 5 - Liderazgo y Justicia Transformativa
* **Objective:** Propose a dashboard framework for strategic educational leadership.
* **UI Component:** Dashboard 4-Quadrant Grid (SaaS Analytics Style).

#### DOM Layout
```html
<section class="slide slide-6">
  <!-- Header Navbar -->
  <div class="dashboard-grid">
    <div class="quadrant">
      <div class="quad-meta">Q1 // Gobernanza</div>
      <h3>Auditoría de Exclusión</h3>
      <p>Auditoría de exclusión institucional periódica (OECD, 2023).</p>
    </div>
    <div class="quadrant highlight">
      <div class="quad-meta">Q2 // Optimización</div>
      <h3>Copiloto de IA</h3>
      <p>Integración algorítmica de modelos de lenguaje (IA) para matrices (mitiga carga laboral).</p>
    </div>
    <div class="quadrant">
      <div class="quad-meta">Q3 // Cultura</div>
      <h3>Peer Coaching</h3>
      <p>Modelos de peer coaching y desprivatización del aula docente.</p>
    </div>
    <div class="quadrant">
      <div class="quad-meta">Q4 // Métricas</div>
      <h3>Medición de Brechas</h3>
      <p>Medición de reducción de brechas interseccionales.</p>
    </div>
  </div>
  
  <!-- Floating Context Card -->
  <div class="floating-context-card">
    ¿Cómo orquestar un cambio cultural sistémico hacia una evaluación basada en derechos?
  </div>
</section>
```

---

## 4. UI Integration Mapping Schema (JSON)

```json
{
  "theme": {
    "colors": {
      "primaryBg": "#FFFFFF",
      "secondaryBg": "#F8F9FA",
      "accentLime": "#B2FF59",
      "darkBg": "#121212",
      "textDark": "#121212",
      "textMuted": "#4A4A4A"
    },
    "borderRadius": "30px",
    "boxShadow": "0px 10px 30px rgba(0,0,0,0.08)"
  },
  "slides": [
    {
      "slideId": "slide-1",
      "node": "Cover",
      "layout": "split-screen-flexbox",
      "content": {
        "title": "Retroalimentación y Justicia Epistémica Educativa",
        "subtitle": "Transformación estructural del paradigma evaluativo",
        "visual": {
          "type": "arc-mask",
          "placeholder": "epistemic_agency_visual.png"
        }
      }
    },
    {
      "slideId": "slide-2",
      "node": "Rights",
      "layout": "grid-3-columns",
      "content": {
        "title": "Fortalecimiento de Derechos Estudiantiles",
        "cards": [
          {
            "dimension": "Calidad",
            "concept": "Progreso Continuo",
            "citation": "(Ley 20.370, 2009, Art. 3)",
            "text": "Derecho a educación de calidad orientada al progreso."
          },
          {
            "dimension": "Agencia",
            "concept": "Sujeto Epistémico",
            "citation": "(ONU, 1989, Art. 12)",
            "text": "Restitución del estudiante como sujeto epistémico, derecho a emitir juicio propio."
          },
          {
            "dimension": "Integridad",
            "concept": "Protección Psíquica",
            "citation": "(Constitución Política, 1980, Art. 19 N° 1)",
            "text": "Protección psíquica frente a la indefensión aprendida."
          }
        ],
        "floatingContextCard": "¿Qué garantías fundamentales se restituyen cuando la retroalimentación se concibe como aprendizaje?"
      }
    },
    {
      "slideId": "slide-3",
      "node": "Inclusion",
      "layout": "z-pattern-circular-overlay",
      "content": {
        "title": "Inclusión, Equidad y Garantías de Calidad",
        "bullets": [
          {
            "index": "01",
            "label": "Mandato de diversificación",
            "description": "Implementación del Diseño Universal para el Aprendizaje (DUA) (Decreto 83, 2015)."
          },
          {
            "index": "02",
            "label": "Ajustes razonables",
            "description": "Mitigación de barreras (Ley 20.422, 2010; Ley 20.845, 2015)."
          }
        ],
        "theoreticalOverlay": {
          "concept": "Interseccionalidad y Violencia Simbólica",
          "citations": ["Bešić, 2020", "Bourdieu & Passeron, 1977"],
          "text": "La equidad requiere abordar la interseccionalidad para desarticular la violencia simbólica."
        },
        "floatingContextCard": "¿Cómo un feedback efectivo desarticula barreras y asegura calidad sin exclusión?"
      }
    },
    {
      "slideId": "slide-4",
      "node": "Self-regulation",
      "layout": "horizontal-flowchart",
      "content": {
        "title": "Autoevaluación y Derechos Democráticos",
        "steps": [
          {
            "phase": "Anticipación",
            "citation": "(Zimmerman, 2008)",
            "description": "Fases de autorregulación del aprendizaje."
          },
          {
            "phase": "Diálogo",
            "citation": "(Ley 20.609, 2012)",
            "description": "La coevaluación previene dinámicas de exclusión."
          },
          {
            "phase": "Emancipación",
            "citation": "(Freire, 1970)",
            "description": "Tránsito a consciencia crítica, interrogando el poder de los criterios."
          }
        ],
        "floatingContextCard": "¿De qué forma la autoevaluación y coevaluación operativizan el derecho a la participación?"
      }
    },
    {
      "slideId": "slide-5",
      "node": "Vulneration",
      "layout": "dark-alert-card",
      "content": {
        "title": "Prácticas Evaluativas Vulneratorias",
        "points": [
          {
            "type": "Daño Psíquico",
            "detail": "La sanción pública del error genera feedback disconfort.",
            "citation": "(Kluger & DeNisi, 1996)"
          },
          {
            "type": "Evidencia",
            "detail": "Un tercio de intervenciones punitivas genera impacto negativo.",
            "citation": "(Wisniewski et al., 2019)"
          },
          {
            "type": "Infracción Normativa",
            "detail": "Vulneración de la accesibilidad y ajustes del Decreto Exento 550 (2023) y Decreto 170 (2009)."
          }
        ],
        "floatingContextCard": "¿Qué prácticas evaluativas tradicionales amenazan la dignidad y la integridad psíquica?"
      }
    },
    {
      "slideId": "slide-6",
      "node": "Leadership",
      "layout": "dashboard-4-quadrants",
      "content": {
        "title": "Liderazgo y Justicia Transformativa",
        "quadrants": [
          {
            "id": "Q1",
            "label": "Gobernanza",
            "text": "Auditoría de exclusión institucional.",
            "citation": "(OECD, 2023)"
          },
          {
            "id": "Q2",
            "label": "Optimización",
            "text": "Integración IA como copiloto para matrices mitigando la carga docente."
          },
          {
            "id": "Q3",
            "label": "Cultura",
            "text": "Modelos de peer coaching y desprivatización del aula."
          },
          {
            "id": "Q4",
            "label": "Métricas",
            "text": "Medición de reducción de brechas interseccionales."
          }
        ],
        "floatingContextCard": "¿Cómo orquestar un cambio cultural sistémico hacia una evaluación basada en derechos?"
      }
    }
  ]
}
```

---

## 5. APA 7 Reference List

* Bešić, E. (2020). Intersectionality in education: A systematic review. *International Journal of Inclusive Education*, 24(1), 1-17.
* Bourdieu, P., & Passeron, J. C. (1977). *Reproduction in education, society and culture*. Sage Publications.
* Constitución Política de la República de Chile. (1980). Artículo 19 N° 1.
* Decreto 83. (2015). Diversificación de la enseñanza. Ministerio de Educación de Chile.
* Decreto 170. (2009). Normas para determinar los alumnos con necesidades educativas especiales que se beneficiarán de la subvención para educación especial. Ministerio de Educación de Chile.
* Decreto Exento 550. (2023). Orientaciones y adecuaciones evaluativas. Ministerio de Educación de Chile.
* Freire, P. (1970). *Pedagogía del oprimido*. Siglo XXI.
* Kluger, A. N., & DeNisi, A. (1996). The effects of feedback interventions on performance: A historical review, a meta-analysis, and a preliminary feedback intervention theory. *Psychological Bulletin*, 119(2), 254-284.
* Ley 20.370. (2009). Ley General de Educación (LGE). Ministerio de Educación de Chile.
* Ley 20.422. (2010). Establece normas sobre igualdad de oportunidades e inclusión social de personas con discapacidad. Ministerio de Relaciones Exteriores de Chile.
* Ley 20.609. (2012). Establece medidas contra la discriminación. Ministerio Secretaría General de Gobierno de Chile.
* Ley 20.845. (2015). Ley de Inclusión Escolar que regula la admisión de los y las estudiantes, elimina el financiamiento compartido y prohíbe el lucro en establecimientos educacionales que reciben aportes del Estado. Ministerio de Educación de Chile.
* Organisation for Economic Co-operation and Development [OECD]. (2023). *Equity and inclusion in education: Finding strength in diversity*. OECD Publishing.
* Organization of the Nations Unidas [ONU]. (1989). *Convención sobre los Derechos del Niño*.
* Wisniewski, B., Zierer, K., & Hattie, J. (2019). The power of feedback revisited: A meta-analysis of educational feedback research. *Frontiers in Psychology*, 10, 3087.
* Zimmerman, B. J. (2008). Investigating self-regulation and motivation: Historical background, methodological developments, and future prospects. *American Educational Research Journal*, 45(1), 166-183.
