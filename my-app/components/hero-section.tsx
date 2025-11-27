import React from 'react'
import { Mail, SendHorizonal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import ParticlesBackground from './particles-background'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main className="overflow-hidden">
                {/* Hero - section-primary */}
                <section className="section bg-[#003459] relative min-h-screen pt-32 lg:pt-48 2xl:pt-56">
                    {/* Vertical Grid Lines */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div className="absolute inset-0 flex justify-between px-[5%]">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="w-px h-full bg-white/[0.07]" />
                            ))}
                        </div>
                    </div>
                    <ParticlesBackground />
                    
                    <div className="relative z-[2] mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 md:px-8 2xl:px-16 pb-20 2xl:pb-32">
                        <div className="relative z-10 mx-auto max-w-4xl 2xl:max-w-6xl text-center">
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-balance text-5xl font-medium text-white md:text-6xl 2xl:text-8xl">
                                Your Complete Education Management System
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mx-auto mt-6 2xl:mt-8 max-w-2xl 2xl:max-w-3xl text-pretty text-lg text-white/90 2xl:text-2xl">
                                Replace manual registers, WhatsApp groups, and scattered tools with one unified platform. Teach better, manage smarter, and grow faster.
                            </TextEffect>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12 2xl:mt-16">
                                <form
                                    action=""
                                    className="mx-auto max-w-sm">
                                    <div className="bg-white/10 backdrop-blur-sm has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border border-white/20 pr-2 shadow-lg shadow-black/20 has-[input:focus]:ring-2 has-[input:focus]:ring-[#007ea7]">
                                        <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4 text-white/70" />

                                        <input
                                            placeholder="Enter your email address"
                                            className="h-12 w-full bg-transparent pl-12 text-white placeholder:text-white/60 focus:outline-none"
                                            type="email"
                                        />

                                        <div className="md:pr-1.5 lg:pr-0">
                                            <Button
                                                aria-label="submit"
                                                size="sm"
                                                className="rounded-(--radius)">
                                                <span className="hidden md:block">Get Started</span>
                                                <SendHorizonal
                                                    className="relative mx-auto size-5 md:hidden"
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </form>

                                <div
                                    aria-hidden
                                    className="bg-radial from-primary/50 dark:from-primary/25 relative mx-auto mt-32 max-w-2xl to-transparent to-55% text-left">
                                    <div className="bg-background border-border/50 absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                                        <div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] before:opacity-50"></div>
                                    </div>
                                    <div className="bg-muted dark:bg-background/50 border-border/50 mx-auto w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
                                        <div className="bg-background space-y-2 overflow-hidden rounded-[1.5rem] border p-2 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                                            <AppComponent />

                                            <div className="bg-muted rounded-[1rem] p-4 pb-16 dark:bg-white/5"></div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const AppComponent = () => {
    return (
        <div className="relative space-y-3 rounded-[1rem] bg-white/5 p-4">
            <div className="flex items-center gap-1.5 text-[#007ea7]">
                <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                </svg>
                <div className="text-sm font-medium">AI Smart Learning</div>
            </div>
            <div className="space-y-3">
                <div className="text-foreground border-b border-white/10 pb-3 text-sm font-medium">AI-powered insights help students learn 40% faster.</div>
                <div className="space-y-3">
                    <div className="space-y-1">
                        <div className="space-x-1">
                            <span className="text-foreground align-baseline text-xl font-medium">2,847</span>
                            <span className="text-muted-foreground text-xs">Questions Generated</span>
                        </div>
                        <div className="flex h-5 items-center rounded bg-gradient-to-l from-[#007ea7] to-[#003459] px-2 text-xs text-white">This Month</div>
                    </div>
                    <div className="space-y-1">
                        <div className="space-x-1">
                            <span className="text-foreground align-baseline text-xl font-medium">1,523</span>
                            <span className="text-muted-foreground text-xs">Questions Generated</span>
                        </div>
                        <div className="text-foreground bg-muted flex h-5 w-2/3 items-center rounded px-2 text-xs dark:bg-white/20">Last Month</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
