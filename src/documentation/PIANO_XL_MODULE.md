# PIANO XL Module Documentation

## Overview
The PIANO XL module is a key component of the CHORD-INATOR app, providing an interactive piano interface with chord functionality and navigation controls.

## Components

### 1. EyeButton Component
**Purpose**: Main navigation control for the application
- **Features**:
  - Sliding menu interface
  - Three navigation options:
    1. CHORD COMPOSE
    2. CHORD-INATE
    3. PIANO XL
  - MIX page explicitly removed from navigation
- **Props Interface**:
  ```typescript
  interface EyeButtonProps {
    onNavigate: (page: 'CHORD COMPOSE' | 'CHORD-INATE' | 'PIANO XL') => void;
    currentPage: string;
  }
  ```

### 2. PianoXL Component
**Purpose**: Large-scale interactive piano interface
- **Visual Features**:
  - Integrated "PIANO XL" title
  - Orange border highlighting system:
    - White keys: 4px border
    - Black keys: 1px border
  - Responsive design for various screen sizes

- **Functional Features**:
  - Diatonic chord functionality
  - Chord type cycling
  - Chord name display
  - Full chord playback system

- **Data Flow**:
  - **Incoming Data (Props)**:
    - Key selection
    - Mode selection
    - Octave settings
    - Inversion settings
  - **Outgoing Data (Events)**:
    - Current chord name

- **Props Interface**:
  ```typescript
  interface PianoProps {
    currentKey: string;
    currentMode: string;
    octave: number;
    inversion: number;
    onChordChange: (chordName: string) => void;
  }
  ```

## Project Structure
```
src/
├── components/
│   ├── EyeButton.tsx
│   └── PianoXL.tsx
├── layouts/
│   └── (layout components)
├── utils/
│   └── (utility functions)
├── config/
│   └── (configuration files)
├── documentation/
│   └── PIANO_XL_MODULE.md
└── audio/
    └── (audio engine files)
```

## Implementation Details

### State Management
- Component-level state for active notes
- Props-based configuration for key settings
- Event-based communication for chord changes

### Styling
- Responsive design using CSS/Tailwind
- Specific border highlighting for active keys
- Clean, modern UI appearance

### Audio Integration
- Integrated with audio engine
- Supports full chord playback
- Real-time sound generation

## Type Definitions
```typescript
interface ChordState {
    root: string;
    type: string;
    inversion: number;
    octave: number;
}

// Additional type definitions in src/types/piano.ts
```

## Communication Protocol
1. Settings → PianoXL:
   - Key/Mode updates
   - Octave/Inversion changes
2. PianoXL → Parent:
   - Chord name updates
   - Playback state changes

## Best Practices
- Self-contained components
- Clear separation of concerns
- TypeScript for type safety
- Documented props and interfaces
- Responsive design principles 