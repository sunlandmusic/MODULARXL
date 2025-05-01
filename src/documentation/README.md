# CHORD-INATOR Modular System Documentation

## Project Overview
CHORD-INATOR is a React Native/Expo application for music education and chord exploration. This modular system is designed for optimal performance and maintainability.

## System Architecture
The application consists of three main pages, with PianoXL being one of the primary interfaces. Each page is built from modular, self-contained components.

### PianoXL Page Components
1. **EyeButton**
   - Purpose: Navigation control
   - Location: Top of screen
   - Shared: No
   - Dependencies: Navigation system

2. **PianoXL**
   - Purpose: Large piano interface with "PIANO XL" title
   - Location: Main central area
   - Shared: No
   - Dependencies: Audio engine

3. **PianoXLSettings**
   - Purpose: Control bar with options
   - Location: Below piano
   - Shared: No
   - Dependencies: State management

4. **PlusMinusButtons**
   - Purpose: Adjustment controls
   - Location: Various pages
   - Shared: Yes (used across all three main pages)
   - Dependencies: None

## Directory Structure
```
MODULARXL/
├── src/
│   ├── components/     # Modular components
│   ├── layouts/        # Layout management
│   ├── utils/          # Utility functions
│   ├── config/         # Configuration files
│   ├── documentation/  # Documentation files
│   └── audio/         # Audio engine and related files
``` 