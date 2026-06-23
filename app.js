document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const menuItems = document.querySelectorAll('.menu-item');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const slideNumSpan = document.getElementById('current-slide-num');
  
  let currentSlide = 1;
  const totalSlides = slides.length;

  // Function to transition to a specific slide number (1-based)
  function goToSlide(slideNum) {
    if (slideNum < 1 || slideNum > totalSlides) return;
    
    // Update active slide class
    slides.forEach((slide, index) => {
      if (index + 1 === slideNum) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update navbar active link classes across all slides
    slides.forEach((slide) => {
      const items = slide.querySelectorAll('.menu-item');
      items.forEach((item) => {
        const itemTarget = parseInt(item.getAttribute('data-slide'));
        const isTargetActive = (itemTarget === slideNum) || (slideNum === 8 && itemTarget === 2);
        if (isTargetActive) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    });

    currentSlide = slideNum;
    
    // Update slide number display
    if (slideNumSpan) {
      slideNumSpan.textContent = currentSlide;
    }

    // Refresh carousel if slide 5 is active
    if (slideNum === 5) {
      if (typeof updateCarousel === 'function') {
        updateCarousel();
      }
    }
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') {
      if (currentSlide < totalSlides) {
        goToSlide(currentSlide + 1);
      }
    } else if (e.key === 'ArrowLeft') {
      if (currentSlide > 1) {
        goToSlide(currentSlide - 1);
      }
    }
  });

  // Navigation menu clicks
  document.addEventListener('click', (e) => {
    const targetMenuItem = e.target.closest('.menu-item');
    if (targetMenuItem) {
      e.preventDefault();
      const targetSlide = parseInt(targetMenuItem.getAttribute('data-slide'));
      goToSlide(targetSlide);
    }
  });

  // Slide controls clicks
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlide > 1) {
        goToSlide(currentSlide - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentSlide < totalSlides) {
        goToSlide(currentSlide + 1);
      }
    });
  }

  // Optional: Add simple theme toggler logic if trigger exists
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme-active');
      if (document.body.classList.contains('dark-theme-active')) {
        document.documentElement.style.setProperty('--bg-primary', '#121212');
        document.documentElement.style.setProperty('--bg-secondary', '#1C1C1C');
        document.documentElement.style.setProperty('--text-dark', '#FFFFFF');
        document.documentElement.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.1)');
      } else {
        document.documentElement.style.setProperty('--bg-primary', '#FFFFFF');
        document.documentElement.style.setProperty('--bg-secondary', '#F8F9FA');
        document.documentElement.style.setProperty('--text-dark', '#121212');
        document.documentElement.style.setProperty('--border-color', 'rgba(18, 18, 18, 0.08)');
      }
    });
  }

  // Slide 5 Carousel logic
  const track = document.getElementById('carousel-track');
  const cards = track ? track.querySelectorAll('.carousel-card') : [];
  let activeCarouselIndex = 0; // First card active initially (Evidencia Empírica)

  function updateCarousel() {
    if (!track || cards.length === 0) return;
    
    cards.forEach((card, index) => {
      const offset = index - activeCarouselIndex;
      
      // Calculate transform translate horizontal offset
      let translateX = offset * 260; // offset spacing
      let scale = offset === 0 ? 1.05 : 0.85;
      let opacity = 0;
      let zIndex = 1;
      let pointerEvents = 'none';

      if (Math.abs(offset) <= 2) {
        opacity = offset === 0 ? 1 : (Math.abs(offset) === 1 ? 0.4 : 0.12);
        zIndex = 10 - Math.abs(offset);
        pointerEvents = 'auto';
      } else {
        opacity = 0;
        pointerEvents = 'none';
      }

      // Add rotation for 3D depth effect
      let rotateY = offset * -15;

      card.style.transform = `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;
      card.style.pointerEvents = pointerEvents;

      // Handle active border styling
      if (offset === 0) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  // Expose function globally so goToSlide can invoke it
  window.updateCarousel = updateCarousel;

  // Initial update
  updateCarousel();

  // Support clicking directly on cards to navigate
  cards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      activeCarouselIndex = index;
      updateCarousel();
    });
  });

  // Slide 6 Dashboard Tab Switcher
  const tabButtons = document.querySelectorAll('.db-tab-btn');
  const tabContents = document.querySelectorAll('.db-tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      // Remove active class from all buttons and contents
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked button and target content
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // Listen to resize to refresh
  window.addEventListener('resize', updateCarousel);

  // ==========================================================================
  // SLIDE 8: Rompecabezas 3D - Garantías Restituidas
  // ==========================================================================

  const puzzleData = [
    {
      col: 0, row: 0,
      title: "Derecho a aprender y desarrollarse integralmente.",
      legal: "Const. Chile Art. 19 n.º 10; LGE Art. 2.",
      concept: "La retroalimentación permite comprender cómo avanzar y seguir aprendiendo."
    },
    {
      col: 1, row: 0,
      title: "Dignidad en la experiencia evaluativa.",
      legal: "Const. Art. 1; Ley Inclusión 20.845.",
      concept: "La evaluación no debe humillar, exponer públicamente ni reducir al estudiante a una nota."
    },
    {
      col: 2, row: 0,
      title: "Igualdad y no discriminación.",
      legal: "Const. Art. 19 n.º 2; Ley 20.609.",
      concept: "Oportunidades reales de mejora sin sesgos por origen, género o rendimiento previo."
    },
    {
      col: 3, row: 0,
      title: "Derecho a educación de calidad.",
      legal: "LGE Art. 3; ODS 4.",
      concept: "Una retroalimentación clara, útil y oportuna contribuye al aprendizaje efectivo."
    },
    {
      col: 0, row: 1,
      title: "Oportunidad equitativa de mejora.",
      legal: "LGE Art. 3; Dcto. 67/2018.",
      concept: "El estudiante no queda clausurado por un error; recibe opciones para corregir y progresar."
    },
    {
      col: 1, row: 1,
      title: "Participación y voz del estudiante.",
      legal: "LGE Art. 3; Convención DDNN Art. 12.",
      concept: "La retroalimentación debe ser dialogada, permitiendo autoevaluarse y opinar."
    },
    {
      col: 2, row: 1,
      title: "Autonomía progresiva y autorregulación.",
      legal: "Ley TEA 21.545; Convención DDNN.",
      concept: "Enseña a reconocer avances, identificar brechas y tomar decisiones de mejora."
    },
    {
      col: 3, row: 1,
      title: "Transparencia y justicia evaluativa.",
      legal: "Dcto. 67/2018; Const. Art. 19 n.º 3.",
      concept: "Saber qué se espera, con qué criterios se evalúa y qué hacer para mejorar."
    },
    {
      col: 0, row: 2,
      title: "Integridad psíquica y autoestima.",
      legal: "Const. Art. 19 n.º 1; Convención Discapacidad.",
      concept: "Evitar etiquetas (\"eres flojo\"); centrarse en la tarea y el proceso."
    },
    {
      col: 1, row: 2,
      title: "Inclusión y ajustes razonables.",
      legal: "Ley TEA; Ley Inclusión 20.845.",
      concept: "Adaptarse a la diversidad con formatos accesibles y apoyos diferenciados."
    },
    {
      col: 2, row: 2,
      title: "Prevención de exclusión escolar.",
      legal: "Dcto. 67/2018; LGE.",
      concept: "Acompañar antes de reprobar, excluir o dejar atrás al estudiante."
    },
    {
      col: 3, row: 2,
      title: "Privacidad, honra y confidencialidad.",
      legal: "Const. Art. 19 n.º 4; Ley 20.609.",
      concept: "Las notas y debilidades no deben exponerse; entregarse con reserva y respeto."
    }
  ];

  function getPuzzlePath(col, row) {
    let path = "M 20,20"; // Start at top-left of the cell

    // Top Edge
    if (row === 0) {
      path += " L 220,20";
    } else {
      path += " L 100,20 C 100,30 108,38 112,38 C 115,38 112,28 120,28 C 128,28 125,38 128,38 C 132,38 140,30 140,20 L 220,20";
    }

    // Right Edge
    if (col === 3) {
      path += " L 220,170";
    } else {
      path += " L 220,75 C 230,75 238,83 238,87 C 238,90 228,87 228,95 C 228,103 238,100 238,103 C 238,107 230,115 220,115 L 220,170";
    }

    // Bottom Edge
    if (row === 2) {
      path += " L 20,170";
    } else {
      path += " L 140,170 C 140,180 132,188 128,188 C 125,188 128,178 120,178 C 112,178 115,188 112,188 C 108,188 100,180 100,170 L 20,170";
    }

    // Left Edge
    if (col === 0) {
      path += " L 20,20";
    } else {
      path += " L 20,115 C 30,115 38,107 38,103 C 38,100 28,103 28,95 C 28,87 38,90 38,87 C 38,83 30,75 20,75 L 20,20";
    }

    path += " Z";
    return path;
  }

  function initializePuzzle() {
    const gridContainer = document.getElementById('jigsaw-grid');
    const slide8 = document.getElementById('slide-8');
    const overlay = document.getElementById('puzzle-overlay');
    
    if (!gridContainer || !slide8) return;

    // 1. Inject SVG defs for clip-paths dynamically
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svgDefs = document.createElementNS(svgNamespace, "svg");
    svgDefs.style.position = "absolute";
    svgDefs.style.width = "0";
    svgDefs.style.height = "0";
    svgDefs.style.pointerEvents = "none";
    const defsElement = document.createElementNS(svgNamespace, "defs");
    svgDefs.appendChild(defsElement);
    document.body.appendChild(svgDefs);

    // Create 12 pieces and place them in the grid
    puzzleData.forEach((data, index) => {
      const col = data.col;
      const row = data.row;

      // Create SVG clipPath
      const clipPath = document.createElementNS(svgNamespace, "clipPath");
      clipPath.setAttribute("id", `puzzle-clip-${col}-${row}`);
      clipPath.setAttribute("clipPathUnits", "userSpaceOnUse");
      const path = document.createElementNS(svgNamespace, "path");
      path.setAttribute("d", getPuzzlePath(col, row));
      clipPath.appendChild(path);
      defsElement.appendChild(clipPath);

      // Create the puzzle piece wrapper element
      const pieceWrapper = document.createElement('div');
      pieceWrapper.classList.add('puzzle-piece-wrapper', 'state-0');
      pieceWrapper.id = `puzzle-piece-${index}`;
      pieceWrapper.setAttribute('data-index', index);

      // Initial positions in State 0
      const x = col * 200 - 20;
      const y = row * 150 - 20;
      pieceWrapper.style.left = `${x}px`;
      pieceWrapper.style.top = `${y}px`;

      const card = document.createElement('div');
      card.classList.add('puzzle-card');

      // Card Front (Liquid Glass Text Content & Number)
      const cardFront = document.createElement('div');
      cardFront.classList.add('puzzle-card-front');
      cardFront.innerHTML = `
        <div class="puzzle-card-number">${index + 1}</div>
        <div class="puzzle-card-content">
          <div class="puzzle-card-title">${data.title}</div>
          <div class="puzzle-card-legal">${data.legal}</div>
          <div class="puzzle-card-concept">${data.concept}</div>
        </div>
      `;

      // Card Back (Clipped Image)
      const cardBack = document.createElement('div');
      cardBack.classList.add('puzzle-card-back');
      cardBack.style.backgroundPosition = `${-col * 200 + 20}px ${-row * 150 + 20}px`;
      cardBack.style.clipPath = `url(#puzzle-clip-${col}-${row})`;
      cardBack.style.webkitClipPath = `url(#puzzle-clip-${col}-${row})`;

      card.appendChild(cardFront);
      card.appendChild(cardBack);
      pieceWrapper.appendChild(card);
      gridContainer.appendChild(pieceWrapper);

      // Click event handler for the wrapper itself
      pieceWrapper.addEventListener('click', (e) => {
        e.stopPropagation();

        if (pieceWrapper.classList.contains('state-0')) {
          // Ignore if another card is actively being read
          if (slide8.classList.contains('reading-active')) return;

          // Transition to State 1
          pieceWrapper.classList.remove('state-0');
          pieceWrapper.classList.add('state-1');
          
          pieceWrapper.style.left = '50%';
          pieceWrapper.style.top = '50%';
          pieceWrapper.style.transform = 'translate(-50%, -50%) scale(1.4)';
          
          slide8.classList.add('reading-active');
        } 
        else if (pieceWrapper.classList.contains('state-1')) {
          // Transition to State 2
          pieceWrapper.classList.remove('state-1');
          pieceWrapper.classList.add('state-2');
          
          pieceWrapper.style.left = `${x}px`;
          pieceWrapper.style.top = `${y}px`;
          pieceWrapper.style.transform = 'none';
          
          slide8.classList.remove('reading-active');
          
          checkCompletion();
        }
      });
    });

    // Helper to dock a piece from outside triggers (e.g. overlay click)
    function dockPiece(index) {
      const pieceWrapper = document.getElementById(`puzzle-piece-${index}`);
      if (!pieceWrapper || !pieceWrapper.classList.contains('state-1')) return;

      const data = puzzleData[index];
      const x = data.col * 200 - 20;
      const y = data.row * 150 - 20;

      pieceWrapper.classList.remove('state-1');
      pieceWrapper.classList.add('state-2');
      
      pieceWrapper.style.left = `${x}px`;
      pieceWrapper.style.top = `${y}px`;
      pieceWrapper.style.transform = "none";

      slide8.classList.remove('reading-active');
      checkCompletion();
    }

    // Clicking overlay closes active reading card (docks it)
    if (overlay) {
      overlay.addEventListener('click', () => {
        const activeWrapper = gridContainer.querySelector('.puzzle-piece-wrapper.state-1');
        if (activeWrapper) {
          const index = parseInt(activeWrapper.getAttribute('data-index'));
          dockPiece(index);
        }
      });
    }

    function checkCompletion() {
      const dockedCount = gridContainer.querySelectorAll('.puzzle-piece-wrapper.state-2').length;
      if (dockedCount === 12) {
        gridContainer.classList.add('celebrate');
        
        // Wait 4 seconds for celebration, then reset to play again
        setTimeout(() => {
          const pieces = gridContainer.querySelectorAll('.puzzle-piece-wrapper');
          pieces.forEach((piece) => {
            piece.classList.remove('state-2', 'state-1');
            piece.classList.add('state-0');
            piece.style.transform = '';
          });
          gridContainer.classList.remove('celebrate');
        }, 4000);
      }
    }
  }

  // Initialize Slide 8 Puzzle
  initializePuzzle();

  // Slide 9: 3D Mouse Parallax Effect
  const slide9 = document.getElementById('slide-9');
  if (slide9) {
    const container = slide9.querySelector('.rings-diagram-container');
    if (container) {
      slide9.addEventListener('mousemove', (e) => {
        const rect = slide9.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Calculate tilt angles (max 12 degrees)
        const tiltX = -y / (rect.height / 2) * 12;
        const tiltY = x / (rect.width / 2) * 12;
        
        container.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      });
      
      slide9.addEventListener('mouseleave', () => {
        container.style.transform = `rotateX(0deg) rotateY(0deg)`;
      });
    }
  }
});
