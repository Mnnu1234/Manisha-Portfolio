const experience = [
  {
    period: "1 Month",
    role: "Hardware & Software Intern",
    description:
      "Completed a one-month internship focusing on basic hardware components and software fundamentals, including system setup, troubleshooting, and understanding real-world IT operations.",
    technologies: ["Computer Hardware", "Networking Basics", "Operating Systems"],
    current: false,
  },
  {
    period: "6 Months",
    role: "Full Stack Web Development Trainee",
    description:
      "Completed a 6-month full stack development course, building projects using modern web technologies, including frontend and backend development, APIs, and database integration.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--color-primary)/5] rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My learning journey in web development, building real-world projects
            and strengthening problem-solving skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#20b2a6]/70 via-[#20b2a6]/30 to-transparent shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-[#20b2a6] border-2 border-[#20b2a6]/50 -translate-x-1/2 shadow-[0_0_10px_rgba(32,178,166,0.8)]" />
                    {exp.current && 
                    <span className="absolute inset-0 rounded-full bg-[var(--color-primary)] animate-ping opacity-75"/>
                    }
                {/* Content */}
               
                <div
                  className={`min-w-0 pl-10 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    
                    <span className="text-sm text-[#20b2a6] font-medium">
                      {exp.period}
                    </span>

                   
                    <h3 className="text-lg font-semibold mt-1 mb-2 break-words">
                      {exp.role}
                    </h3>

                    
                    <p className="text-[var(--color-muted-foreground)] text-sm  mt-4 leading-relaxed break-words">
                      {exp.description}
                    </p>

            
                    <div className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end":""
                        }`}
                        >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="text-xs px-3 py-1 rounded-full bg-[#20b2a6]/10 text-[#20b2a6] border border-[#20b2a6]/20 whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};