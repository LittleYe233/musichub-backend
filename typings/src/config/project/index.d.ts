/**
 * Declaration of interface for one piece of songs.
 * 
 * This describes the schema of raw configurations of a song.
 *
 * @param name Name of the song.
 * @param artist String or array of the artists.
 * @param album Name of the album.
 * @param url URL (relative or absolute) of the media file.
 * @param cover Path of the album cover image.
 * @param lrc Path of the lyric file (should be SRT).
 */
export interface SongPiece {
  name: string;
  artist: string[] | string;
  album: string;
  url: string;
  cover: string;
  lrc: string;
}

export interface ProjectConfig {
  server: {
    owner: string;
    root: string;
  };
  songs: {
    pieces: SongPiece[];
  };
}
