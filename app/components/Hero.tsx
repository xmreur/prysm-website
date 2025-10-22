import { Download, Github } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Radial gradient background */}
            <div className="absolute inset-0 radial-bg" />

            <div className="container relative z-10 px-4 py-20 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <div className="animate-fade-in space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl full glass text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span>Open Source & Decentralized</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight">
                            Encrypted
                            <br />
                            <span className="text-gradient">Messaging</span>
                            <br />
                            You can trust
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                            Peer-to-Peer communication over Tor. No servers, no surveillance, no metadata.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="text-lg flex flex-row h-15 px-10 py-7 rounded-[24px] bg-purple-600 cursor-pointer hover:bg-purple-700 rounded-5xl glow-primary hover:scale-105 transition-all font-semibold">
                                <a href="https://github.com/xmreur/prysm" className="flex flex-row justify-center items-center" target="_blank" rel="noopener noreferrer">
                                    <Download className="mr-2" />
                                    Download Prysm
                                </a>
                            </button>
                            <button className="text-lg flex flex-row h-15 px-10 py-7 rounded-[24px] glass-strong cursor-pointer rounded-5xl glow-primary hover:scale-105 transition-all font-semibold">
                                <a href="https://github.com/xmreur/prysm" className="flex flex-row justify-center items-center" target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2" />
                                    View Source
                                </a>
                            </button>
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-foreground">100%</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">Open Source</div>
                            </div>
                            <div className="h-12 w-px bg-border"></div>
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-foreground">Zero</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">Data Collection</div>
                            </div>
                            <div className="h-12 w-px bg-border"></div>
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-foreground">P2P</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">Architecture</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:scale-110 animate-fade-in">
                        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
                        <div className="relative">
                            <Image alt="mockup" src="/prysm-mockup.png" width={984} height={603} className="relative z-10 mx-auto max-w-sm lg:max-w-md drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;