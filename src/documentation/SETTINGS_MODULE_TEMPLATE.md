# SETTINGS_MODULE Template Documentation

## Overview
A base settings module template for musical control interfaces.

## Component Specification

### Settings Component Template
**Purpose**: Basic configuration control panel

### Visual Features
- Clean, organized settings panel
- Clearly labeled controls
- Visual feedback for current selections
- Responsive layout

### Core Controls (4 Features)
1. **Key Selection**
   - All musical keys available (C, C#, D, etc.)
   - Clear current key display
   - Easy key switching interface

2. **Mode Selection**
   - Mode options (Major, Minor, etc.)
   - Current mode display
   - Mode switching interface

3. **Octave Control**
   - Numerical octave selection
   - Increment/decrement controls
   - Valid range indicators

4. **Inversion Control**
   - Inversion number selection
   - Visual representation of current inversion
   - Reset to root position option

### Base Props Interface
```typescript
interface SettingsBaseProps {
    onKeyChange: (key: string) => void;
    onModeChange: (mode: string) => void;
    onOctaveChange: (octave: number) => void;
    onInversionChange: (inversion: number) => void;
    currentChord: string;  // Received from parent
    currentKey: string;
    currentMode: string;
    currentOctave: number;
    currentInversion: number;
}
```

## State Management
- Local state for temporary changes
- Prop-based state for synchronized settings
- Event handlers for all setting changes

## Communication Protocol
1. **Outgoing Updates**:
   - Key selection changes
   - Mode selection changes
   - Octave setting changes
   - Inversion setting changes

2. **Incoming Updates**:
   - Current chord name from parent
   - Validation feedback

## Validation Rules
1. **Key Selection**
   - Must be valid musical key
   - Cannot be empty

2. **Mode Selection**
   - Must be valid musical mode
   - Cannot be empty

3. **Octave Control**
   - Valid range: 0-8
   - Must be integer
   - Default: 4

4. **Inversion Control**
   - Valid range: 0-2 (root position to second inversion)
   - Must be integer
   - Default: 0 (root position)

## Base CSS Specifications
```css
/* Key styling variables */
--settings-primary-color: #333;
--settings-secondary-color: #666;
--settings-highlight-color: #ff6b00;
--settings-background: #fff;
--settings-border-radius: 4px;
```

## Usage Example
```typescript
<SettingsBase
    onKeyChange={handleKeyChange}
    onModeChange={handleModeChange}
    onOctaveChange={handleOctaveChange}
    onInversionChange={handleInversionChange}
    currentChord="Cmaj7"
    currentKey="C"
    currentMode="major"
    currentOctave={4}
    currentInversion={0}
/>
```

## Extension Guide
To extend this template:
1. Import the base settings
2. Add additional controls
3. Extend the base props interface
4. Add new state management
5. Add new validation rules 