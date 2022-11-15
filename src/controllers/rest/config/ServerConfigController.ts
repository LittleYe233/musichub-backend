import { Controller, Constant } from '@tsed/di';
import { Get, Returns } from '@tsed/schema';
import type { ProjectConfig } from 'typings';

@Controller('/')
export class ServerConfigController {
  @Constant('project')
    projectConfig: ProjectConfig;

  @Get('/')
  @Returns(200, String).ContentType('application/json; charset=utf-8')
  get() {
    return JSON.stringify(this.projectConfig);
  }
}
