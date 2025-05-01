export type NoteName = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';

export type MusicMode = 'off' | 'major' | 'minor' | 'dorian' | 'phrygian' | 'lydian' | 'mixolydian' | 'locrian';

export type ChordType = 
  | 'major' | 'minor' | 'dim' 
  | 'major7' | 'minor7' | '7' 
  | 'major9' | 'minor9' | '9'
  | 'major11' | 'minor11' | '11'
  | 'major13' | 'minor13'
  | 'add9' | 'm7b5' | 'dim7'
  | '6' | '69' | 'minor6';

export interface Chord {
  root: NoteName;
  type: ChordType;
  notes: number[];  // MIDI note numbers
}

export type InstrumentType = 'balafon' | 'piano' | 'rhodes' | 'steel_drum' | 'pluck' | 'pad'; 