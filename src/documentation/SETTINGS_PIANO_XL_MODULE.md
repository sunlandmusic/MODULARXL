# SETTINGS_PIANO_XL Module Documentation

## Overview
The SETTINGS_PIANO_XL module manages the configuration interface for the PianoXL component, providing comprehensive control over instrument, chord, and visual settings.

## Component Specification

### SettingsPianoXL Component
**Purpose**: Configuration control panel for PianoXL interface

### Visual Features
- Clean, organized settings panel
- Clearly labeled controls
- Visual feedback for current selections
- Responsive layout

### Controls (8 Features)
1. **Key Selection**
   - All musical keys available (C, C#, D, etc.)
   - Clear current key display

2. **Mode Selection**
   - Mode options (Major, Minor, etc.)
   - Current mode display

3. **Octave Control**
   - Numerical octave selection
   - Increment/decrement controls

4. **Inversion Control**
   - Inversion number selection (0-2)
   - Reset to root position option

5. **Instrument Selection**
   - Dropdown window with instrument list
   - Current instrument display
   - Preview sound option

6. **Save Chord Button**
   - Save current chord configuration
   - Visual feedback on save
   - Access to saved chords

7. **Skin Button**
   - Toggle between visual themes
   - Preview theme changes
   - Custom theme options

8. **Plus/Minus Bar Integration**
   - Value adjustment interface
   - Contextual control based on selected feature

### Props Interface
```typescript
interface SettingsPianoXLProps {
    // Core Music Settings
    onKeyChange: (key: string) => void;
    onModeChange: (mode: string) => void;
    onOctaveChange: (octave: number) => void;
    onInversionChange: (inversion: number) => void;
    
    // Instrument Settings
    onInstrumentChange: (instrument: string) => void;
    currentInstrument: string;
    
    // Chord Management
    onChordSave: (chordData: ChordData) => void;
    currentChord: string;
    
    // Visual Settings
    onSkinChange: (skin: string) => void;
    currentSkin: string;
    
    // Current States
    currentKey: string;
    currentMode: string;
    currentOctave: number;
    currentInversion: number;
    
    // Plus/Minus Bar Control
    onValueChange: (feature: string, value: number) => void;
    selectedFeature: string;
}

interface ChordData {
    name: string;
    key: string;
    mode: string;
    octave: number;
    inversion: number;
    instrument: string;
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
   - Current chord name from PianoXL
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

## Integration Points
1. **With PianoXL Component**:
   - Sends: Key, Mode, Octave, Inversion settings
   - Receives: Current chord name

2. **With Audio Engine**:
   - Coordinates with audio settings
   - Ensures playback reflects current settings

## Error Handling
- Invalid input prevention
- User feedback for invalid selections
- Graceful fallback to defaults
- Clear error messages

## Best Practices
- Real-time updates
- Responsive design
- Clear visual hierarchy
- Intuitive controls
- Consistent styling with main app
- Proper TypeScript typing
- Comprehensive error handling
- Performance optimization

## CSS Specifications
```css
/* Key styling variables */
--settings-primary-color: #333;
--settings-secondary-color: #666;
--settings-highlight-color: #ff6b00;  /* Matches piano orange highlight */
--settings-background: #fff;
--settings-border-radius: 4px;
```

## Example Usage
```typescript
<SettingsPianoXL
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