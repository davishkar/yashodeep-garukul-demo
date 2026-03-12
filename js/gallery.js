// Gallery Section – extracted from script.js for gallery.html page

const photoData = [
  { id: 1, src: "../images/event1.webp", category: "events", title: "Annual Day Celebration", description: "Students performing cultural dance" },
  { id: 2, src: "../images/event2.webp", category: "sports", title: "Sports Day", description: "Athletic competition in progress" },
  { id: 3, src: "../images/event3.webp", category: "academics", title: "Science Exhibition", description: "Students showcasing projects" },
  { id: 4, src: "../images/event4.webp", category: "cultural", title: "Cultural Program", description: "Traditional dance performance" },
  { id: 5, src: "../images/event5.webp", category: "events", title: "Graduation Ceremony", description: "Students receiving degrees" },
  { id: 6, src: "../images/event6.webp", category: "sports", title: "Basketball Tournament", description: "Inter-college basketball match" },
  { id: 7, src: "../images/event7.webp", category: "academics", title: "Library Study Session", description: "Students in focused study" },
  { id: 8, src: "../images/event8.webp", category: "cultural", title: "Music Concert", description: "College band performance" },
  { id: 9, src: "../images/event9.webp", category: "events", title: "Orientation Day", description: "Welcome ceremony for new students" },
  { id: 10, src: "../images/event10.webp", category: "sports", title: "Cricket Match", description: "Annual cricket championship" },
  { id: 11, src: "../images/event11.webp", category: "academics", title: "Laboratory Work", description: "Chemistry lab experiments" },
  { id: 12, src: "../images/caum1.webp", category: "cultural", title: "Art Exhibition", description: "Student artwork display" },
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
    if (typeof AOS !== "undefined") AOS.init({ duration: 800, once: true });
  }

  async loadPhotos() {
    await new Promise(resolve => setTimeout(resolve, 500));
    this.photos = [...photoData];
    this.filteredPhotos = [...this.photos];
  }

  setupEventListeners() {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.addEventListener("click", e => this.handleFilter(e)));
    document.getElementById("lightboxClose").addEventListener("click", () => this.closeLightbox());
    document.getElementById("lightboxPrev").addEventListener("click", () => this.previousImage());
    document.getElementById("lightboxNext").addEventListener("click", () => this.nextImage());
    document.getElementById("lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") this.closeLightbox(); });
    document.addEventListener("keydown", e => this.handleKeydown(e));
  }

  handleFilter(e) {
    const filter = e.target.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    this.currentFilter = filter;
    this.filterPhotos();
    this.renderGallery();
  }

  filterPhotos() {
    this.filteredPhotos = this.currentFilter === "all" ? [...this.photos] : this.photos.filter(p => p.category === this.currentFilter);
  }

  renderGallery() {
    const container = document.getElementById("galleryContainer");
    if (!this.filteredPhotos.length) { container.innerHTML = '<div class="loading">No photos found.</div>'; return; }
    container.innerHTML = this.filteredPhotos.map((photo, index) => `
      <div class="gallery-item" data-index="${index}">
        <div class="gallery-image">
          <img src="${photo.src}" alt="${photo.title}" loading="lazy">
          <div class="gallery-overlay">
            <div class="overlay-content">
              <h3>${photo.title}</h3>
              <p>${photo.description}</p>
              <button class="gallery-zoom" data-index="${index}" aria-label="View ${photo.title} in full size"><i class="fas fa-search-plus"></i></button>
            </div>
          </div>
        </div>
      </div>`).join("");

    container.querySelectorAll(".gallery-zoom").forEach(btn => btn.addEventListener("click", e => { e.stopPropagation(); this.openLightbox(parseInt(e.currentTarget.dataset.index)); }));
    container.querySelectorAll(".gallery-item").forEach(item => item.addEventListener("click", () => this.openLightbox(parseInt(item.dataset.index))));
  }

  openLightbox(index) {
    this.currentLightboxIndex = index;
    const photo = this.filteredPhotos[index];
    document.getElementById("lightboxImg").src = photo.src;
    document.getElementById("lightboxCaption").textContent = `${photo.title} - ${photo.description}`;
    document.getElementById("lightbox").classList.add("active");
    document.body.style.overflow = "hidden";
    this.updateLightboxNavigation();
  }

  closeLightbox() { document.getElementById("lightbox").classList.remove("active"); document.body.style.overflow = "auto"; }
  previousImage() { this.openLightbox((this.currentLightboxIndex - 1 + this.filteredPhotos.length) % this.filteredPhotos.length); }
  nextImage() { this.openLightbox((this.currentLightboxIndex + 1) % this.filteredPhotos.length); }
  updateLightboxNavigation() { const v = this.filteredPhotos.length > 1 ? "flex" : "none"; document.getElementById("lightboxPrev").style.display = v; document.getElementById("lightboxNext").style.display = v; }
  handleKeydown(e) { if (!document.getElementById("lightbox").classList.contains("active")) return; if (e.key === "Escape") this.closeLightbox(); if (e.key === "ArrowLeft") this.previousImage(); if (e.key === "ArrowRight") this.nextImage(); }
}

document.addEventListener("DOMContentLoaded", () => { window.gallery = new PhotoGallery(); });
