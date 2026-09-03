// ---------------------------------------------------------------
// Akwantufuo Travel Consult — site interactivity (vanilla JS)
// ---------------------------------------------------------------

const WHATSAPP_NUMBER = "233509281975"; // digits only, country code first

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Wire up every element with a data-msg attribute to a WhatsApp link.
document.querySelectorAll(".js-whatsapp").forEach((el) => {
  const msg = el.getAttribute("data-msg") || "Hello Akwantufuo Travel Consult.";
  el.setAttribute("href", whatsappLink(msg));
});

// ---------------- Mobile nav toggle ----------------
const navToggle = document.getElementById("navToggle");
const navToggleIcon = document.getElementById("navToggleIcon");
const mobileNavLinks = document.getElementById("mobileNavLinks");

if (navToggle && mobileNavLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = mobileNavLinks.style.display === "flex";
    mobileNavLinks.style.display = isOpen ? "none" : "flex";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggleIcon.textContent = isOpen ? "☰" : "✕";
  });

  mobileNavLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNavLinks.style.display = "none";
      navToggle.setAttribute("aria-expanded", "false");
      navToggleIcon.textContent = "☰";
    });
  });
}

// ---------------- Service filter ----------------
const filterButtons = document.querySelectorAll("#serviceFilters .filter-btn");
const serviceCards = document.querySelectorAll("#servicesGrid .service-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const filter = btn.getAttribute("data-filter");

    serviceCards.forEach((card) => {
      const match = filter === "all" || card.getAttribute("data-category") === filter;
      if (match) {
        card.style.display = "";
        requestAnimationFrame(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        });
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.94)";
        setTimeout(() => {
          if (card.style.opacity === "0") card.style.display = "none";
        }, 220);
      }
    });
  });
});

// ---------------- Flip cards (destinations) ----------------
document.querySelectorAll(".flip-card").forEach((card) => {
  function toggleFlip(e) {
    // Let the WhatsApp link on the back face work without re-toggling.
    if (e.target.closest("a")) return;
    const flipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", String(flipped));
  }
  card.addEventListener("click", toggleFlip);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(flipped));
    }
  });
});

// ---------------- Eligibility quiz ----------------
const quizCard = document.getElementById("quizCard");
if (quizCard) {
  const steps = quizCard.querySelectorAll(".quiz-step");
  let goal = "";
  let destination = "";

  function showStep(n) {
    steps.forEach((s) => s.classList.toggle("is-active", s.getAttribute("data-step") === String(n)));
  }

  quizCard.querySelectorAll("[data-goal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      goal = btn.getAttribute("data-goal");
      showStep(2);
    });
  });

  quizCard.querySelectorAll("[data-dest]").forEach((btn) => {
    btn.addEventListener("click", () => {
      destination = btn.getAttribute("data-dest");
      showStep(3);

      const resultText = document.getElementById("quizResultText");
      const whatsappBtn = document.getElementById("quizWhatsapp");
      if (resultText) {
        resultText.textContent = `Based on your goal (${goal}) for ${destination}, one of our consultants can walk you through exactly what's needed — no guesswork.`;
      }
      if (whatsappBtn) {
        whatsappBtn.setAttribute(
          "href",
          whatsappLink(
            `Hello Akwantufuo Travel Consult, I took your website quiz. I am interested in ${goal} for ${destination}. Please guide me on the next steps.`
          )
        );
      }
    });
  });

  const resetBtn = document.getElementById("quizReset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      goal = "";
      destination = "";
      showStep(1);
    });
  }
}

// ---------------- Processing-time estimator ----------------
const estimatorOptions = {
  visa: {
    label: "Visa Application Support",
    standard: { time: "3 – 6 weeks", description: "Direct consulate appointment handling and application package review." },
    express: { time: "1 – 2 weeks", description: "Priority document review with expedited embassy scheduling where available." },
  },
  study: {
    label: "Study Abroad Program",
    standard: { time: "8 – 12 weeks", description: "University matching, admission processing and student visa filing combined." },
    express: { time: "4 – 6 weeks", description: "Fast-tracked for candidates with documents already prepared and verified." },
  },
  work: {
    label: "Work Abroad Program",
    standard: { time: "6 – 10 weeks", description: "Employer verification, sponsorship checks and work-permit application filing." },
    express: { time: "3 – 5 weeks", description: "Priority handling for candidates with an existing employer offer." },
  },
  ticketing: {
    label: "Flight & Ticketing",
    standard: { time: "24 – 48 hours", description: "Standard fare search, comparison and reservation issue." },
    express: { time: "Same day", description: "Urgent departures handled with same-day ticket issue." },
  },
};

const estService = document.getElementById("estService");
const estSpeed = document.getElementById("estSpeed");
const roadmapLabel = document.getElementById("roadmapLabel");
const roadmapTime = document.getElementById("roadmapTime");
const roadmapDesc = document.getElementById("roadmapDesc");

function updateEstimator() {
  if (!estService || !estSpeed) return;
  const option = estimatorOptions[estService.value];
  const result = option[estSpeed.value];
  roadmapLabel.textContent = option.label;
  roadmapTime.textContent = result.time;
  roadmapDesc.textContent = result.description;
}

if (estService && estSpeed) {
  estService.addEventListener("change", updateEstimator);
  estSpeed.addEventListener("change", updateEstimator);
}

// ---------------- FAQ accordion ----------------
document.querySelectorAll("#faqList .faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isOpen = question.getAttribute("aria-expanded") === "true";

    // Close all others.
    document.querySelectorAll("#faqList .faq-question").forEach((q) => {
      if (q !== question) {
        q.setAttribute("aria-expanded", "false");
        q.querySelector(".faq-mark").textContent = "+";
        q.parentElement.querySelector(".faq-answer").style.maxHeight = "0px";
      }
    });

    question.setAttribute("aria-expanded", String(!isOpen));
    question.querySelector(".faq-mark").textContent = isOpen ? "+" : "−";
    answer.style.maxHeight = isOpen ? "0px" : `${answer.scrollHeight}px`;
  });
});

// ---------------- Contact form ----------------
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    const action = contactForm.getAttribute("action") || "";
    const isConfigured = action && !action.includes("REPLACE_WITH_YOUR_FORM_ID");

    if (!isConfigured) {
      e.preventDefault();
      formStatus.style.display = "block";
      formStatus.classList.add("is-error");
      formStatus.textContent =
        "Form isn't connected yet — set a real Formspree action in index.html, or use WhatsApp for now.";
      return;
    }

    e.preventDefault();
    try {
      const res = await fetch(action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(contactForm),
      });
      formStatus.style.display = "block";
      if (res.ok) {
        formStatus.classList.remove("is-error");
        formStatus.classList.add("is-success");
        formStatus.textContent = "Thanks — your enquiry has been sent.";
        contactForm.reset();
      } else {
        formStatus.classList.add("is-error");
        formStatus.textContent = "Something went wrong — please try WhatsApp instead.";
      }
    } catch {
      formStatus.style.display = "block";
      formStatus.classList.add("is-error");
      formStatus.textContent = "Something went wrong — please try WhatsApp instead.";
    }
  });
}

// ---------------- Rotating activity toast ----------------
const toastItems = [
  { icon: "🇬🇧", title: "Booked from Agona Swedru", desc: "UK visa support started 6 minutes ago" },
  { icon: "🇨🇦", title: "Booked from Cape Coast", desc: "Canadian university admission guide secured" },
  { icon: "✈️", title: "Booked from Winneba", desc: "Flight tickets to London reserved" },
  { icon: "🎓", title: "Booked from Swedru", desc: "Study abroad counselling started today" },
];

const toast = document.getElementById("toast");
if (toast) {
  const toastIcon = document.getElementById("toastIcon");
  const toastTitle = document.getElementById("toastTitle");
  const toastDesc = document.getElementById("toastDesc");

  function showToast() {
    const item = toastItems[Math.floor(Math.random() * toastItems.length)];
    toastIcon.textContent = item.icon;
    toastTitle.textContent = item.title;
    toastDesc.textContent = item.desc;
    toast.classList.add("is-visible");
    toast.setAttribute("aria-hidden", "false");
    setTimeout(() => {
      toast.classList.remove("is-visible");
      toast.setAttribute("aria-hidden", "true");
    }, 5000);
  }

  setTimeout(showToast, 6000);
  setInterval(showToast, 14000);
}

// ---------------- Scroll reveal ----------------
const revealElements = document.querySelectorAll(".reveal, .reveal-item");
if ("IntersectionObserver" in window && revealElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "-40px" }
  );
  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("is-visible"));
}

// ---------------- Footer year ----------------
const footerBottom = document.getElementById("footerBottom");
if (footerBottom) {
  const year = new Date().getFullYear();
  footerBottom.textContent = `© ${year} Akwantufuo Travel Consult. All rights reserved.`;
}
