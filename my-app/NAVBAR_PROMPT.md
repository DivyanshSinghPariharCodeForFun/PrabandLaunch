# Navbar Recreation Prompt

Create a modern, responsive navigation bar component for a Next.js application with the following specifications:

## Component Structure

**File:** `components/header.tsx` (or `components/navbar.tsx`)

## Features & Functionality

### 1. **Navigation Items**
Create a menu items array with the following links:
- Features (#features)
- Process (#process)
- Calculator (#calculator)
- Institutions (#institutions)
- Benefits (#benefits)
- FAQ (#faq)

### 2. **Logo Section (Left)**
- Square logo container: 24x24px (w-6 h-6), rounded-md, background color #003459
- White "P" text inside the square (text-xs, font-bold)
- "Praband" text next to the logo (font-semibold, 2xl:text-lg)
- Logo should be a Link to "/"
- Text color changes based on scroll state (see scroll behavior below)

### 3. **Desktop Navigation (Center)**
- Hidden on mobile (hidden lg:flex)
- Rounded-full container with navigation pills
- Background: `bg-gray-100` when scrolled, `bg-white/10` when at top
- Each menu item is a clickable pill with:
  - Padding: px-3 py-1.5 (2xl:px-4 2xl:py-2)
  - Text size: text-sm (2xl:text-base)
  - Rounded-full shape
  - Active state: Shows white background with shadow when active
  - Active indicator: Small dot (w-1 h-1) at bottom center when active, color #00171f
  - Text colors:
    - Active + scrolled: text-gray-900
    - Active + top: text-white
    - Inactive + scrolled: text-gray-600 hover:text-gray-900
    - Inactive + top: text-white/80 hover:text-white

### 4. **CTA Button (Right - Desktop)**
- Hidden on mobile (hidden lg:block)
- "Contact Us" button
- Background: #007ea7, hover: #003459
- Text: white, font-medium
- Padding: px-4 py-2 (2xl:px-6 2xl:py-2.5)
- Rounded-full
- Smooth hover scale animation (scale 1.05 on hover, 0.95 on tap)
- Links to #contact section

### 5. **Mobile Menu Button**
- Visible only on mobile (lg:hidden)
- Hamburger icon (Menu) when closed, X icon when open
- Uses lucide-react icons
- Toggles mobile menu state

### 6. **Mobile Menu**
- Appears below main nav when menu is open
- Animated with motion/react (fade in + height animation)
- Vertical list of all menu items
- Each item:
  - Padding: px-4 py-2
  - Rounded-full
  - Active state: text-gray-900 bg-gray-100
  - Inactive: text-gray-600 hover:text-gray-900 hover:bg-gray-50
- "Contact Us" button at bottom with same styling as desktop CTA
- Closes menu when any link is clicked

## Scroll Behavior

### Scroll Detection
- Track scroll position
- When scrollY > 600px: Apply "scrolled" state
- When scrolled:
  - Navbar background: `bg-white/80 backdrop-blur-md`
  - Border: `border-b` on mobile, `border` on desktop (lg:border)
  - Border color: `border-gray-200/50`
  - Shadow: `shadow-lg`
  - Logo text: `text-gray-900`
- When at top (scrollY <= 600px):
  - Mobile: `bg-white/95 backdrop-blur-md shadow-md`
  - Desktop: `bg-transparent shadow-none backdrop-blur-none`
  - Logo text: `text-gray-900` on mobile, `text-white` on desktop

### Active Section Tracking
- Monitor scroll position to detect which section is in view
- Calculate active section based on scroll position + 150px offset
- Update active section state when scrolling
- Highlight the corresponding nav item when its section is active

### Smooth Scrolling
- All anchor links should use smooth scroll behavior
- Scroll offset: 100px from top (to account for fixed header)
- Prevent default anchor behavior and use custom scroll function

## Layout & Positioning

### Header Container
- Fixed position: `fixed top-0 left-0 right-0`
- Desktop positioning: `lg:top-4 lg:left-1/2 lg:-translate-x-1/2`
- Width: `w-full` on mobile, `lg:w-[calc(100%-32px)] lg:max-w-4xl 2xl:max-w-5xl` on desktop
- Z-index: `z-50`
- Initial animation: Fade in from top (opacity 0, y: -20) with 0.5s duration

### Nav Container
- Padding: `px-6 py-3` on mobile, `lg:rounded-full lg:px-4 lg:py-2` on desktop
- Transition: `transition-all duration-300`
- Rounded corners on desktop only (rounded-full)

## Animations

1. **Header entrance**: Fade in from top using motion/react
2. **Mobile menu**: Animate height and opacity when opening/closing
3. **CTA button**: Scale animation on hover (1.05) and tap (0.95)
4. **Nav items**: Smooth color transitions (duration-200)

## Dependencies

- Next.js Link component
- motion/react (framer-motion)
- lucide-react (Menu, X icons)
- React hooks: useState, useEffect

## Color Palette

- Primary blue: #007ea7
- Dark blue: #003459
- Ink black: #00171f
- White: #ffffff
- Gray shades: gray-50, gray-100, gray-600, gray-900

## Responsive Breakpoints

- Mobile: Default styles
- Desktop: `lg:` prefix (1024px+)
- Large desktop: `2xl:` prefix (1536px+)

## Implementation Notes

- Use 'use client' directive (Next.js client component)
- Implement proper TypeScript types
- Handle scroll event cleanup in useEffect
- Close mobile menu when clicking outside (optional enhancement)
- Ensure accessibility: aria-labels, semantic HTML

