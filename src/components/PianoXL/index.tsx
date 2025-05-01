import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { NoteName, MusicMode } from '@/types/music';
import { getScaleNotes } from '@/utils/chord-utils';
import { playNote } from '@/utils/audio-utils';

interface PianoXLProps {
  selectedKey: NoteName;
  selectedMode: MusicMode;
  onKeyPress: (note: NoteName) => void;
  highlightScale?: boolean;
}

const KEYS: NoteName[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const WHITE_KEYS = KEYS.filter(key => !key.includes('#'));
const BLACK_KEYS = KEYS.filter(key => key.includes('#'));

export const PianoXL: React.FC<PianoXLProps> = ({
  selectedKey,
  selectedMode,
  onKeyPress,
  highlightScale = true
}) => {
  const [scaleNotes, setScaleNotes] = useState<NoteName[]>([]);
  const [pressedKey, setPressedKey] = useState<NoteName | null>(null);
  const { width: screenWidth } = Dimensions.get('window');

  useEffect(() => {
    if (highlightScale) {
      setScaleNotes(getScaleNotes(selectedKey, selectedMode));
    } else {
      setScaleNotes([]);
    }
  }, [selectedKey, selectedMode, highlightScale]);

  const handleKeyPress = (note: NoteName) => {
    setPressedKey(note);
    playNote(note);
    onKeyPress(note);
  };

  const handleKeyRelease = () => {
    setPressedKey(null);
  };

  const isKeyInScale = (note: NoteName) => {
    return scaleNotes.includes(note);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>PIANO XL</Text>

      {/* Piano Keys */}
      <View style={styles.pianoContainer}>
        {/* White Keys */}
        <View style={styles.whiteKeysContainer}>
          {WHITE_KEYS.map((note) => (
            <Pressable
              key={note}
              style={[
                styles.whiteKey,
                pressedKey === note && styles.keyPressed,
                isKeyInScale(note) && styles.keyInScale
              ]}
              onPressIn={() => handleKeyPress(note)}
              onPressOut={handleKeyRelease}
            >
              <Text style={styles.keyLabel}>{note}</Text>
            </Pressable>
          ))}
        </View>

        {/* Black Keys */}
        <View style={styles.blackKeysContainer}>
          {BLACK_KEYS.map((note, index) => {
            const offset = (index < 2 ? index : index + 1) * (screenWidth * 0.12);
            return (
              <Pressable
                key={note}
                style={[
                  styles.blackKey,
                  { left: offset },
                  pressedKey === note && styles.keyPressed,
                  isKeyInScale(note) && styles.keyInScale
                ]}
                onPressIn={() => handleKeyPress(note)}
                onPressOut={handleKeyRelease}
              >
                <Text style={styles.blackKeyLabel}>{note}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    left: 20,
    top: '50%',
    transform: [{ rotate: '-90deg' }],
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  pianoContainer: {
    width: '100%',
    height: '80%',
    position: 'relative',
  },
  whiteKeysContainer: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  whiteKey: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  blackKeysContainer: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    flexDirection: 'row',
  },
  blackKey: {
    position: 'absolute',
    width: '8%',
    height: '100%',
    backgroundColor: '#000000',
    zIndex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
  },
  keyPressed: {
    backgroundColor: '#CCCCCC',
  },
  keyInScale: {
    borderColor: '#FFA500',
    borderWidth: 2,
  },
  keyLabel: {
    color: '#000000',
    fontSize: 16,
  },
  blackKeyLabel: {
    color: '#FFFFFF',
    fontSize: 14,
  },
}); 