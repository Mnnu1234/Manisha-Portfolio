import { Code2, Lightbulb,Rocket,Users } from "lucide-react";
const highlights = [
    {
        icon:Code2,
        title:"Clean Code",
        description:
        "Writing maintainable,scalable code that stands the test of time.",

    },
     {
        icon: Rocket,
        title:"Performance",
        description:
        "Optimizing for speed and delivering lightning-fast user experience.",

    },
     {
        icon: Users,
        title:"Collaboration",
        description:
        "Working closely with teams to bring ideas to life.",

    },
     {
        icon: Lightbulb,
        title:"Innovation",
        description:
        "Staying ahead with latest technologies and best practices.",

    },
]

export const About =()=>{
    return (
    <section  id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center"> 
                {/* Left Coulmn */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase">
                        About Me</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
                    Builing the future,
                    <span className="font-serif italic font-normal text-white"> one component at a time.</span>
                </h2>
                <div className="space-y-4 text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
                    <p>
                    I am a motivated and detail-oriented software developer
                     with a strong foundation in the MERN stack
                    (MongoDB, Express.js, React, Node.js). As a B.Tech IT student,
                    I have developed a solid understanding of web development
                    fundamentals and enjoy building scalable, user-focused applications. 
                    My journey started with curiosity about how web applications work,
                     and it has grown into a focused pursuit of becoming a full-stack developer.
                 </p>
                 <p>
                    I specialize in creating responsive and dynamic web applications
                     using React and modern JavaScript. I have experience working with 
                     REST APIs, database integration, and building full-stack projects
                      that solve real-world problems. I focus on writing clean, maintainable 
                      code and continuously improving my skills through hands-on projects,
                        and consistent learning.
                 </p>
                 <p>
                    Beyond coding, I actively explore new technologies, contribute 
                    to personal and collaborative projects, and aim to grow as a 
                    developer every day. I am currently seeking internship or 
                    entry-level opportunities where I can apply my skills, 
                    learn from industry professionals, and contribute to meaningful
                     projects.
                 </p> 
                </div>

                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                       " My mission is to leverage technology to solve practical problems 
                        and create products that add value to people's lives. I am committed
                         to continuous learning, building impactful projects, and becoming
                          a reliable software engineer."
                    </p>
                </div>
                 </div>
                {/* Right Column - Highlights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div
                        key={idx}
                         className="glass p-6 rounded-2xl animate-fade-in"
                            style={{animationDelay: ` ${(idx + 1) * 100}ms`}}
                            >
                            <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center mb-4 hover:bg-teal-400/20">
                                 <item.icon className=" w-6 h-6 text-primary text-teal-400" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-[var(--color-muted-foreground)]">{item.description}</p>
                        </div>
                    ))}
                </div>
                 </div>
                </div>
     </section>
    );
};