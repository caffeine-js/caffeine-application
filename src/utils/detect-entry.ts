import type { ValueTypes } from "../types/value-types";
import { UuidSchema } from "@caffeine/models/schemas/primitives";

export function detectEntry(
	value: string,
	_default: ValueTypes = "SLUG",
): ValueTypes {
	if (UuidSchema.match(value)) return "UUID";

	return _default;
}
