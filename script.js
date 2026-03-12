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
    if (typeof AOS !== 'undefined') AOS.refresh();
  });
}

// Function to add new card
function addAboutCard(cardData) {
  aboutData.cards.push(cardData);
  loadAboutContent().then(() => {
    if (typeof AOS !== 'undefined') AOS.refresh();
  });
}

// Function to remove card by index
function removeAboutCard(index) {
  if (index >= 0 && index < aboutData.cards.length) {
    aboutData.cards.splice(index, 1);
    loadAboutContent().then(() => {
      if (typeof AOS !== 'undefined') AOS.refresh();
    });
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  loadAboutContent().then(() => {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        });
    }
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
    loadAboutContent().then(() => { if (typeof AOS !== 'undefined') AOS.refresh(); });
  },
};
