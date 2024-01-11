import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'myremote',
  library: { type: 'var', name: 'myremote' },
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
