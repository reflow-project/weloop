export interface Action<P = any> {
  readonly payload: P;
  readonly type: string;
  readonly symbol: Symbol;
}
export interface ActionHelper<P> {
  create(payload: P): Action<P>;
  is(a: any): a is Action<P>;
}
export function ActionH<P = void>(type: string): ActionHelper<P> {
  const symbol = Symbol(`${type}`);
  return {
    create: payload => ({
      type,
      payload,
      symbol
    }),
    is: (_: any): _ is Action<P> => !!_ && 'symbol' in _ && _.symbol === symbol
  };
}

export function ActionCtx(ctx: string) {
  return <P = void>(type: string) => ActionH<P>(`${ctx}#${type}`);
}
