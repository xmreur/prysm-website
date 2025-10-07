import { Download as _Download, Bitcoin, CircleAlert, DollarSign, FileText, Github, MessageCircle } from "lucide-react";

import SolanaLogo from '@/public/solana-sol-logo.svg';
import EthereumLogo from '@/public/ethereum-eth-logo.svg';
import XRPLogo from '@/public/xrp-xrp-logo.svg';
import MoneroLogo from '@/public/monero-xmr-logo.svg';
import TonLogo from '@/public/toncoin-ton-logo.svg';
import LTCLogo from '@/public/litecoin-ltc-logo.svg';
import Image from "next/image";

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

                <div className="glass-strong mt-10 rounded-2xl p-6 mb-12 border border-accent-30">
                    <div className="flex items-start gap-4">
                        <DollarSign className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold mb-2 text-lg">Support Us</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our app is free to use, but if you&apos;d like to support our work, donations are greatly appreciated. Your contributions help us continue improving Prysm.
                            </p>
                        </div>
                        
                    </div>
                    <div className="flex flex-col items-start gap-4 mt-6">
                        <div className="w-full flex items-start gap-5">
                            <Bitcoin className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                            <span className="font-bold text-2xl  break-all">BTC: bc1qev0zu7rnske4ee7as0t4tyh56uv6v0ga62wx8r</span>
                        </div>
                        <div className="w-full flex items-start gap-5">
                            <Image src={SolanaLogo} alt="SOL" className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                            <span className="font-bold text-2xl  break-all">SOL: 2S6tZNNUH5sPp9PqszQ4XK4MN44SvLCkTwNuCVvRvtEP</span>
                        </div>
                        <div className="w-full flex items-start gap-5">
                            <Image src={EthereumLogo} alt="Ethereum" className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                            <span className="font-bold text-2xl break-all">ETH: 0x2934955fe95059ea470E0B81519BA59432eFe77a</span>
                        </div>
                        <div className="w-full flex items-start gap-5">
                            <Image src={XRPLogo} alt="XRP" className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                            <span className="font-bold text-2xl  break-all">XRP: rHfoRsLjXrbAqxa7nJcXz6XdxDZm8M3sJT</span>
                        </div>
                        <div className="w-full flex items-start gap-5">
                            <Image src={MoneroLogo} alt="Monero" className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                            <span className="font-bold text-sm break-all">XMR: 47ndq7fCdW9jTGKtXafwMgDJjxAw3cnWwjR6eq31pfXXKfqNHXq5w4B2D49oTKnTHGCRCgcU6D24oiyUD8Ha7iEJLCPGJsC</span>
                        </div>
                        <div className="w-full flex items-start gap-5">
                            <Image src={TonLogo} alt="TON" className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                            <span className="font-bold text-2xl  break-all">TON: UQDEeapruNlAmSt9j4J9CNiuasJbF3OlCxzTZPJiq6hzKOFu</span>
                        </div>
                        
                        <div className="w-full flex items-start gap-5">
                            <Image src={LTCLogo} alt="TON" className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                            <span className="font-bold text-2xl  break-all">LTC: ltc1qnsp6alkn2gzd4vpekya05l2caa3aqfmk9m7882</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Download;