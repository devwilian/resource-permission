import { WebPlugin } from '@capacitor/core';

import type { ResourcePlugin } from './definitions';

export class ResourceWeb extends WebPlugin implements ResourcePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
