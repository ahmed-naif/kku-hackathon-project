/* Fictional example profile. Dates are derived from the current date. */
window.PathlyExampleData = {
  create() {
    const today = new Date();
    const isoMonthsAgo = (months) => {
      const date = new Date(today.getFullYear(), today.getMonth() - months, 1);
      return date.toISOString().slice(0, 7);
    };

    return {
      fullName: "Maya Hart",
      photo: "",
      about: "Curious digital problem-solver who enjoys turning complex ideas into calm, useful experiences.",
      email: "maya@example.test",
      linkedin: "https://www.linkedin.com/in/mayahart",
      github: "https://github.com/mayahart",
      careerGoal: "Frontend Developer",
      education: [{ university: "Northbridge University", major: "Computer Science", degree: "Bachelor of Science", start: isoMonthsAgo(48), end: isoMonthsAgo(6), description: "Focused on human-centred software and web development." }],
      experience: [{ role: "Digital Projects Intern", company: "Brightfield Studio", start: isoMonthsAgo(14), end: "", description: "Supported accessible website improvements and collaborated on clear product documentation." }],
      skills: ["HTML", "CSS", "JavaScript", "Git", "Figma"],
      projects: [{ name: "Campus Compass", description: "A simple student guide that turns university services into clear next steps.", tools: "HTML, CSS, JavaScript", link: "" }, { name: "Study Circle", description: "A responsive planning concept for focused peer learning sessions.", tools: "Figma, Accessibility", link: "" }],
      certifications: [{ name: "Foundations of UX Design", issuer: "Open Learning Lab", date: isoMonthsAgo(8), link: "" }],
      languages: ["English", "Arabic"],
      cvTemplate: "modern",
      portfolioTemplate: "modern"
    };
  }
};
