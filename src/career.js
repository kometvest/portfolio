export function initCareer() {
  const container = document.querySelector('#career-content');
  container.innerHTML = `
    <div class="career-container">
      <canvas id="particle-canvas"></canvas>
      <div class="timeline-container">
        <div class="timeline-line"></div>
        <div class="timeline-entries">
          <div class="timeline-entry right">
            <div class="year">2026</div>
            <div class="description">
              <a href="#" class="timeline-link">iGEM 본선 (예정)</a>
              <a href="#" class="timeline-link">KAIST 부설 한국과학영재학교 졸업 (예정)</a>
            </div>
          </div>
          <div class="timeline-entry left">
            <div class="year">2025</div>
            <div class="description">
              <a href="#" class="timeline-link">Purdue University PULSAR 참가</a>
              <a href="#" class="timeline-link">ISSF 출전 및 수상</a>
            </div>
          </div>
          <div class="timeline-entry right">
            <div class="year">2024</div>
            <div class="description">
              <a href="#" class="timeline-link">KAIST 부설 한국과학영재학교 입학</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Particle Animation System
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');

  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  const repulsionRadius = 108; // 0.6x of original 180
  const friction = 0.88;

  // Set canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; // Fill viewport to allow vertical stretch
    initParticles();
  }

  // Initialize particles forming "CAREER" text
  function initParticles() {
    // Zero-Overflow Strategy: Clear array and context
    particles = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Strict Layout Constraints
    const targetWidthPercent = 0.75; // Exactly between 70-80%
    const targetWidth = canvas.width * targetWidthPercent;
    const verticalScale = 2.8; // High vertical stretch

    // Calculate font size to exactly hit target width
    let testFontSize = 100;
    ctx.font = `900 ${testFontSize}px "Arial Narrow", "Arial Black", "Impact", sans-serif`;
    let metrics = ctx.measureText('CAREER');
    let fontSize = (targetWidth / metrics.width) * testFontSize;

    // Final font setup
    ctx.fillStyle = 'white';
    ctx.font = `900 ${fontSize}px "Arial Narrow", "Arial Black", "Impact", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Apply vertical stretch and center on screen
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(1, verticalScale);
    ctx.fillText('CAREER', 0, 0);
    ctx.restore();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Sample high-density dots
    const gap = 4; // Increased to 4 for further ~50% reduction as requested
    for (let y = 0; y < canvas.height; y += gap) {
      for (let x = 0; x < canvas.width; x += gap) {
        const index = (y * canvas.width + x) * 4;
        const alpha = imageData.data[index + 3];

        if (alpha > 128) {
          particles.push({
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
            size: 1.5 // Small high-fidelity dots
          });
        }
      }
    }
  }

  // Update particle positions with graceful physics
  function updateParticles() {
    particles.forEach(p => {
      // Calculate distance from mouse
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Circular repulsion with perimeter clumping
      if (dist < repulsionRadius && dist > 0) {
        const angle = Math.atan2(dy, dx);

        // Target position on the circle perimeter
        const targetX = mouse.x - Math.cos(angle) * repulsionRadius;
        const targetY = mouse.y - Math.sin(angle) * repulsionRadius;

        // Force to push/keep on boundary
        const force = (repulsionRadius - dist) / repulsionRadius;
        p.vx -= (p.x - targetX) * force * 0.4;
        p.vy -= (p.y - targetY) * force * 0.4;
      }

      // Elastic spring force back to base position
      // Slowed down to 0.8x (original 0.12 * 0.8 = 0.096)
      const baseForceX = (p.baseX - p.x) * 0.096;
      const baseForceY = (p.baseY - p.y) * 0.096;
      p.vx += baseForceX;
      p.vy += baseForceY;

      // Apply friction for soft, graceful movement
      p.vx *= friction;
      p.vy *= friction;

      // Update position
      p.x += p.vx;
      p.y += p.vy;
    });
  }

  // Render particles
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  // Animation loop
  function animate() {
    updateParticles();
    render();
    requestAnimationFrame(animate);
  }

  // Mouse tracking
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Initialize
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  animate();
}
