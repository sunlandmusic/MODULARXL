# EyeButton Component

A reusable navigation button component that displays an eye icon and includes a sliding navigation menu.

## Features
- Eye icon button with touch feedback
- Sliding navigation menu
- Semi-transparent backdrop when menu is open
- Active route highlighting
- Responsive design
- Smooth animations
- Three navigation options:
  - CHORD COMPOSE
  - CHORD-INATE
  - PIANO XL

## Props
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| currentRoute | string | Yes | - | Current active route path |
| onNavigate | (route: string) => void | Yes | - | Function called when navigation item is selected |
| style | ViewStyle | No | - | Additional styles to apply to button |
| size | number | No | 24 | Size of the eye icon |
| color | string | No | '#FFFFFF' | Color of the eye icon |

## Usage Example
```typescript
import { EyeButton } from '@/components/EyeButton';

const MyScreen = () => {
  const currentRoute = '/(tabs)/pianoxl';
  
  const handleNavigation = (route: string) => {
    // Navigation logic here
    console.log(`Navigating to ${route}`);
  };

  return (
    <EyeButton 
      currentRoute={currentRoute}
      onNavigate={handleNavigation}
      size={32}
      color="#FFA500"
      style={{ marginTop: 20 }}
    />
  );
};
```

## Styling Guidelines
- Button size: 44x44 points (iOS standard touch target)
- Background color: #1A1A1A
- Border: 1px rgba(255, 255, 255, 0.3)
- Border radius: 22px (fully rounded)
- Icon centered within button
- Menu width: 205px
- Menu background: #000000
- Active route highlight: #FFA500 (Orange)

## Navigation Menu
The sliding menu includes three main navigation options:
1. CHORD COMPOSE - Main composition screen
2. CHORD-INATE - Chord exploration screen
3. PIANO XL - Extended piano interface

## Integration Notes
1. Import the component from the components directory
2. Ensure proper route paths are provided
3. Handle navigation through the onNavigate prop
4. Position using container component's layout system
5. Component handles its own state for menu visibility
6. Uses React Native's Animated API for smooth transitions 