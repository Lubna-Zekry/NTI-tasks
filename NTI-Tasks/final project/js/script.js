// hero section
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

// Function to update active slide and dot
function updateSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  createSlideContent();
}

// Auto-slide functionality
function autoSlide() {
  current = (current + 1) % slides.length;
  updateSlide(current);
}

// Add event listeners to dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", function () {
    current = i;
    updateSlide(current);
  });
});

// Start auto-sliding
setInterval(autoSlide, 4000);

// Create slide content dynamically (exclude the first slide)
function createSlideContent() {
  const slideContent = document.querySelector("#slide-content");
  slideContent.innerHTML = ""; // Clear old content

  slides.forEach((slide, index) => {
    // Skip the first slide completely (active or not)
    if (index === 0) return;

    // Add content only to the currently active slide (excluding the first slide)
    if (slide.classList.contains("active")) {
      const slideDiv = document.createElement("div");
      slideDiv.classList.add(
        "slide-content",
        "position-absolute",
        "top-50",
        "start-50",
        "translate-middle",
        "text-white",
        "col-md-6",
        "col-sm-6",
        "col-lg-12",
        "text-center"
      );

      slideDiv.id = `slide_content_${index}`;
      slideDiv.innerHTML = `
            <h1 class="animate__animated animate__fadeIn slow-animation mb-5">What You Do Today For Peoples</h1>
            <p class="lead animate__animated animate__fadeInRight slow-animation mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet corporis aperiam ullam saepe ab voluptate<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div class="d-flex justify-content-center animate__animated animate__fadeInUp slow-animation gap-4">
            <a href="#" class="btn btn-primary rounded-5 px-4 py-2 shine-effect  ">Get Start Now</a>
            <a href="#" class="btn btn-contact rounded-5 px-4 py-2 shine-effect">Contact Us</a>
             </div>
        `;

      slideContent.appendChild(slideDiv);
    }
  });
}

// Initialize content
createSlideContent();

// counter section
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".count");

  // Function to animate the counting process
  function startCount(counter) {
    const target = parseInt(counter.getAttribute("data-count"), 10);
    let current = 0;
    const increment = target / 200;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      counter.textContent = Math.floor(current);
    }, 5);
  }

  // Intersection Observer to trigger the count animation when in view
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          startCount(counter);
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

// team section
const teamMembers = [
  {
    name: "Jen Whyan",
    title: "Founder",
    image: "images/team1.png",
    description:
      "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris....",
    social: ["facebook", "twitter", "linkedin", "google-plus", "tumblr"],
  },
  {
    name: "mical peterson",
    title: "Founder",
    image: "images/team2.png",
    description:
      "Lorem ipsum dolor sit amet etgda ut exercitation ullamco consectetuer adipiscing elit Aenean commodo ligula.",
    social: ["facebook", "twitter", "linkedin", "google-plus", "tumblr"],
  },
  {
    name: "sara corner",
    title: "Founder",
    image: "images/team3.png",
    description:
      "Lorem ipsum dolor sit amet etgda ut exercitation ullamco consectetuer adipiscing elit Aenean commodo ligula.",
    social: ["facebook", "twitter", "linkedin", "google-plus", "tumblr"],
  },
  {
    name: "milly jackson",
    title: "Founder",
    image: "images/team4.png",
    description:
      "Lorem ipsum dolor sit amet etgda ut exercitation ullamco consectetuer adipiscing elit Aenean commodo ligula.",
    social: ["facebook", "twitter", "linkedin", "google-plus", "tumblr"],
  },
  {
    name: "clark jackson",
    title: "Founder",
    image: "images/team5.png",
    description:
      "Lorem ipsum dolor sit amet etgda ut exercitation ullamco consectetuer adipiscing elit Aenean commodo ligula.",
    social: ["facebook", "twitter", "linkedin", "google-plus", "tumblr"],
  },
  {
    name: "john jojo",
    title: "Founder",
    image: "images/team6.png",
    description:
      "Lorem ipsum dolor sit amet etgda ut exercitation ullamco consectetuer adipiscing elit Aenean commodo ligula.",
    social: ["facebook", "twitter", "linkedin", "google-plus", "tumblr"],
  },
];

const container = document.querySelector("#team-members-container");

teamMembers.forEach((member) => {
  const memberDiv = document.createElement("div");
  memberDiv.classList.add(
    "col-md-4",
    "col-sm-6",
    "members",
    "my-3",
    "position-relative"
  );

  memberDiv.innerHTML = `
      <div class="w-75 mx-auto">
          <div class="text-center">
              <img src="${member.image}" alt="${
    member.name
  }" class="img-fluid mx-auto">
          </div>
          <div class="text-center bg-white position-absolute mx-auto" id="team">
              <div class="text-center mt-2">
                  <h6>${member.name}</h6>
                  <p class="text-primary">${member.title}</p>
              </div>
              <div class="team-line text-center" id="team-info">
                  <p class="my-4 opacity-75 w-75 mx-auto">${
                    member.description
                  }</p>
                  <div class="team-bottom bg-primary w-75 mx-auto">
                      ${member.social
                        .map(
                          (icon) =>
                            `<a target="_blank" href=""><i class="fa-brands fa-${icon}"></i></a>`
                        )
                        .join("")}
                  </div>
              </div>
          </div>
      </div>
  `;
  container.appendChild(memberDiv);
});

// Testimonial section
$(document).ready(function () {
  $(".slider-test").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $(".prev-btn"),
    nextArrow: $(".next-btn"),
  });
});
