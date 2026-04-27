import { render, screen, cleanup } from "@testing-library/react";
import { test, expect, afterEach } from "vitest";
import { ProductList } from "../ProductList";

afterEach(cleanup);

test("products are rendered correctly", () => {
    const products = [{ id: 1, title: "shirt", price: 100, rating: { rate: 4, count: 10 }, image: '' }];
    render (<ProductList products={products}/>);
    expect(screen.getByText("shirt")).toBeTruthy();
});

test("show no products message when empty", () => {
    render(<ProductList products={[]} />);
    expect(screen.getByText('No products found')).toBeTruthy();
})