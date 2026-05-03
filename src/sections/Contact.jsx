import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "manishasharma2004ms@gmail.com",
        href: "mailto:manishasharma2004ms@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 9289428530",
        href: "tel:+919289428530",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Faridabad",
        href: "https://www.google.com/maps?q=Faridabad+India",
    },
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJs configuration is missing. Please check your environment variable"
                );
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                publicKey
            );

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });
            setFormData({ name: "", email: "", message: "" });

        } catch (err) {
            console.error("EmailJs error:", err);
            setSubmitStatus({
                type: "error",
                message: err.text || "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">

            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
                    <span className="text-[var(--color-secondary-foreground)] text-xs sm:text-sm font-medium tracking-widest uppercase">
                        Get in Touch
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[var(--color-primary)] font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
                        Let's build{" "}
                        <span className="font-serif italic font-normal text-white">
                            something great.
                        </span>
                    </h2>
                    <p className="text-[var(--color-muted-foreground)] text-sm sm:text-base leading-relaxed px-2 sm:px-0">
                        Have a project in mind? I'd love to hear about it. Send me a message
                        and let's discuss how we can work together.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">

                    {/* Contact Form */}
                    <div className="glass p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Your name..."
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-transparent rounded-xl border border-white/10 text-white placeholder:text-white/40 hover:border-white/20 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300/30 transition-all duration-300 text-sm sm:text-base"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="Your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-transparent rounded-xl border border-white/10 text-white placeholder:text-white/40 hover:border-white/20 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300/30 transition-all duration-300 text-sm sm:text-base"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-transparent rounded-xl border border-white/10 text-white placeholder:text-white/40 hover:border-white/20 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300/30 transition-all duration-300 resize-none text-sm sm:text-base"
                                />
                            </div>

                            <Button
                                className="w-full"
                                type="submit"
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </>
                                )}
                            </Button>

                            {submitStatus.type && (
                                <div
                                    className={`flex items-start sm:items-center gap-3 p-3 sm:p-4 rounded-xl border ${
                                        submitStatus.type === "success"
                                            ? "bg-green-500/10 border-green-500/20 text-[var(--color-green)]"
                                            : "bg-red-500/10 border-red-500/20 text-[var(--color-red)]"
                                    }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                                    )}
                                    <p className="text-xs sm:text-sm">{submitStatus.message}</p>
                                </div>
                            )}

                        </form>
                    </div>

                    {/* Contact Info + Availability */}
                    <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in animation-delay-400">

                        {/* Contact Info Card */}
                        <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-2 sm:space-y-3">
                                {contactInfo.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-surface transition-colors duration-300"
                                    >
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-xs sm:text-sm text-[var(--color-muted-foreground)]">
                                                {item.label}
                                            </div>
                                            <div className="font-medium text-sm sm:text-base truncate">
                                                {item.value}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-primary/30">
                            <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                                <span className="font-medium text-sm sm:text-base">Currently Available</span>
                            </div>
                            <p className="text-[var(--color-muted-foreground)] text-xs sm:text-sm leading-relaxed">
                                I'm a passionate fresher looking for opportunities to learn, grow,
                                and contribute to real-world projects. If you have something
                                interesting, let's connect.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};