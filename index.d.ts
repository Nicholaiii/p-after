declare namespace pAfter {}

declare function pAfter<T>(
  when: number,
  what: T
): Promise<T>

export = pAfter