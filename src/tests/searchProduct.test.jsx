import { screen, render, fireEvent, cleanup} from '@testing-library/react';
import { SearchProduct } from '../SearchProduct';
import {test, expect, vi, afterEach} from 'vitest';

afterEach(cleanup);

test("Input is updated when user types", () => {
    const setSearch = vi.fn();

    render(<SearchProduct search="" setSearch={setSearch}/>);
    const input = screen.getByPlaceholderText("Search for products...");
    fireEvent.change(input, { target: { value: 'shirt' }});
    expect(setSearch).toHaveBeenCalledWith('shirt');
})