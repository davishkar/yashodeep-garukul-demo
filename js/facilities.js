// Facilities Section – extracted from script.js for facilities.html page

const facilitiesData = [
  { id: 1, name: "Science Lab", icon: "fas fa-flask", description: "State-of-the-art laboratory for practical learning", delay: 100 },
  { id: 2, name: "Robotics Lab", icon: "fas fa-robot", description: "Modern robotics and coding facilities", delay: 200 },
  { id: 3, name: "Hostel", icon: "fas fa-bed", description: "Comfortable and secure accommodation for students", delay: 300 },
  { id: 4, name: "24/7 Lighting", icon: "fas fa-lightbulb", description: "Well-lit campus for safe and effective learning", delay: 400 },
  { id: 5, name: "Clean Water", icon: "fas fa-tint", description: "Safe drinking water and sanitation facilities", delay: 500 },
  { id: 6, name: "Smart Classrooms", icon: "fas fa-chalkboard-teacher", description: "Digital classrooms with modern teaching aids", delay: 600 },
  { id: 7, name: "Library", icon: "fas fa-book-reader", description: "Vast collection of books and study materials", delay: 700 },
  { id: 8, name: "Playground", icon: "fas fa-futbol", description: "Large playground for physical activities and sports", delay: 800 },
  { id: 9, name: "CCTV Surveillance", icon: "fas fa-video", description: "24x7 campus monitoring for student safety", delay: 900 },
  { id: 10, name: "Transport", icon: "fas fa-bus", description: "Safe and punctual transport service for students", delay: 1000 },
  { id: 11, name: "Computer Lab", icon: "fas fa-desktop", description: "Fully equipped lab with internet access for IT learning", delay: 1100 },
];

class FacilitiesManager {
  constructor() { this.facilities = []; this.init(); }

  async init() {
    await this.loadFacilities();
    this.renderFacilities();
    if (typeof AOS !== "undefined") AOS.init({ duration: 800, once: true });
  }

  async loadFacilities() {
    await new Promise(resolve => setTimeout(resolve, 800));
    this.facilities = [...facilitiesData];
  }

  renderFacilities() {
    const container = document.getElementById("facilitiesGrid");
    if (!this.facilities.length) { container.innerHTML = '<div class="loading">No facilities found.</div>'; return; }
    container.innerHTML = this.facilities.map(f => `
      <div class="facility-card glassmorphism" data-aos="zoom-in" data-aos-delay="${f.delay}">
        <div class="facility-icon"><i class="${f.icon}"></i></div>
        <h3>${f.name}</h3>
        <p>${f.description}</p>
      </div>`).join("");
    if (typeof AOS !== "undefined") AOS.refresh();
  }
}

document.addEventListener("DOMContentLoaded", () => { window.facilitiesManager = new FacilitiesManager(); });
