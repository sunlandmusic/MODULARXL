# Component Documentation

## 1. EyeButton Component
Purpose: Navigation control for the application.

### Features
- Toggle navigation menu
- Visual feedback on press
- Consistent positioning across screens

### Props Interface
```typescript
interface EyeButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}
```

### Usage
```typescript
<EyeButton onPress={handleNavigation} />
```

### Styling Guidelines
- Position: Top of screen
- Size: Proportional to screen width
- Touch area: Minimum 44x44 points (iOS standard)

## 2. PianoXL Component
Purpose: Main piano interface with integrated title.

### Features
- Large piano keyboard
- "PIANO XL" title integrated
- Touch-responsive keys
- Audio feedback
- Scale highlighting

### Props Interface
```typescript
interface PianoXLProps {
  selectedKey: string;
  selectedMode: string;
  onKeyPress: (note: string) => void;
  highlightScale?: boolean;
}
```

### Usage
```typescript
<PianoXL 
  selectedKey="C"
  selectedMode="major"
  onKeyPress={handleNotePress}
  highlightScale={true}
/>
```

## 3. PianoXLSettings Component
Purpose: Control bar for piano settings.

### Features
- Key selection
- Mode selection
- Additional controls

### Props Interface
```typescript
interface PianoXLSettingsProps {
  currentKey: string;
  currentMode: string;
  onKeyChange: (key: string) => void;
  onModeChange: (mode: string) => void;
}
```

## 4. PlusMinusButtons Component
Purpose: Shared adjustment controls.

### Features
- Increment/decrement values
- Visual feedback
- Reusable across pages

### Props Interface
```typescript
interface PlusMinusButtonsProps {
  onPlus: () => void;
  onMinus: () => void;
  value: number;
  min?: number;
  max?: number;
}
```

### Usage
```typescript
<PlusMinusButtons
  onPlus={handleIncrement}
  onMinus={handleDecrement}
  value={currentValue}
  min={0}
  max={10}
/>
``` 