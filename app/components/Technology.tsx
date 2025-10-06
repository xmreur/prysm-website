import { Code2, KeyRound, Server, Smartphone } from "lucide-react";


const Technology = () => {
    return (
        <div className="py-32 px-4 relative">
            <div className="absolute inset-0 bg-muted-20"></div>
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Built with <span className="text-gradient">modern tech</span></h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Cutting-edge cryptography and battle-tested protocols working together for your privacy.</p>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="p-6 glass-strong rounded-2xl hover:scale-105 transition-transform">
                    <div className="w-12 h-12 rounded-xl bg-primary-10 flex items-center justify-center mb-4">
                        <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Flutter</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Cross-platform UI for Windows, MacOS and Linux</p>
                </div>
                <div className="p-6 glass-strong rounded-2xl hover:scale-105 transition-transform">
                    <div className="w-12 h-12 rounded-xl bg-primary-10 flex items-center justify-center mb-4">
                        <Server className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Tor Protocol</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Anonymous transport layer & routing</p>
                </div>
                <div className="p-6 glass-strong rounded-2xl hover:scale-105 transition-transform">
                    <div className="w-12 h-12 rounded-xl bg-primary-10 flex items-center justify-center mb-4">
                        <KeyRound className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Cryptographic Keys</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">.onion based P2P identities and RSA 4096 bit communication encryption.</p>
                </div>
                <div className="p-6 glass-strong rounded-2xl hover:scale-105 transition-transform">
                    <div className="w-12 h-12 rounded-xl bg-primary-10 flex items-center justify-center mb-4">
                        <Code2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Native Code</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Swift & Kotlin integration (Coming Soon)</p>
                </div>
            </div>
            <div className="glass-strong rounded-3xl p-10 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-3xl">🚀</span>
                    On the Roadmap
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                        <span className="text-primary text-xl mt-0.5">•</span>
                        <span className="text-muted-foreground">Mobile TOR embedding</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-primary text-xl mt-0.5">•</span>
                        <span className="text-muted-foreground">Group messaging</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-primary text-xl mt-0.5">•</span>
                        <span className="text-muted-foreground">Photo & Video support</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-primary text-xl mt-0.5">•</span>
                        <span className="text-muted-foreground">File support</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology;