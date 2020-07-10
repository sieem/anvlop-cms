import { ScullyConfig } from '@scullyio/scully';
import { Projects } from './.scully/plugins/scully-projects';
import * as dotenv from 'dotenv';
dotenv.config();

export const config: ScullyConfig = {
  projectRoot: "./apps/ui/static/src",
  projectName: "ui-static",
  outDir: './dist/static',
  routes: {
    '/projects/:projectSlug': {
      type: Projects,
      url: `${process.env.API_URL}/api/projects`,
    },
  },
  proxyConfig: './apps/ui/static/proxy.conf.json',
  appPort: 1864,
};