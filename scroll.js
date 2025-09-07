const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2000,
  delay: 400,
});
sr.reveal(`.hero-overlay`);
sr.reveal(`.hero-buttons`);
sr.reveal(`.vision`, { origin: "left" });
sr.reveal(`.mission`, { origin: "right" });
sr.reveal(`.about-btn`, { origin: "left" });
sr.reveal(`.about-stats`);
sr.reveal(`.services-title`, { origin: "top" });
sr.reveal(`.services-subtitle`, { origin: "top" });
sr.reveal(`.service-card`);
sr.reveal(`.services-btn`);
sr.reveal(`.project-content-box`, {
  origin: "left",
  duration: 1500,
});
sr.reveal(`.video-box`, {
  origin: "right",
  duration: 1500,
});

sr.reveal(`.choose-section h2`, { origin: "top" });
sr.reveal(`.choose-points`, { origin: "left" });
sr.reveal(`.choose-image`, { origin: "right" });

sr.reveal(`.testimonials`);
sr.reveal(`.cta-section`);
