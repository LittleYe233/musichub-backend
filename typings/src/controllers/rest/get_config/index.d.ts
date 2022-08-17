/**
 * Declaration of interface for an audio for media players.
 * 
 * This describes the schema of distributed configurations of a song.
 */
export interface PlayerAudio {
  name?: string | null;
  artist?: string | null;
  album?: string | null;
  url: string;
  cover?: string | null;
  lrc?: string | null;
}

export type PlayerAudios = PlayerAudio[];
