import { Audio } from 'expo-av';
import { NoteName, InstrumentType } from '@/types/music';
import { getMidiNote } from './chord-utils';

let soundObjects: { [key: string]: Audio.Sound } = {};
let currentInstrument: InstrumentType = 'piano';

export async function initAudio() {
  // Pre-load sounds if needed
  await Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
    staysActiveInBackground: true,
  });
}

export async function loadSound(note: NoteName, instrument: InstrumentType = currentInstrument) {
  const midiNote = getMidiNote(note);
  const key = `${instrument}_${midiNote}`;
  
  if (!soundObjects[key]) {
    const { sound } = await Audio.Sound.createAsync(
      require(`@/assets/sounds/${instrument}/${midiNote}.mp3`)
    );
    soundObjects[key] = sound;
  }
  
  return soundObjects[key];
}

export async function playNote(note: NoteName, instrument: InstrumentType = currentInstrument) {
  try {
    const sound = await loadSound(note, instrument);
    await sound.setPositionAsync(0);
    await sound.playAsync();
  } catch (error) {
    console.error('Error playing note:', error);
  }
}

export async function playChord(notes: number[], instrument: InstrumentType = currentInstrument) {
  try {
    const sounds = await Promise.all(
      notes.map(async (midiNote) => {
        const key = `${instrument}_${midiNote}`;
        if (!soundObjects[key]) {
          const { sound } = await Audio.Sound.createAsync(
            require(`@/assets/sounds/${instrument}/${midiNote}.mp3`)
          );
          soundObjects[key] = sound;
        }
        return soundObjects[key];
      })
    );

    await Promise.all(
      sounds.map(async (sound) => {
        await sound.setPositionAsync(0);
        await sound.playAsync();
      })
    );
  } catch (error) {
    console.error('Error playing chord:', error);
  }
}

export async function stopChord() {
  try {
    await Promise.all(
      Object.values(soundObjects).map(sound => sound.stopAsync())
    );
  } catch (error) {
    console.error('Error stopping chord:', error);
  }
}

export function setCurrentInstrument(instrument: InstrumentType) {
  currentInstrument = instrument;
}

export function cleanup() {
  Object.values(soundObjects).forEach(sound => {
    sound.unloadAsync();
  });
  soundObjects = {};
} 