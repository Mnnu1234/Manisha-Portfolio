import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        icon: FaGithub,
        href: "https://github.com/Mnnu1234",
        label: "GitHub",
    },
    {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/manisha-sharma-2a9464270",
        label: "LinkedIn",
    },
    {
        icon: FaTelegram,
        href: "https://t.me/Momosharma122",
        label: "Twitter",
    },
];

export const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-background py-6 sm:py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">

                    {/* Left — Logo + Copyright */}
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <span className="text-lg font-bold tracking-tight text-white">
                            MS.
                        </span>
                        <p className="text-xs text-muted-foreground">
                            © {new Date().getFullYear()} Manisha Sharma. All rights reserved.
                        </p>
                    </div>

                    {/* Center — Nav Links */}
                    <nav className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right — Social Icons */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-white hover:bg-white/10 transition-all duration-200"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
};