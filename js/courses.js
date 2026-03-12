// Courses Section – extracted from script.js for courses.html page

const coursesData = {
  marathi: [
    { icon: "fas fa-book", title: "४ थी इयत्ता", features: ["मराठी, इंग्रजी, हिंदी", "गणित, विज्ञान", "सामाजिक अभ्यास, संगणक शिक्षण"] },
    { icon: "fas fa-book", title: "५ वी इयत्ता", features: ["सर्व महत्त्वाचे विषय", "व्यक्तिमत्व विकास", "सामान्य ज्ञान"] },
    { icon: "fas fa-book", title: "६ वी इयत्ता", features: ["भाषा, विज्ञान, गणित", "संगणक शिक्षण", "शिस्त आणि मूल्य शिक्षण"] },
    { icon: "fas fa-book", title: "७ वी - १० वी इयत्ता", features: ["मराठी आणि सेमी-इंग्लिश माध्यम", "सर्व विषय + प्रात्यक्षिक शिक्षण", "मूल्य आणि करिअर मार्गदर्शन"] },
  ],
  "semi-english": [
    { icon: "fas fa-book-reader", title: "4th Standard", features: ["Subjects: English, Marathi, Hindi", "Maths & Science in English", "Computer Education"] },
    { icon: "fas fa-book-reader", title: "5th & 6th Standard", features: ["All Subjects", "Computer Skills", "Social & Value Education"] },
    { icon: "fas fa-book-reader", title: "7th - 10th Standard", features: ["Available in Marathi & Semi-English", "English, Marathi, Hindi", "Maths, Science, Social Studies"] },
  ],
  english: [
    { icon: "fas fa-graduation-cap", title: "4th Standard", features: ["English, Marathi, Hindi", "Mathematics, Science", "Social Studies, Computer Skills"] },
    { icon: "fas fa-graduation-cap", title: "5th & 6th Standard", features: ["All core subjects in English", "Communication Skills", "Personality Development"] },
    { icon: "fas fa-graduation-cap", title: "7th - 10th Standard", features: ["Complete English Medium Curriculum", "Advanced Science & Mathematics", "English Language Proficiency"] },
  ],
  "exam-prep": [
    { icon: "fas fa-medal", title: "Navy & Air Force Exam", features: ["Complete Entrance Preparation", "Physical Training Guidance", "Mock Tests & Interview Preparation"] },
    { icon: "fas fa-atom", title: "MHT-CET", features: ["11th & 12th Preparation", "Physics, Chemistry, Mathematics/Biology", "Regular Mock Tests & Problem Solving"] },
    { icon: "fas fa-heartbeat", title: "NEET Foundation", features: ["Biology, Physics, Chemistry", "Medical Entrance Focus", "NCERT & Beyond Curriculum"] },
    { icon: "fas fa-calculator", title: "JEE Foundation", features: ["Mathematics, Physics, Chemistry", "Concept Building & Problem Solving", "Engineering Entrance Preparation"] },
  ],
};

class CoursesSection {
  constructor() {
    this.currentMedium = "marathi";
    this.scrollContainer = document.querySelector(".horizontal-scroll-container");
    this.tabs = document.querySelectorAll(".medium-tab");
    this.scrollLeftBtn = document.querySelector(".scroll-left");
    this.scrollRightBtn = document.querySelector(".scroll-right");
    this.init();
  }

  init() {
    this.loadCourses(this.currentMedium);
    this.bindEvents();
    this.updateScrollButtons();
  }

  bindEvents() {
    this.tabs.forEach(tab => {
      tab.addEventListener("click", e => this.switchMedium(e.currentTarget.dataset.medium));
    });
    this.scrollLeftBtn.addEventListener("click", () => this.scroll(-320));
    this.scrollRightBtn.addEventListener("click", () => this.scroll(320));
    this.scrollContainer.addEventListener("scroll", () => this.updateScrollButtons());
    this.addTouchSupport();
    this.addKeyboardSupport();
  }

  switchMedium(medium) {
    if (medium === this.currentMedium) return;
    this.scrollContainer.classList.add("loading");
    this.tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.medium === medium));
    setTimeout(() => {
      this.currentMedium = medium;
      this.loadCourses(medium);
      this.scrollContainer.classList.remove("loading");
      this.scrollContainer.scrollLeft = 0;
      this.updateScrollButtons();
    }, 200);
  }

  loadCourses(medium) {
    const courses = coursesData[medium] || [];
    this.scrollContainer.innerHTML = `<div class="course-medium-content active" data-medium="${medium}">${this.createCourseContent(courses)}</div>`;
    setTimeout(() => {
      this.scrollContainer.querySelectorAll(".course-card").forEach((card, i) => {
        card.style.animationDelay = `${i * 0.1}s`;
      });
    }, 50);
  }

  createCourseContent(courses) {
    return courses.map(course => `
      <div class="course-card glassmorphism">
        <div class="course-icon"><i class="${course.icon}"></i></div>
        <h3>${course.title}</h3>
        <ul class="course-features">${course.features.map(f => `<li>${f}</li>`).join("")}</ul>
      </div>`).join("");
  }

  scroll(distance) { this.scrollContainer.scrollBy({ left: distance, behavior: "smooth" }); }

  updateScrollButtons() {
    const { scrollLeft, scrollWidth, clientWidth } = this.scrollContainer;
    this.scrollLeftBtn.style.opacity = scrollLeft > 0 ? "1" : "0.5";
    this.scrollRightBtn.style.opacity = scrollLeft < scrollWidth - clientWidth ? "1" : "0.5";
    this.scrollLeftBtn.disabled = scrollLeft <= 0;
    this.scrollRightBtn.disabled = scrollLeft >= scrollWidth - clientWidth;
  }

  addTouchSupport() {
    let startX = 0, scrollLeft = 0, isDown = false;
    this.scrollContainer.addEventListener("mousedown", e => { isDown = true; startX = e.pageX - this.scrollContainer.offsetLeft; scrollLeft = this.scrollContainer.scrollLeft; this.scrollContainer.style.cursor = "grabbing"; });
    this.scrollContainer.addEventListener("mouseleave", () => { isDown = false; this.scrollContainer.style.cursor = "grab"; });
    this.scrollContainer.addEventListener("mouseup", () => { isDown = false; this.scrollContainer.style.cursor = "grab"; });
    this.scrollContainer.addEventListener("mousemove", e => { if (!isDown) return; e.preventDefault(); const x = e.pageX - this.scrollContainer.offsetLeft; this.scrollContainer.scrollLeft = scrollLeft - (x - startX) * 2; });
  }

  addKeyboardSupport() {
    document.addEventListener("keydown", e => {
      if (!e.target.closest(".courses-section")) return;
      if (e.key === "ArrowLeft") this.scroll(-320);
      if (e.key === "ArrowRight") this.scroll(320);
      const idx = parseInt(e.key) - 1;
      if (idx >= 0 && this.tabs[idx]) this.tabs[idx].click();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.coursesSection = new CoursesSection();
  if (typeof AOS !== "undefined") AOS.init({ duration: 800, once: true });
});
