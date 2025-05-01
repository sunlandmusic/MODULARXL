# Technical Setup Guide

## Development Environment
- React Native with Expo
- Node.js version: 16.x or higher
- Expo SDK: Latest version
- iOS Simulator or physical device for testing

## Audio System
- Audio Engine: Expo AV
- Sound files format: MP3/WAV
- Latency optimization through pre-loading and caching
- Audio file naming convention: `note_[noteName].mp3`

## Dependencies
```json
{
  "expo": "latest",
  "expo-av": "latest",
  "react": "18.x",
  "react-native": "0.71.x",
  "react-native-reanimated": "latest",
  "@react-navigation/native": "latest",
  "@react-navigation/native-stack": "latest"
}
```

## Component Integration Guidelines
1. Each component is self-contained with its own:
   - Styles
   - State management
   - Event handlers
   - Type definitions

2. Responsive Design:
   - Uses relative units (%, rem) instead of absolute positioning
   - Adapts to different screen sizes
   - Maintains consistent layout across devices

3. State Management:
   - Local component state for UI
   - Context API for shared state
   - Props for component configuration

## Performance Optimization
1. Audio:
   - Preload sounds on app initialization
   - Cache frequently used audio files
   - Unload unused audio resources

2. UI:
   - Use React Native's Animated API for smooth animations
   - Implement proper cleanup in useEffect hooks
   - Optimize re-renders with useMemo and useCallback

## Testing
- Test on multiple iOS devices
- Verify responsive layout
- Check audio latency
- Validate touch response time 