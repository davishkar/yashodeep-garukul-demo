// About Us Data Structure
const aboutData = {
  header: {
    title: "About Us",
    subtitle: "आमच्या बद्दल",
    subtitleClass: "marathi-title",
  },
  cards: [
    {
      icon: "fas fa-rocket",
      title: "Our Mission",
      description:
        "To nurture young minds with a blend of traditional values and contemporary education, empowering students to excel in a global environment while staying rooted in Indian culture.",
      delay: 100,
    },
    {
      icon: "fas fa-eye",
      title: "Our Vision",
      description:
        "Becoming the leading educational institution that creates responsible citizens with strong academic foundations, ethical values, and the confidence to face future challenges.",
      delay: 200,
    },
    {
      icon: "fas fa-heart",
      title: "Our Values",
      description:
        "Excellence, Integrity, Respect, Innovation, and Cultural Heritage form the pillars of our educational philosophy at Yashodeep Gurukul Academy.",
      delay: 300,
    },
  ],
  history: {
    title: "Our Journey",
    image: "images/caum1.webp",
    imageAlt: "Academy History",
    content:
      "Founded by Shree Narshih Charitable Trust in 2025, Yashodeep Gurukul Academy in Nivashi Sankul is embarking on an exciting educational journey with the strength of its management team's 22 years of collective expertise in teaching and administration. Though newly established, our academy seamlessly blends traditional gurukul values with modern educational approaches, creating a unique sanctuary where students develop intellectually, physically, and spiritually under experienced guidance. Despite our recent founding, we're implementing time-tested methodologies alongside innovative practices, laying strong foundations for what we envision becoming a center of educational excellence in the years ahead as we grow alongside our first batches of students and build our legacy under the trusted guidance of Shree Narshih Charitable Trust.",
    delay: 400,
  },
};

// Function to create section header
function createSectionHeader(headerData) {
  return `
                <div class="section-header" data-aos="fade-up">
                    <h2 class="section-title">${headerData.title}</h2>
                    <div class="section-subtitle ${headerData.subtitleClass}">${headerData.subtitle}</div>
                    <div class="section-underline"></div>
                </div>
            `;
}

// Function to create about cards
function createAboutCards(cardsData) {
  const cardsHTML = cardsData
    .map(
      (card) => `
                <div class="about-card glassmorphism" data-aos="fade-right" data-aos-delay="${card.delay}">
                    <div class="card-icon">
                        <i class="${card.icon}"></i>
                    </div>
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                </div>
            `
    )
    .join("");

  return `<div class="about-cards">${cardsHTML}</div>`;
}

// Function to create history section
function createHistorySection(historyData) {
  return `
                <div class="about-history" data-aos="fade-up" data-aos-delay="${historyData.delay}">
                    <div class="history-image">
                        <img src="${historyData.image}" alt="${historyData.imageAlt}" class="history-img">
                    </div>
                    <div class="history-content">
                        <h3>${historyData.title}</h3>
                        <p>${historyData.content}</p>
                    </div>
                </div>
            `;
}

// Function to load about content
function loadAboutContent() {
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      const aboutContent = document.getElementById("about-content");
      const loadingElement = document.getElementById("loading");

      // Create the complete HTML structure
      const fullHTML = `
                        ${createSectionHeader(aboutData.header)}
                        ${createAboutCards(aboutData.cards)}
                        ${createHistorySection(aboutData.history)}
                    `;

      // Insert the content
      aboutContent.innerHTML = fullHTML;

      // Hide loading and show content
      loadingElement.style.display = "none";
      aboutContent.style.display = "block";

      resolve();
    }, 1000); // Simulate 1 second loading time
  });
}

// Function to update specific section (for dynamic updates)
function updateAboutSection(section, newData) {
  switch (section) {
    case "header":
      aboutData.header = { ...aboutData.header, ...newData };
      break;
    case "cards":
      aboutData.cards = newData;
      break;
    case "history":
      aboutData.history = { ...aboutData.history, ...newData };
      break;
  }

  // Reload the content
  loadAboutContent().then(() => {
    // Refresh AOS animations
    AOS.refresh();
  });
}

// Function to add new card
function addAboutCard(cardData) {
  aboutData.cards.push(cardData);
  loadAboutContent().then(() => {
    AOS.refresh();
  });
}

// Function to remove card by index
function removeAboutCard(index) {
  if (index >= 0 && index < aboutData.cards.length) {
    aboutData.cards.splice(index, 1);
    loadAboutContent().then(() => {
      AOS.refresh();
    });
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  loadAboutContent().then(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  });
});

// Example usage functions (you can call these from console or other scripts)
window.aboutAPI = {
  updateSection: updateAboutSection,
  addCard: addAboutCard,
  removeCard: removeAboutCard,
  getData: () => aboutData,
  reload: () => {
    document.getElementById("loading").style.display = "block";
    document.getElementById("about-content").style.display = "none";
    loadAboutContent().then(() => AOS.refresh());
  },
};

// Sample photo data - Replace with your actual data source
const photoData = [
  {
    id: 1,
    src: "./images/event1.webp",
    category: "events",
    title: "Annual Day Celebration",
    description: "Students performing cultural dance",
  },
  {
    id: 2,
    src: "./images/event2.webp",
    category: "sports",
    title: "Sports Day",
    description: "Athletic competition in progress",
  },
  {
    id: 3,
    src: "./images/event3.webp",
    category: "academics",
    title: "Science Exhibition",
    description: "Students showcasing projects",
  },
  {
    id: 4,
    src: "./images/event4.webp",
    category: "cultural",
    title: "Cultural Program",
    description: "Traditional dance performance",
  },
  {
    id: 5,
    src: "./images/event5.webp",
    category: "events",
    title: "Graduation Ceremony",
    description: "Students receiving degrees",
  },
  {
    id: 6,
    src: "./images/event6.webp",
    category: "sports",
    title: "Basketball Tournament",
    description: "Inter-college basketball match",
  },
  {
    id: 7,
    src: "./images/event7.webp",
    category: "academics",
    title: "Library Study Session",
    description: "Students in focused study",
  },
  {
    id: 8,
    src: "./images/event8.webp",
    category: "cultural",
    title: "Music Concert",
    description: "College band performance",
  },
  {
    id: 9,
    src: "./images/event9.webp",
    category: "events",
    title: "Orientation Day",
    description: "Welcome ceremony for new students",
  },
  {
    id: 10,
    src: "./images/event10.webp",
    category: "sports",
    title: "Cricket Match",
    description: "Annual cricket championship",
  },
  {
    id: 11,
    src: "./images/event11.webp",
    category: "academics",
    title: "Laboratory Work",
    description: "Chemistry lab experiments",
  },
  {
    id: 12,
    src: "./images/caum1.webp",
    category: "cultural",
    title: "Art Exhibition",
    description: "Student artwork display",
  },
];

class PhotoGallery {
  constructor() {
    this.photos = [];
    this.currentFilter = "all";
    this.currentLightboxIndex = 0;
    this.filteredPhotos = [];

    this.init();
  }

  async init() {
    await this.loadPhotos();
    this.setupEventListeners();
    this.renderGallery();

    if (typeof AOS !== "undefined") {
      AOS.init({ duration: 800, once: true });
    }
  }

  async loadPhotos() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    this.photos = [...photoData];
    this.filteredPhotos = [...this.photos];
  }

  setupEventListeners() {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => this.handleFilter(e));
    });

    document
      .getElementById("lightboxClose")
      .addEventListener("click", () => this.closeLightbox());
    document
      .getElementById("lightboxPrev")
      .addEventListener("click", () => this.previousImage());
    document
      .getElementById("lightboxNext")
      .addEventListener("click", () => this.nextImage());
    document.getElementById("lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox") this.closeLightbox();
    });

    document.addEventListener("keydown", (e) => this.handleKeydown(e));
  }

  handleFilter(e) {
    const filter = e.target.dataset.filter;
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    this.currentFilter = filter;
    this.filterPhotos();
    this.renderGallery();
  }

  filterPhotos() {
    this.filteredPhotos =
      this.currentFilter === "all"
        ? [...this.photos]
        : this.photos.filter((photo) => photo.category === this.currentFilter);
  }

  renderGallery() {
    const container = document.getElementById("galleryContainer");
    if (!this.filteredPhotos.length) {
      container.innerHTML =
        '<div class="loading">No photos found for this category.</div>';
      return;
    }

    const galleryHTML = this.filteredPhotos
      .map(
        (photo, index) => `
            <div class="gallery-item" data-index="${index}">
                <div class="gallery-image">
                    <img src="${photo.src}" alt="${photo.title}" loading="lazy">
                    <div class="gallery-overlay">
                        <div class="overlay-content">
                            <h4>${photo.title}</h4>
                            <p>${photo.description}</p>
                            <button class="gallery-zoom" data-index="${index}">
                                <i class="fas fa-search-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
      )
      .join("");

    container.innerHTML = galleryHTML;

    container.querySelectorAll(".gallery-zoom").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const index = parseInt(e.currentTarget.dataset.index);
        this.openLightbox(index);
      });
    });

    container.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        const index = parseInt(item.dataset.index);
        this.openLightbox(index);
      });
    });
  }

  openLightbox(index) {
    this.currentLightboxIndex = index;
    const photo = this.filteredPhotos[index];
    document.getElementById("lightboxImg").src = photo.src;
    document.getElementById(
      "lightboxCaption"
    ).textContent = `${photo.title} - ${photo.description}`;
    document.getElementById("lightbox").classList.add("active");
    document.body.style.overflow = "hidden";
    this.updateLightboxNavigation();
  }

  closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
    document.body.style.overflow = "auto";
  }

  previousImage() {
    const newIndex =
      (this.currentLightboxIndex - 1 + this.filteredPhotos.length) %
      this.filteredPhotos.length;
    this.openLightbox(newIndex);
  }

  nextImage() {
    const newIndex =
      (this.currentLightboxIndex + 1) % this.filteredPhotos.length;
    this.openLightbox(newIndex);
  }

  updateLightboxNavigation() {
    const visible = this.filteredPhotos.length > 1 ? "flex" : "none";
    document.getElementById("lightboxPrev").style.display = visible;
    document.getElementById("lightboxNext").style.display = visible;
  }

  handleKeydown(e) {
    if (!document.getElementById("lightbox").classList.contains("active"))
      return;
    if (e.key === "Escape") this.closeLightbox();
    if (e.key === "ArrowLeft") this.previousImage();
    if (e.key === "ArrowRight") this.nextImage();
  }

  addPhoto(photoData) {
    this.photos.push({ id: Date.now(), ...photoData });
    this.filterPhotos();
    this.renderGallery();
  }

  removePhoto(id) {
    this.photos = this.photos.filter((photo) => photo.id !== id);
    this.filterPhotos();
    this.renderGallery();
  }

  async updatePhotos(newPhotoData) {
    this.photos = newPhotoData;
    this.filterPhotos();
    this.renderGallery();
  }
}

// Make it globally accessible
const gallery = new PhotoGallery();

// Sample facilities data
const facilitiesData = [
  {
    id: 1,
    name: "Science Lab",
    icon: "fas fa-flask",
    description: "State-of-the-art laboratory for practical learning",
    delay: 100,
  },
  {
    id: 2,
    name: "Robotics Lab",
    icon: "fas fa-robot",
    description: "Modern robotics and coding facilities",
    delay: 200,
  },
  {
    id: 3,
    name: "Hostel",
    icon: "fas fa-bed",
    description: "Comfortable and secure accommodation for students",
    delay: 300,
  },
  {
    id: 4,
    name: "24/7 Lighting",
    icon: "fas fa-lightbulb",
    description: "Well-lit campus for safe and effective learning",
    delay: 400,
  },
  {
    id: 5,
    name: "Clean Water",
    icon: "fas fa-tint",
    description: "Safe drinking water and sanitation facilities",
    delay: 500,
  },
  {
    id: 6,
    name: "Smart Classrooms",
    icon: "fas fa-chalkboard-teacher",
    description: "Digital classrooms with modern teaching aids",
    delay: 600,
  },
  {
    id: 7,
    name: "Library",
    icon: "fas fa-book-reader",
    description: "Vast collection of books and study materials",
    delay: 700,
  },
  {
    id: 8,
    name: "Playground",
    icon: "fas fa-futbol",
    description: "Large playground for physical activities and sports",
    delay: 800,
  },
  {
    id: 9,
    name: "CCTV Surveillance",
    icon: "fas fa-video",
    description: "24x7 campus monitoring for student safety",
    delay: 900,
  },
  {
    id: 10,
    name: "Transport",
    icon: "fas fa-bus",
    description: "Safe and punctual transport service for students",
    delay: 1000,
  },
  {
    id: 11,
    name: "Computer Lab",
    icon: "fas fa-desktop",
    description: "Fully equipped lab with internet access for IT learning",
    delay: 1100,
  },
];

class FacilitiesManager {
  constructor() {
    this.facilities = [];
    this.init();
  }

  async init() {
    await this.loadFacilities();
    this.renderFacilities();

    // Initialize AOS
    if (typeof AOS !== "undefined") {
      AOS.init({ duration: 800, once: true });
    }
  }

  async loadFacilities() {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.facilities = [...facilitiesData];
  }

  renderFacilities() {
    const container = document.getElementById("facilitiesGrid");

    if (!this.facilities.length) {
      container.innerHTML = '<div class="loading">No facilities found.</div>';
      return;
    }

    const facilitiesHTML = this.facilities
      .map(
        (facility) => `
            <div class="facility-card glassmorphism" 
                 data-aos="zoom-in" 
                 data-aos-delay="${facility.delay}">
                <div class="facility-icon">
                    <i class="${facility.icon}"></i>
                </div>
                <h3>${facility.name}</h3>
                <p>${facility.description}</p>
            </div>
        `
      )
      .join("");

    container.innerHTML = facilitiesHTML;

    // Refresh AOS
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }
}

// Initialize facilities manager
const facilitiesManager = new FacilitiesManager();

// Course data structure
const coursesData = {
  marathi: [
    {
      icon: "fas fa-book",
      title: "४ थी इयत्ता",
      features: [
        "मराठी, इंग्रजी, हिंदी",
        "गणित, विज्ञान",
        "सामाजिक अभ्यास, संगणक शिक्षण",
      ],
    },
    {
      icon: "fas fa-book",
      title: "५ वी इयत्ता",
      features: ["सर्व महत्त्वाचे विषय", "व्यक्तिमत्व विकास", "सामान्य ज्ञान"],
    },
    {
      icon: "fas fa-book",
      title: "६ वी इयत्ता",
      features: [
        "भाषा, विज्ञान, गणित",
        "संगणक शिक्षण",
        "शिस्त आणि मूल्य शिक्षण",
      ],
    },
    {
      icon: "fas fa-book",
      title: "७ वी - १० वी इयत्ता",
      features: [
        "मराठी आणि सेमी-इंग्लिश माध्यम",
        "सर्व विषय + प्रात्यक्षिक शिक्षण",
        "मूल्य आणि करिअर मार्गदर्शन",
      ],
    },
  ],
  "semi-english": [
    {
      icon: "fas fa-book-reader",
      title: "4th Standard",
      features: [
        "Subjects: English, Marathi, Hindi",
        "Maths & Science in English",
        "Computer Education",
      ],
    },
    {
      icon: "fas fa-book-reader",
      title: "5th & 6th Standard",
      features: ["All Subjects", "Computer Skills", "Social & Value Education"],
    },
    {
      icon: "fas fa-book-reader",
      title: "7th - 10th Standard",
      features: [
        "Available in Marathi & Semi-English",
        "English, Marathi, Hindi",
        "Maths, Science, Social Studies",
      ],
    },
  ],
  english: [
    {
      icon: "fas fa-graduation-cap",
      title: "4th Standard",
      features: [
        "English, Marathi, Hindi",
        "Mathematics, Science",
        "Social Studies, Computer Skills",
      ],
    },
    {
      icon: "fas fa-graduation-cap",
      title: "5th & 6th Standard",
      features: [
        "All core subjects in English",
        "Communication Skills",
        "Personality Development",
      ],
    },
    {
      icon: "fas fa-graduation-cap",
      title: "7th - 10th Standard",
      features: [
        "Complete English Medium Curriculum",
        "Advanced Science & Mathematics",
        "English Language Proficiency",
      ],
    },
  ],
  "exam-prep": [
    {
      icon: "fas fa-medal",
      title: "Navy & Air Force Exam",
      features: [
        "Complete Entrance Preparation",
        "Physical Training Guidance",
        "Mock Tests & Interview Preparation",
      ],
    },
    {
      icon: "fas fa-atom",
      title: "MHT-CET",
      features: [
        "11th & 12th Preparation",
        "Physics, Chemistry, Mathematics/Biology",
        "Regular Mock Tests & Problem Solving",
      ],
    },
    {
      icon: "fas fa-heartbeat",
      title: "NEET Foundation",
      features: [
        "Biology, Physics, Chemistry",
        "Medical Entrance Focus",
        "NCERT & Beyond Curriculum",
      ],
    },
    {
      icon: "fas fa-calculator",
      title: "JEE Foundation",
      features: [
        "Mathematics, Physics, Chemistry",
        "Concept Building & Problem Solving",
        "Engineering Entrance Preparation",
      ],
    },
  ],
};

class CoursesSection {
  constructor() {
    this.currentMedium = "marathi";
    this.scrollContainer = document.querySelector(
      ".horizontal-scroll-container"
    );
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
    // Tab switching
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        const medium = e.currentTarget.dataset.medium;
        this.switchMedium(medium);
      });
    });

    // Scroll buttons
    this.scrollLeftBtn.addEventListener("click", () => {
      this.scroll(-320);
    });

    this.scrollRightBtn.addEventListener("click", () => {
      this.scroll(320);
    });

    // Scroll container events
    this.scrollContainer.addEventListener("scroll", () => {
      this.updateScrollButtons();
    });

    // Touch/swipe support
    this.addTouchSupport();

    // Keyboard navigation
    this.addKeyboardSupport();
  }

  switchMedium(medium) {
    if (medium === this.currentMedium) return;

    // Add loading state
    this.scrollContainer.classList.add("loading");

    // Update tabs
    this.tabs.forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.medium === medium);
    });

    // Load new courses with delay for smooth transition
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
    const courseContent = this.createCourseContent(courses);

    // Clear and populate container
    this.scrollContainer.innerHTML = `
                    <div class="course-medium-content active" data-medium="${medium}">
                        ${courseContent}
                    </div>
                `;

    // Trigger animation
    setTimeout(() => {
      const cards = this.scrollContainer.querySelectorAll(".course-card");
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
      });
    }, 50);
  }

  createCourseContent(courses) {
    return courses
      .map(
        (course) => `
                    <div class="course-card glassmorphism">
                        <div class="course-icon">
                            <i class="${course.icon}"></i>
                        </div>
                        <h3>${course.title}</h3>
                        <ul class="course-features">
                            ${course.features
                              .map((feature) => `<li>${feature}</li>`)
                              .join("")}
                        </ul>
                    </div>
                `
      )
      .join("");
  }

  scroll(distance) {
    this.scrollContainer.scrollBy({
      left: distance,
      behavior: "smooth",
    });
  }

  updateScrollButtons() {
    const { scrollLeft, scrollWidth, clientWidth } = this.scrollContainer;

    this.scrollLeftBtn.style.opacity = scrollLeft > 0 ? "1" : "0.5";
    this.scrollRightBtn.style.opacity =
      scrollLeft < scrollWidth - clientWidth ? "1" : "0.5";

    this.scrollLeftBtn.disabled = scrollLeft <= 0;
    this.scrollRightBtn.disabled = scrollLeft >= scrollWidth - clientWidth;
  }

  addTouchSupport() {
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    this.scrollContainer.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - this.scrollContainer.offsetLeft;
      scrollLeft = this.scrollContainer.scrollLeft;
      this.scrollContainer.style.cursor = "grabbing";
    });

    this.scrollContainer.addEventListener("mouseleave", () => {
      isDown = false;
      this.scrollContainer.style.cursor = "grab";
    });

    this.scrollContainer.addEventListener("mouseup", () => {
      isDown = false;
      this.scrollContainer.style.cursor = "grab";
    });

    this.scrollContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - this.scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      this.scrollContainer.scrollLeft = scrollLeft - walk;
    });
  }

  addKeyboardSupport() {
    document.addEventListener("keydown", (e) => {
      if (e.target.closest(".courses-section")) {
        switch (e.key) {
          case "ArrowLeft":
            this.scroll(-320);
            break;
          case "ArrowRight":
            this.scroll(320);
            break;
          case "1":
          case "2":
          case "3":
          case "4":
            const tabIndex = parseInt(e.key) - 1;
            if (this.tabs[tabIndex]) {
              this.tabs[tabIndex].click();
            }
            break;
        }
      }
    });
  }

  // Public methods for external control
  goToMedium(medium) {
    this.switchMedium(medium);
  }

  scrollToCard(index) {
    const cards = this.scrollContainer.querySelectorAll(".course-card");
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  addCourse(medium, courseData) {
    if (!coursesData[medium]) {
      coursesData[medium] = [];
    }
    coursesData[medium].push(courseData);

    if (this.currentMedium === medium) {
      this.loadCourses(medium);
    }
  }

  removeCourse(medium, index) {
    if (coursesData[medium] && coursesData[medium][index]) {
      coursesData[medium].splice(index, 1);

      if (this.currentMedium === medium) {
        this.loadCourses(medium);
      }
    }
  }
}

// Initialize the courses section
document.addEventListener("DOMContentLoaded", () => {
  const coursesSection = new CoursesSection();

  // Make it globally accessible for external control
  window.coursesSection = coursesSection;
});



// Toggle navigation menu on mobile
document.getElementById("navToggle").addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("open");
});

// Founder message tabs
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const lang = this.dataset.lang;
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".message-content")
      .forEach((m) => m.classList.remove("active"));
    this.classList.add("active");
    document.querySelector(".message-content." + lang).classList.add("active");
  });
});

// Principal quote flip
document.addEventListener("DOMContentLoaded", function () {
  const quoteCard = document.getElementById("quoteCard");
  const quoteToggle = document.getElementById("quoteToggle");

  quoteToggle.addEventListener("click", function () {
    quoteCard.classList.toggle("flipped");
  });
});

// Gallery filter
document.querySelectorAll(".gallery-filter .filter-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const filter = this.dataset.filter;
    document
      .querySelectorAll(".gallery-filter .filter-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    document.querySelectorAll(".gallery-item").forEach((item) => {
      const category = item.dataset.category;
      item.style.display =
        filter === "all" || category === filter ? "block" : "none";
    });
  });
});

// Alumni carousel
// let currentIndex = 0;
// const testimonials = document.querySelectorAll(".testimonial-card");
// const dotsContainer = document.querySelector(".carousel-dots");
// testimonials.forEach((_, index) => {
//   const dot = document.createElement("div");
//   dot.classList.add("dot");
//   if (index === 0) dot.classList.add("active");
//   dot.addEventListener("click", () => updateTestimonial(index));
//   dotsContainer.appendChild(dot);
// });

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Testimonial Carousel functionality
  function initTestimonialCarousel() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
    // Check if all required elements exist
    if (!testimonials.length || !dotsContainer || !prevButton || !nextButton) {
      console.warn('Testimonial carousel elements not found. Skipping initialization.');
      return;
    }
    
    let currentIndex = 0;

    function updateTestimonial(index) {
      // Remove active class from current testimonial and dot
      if (testimonials[currentIndex]) {
        testimonials[currentIndex].classList.remove("active");
      }
      if (dotsContainer.children[currentIndex]) {
        dotsContainer.children[currentIndex].classList.remove("active");
      }
      
      // Update index
      currentIndex = index;
      
      // Add active class to new testimonial and dot
      if (testimonials[currentIndex]) {
        testimonials[currentIndex].classList.add("active");
      }
      if (dotsContainer.children[currentIndex]) {
        dotsContainer.children[currentIndex].classList.add("active");
      }
    }

    // Previous button event listener
    prevButton.addEventListener("click", () => {
      updateTestimonial(
        (currentIndex - 1 + testimonials.length) % testimonials.length
      );
    });

    // Next button event listener
    nextButton.addEventListener("click", () => {
      updateTestimonial((currentIndex + 1) % testimonials.length);
    });

    // Initialize dots click functionality
    Array.from(dotsContainer.children).forEach((dot, index) => {
      dot.addEventListener('click', () => {
        updateTestimonial(index);
      });
    });

    // Auto-play functionality (optional)
    setInterval(() => {
      updateTestimonial((currentIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
  }

  // Initialize testimonial carousel
  initTestimonialCarousel();

  // Lightbox functionality (fixed)
  function initLightbox() {
    // Check if lightbox library is loaded
    if (typeof lightbox !== 'undefined') {
      try {
        // Initialize lightbox with proper options
        lightbox.option({
          'resizeDuration': 200,
          'wrapAround': true,
          'showImageNumberLabel': false
        });
      } catch (error) {
        console.error('Lightbox initialization failed:', error);
      }
    } else {
      console.warn('Lightbox library not found. Make sure to include the lightbox CSS and JS files.');
    }
  }

  // Initialize lightbox
  initLightbox();

  // AOS (Animate On Scroll) initialization
  function initAOS() {
    if (typeof AOS !== 'undefined') {
      try {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 100
        });
      } catch (error) {
        console.error('AOS initialization failed:', error);
      }
    } else {
      console.warn('AOS library not found. Make sure to include the AOS CSS and JS files.');
    }
  }

  // Initialize AOS
  initAOS();

  // Generic function to safely add event listeners
  function safeAddEventListener(selector, event, handler) {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener(event, handler);
    } else {
      console.warn(`Element with selector "${selector}" not found.`);
    }
  }

  // Example usage for other elements
  safeAddEventListener('.menu-toggle', 'click', function() {
    const nav = document.querySelector('.nav-menu');
    if (nav) {
      nav.classList.toggle('active');
    }
  });

  // Contact form handling (if exists)
  safeAddEventListener('#contact-form', 'submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  });

});

// Alternative approach using modern async/await for external libraries
async function loadExternalLibraries() {
  // Wait for external libraries to load
  const checkLibrary = (libName, globalVar) => {
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (window[globalVar]) {
          clearInterval(checkInterval);
          resolve(true);
        }
      }, 100);
      
      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkInterval);
        resolve(false);
      }, 5000);
    });
  };

  // Check for AOS
  const aosLoaded = await checkLibrary('AOS', 'AOS');
  if (aosLoaded) {
    AOS.init();
  }

  // Check for Lightbox
  const lightboxLoaded = await checkLibrary('lightbox', 'lightbox');
  if (lightboxLoaded) {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
  }
}

// Uncomment the line below if you prefer the async approach
// loadExternalLibraries();