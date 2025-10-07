import { Lock, Network, Shield } from "lucide-react";

const HowItWorks = () => {
    return (
        <section className="py-32 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        How it&nbsp;
                        <span className="text-gradient">works</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        End-to-End encryption meets Tor&apos;s onion routing.
                        Messages travel directly between peers with zero intermediaries.
                    </p>
                </div>
                <div className="mb-24">
                    <div className="glass-strong rounded-[2rem] p-12 max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap">
                            <div className="flex flex-col items-center gap-4 flex-1 min-w-[140px]">
                                <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center text-4xl">
                                    👤
                                </div>
                                <span className="text-sm font-semibold uppercase tracking-wider">Your device</span>
                            </div>

                            <div className="text-primary text-3xl font-light hidden md:inline">→</div>
                            <div className="text-primary text-3xl font-light display md:hidden">↓</div>

                            <div className="flex flex-col items-center gap-4 flex-1 min-w-[140px]">
                                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl animate-glow-pulse border border-primary/30">
                                    🧅
                                </div>
                                <span className="text-sm font-semibold uppercase tracking-wider">TOR NETWORK</span>
                            </div>

                            <div className="text-primary text-3xl font-light hidden md:inline">→</div>
                            <div className="text-primary text-3xl font-light display md:hidden">↓</div>

                            <div className="flex flex-col items-center gap-4 flex-1 min-w-[140px]">
                                <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center text-4xl">
                                    👤
                                </div>
                                <span className="text-sm font-semibold uppercase tracking-wider">Peer Device</span>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <div className="inline-flex items-center gap-3 text-sm text-muted-foreground">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                <span>Anonymous</span>
                                <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                                <span>Encrypted</span>
                                <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                                <span>Direct</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-primary-10 flex items-center justify-center">
                            <Lock className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">
                            End-To-End Encryption
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Messages encrypted on your device, decrypted only when the chat is loaded. Nobody can read them.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-secondary-10 flex items-center justify-center">
                            <Network className="h-7 w-7 text-secondary" />
                        </div>
                        <h3 className="text-2xl font-bold">
                            Onion Routing
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Multiple relay hops through Tor make tracking your communications mathematically impossible.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-accent-10 flex items-center justify-center">
                            <Shield className="h-7 w-7 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold">
                            Peer-To-Peer
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Direct connections between users. No central servers means no single point of failure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;