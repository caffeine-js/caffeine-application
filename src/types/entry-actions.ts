import type { ValueTypes } from "./value-types";

export type EntryActions<T> = Record<ValueTypes, () => T>;
