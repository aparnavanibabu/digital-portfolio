// Sample projects data
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects."
  },
  {
    title: "Todo List App",
    description: "A simple todo list application built with vanilla JavaScript."
  },
  {
    title: "Weather App",
    description: "A weather forecast app using OpenWeather API."
  }
];

// Function to load projects dynamically
function loadProjects() {
  const projectList = document.getElementById('projectList');

  projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const title = document.createElement('h3');
    title.textContent = project.title;

    const desc = document.createElement('p');
    desc.textContent = project.description;

    card.appendChild(title);
    card.appendChild(desc);

    projectList.appendChild(card);
  });
}

// Contact form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    // Normally, you'd send this data to a server here.
    document.getElementById('formMessage').textContent = "Thank you for contacting me, " + name + "!";
    this.reset();
  } else {
    document.getElementById('formMessage').textContent = "Please fill in all fields.";
    document.getElementById('formMessage').style.color = 'red';
  }
});

// Initialize projects on page load
window.addEventListener('DOMContentLoaded', loadProjects);
