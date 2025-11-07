export interface ResourcePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
