import { ArrowUpRight,Download } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import {AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects =[
    {
        title:"Study portal",
        description:"A web-based study portal that helps students manage notes, track homework, and access learning resources in one place.",  
        image:"/projects/Project1.png",
        tags:["Django","SQLite","JavaScript"],
        github:"https://github.com/Mnnu1234/studentstudyportal",
    },
    {
        title:"Code Collabration",
        description:"Developed a real-time code collaboration platform where users can join via a link, share screens, and write or execute code simultaneously in a shared editor.",  
        image:"/projects/Project2.png",
        tags:["Mern","Socket.IO","Code Editor","Real-time Sync"],
        github:"https://github.com/Mnnu1234/codeCollabrationplateform",
    },
    {
        title:"Chess Game",
        description:"Developed a chess game using HTML, CSS, and JavaScript with an interactive UI, piece movement logic, and rule validation for a smooth gameplay experience.",  
        image:"/projects/Project3.png",
        tags:["HTML","CSS","JavaScript","Chess Logic Engine"],
        github:"#",
    },
     {
        title:"Wanderlust",
        description:"Wanderlust is a travel-focused platform that helps users discover destinations, explore experiences, and plan trips efficiently with curated information and an intuitive interface.",  
        image:"/projects/Project4.png",
        tags:["JavaScript","React","MongoDB","Rest API"],
        github:"https://github.com/Mnnu1234/WanderLus",
    },

   
]
export const Projects = ()=>{
    return (
    <section id="projects" className="py-32 relative overflow-hidden">
        {/* Bg glows */}
        <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in ">
                Featured work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
                projects that
                <span className="font-serif italic font-normal text-white">
                    {" "} 
                    make an impact.
                    </span>
            </h2>
            <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
                A selection of my recent work, from complex web applications to
                innovative tools that solve real-world problems.
            </p>
        </div>
        {/* projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project,idx)=>(
                <div 
                key={idx} 
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay:`${(idx +1) * 100}ms` }}
                >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-video">
                        <img src={project.image}
                         alt={project.title}
                         className="w-full h-full object-cover transtion-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute-inset-0 bg-gradient-to-t from-card via-card/50 
                          to-transparent opacity-60"
                           />
                           {/* overlay Links */}
                           <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <a href={project.link} className="p-3 rounded-full glass hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-all">
                                <ArrowUpRight className="w-5 h-5"/>
                            </a>
                            <a href={project.github}
                            className="p-3 rounded-full glass hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-all">
                                <FaGithub className="w-5 h-5"/>
                            </a>
                           </div>
                        </div>
                    {/* Content */}
                    <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                            <h3 className="text-xl font-semibold  group-hover:text-[var(--color-primary)] transtion-colors">{project.title}</h3>
                            <ArrowUpRight 
                            className="w-5 h-5 
                            text-[var(--color-muted-foreground)] group-hover:text-[var(--color-primary)]
                            group-hover:translate-x-1
                            group-hover:-translate-y-1 transition-all"
                            />
                        </div >
                        <p className="text-[var(--color-muted-foreground)] text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIdx)=>(
                            <span 
                            key={tagIdx}
                            className="px-4 py-1.5 rounded-full bg-[var(--color-surface)] text-xs font-medium border border-border/50 text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)]/50 hover:text-primary transition-all duration-300">
                                {tag}</span>
                            ))}
                        </div>
                    </div>

                    </div>
            ))}
        </div>
        {/* View All CTA  */}
        <div className="text-center mt-12 animate-fade-in animate-fade-in animation-delay-500">
            < AnimatedBorderButton >
                View All Projects
                <ArrowUpRight className="w-5 h-5"/>
            </AnimatedBorderButton>
        </div>
        </div>
    </section>
    );
}