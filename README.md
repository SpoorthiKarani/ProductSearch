
# Product Search Page

Product Search Page with where the user can search for a product or sort the products by their price.

Created a reusable ProductCard and ProductList components.

Created a custom hook to to handle API fetching logic.

Used debounce to delay the execution of 'matchesSearchProducts' function until the user stops typing for a certain time, reducing unnecessary updates.

Used useMemo to optimise filtering and sorting so the value is not calculated on every render.

Wrote unit test cases using RTL and Vitest for the ProductCard, ProductList and Search Component.

<img width="1725" height="947" alt="image" src="https://github.com/user-attachments/assets/9bb58e3f-c6b7-44c5-a337-b3deeda273e5" />
