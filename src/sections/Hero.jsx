import { useMemo } from "react";
import { Button } from "@/components/Button";
import { ArrowRight,ChevronDown,Download, } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Javascript",
  "figma",
  "Aws",
  "Docker",
  "TailwindCSS",
  "Figma",
  "Git",
  "GithubActions",
  "java"
  
]

export const Hero = () => {
  const dots = useMemo(() => {
    return [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Hero.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            
            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#20B2A6]">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#20B2A6" }}
                />
                Software Engineer · MERN Stack Developer
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              Building{" "}
              <span className="text-[var(--color-primary)] glow-text">
                Scalable
              </span>
              <br />
              modern web application
              <br />
              <span className="font-serif italic font-normal text-white">
                with precision.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-[var(--color-muted-foreground)] max-w-lg animate-fade-in animation-delay-200">
              Hi, I’m a passionate developer focused on MERN stack, React, and
              backend systems. I build responsive, high-performance applications
              and continuously explore new technologies to solve real-world
              problems.
            </p>

            {/* CTAs Buttons */}
            <div className="flex  felx-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                        Download CV
                </AnimatedBorderButton>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-[var(--color-muted-foreground)]">Follow: </span>
              {[
               { icon: FaGithub, href: "https://github.com/Mnnu1234" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/manisha-sharma-2a9464270" },
                { icon: FaTelegram, href: "https://t.me/Momosharma122" },                              
                ].map((social,idx) =>(               
                    <a 
                    key={idx} 
                    href={social.href}
                    className="p-2 rounded-full glass hover:[var(--color-bg-primary/10)] hover:text-[var(--color-primary)] transition-all duration-300" 
                    >
                      {<social.icon className="w-5 h-5" />} 
                      </a>
              ))}
            </div>
          </div>
          {/* Right Column - profile image */}
          <div className="relative animate-fade-in animation-delay-300 -mt-12">
            {/* profile image */}
            <div className="relative max-w-md mx-auto">
              <div 
                className="absolute inset-0
                rounded-3xl bg-gradient-to-br
                from-primary/30 via-transparent
                to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="\Manishaport.JPG" alt="Manisha"
                  className="w-full aspact-[5/4] object-cover rounded-2xl max-h-[560px]"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-[var(--color-muted-foreground)] mb-6 text-center">
             Technologies I work with
             </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
             { [...skills , ...skills].map((skill,idx)=>(
              <div key={idx} className="flex-shrink-0 px-8 py-4">
                <span 
                className="text-xl font-semibold text-[var(--color-muted-foreground)]  hover:text-[var(--color-muted-foreground)/50] transition-colors">
                  {skill}
                  </span> 
                </div>
             ))}
             </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
      <a 
      href="#about"
      className="flex flex-col items-center gap-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />

      </a>
      </div>


    </section>
  );
};