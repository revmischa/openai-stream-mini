import type { fetch as _fetch } from "undici";

// fetch is in node18 but not in @types/node@18 yet
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/60924
declare global {
  declare const fetch: typeof _fetch;
}
