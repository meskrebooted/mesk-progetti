// Progetti GitHub
const projects = [
  {
    name: "SnakeCRUD",
    desc: "Snake game con Windows Forms e C#",
    tech: ["C#", "Windows Forms"],
    url: "https://github.com/meskrebooted/SnakeCRUD"
  },
  {
    name: "SnakeForms",
    desc: "Snake game con Windows Forms",
    tech: ["C#"],
    url: "https://github.com/meskrebooted/SnakeForms"
  },
  {
    name: "meskvault",
    desc: "Primissimo sito",
    tech: ["C#"],
    url: "https://github.com/meskrebooted/meskvault"
  },
  {
    name: "htmljsdom",
    desc: "HTML/JS Dom ed Eventi",
    tech: ["JavaScript", "HTML"],
    url: "https://github.com/meskrebooted/htmljsdom"
  },
  {
    name: "bash",
    desc: "Script bash vari",
    tech: ["Shell"],
    url: "https://github.com/meskrebooted/bash"
  },
  {
    name: "Snake", 
    desc: "Snake game console in C#",
    tech: ["C#", "Console"],
    url: "https://github.com/meskrebooted/Snake"
  }
];

// Render projects
function renderProjects() {
  const container = document.getElementById('projects');
  
  projects.forEach(project => {
    const html = `
      <a href="${project.url}" target="_blank" class="project">
        <div class="project-header">
          <div>
            <div class="project-name">${project.name}</div>
            <div class="project-desc">${project.desc}</div>
            <div class="project-tech">
              ${project.tech.map(t => `<span>${t}</span>`).join('')}
            </div>
          </div>
          <svg class="project-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </div>
      </a>
    `;
    container.innerHTML += html;
  });
}

// Name toggle animation
const names = ['Adam', 'meskrebooted'];
let currentNameIndex = 0;

function toggleName() {
  const nameElement = document.getElementById('nameDisplay');
  currentNameIndex = (currentNameIndex + 1) % names.length;
  
  // Fade out with slide
  nameElement.style.opacity = '0';
  nameElement.style.transform = 'translateY(-10px)';
  
  setTimeout(() => {
    nameElement.textContent = names[currentNameIndex];
    nameElement.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      nameElement.style.opacity = '1';
      nameElement.style.transform = 'translateY(0)';
    }, 50);
  }, 500);
}

// Change name every 5 seconds
setInterval(toggleName, 5000);

// Init
document.addEventListener('DOMContentLoaded', renderProjects);