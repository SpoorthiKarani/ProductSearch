
# Product Search Page

Created a Product Search Page where the user can search for a product or sort the products by their price.

Used debounce to delay the execution of 'matchesSearchProducts' function until the user stops typing for a certain time, reducing unnecessary updates.

Used useMemo to optimise filtering and sorting so the value is not calculated on every render.

Wrote unit test cases using RTL and Vitest for the ProductCard, ProductList and Search Component.
