import { PaginationService } from "./pagination.service";
import { MAX_ITEMS_PER_QUERY } from "@caffeine/constants";
import { describe, it, expect } from "vitest";

describe("PaginationService", () => {
	it("should return 0 pages if total items is 0 or less", () => {
		expect(PaginationService.run(0)).toBe(0);
		expect(PaginationService.run(-5)).toBe(0);
	});

	it("should return 1 page if items per page is 0 or less", () => {
		expect(PaginationService.run(10, 0)).toBe(1);
		expect(PaginationService.run(10, -5)).toBe(1);
	});

	it("should return correct number of pages for exact division", () => {
		// 10 items, 5 per page -> 2 pages
		expect(PaginationService.run(10, 5)).toBe(2);
	});

	it("should return correct number of pages for non-exact division (ceil)", () => {
		// 11 items, 5 per page -> 3 pages
		expect(PaginationService.run(11, 5)).toBe(3);
	});

	it("should use default MAX_ITEMS_PER_QUERY if itemsPerPage is not provided", () => {
		// Just to ensure default value is used correctly
		// If MAX_ITEMS_PER_QUERY is used, result depends on its value.
		// Assuming MAX_ITEMS_PER_QUERY is > 0.
		// We can't easily mock the constant import without more complex setup,
		// but we can test logic with explicit value first.

		// If total items is less than MAX_ITEMS_PER_QUERY, it should return 1
		// We assume MAX_ITEMS_PER_QUERY is reasonably large (e.g. 10, 20, 50)
		// Let's test with a small number of items
		expect(PaginationService.run(1)).toBe(1);

		// If total items > MAX_ITEMS_PER_QUERY
		// We know MAX_ITEMS_PER_QUERY is imported, let's use it for the test
		expect(PaginationService.run(MAX_ITEMS_PER_QUERY + 1)).toBe(2);
	});
});
