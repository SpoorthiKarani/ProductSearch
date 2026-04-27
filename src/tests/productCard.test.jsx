import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import { ProductCard } from "../ProductCard";

afterEach(cleanup);

test("alt text renders on Product image correctly", () => {
    const title = "gold ring"
    const src = "https://picsum.photos/200"
    const screen = render(<ProductCard title={title} image={src} price={100}
        rating={{ rate: 4, count: 10 }} />);

    const img = screen.getByRole("img");
    expect(img.src).toBe(src);
    expect(img.alt).toBe(title);
})