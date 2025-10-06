

const Benefits = () => {
    return (
        <section className="py-32 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Why &nbsp;
                        <span className="text-gradient">Decentralization</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Traditional messengers compromise your privacy. Prysm's architecture puts you in control.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <div className="glass-strong rounded-3xl p-8 hover:bg-white/10 transition-all group">
                        <div className="flex items-start gap-5">
                            <div className="text-5xl flex-shrink-0">🔒</div>
                            <div className="flex-1 space-y-3">
                                <h3 className="text-2xl font-bold">No Central Authority</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    No servers to hack, no company to subpoena. Your conversations exist only between you and your peers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-strong rounded-3xl p-8 hover:bg-white/10 transition-all group">
                        <div className="flex items-start gap-5">
                            <div className="text-5xl flex-shrink-0">👤</div>
                            <div className="flex-1 space-y-3">
                                <h3 className="text-2xl font-bold">True Identity Privacy</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Cryptographic keys instead of phone numbers or emails. Your identity is yours alone.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-strong rounded-3xl p-8 hover:bg-white/10 transition-all group">
                        <div className="flex items-start gap-5">
                            <div className="text-5xl flex-shrink-0">👁️</div>
                            <div className="flex-1 space-y-3">
                                <h3 className="text-2xl font-bold">Metadata Protection</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Tor protects not just message content, but who you talk to and when. Maximum resistance to surveillance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-strong rounded-3xl p-8 hover:bg-white/10 transition-all group">
                        <div className="flex items-start gap-5">
                            <div className="text-5xl flex-shrink-0">🌐</div>
                            <div className="flex-1 space-y-3">
                                <h3 className="text-2xl font-bold">Censorship Resistant</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Distributed architecture with no single point of failure. Can't be blocked or shut down.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="glass-strong rounded-3xl p-10 text-center max-w-4xl mx-auto border-2 border-primary/20">
                    <h3 className="text-3xl font-bold mb-4">Built for Privacy Advocates</h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Whether you're a journalist, activist, or simply value your privacy—Prysm provides the security guarantees you need.</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="px-5 py-2.5 rounded-full glass text-sm font-medium">No Tracking</span>
                        <span className="px-5 py-2.5 rounded-full glass text-sm font-medium">No Ads</span>
                        <span className="px-5 py-2.5 rounded-full glass text-sm font-medium">No Data Collection</span>
                        <span className="px-5 py-2.5 rounded-full glass text-sm font-medium">100% Open Source</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits;