import { ScullyConfig } from '@scullyio/scully';
import { Projects } from './.scully/plugins/scully-projects';
import { Pages } from './.scully/plugins/scully-pages';
import { config } from 'dotenv';
config();

export const config: ScullyConfig = {
  projectRoot: "./apps/ui/static/src",
  projectName: "ui-static",
  outDir: './dist/static',
  routes: {
    '/projects/:projectSlug': {
      type: Projects,
      url: `${process.env.API_URL}/api/projects`,
    },
    '/pages/:pageSlug': {
      type: Pages,
      url: `${process.env.API_URL}/api/pages`,
    },
  },
  proxyConfig: './apps/ui/static/proxy.conf.json',
  appPort: 1864,
};