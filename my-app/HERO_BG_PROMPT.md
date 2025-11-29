# Hero Section Background Creation Prompt

Create a modern, visually appealing background for the hero section of a Next.js application with layered visual elements.

## Component Structure

**File:** `components/hero-section.tsx` (background elements within the hero section)

## Background Layers (Z-Index Order)

The hero section background consists of multiple layers stacked from bottom to top:

1. **Base Background** (z-0): Solid color background
2. **Grid Lines** (z-0): Vertical grid overlay
3. **Particles Effect** (z-0): Animated particles
4. **Content** (z-[2]): Hero content (text, forms, etc.)

## Layer 1: Base Background

### Container
- Section element with class: `section bg-[#003459] relative min-h-screen`
- Background color: `#003459` (Deep Space Blue from color palette)
- Position: `relative` (for absolute positioned children)
- Minimum height: `min-h-screen` (full viewport height)
- Padding top: `pt-32 lg:pt-48 2xl:pt-56` (responsive top padding)

### Color Reference
- Primary background: `#003459` (Deep Space Blue)
- Alternative accent colors available:
  - `#007ea7` (Cerulean)
  - `#00a7e1` (Fresh Sky)
  - `#00171f` (Ink Black)

## Layer 2: Vertical Grid Lines

### Grid Container
- Position: `absolute inset-0 z-0 overflow-hidden`
- Creates a full-screen overlay for grid lines
- Z-index: `0` (behind content, above base background)

### Grid Lines Implementation
```tsx
<div className="absolute inset-0 flex justify-between px-[5%]">
    {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="w-px h-full bg-white/[0.07]" />
    ))}
</div>
```

### Grid Specifications
- **Number of lines**: 12 vertical lines
- **Line width**: `w-px` (1px)
- **Line height**: `h-full` (full container height)
- **Line color**: `bg-white/[0.07]` (white at 7% opacity)
- **Spacing**: `justify-between` with `px-[5%]` horizontal padding
- **Position**: Evenly distributed across the width with 5% padding on each side

### Visual Effect
- Subtle vertical lines creating depth and structure
- Low opacity ensures they don't overpower content
- Creates a professional, technical aesthetic

## Layer 3: Particles Background

### Component File
**File:** `components/particles-background.tsx`

### Component Structure
- Uses `react-tsparticles` library with `tsparticles-slim` engine
- Position: `absolute inset-0 z-0`
- Z-index: `0` (same level as grid, above base background)

### Particles Configuration

**Background:**
- Color: `transparent` (allows base background and grid to show through)

**Performance:**
- FPS limit: `120` (smooth animation)
- Retina detection: `true` (optimized for high-DPI displays)

**Interactivity:**
- **Click**: Push mode (adds 4 particles on click)
- **Hover**: Repulse mode (particles move away from cursor, 200px distance, 0.4s duration)
- **Resize**: Enabled (adapts to window resizing)

**Particles Appearance:**
- **Color**: `#00a7e1` (Fresh Sky Blue from palette)
- **Shape**: `circle` (circular dots)
- **Size**: 
  - Base: `3px`
  - Random range: `1.5px - 3px`
  - No size animation (static for cleaner look)
- **Number**: `100` particles
- **Density**: `1000` area units (even distribution)

**Particles Movement:**
- **Direction**: `none` (random movement)
- **Speed**: `0.5` (gentle, slow movement)
- **Mode**: `bounce` (particles bounce off edges)
- **Random**: `true` (unpredictable paths)
- **Straight**: `false` (curved movement)

**Particles Opacity:**
- Base value: `0.6`
- Random range: `0.3 - 0.6`
- Animation: Enabled
  - Speed: `0.5`
  - Minimum: `0.3`
  - Sync: `false` (each particle animates independently)

**Links:**
- Disabled (`enable: false`) - no connecting lines between particles

### Implementation Code
```tsx
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
                // Configuration as specified above
            }}
        />
    )
}
```

## Layer 4: Content Layer

### Content Container
- Position: `relative z-[2]`
- Z-index: `2` (above all background layers)
- Max width: `max-w-7xl 2xl:max-w-[1600px]`
- Padding: `px-4 md:px-8 2xl:px-16 pb-20 2xl:pb-32`

## Complete Hero Section Structure

```tsx
<section className="section bg-[#003459] relative min-h-screen pt-32 lg:pt-48 2xl:pt-56">
    {/* Layer 2: Vertical Grid Lines */}
    <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 flex justify-between px-[5%]">
            {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-px h-full bg-white/[0.07]" />
            ))}
        </div>
    </div>
    
    {/* Layer 3: Particles Background */}
    <ParticlesBackground />
    
    {/* Layer 4: Content */}
    <div className="relative z-[2] mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 md:px-8 2xl:px-16 pb-20 2xl:pb-32">
        {/* Hero content here */}
    </div>
</section>
```

## Color Palette Reference

From `app/globals.css`:
- **Deep Space Blue**: `#003459` (primary background)
- **Cerulean**: `#007ea7` (accent color)
- **Fresh Sky**: `#00a7e1` (particles color)
- **Ink Black**: `#00171f` (darkest shade)
- **White**: `#ffffff` (grid lines, text)

## Visual Design Principles

1. **Depth**: Multiple layers create visual depth without clutter
2. **Subtlety**: Low opacity elements (grid lines, particles) don't distract from content
3. **Movement**: Animated particles add life and dynamism
4. **Consistency**: Colors align with brand palette
5. **Performance**: Optimized particle count and FPS for smooth experience

## Responsive Considerations

- Grid lines: Same on all screen sizes (12 lines)
- Particles: Same configuration across devices
- Background color: Consistent `#003459` on all screens
- Content padding: Responsive (`px-4 md:px-8 2xl:px-16`)

## Dependencies

- Next.js (React)
- `react-tsparticles` - Particle animation library
- `tsparticles-slim` - Lightweight particles engine
- TypeScript

## Optional Enhancements

1. **Gradient Overlay**: Add subtle gradient from top to bottom
   ```tsx
   <div className="absolute inset-0 bg-gradient-to-b from-[#003459] via-[#003459] to-[#00171f] opacity-50 z-0" />
   ```

2. **Animated Grid**: Make grid lines pulse or fade in on scroll
3. **Parallax Effect**: Move particles at different speeds for depth
4. **Color Variations**: Add subtle color shifts based on scroll position
5. **Radial Gradients**: Add glowing orbs or radial gradients for depth

## Performance Notes

- Particles are optimized with `tsparticles-slim` (lighter than full library)
- FPS limit set to 120 for smooth 60fps+ experience
- Particle count (100) balanced between visual appeal and performance
- Retina detection ensures crisp rendering on high-DPI displays
- Interactivity (hover/click) adds engagement without heavy computation

## Accessibility

- Background elements are decorative (no semantic meaning)
- Particles and grid don't interfere with text readability
- Sufficient contrast maintained between background and content
- No motion that could cause accessibility issues (gentle, slow movement)

