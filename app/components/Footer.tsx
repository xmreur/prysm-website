import { Github } from "lucide-react";

const Footer = () => {
    return (
        <section className="py-16 px-4 border-t">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-bold mb-4 text-gradient">Prysm</h3>
                        <p className="text-muted-foreground leading-relaxed max-w-md">Privacy-first P2P messenger built on Tor. No servers, no surveillance, no compromise.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <a href="https://github.com/xmreur/prysm" rel="noopener noreferral" target="_blank" className="hover:text-gray-200 transition-colors">Code & Documentation</a>
                            </li>
                            <li>
                                <a href="https://github.com/xmreur/prysm/wiki" rel="noopener noreferral" target="_blank" className="hover:text-gray-200 transition-colors">Wiki</a>
                            </li>
                            <li>
                                <a href="https://github.com/xmreur/prysm/releases" rel="noopener noreferral" target="_blank" className="hover:text-gray-200 transition-colors">Releases</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Community</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <a href="https://github.com/xmreur/prysm/discussions" rel="noopener noreferral" target="_blank" className="hover:text-gray-200 transition-colors">Discussions</a>
                            </li>
                            <li>
                                <a href="https://github.com/xmreur/prysm/issues" rel="noopener noreferral" target="_blank" className="hover:text-gray-200 transition-colors">Issues</a>
                            </li>
                            <li>
                                <a href="https://github.com/xmreur/prysm/CONTRIBUTING.md" rel="noopener noreferral" target="_blank" className="hover:text-gray-200 transition-colors">Contributing</a>
                            </li>
                        </ul>
                    </div>
                </div>
                    <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © 2025 Prysm • GPL License
                        </p>
                        <a 
                            href="https://github.com/xmreur/prysm"
                            target="_blank"
                            rel="noreferral noopener"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="h-5 w-5" />
                            Star on GitHub
                        </a>
                    </div>
            </div>
        </section>
    )
}

export default Footer;