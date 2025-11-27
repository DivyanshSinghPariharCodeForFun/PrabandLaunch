'use client'

import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'

export default function ParticlesBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine)
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute inset-0 z-0"
            options={{
                background: {
                    color: {
                        value: 'transparent',
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#00a7e1', // Fresh sky blue from palette
                    },
                    links: {
                        enable: false, // No connecting lines, just dots
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: true,
                        speed: 0.5, // Gentle movement
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 100, // More particles scattered across the page
                    },
                    opacity: {
                        value: 0.6,
                        random: {
                            enable: true,
                            minimumValue: 0.3,
                        },
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0.3,
                            sync: false,
                        },
                    },
                    shape: {
                        type: 'circle', // Circular dots like in the image
                    },
                    size: {
                        value: 3, // Small dots like in the image
                        random: {
                            enable: true,
                            minimumValue: 1.5,
                        },
                        animation: {
                            enable: false, // Keep size static for cleaner look
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

