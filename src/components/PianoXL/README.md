# PianoXL Component

A large piano keyboard component with integrated title and scale highlighting.

## Features
- Full piano keyboard with white and black keys
- Integrated "PIANO XL" title (rotated 90 degrees)
- Scale highlighting with orange borders
- Touch-responsive keys
- Audio feedback on key press
- Responsive layout that adapts to screen size
- Visual feedback on key press
- Note labels on keys

## Props
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| selectedKey | NoteName | Yes | - | Current selected key (e.g., 'C', 'F#') |
| selectedMode | MusicMode | Yes | - | Current selected mode (e.g., 'major', 'minor') |
| onKeyPress | (note: NoteName) => void | Yes | - | Callback when a key is pressed |
| highlightScale | boolean | No | true | Whether to highlight scale notes |

## Usage Example
```typescript
import { PianoXL } from '@/components/PianoXL';
import { NoteName, MusicMode } from '@/types/music';

const MyScreen = () => {
  const [selectedKey, setSelectedKey] = useState<NoteName>('C');
  const [selectedMode, setSelectedMode] = useState<MusicMode>('major');

  const handleKeyPress = (note: NoteName) => {
    console.log(`Key pressed: ${note}`);
  };

  return (
    <PianoXL
      selectedKey={selectedKey}
      selectedMode={selectedMode}
      onKeyPress={handleKeyPress}
      highlightScale={true}
    />
  );
};
```

## Styling Guidelines
- White keys:
  - Background: #FFFFFF
  - Border: 1px solid #000000
  - Scale highlight: 2px solid #FFA500 (orange)
  - Note label: Black text, bottom aligned

- Black keys:
  - Background: #000000
  - Width: 8% of container
  - Height: 60% of white key height
  - Scale highlight: 2px solid #FFA500 (orange)
  - Note label: White text, bottom aligned

- Title:
  - Position: Left side, vertically centered
  - Rotation: -90 degrees
  - Color: #FFFFFF
  - Font size: 24px
  - Font weight: Bold

## Integration Notes
1. Import the component from the components directory
2. Ensure audio files are properly set up in the assets directory
3. Handle key press events through the onKeyPress prop
4. Use within a container that can provide proper height constraints
5. Consider device orientation for optimal display
6. Scale highlighting updates automatically with key/mode changes 