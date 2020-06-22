import { ScullyConfig } from '@scullyio/scully';
import { Projects } from './.scully/plugins/scully-projects';

export const config: ScullyConfig = {
  projectRoot: "./apps/ui/static/src",
  projectName: "ui-static",
  outDir: './dist/static',
  routes: {
    '/projects/:projectSlug': {
      type: Projects,
      url: 'http://localhost:3333/api/projects'
    },
  },
  // proxyConfig: './apps/ui/static/proxy.conf.json',
  puppeteerLaunchOptions: {
    devtools: true,
    slowMo: 1000
  },
  appPort: 1864,
};