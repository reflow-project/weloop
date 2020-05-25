import { ComponentType } from 'react';

export type Key = string | number; //| null | undefined
export interface ComponentBag<Props = any> {
  Comp: ComponentType<Props>;
  props: Props;
  key: Key;
}
export function ComponentBag<Props>(
  Comp: ComponentBag<Props>['Comp'],
  props: ComponentBag<Props>['props'],
  key: ComponentBag<Props>['key'] = ''
): ComponentBag<Props> {
  return { Comp, key, props };
}
