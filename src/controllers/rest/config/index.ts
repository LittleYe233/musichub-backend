import { Controller } from '@tsed/di';
import { SongsController } from './SongsController';
import { ServerConfigController } from './ServerConfigController';
import { isProduction } from 'src/config/envs';

const ctrlChildren = [SongsController].concat(isProduction ? [] : [ServerConfigController]);

@Controller({
  path: '/config',
  children: ctrlChildren
})
export class ConfigController {}
