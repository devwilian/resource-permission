import { registerPlugin } from '@capacitor/core';

import type { ResourcePlugin } from './definitions';

const Resource = registerPlugin<ResourcePlugin>('Resource', {
  web: () => import('./web').then((m) => new m.ResourceWeb()),
});

export * from './definitions';
export { Resource };
