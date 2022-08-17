import { Controller, Constant } from '@tsed/di';
import { Get, Returns } from '@tsed/schema';
import type { ProjectConfig, PlayerAudios } from 'typings';
import { parseResourcePath } from 'src/config/project';

function parseSongs(songs: ProjectConfig['songs']): PlayerAudios {
  return songs.pieces.flatMap((p) => {
    // invalid song pieces
    if (p.url === null) {
      return [];
    }
    // valid song pieces
    return [
      {
        name: p.name,
        artist: p.artist === null ? null : typeof p.artist === 'string' ? p.artist : p.artist.join(','),
        album: p.album,
        url: parseResourcePath(p.url),
        cover_art_url: p.cover === null ? null : parseResourcePath(p.cover),
        lrc: p.lrc === null ? null : parseResourcePath(p.lrc)
      }
    ];
  });
}

@Controller('/songs')
export class SongsController {
  @Constant('project')
    projectConfig: ProjectConfig;

  // for productive use
  @Get('/')
  @Returns(200, String).ContentType('application/json; charset=utf-8')
  get() {
    return JSON.stringify(parseSongs(this.projectConfig.songs));
  }
}
