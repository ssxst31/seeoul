export function range(
  start: number,
  end?: number,
  increment?: number,
): number[] {
  const isEndDef = typeof end !== "undefined";

  end = end ? end : start;

  start = isEndDef ? start : 0;

  if (typeof increment === "undefined") {
    increment = Math.sign(end - start);
  }

  const length = Math.abs((end - start) / (increment || 1));

  const { result } = Array.from({ length }).reduce(
    ({ result, current }) => ({
      result: [...result, current],

      current: current + increment,
    }),
    { current: start, result: [] },
  );

  return result;
}
