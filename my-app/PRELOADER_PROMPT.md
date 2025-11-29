# Preloader Recreation Prompt

Create a modern text-based preloader component for a Next.js application with rotating greeting messages.

## Component Structure

**File:** `components/words-preloader.tsx`

## Features & Functionality

### 1. **Greeting Text Sets**
Create an array of greeting sets, each containing 3 words/phrases. The component should randomly select one set on mount:

```javascript
const greetingSets = [
    // Original "Good morning maam"
    [
        'Goooood',
        'Morninggg',
        'Maaaaaaam',
    ],
    // Creative variation 1
    [
        'Namaste',
        'Teacherrr',
        'Ji!',
    ],
    // Creative variation 2
    [
        'Hello',
        'Beautiful',
        'Mind!',
    ],
    // Creative variation 3
    [
        'Welcome',
        'To',
        'Praband!',
    ],
    // Creative variation 4
    [
        'Ready',
        'To',
        'Learn?',
    ],
    // Creative variation 5
    [
        'Let\'s',
        'Begin',
        'Today!',
    ],
]
```

### 2. **Text Rotation Logic**
- On component mount: Randomly select one greeting set from the array
- Display words sequentially, cycling through all 3 words in the selected set
- Change word every 600ms (0.6 seconds)
- Loop continuously through the words (0 → 1 → 2 → 0 → 1...)

### 3. **Visual Design**

**Container:**
- Fixed position covering entire viewport: `fixed inset-0`
- Full screen overlay: `z-50`
- Centered content: `flex items-center justify-center`
- Background: `bg-white` (light mode) / `dark:bg-black` (dark mode)

**Text Styling:**
- Font size: `text-7xl` on mobile, `md:text-9xl` on desktop
- Font weight: `font-light`
- Letter spacing: `tracking-tight`
- Text color: `text-black` (light mode) / `dark:text-white` (dark mode)
- Font family: `var(--font-noto-sans), system-ui, -apple-system, sans-serif`

### 4. **Animations**

**Container Animation (Exit):**
- Initial: `opacity: 1`
- Exit: `opacity: 0`
- Duration: `0.25s`
- Easing: `[0.16, 1, 0.3, 1]` (custom cubic bezier)

**Text Animation (Per Word):**
- Initial: `opacity: 0`
- Animate: `opacity: 1`
- Exit: `opacity: 0`
- Duration: `0.2s`
- Easing: `[0.16, 1, 0.3, 1]` (custom cubic bezier)
- Use `AnimatePresence` with `mode="wait"` for smooth transitions

### 5. **Component State Management**

**Required States:**
- `greetings`: Array of strings (selected greeting set)
- `currentIndex`: Number (current word index, 0-2)
- `isVisible`: Boolean (controls preloader visibility)

**State Logic:**
1. On mount: Randomly select a greeting set and store in `greetings` state
2. Use `useEffect` to cycle through words every 600ms
3. Update `currentIndex` to loop through array (0 → 1 → 2 → 0...)

### 6. **Custom Hook (Optional)**

Create a reusable hook `useWordsPreloader` that:
- Takes a `duration` parameter (default: 2500ms)
- Returns a boolean `showPreloader` state
- Automatically sets to `false` after the duration
- Cleans up timer on unmount

```typescript
export function useWordsPreloader(duration: number = 2500) {
    const [showPreloader, setShowPreloader] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPreloader(false)
        }, duration)

        return () => clearTimeout(timer)
    }, [duration])

    return showPreloader
}
```

## Implementation Details

### Component Structure
```typescript
export function WordsPreloader() {
    // States
    const [greetings, setGreetings] = useState<string[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    // Random greeting selection on mount
    useEffect(() => {
        const randomSet = greetingSets[Math.floor(Math.random() * greetingSets.length)]
        setGreetings(randomSet)
    }, [])

    // Word rotation every 600ms
    useEffect(() => {
        if (greetings.length === 0) return
        
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % greetings.length)
        }, 600)

        return () => clearInterval(interval)
    }, [greetings])

    // Render with AnimatePresence
    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div>
                    {/* Container with exit animation */}
                    <AnimatePresence mode="wait">
                        {greetings.length > 0 && (
                            <motion.h1 key={currentIndex}>
                                {/* Text with fade animations */}
                            </motion.h1>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
```

## Usage in Page Component

**Example implementation in `app/page.tsx`:**

```typescript
'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'motion/react'
import { WordsPreloader } from "@/components/words-preloader"

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 1800) // Hide after 1.8 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative">
      <AnimatePresence mode="wait">
        {showPreloader && <WordsPreloader />}
      </AnimatePresence>
      {!showPreloader && (
        <>
          {/* Your page content */}
        </>
      )}
    </main>
  )
}
```

## Dependencies

- Next.js (React)
- motion/react (framer-motion) - for animations
- TypeScript

## Key Features

1. **Random Greeting Selection**: Different greeting set on each page load/refresh
2. **Smooth Text Transitions**: Words fade in/out smoothly every 600ms
3. **Full Screen Overlay**: Covers entire viewport with centered text
4. **Responsive Typography**: Large text (7xl mobile, 9xl desktop)
5. **Dark Mode Support**: Adapts to light/dark theme
6. **Clean Exit Animation**: Fades out smoothly when hidden
7. **Automatic Cleanup**: Properly cleans up intervals and timers

## Animation Timing

- Word change interval: **600ms**
- Text fade duration: **200ms**
- Container exit duration: **250ms**
- Default preloader duration: **1800ms** (in page component)

## Styling Notes

- Use `AnimatePresence` with `mode="wait"` for smooth word transitions
- Ensure text is perfectly centered both horizontally and vertically
- Background should be solid (white/black) to cover page content
- Z-index should be high enough (z-50) to appear above all content
- Font should be clean and readable at large sizes

