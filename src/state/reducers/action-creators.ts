import { AuthAC } from './auth/action-сreators';
import { notesAC } from './notes/action-creators';

export const allAC = {
  ...AuthAC,
  ...notesAC,
};
