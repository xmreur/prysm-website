import { Download as _Download, CircleAlert, FileText, Github, MessageCircle } from "lucide-react";


const Download = () => {

    return (
        <section className="py-32 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Get&nbsp;
                        <span className="text-gradient">Prysm</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">Download the latest release or contribute to the project</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="glass-strong rounded-3xl p-10 text-center hover:scale-105 transition-transform">
                        <div className="w-16 h-16 rounded-2xl bg-primary-10 flex items-center justify-center mb-6 mx-auto">
                            <_Download className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Download</h3>
                        <p className="text-muted-foreground mb-8">Get the latest release for your platform</p>
                        <a 
                            href="https://github.com/xmreur/prysm/releases"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 w-full rounded-full py-6 text-base font-semibold glow-primary"
                        >
                            <_Download className="mr-2 h-5 w-5" />
                            Latest Release
                        </a>
                    </div>
                    <div className="glass-strong rounded-3xl p-10 text-center hover:scale-105 transition-transform">
                        <div className="w-16 h-16 rounded-2xl bg-secondary-10 flex items-center justify-center mb-6 mx-auto">
                            <Github className="h-8 w-8 text-secondary" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Open Source</h3>
                        <p className="text-muted-foreground mb-8">Explore the code & contribute</p>
                        <a 
                            href="https://github.com/xmreur/prysm/releases"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input bg-background hover:text-accent-foreground h-11 px-8 w-full rounded-full py-6 text-base font-semibold border-2 glass hover:bg-gray-400"
                        >
                            <Github className="mr-2 h-5 w-5" />
                            View on GitHub
                        </a>
                    </div>
                </div>
                <div className="glass-strong rounded-2xl p-6 mb-12 border border-accent-30">
                    <div className="flex items-start gap-4">
                        <CircleAlert className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold mb-2 text-lg">Active Development</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Prysm is in active development. APIs may evolve as we refine the architecture. Stay updated with releases and join the community.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">Join the Community</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full glass border-2"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/xmreur/prysm/issues"
                        >
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Report Issues
                        </a>
                        <a 
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full glass border-2"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/xmreur/prysm/discussions"
                        >
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Discussions
                        </a>
                        <a 
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full glass border-2"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/xmreur/prysm/CONTRIBUTING.md"
                        >
                            <FileText className="mr-2 h-4 w-4" />
                            Contributing
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Download;