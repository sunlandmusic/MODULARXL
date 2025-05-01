import { NoteName, MusicMode, ChordType, Chord } from '@/types/music';

const NOTES: NoteName[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Scale patterns (intervals from root)
const SCALE_PATTERNS = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  locrian: [0, 1, 3, 5, 6, 8, 10],
};

export function getScaleNotes(root: NoteName, mode: MusicMode): NoteName[] {
  if (mode === 'off') return [];
  
  const rootIndex = NOTES.indexOf(root);
  const pattern = SCALE_PATTERNS[mode];
  
  return pattern.map(interval => {
    const noteIndex = (rootIndex + interval) % 12;
    return NOTES[noteIndex];
  });
}

export function getMidiNote(note: NoteName, octave: number = 4): number {
  const noteIndex = NOTES.indexOf(note);
  return noteIndex + (octave + 1) * 12;
}

// Chord intervals from root
const CHORD_INTERVALS: { [key in ChordType]: number[] } = {
  major: [0, 4, 7],
  minor: [0, 3, 7],
  dim: [0, 3, 6],
  major7: [0, 4, 7, 11],
  minor7: [0, 3, 7, 10],
  '7': [0, 4, 7, 10],
  major9: [0, 4, 7, 11, 14],
  minor9: [0, 3, 7, 10, 14],
  '9': [0, 4, 7, 10, 14],
  major11: [0, 4, 7, 11, 14, 17],
  minor11: [0, 3, 7, 10, 14, 17],
  '11': [0, 4, 7, 10, 14, 17],
  major13: [0, 4, 7, 11, 14, 21],
  minor13: [0, 3, 7, 10, 14, 21],
  add9: [0, 4, 7, 14],
  'm7b5': [0, 3, 6, 10],
  dim7: [0, 3, 6, 9],
  '6': [0, 4, 7, 9],
  '69': [0, 4, 7, 9, 14],
  minor6: [0, 3, 7, 9],
};

export function createChord(root: NoteName, type: ChordType): Chord {
  const rootMidi = getMidiNote(root);
  const intervals = CHORD_INTERVALS[type];
  
  return {
    root,
    type,
    notes: intervals.map(interval => rootMidi + interval),
  };
} 