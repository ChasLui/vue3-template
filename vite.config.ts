import { SharedConfig } from 'vite';
import path from 'path';

const resolve = (str: string) => path.resolve(__dirname, str);

const config: SharedConfig = {
  alias: {
    '/@/': resolve('./src'),
  },
};

export default config;
