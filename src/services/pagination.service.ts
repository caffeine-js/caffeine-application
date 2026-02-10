import { MAX_ITEMS_PER_QUERY } from "@caffeine/constants";

export const PaginationService = {
	run: (
		totalItems: number,
		itemsPerPage: number = MAX_ITEMS_PER_QUERY,
	): number => {
		if (totalItems <= 0) return 0;
		if (itemsPerPage <= 0) return 1;

		return Math.ceil(totalItems / itemsPerPage);
	},
} as const;
