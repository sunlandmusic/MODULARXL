# LAYOUT_SHELL Module Documentation

## Overview
The LAYOUT_SHELL module provides a standardized container system with predefined spaces for modules, optimized for the expanded settings interface.

## Layout Structure
```
+------------------------+
|     Slot 1 (64px)     |  // Navigation (EyeButton)
+------------------------+
|                       |
|     Slot 2 (50%)      |  // Main Content (PianoXL)
|                       |
+------------------------+
|                       |
|     Slot 3 (40%)      |  // Settings Panel (8 Features)
|                       |  // Includes instrument selection
|                       |  // and save/skin controls
+------------------------+
|     Slot 4 (48px)     |  // Plus/Minus Control Bar
+------------------------+
```

## Slot Specifications

### Slot 1 - Navigation
- Height: 64px (fixed)
- Purpose: EyeButton component
- Padding: 16px
- Z-index: 10 for menu overlay

### Slot 2 - Main Content
- Height: 50% of remaining space
- Purpose: PianoXL component
- Padding: 24px
- Overflow: Hidden
- Background: var(--main-bg)

### Slot 3 - Settings Panel
- Height: 40% of remaining space
- Purpose: Enhanced SettingsPianoXL
- Layout: Grid system for 8 features
- Sections:
  * Core Controls (Key, Mode, Octave, Inversion)
  * Instrument Selection (Dropdown)
  * Action Buttons (Save, Skin)
  * Status Display
- Padding: 16px
- Overflow-y: Auto if needed

### Slot 4 - Plus/Minus Bar
- Height: 48px (fixed)
- Purpose: Value adjustment interface
- Padding: 12px 24px
- Background: var(--control-bg)

## CSS Implementation
```css
.layout-shell {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

.slot1 {
    height: 64px;
    padding: 16px;
    border-bottom: 1px solid var(--border-color);
}

.slot2 {
    flex: 5;
    padding: 24px;
    overflow: hidden;
}

.slot3 {
    flex: 4;
    padding: 16px;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
    border-top: 1px solid var(--border-color);
}

.slot4 {
    height: 48px;
    padding: 12px 24px;
    border-top: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

## Settings Grid Layout (Slot 3)
```
+--------+--------+--------+--------+
| Key    | Mode   | Octave | Inver. |
+--------+--------+--------+--------+
| Instrument Selection | Save Chord |
+--------------------+-----------+--+
| Status Display     | Skin Button  |
+--------------------+-------------+
```

## Responsive Behavior
### Mobile (< 768px)
- Slot 1: 48px height
- Slot 2: 40% height
- Slot 3: 50% height (scrollable)
- Slot 4: 40px height
- Settings grid: 2 columns

### Tablet (768px - 1024px)
- Standard layout
- Settings grid: 3 columns

### Desktop (> 1024px)
- Full layout as specified
- Settings grid: 4 columns

## Integration Example
```typescript
<LayoutShell
    slot1={<EyeButton />}
    slot2={<PianoXL />}
    slot3={
        <SettingsPianoXL
            // 8-feature settings props
        />
    }
    slot4={
        <PlusMinusBar
            value={currentValue}
            onChange={handleValueChange}
        />
    }
/>
```

## CSS Variables
```css
:root {
    --shell-padding-sm: 12px;
    --shell-padding-md: 16px;
    --shell-padding-lg: 24px;
    --border-color: rgba(0, 0, 0, 0.1);
    --main-bg: #ffffff;
    --control-bg: #f8f8f8;
}
```
