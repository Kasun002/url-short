import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../header';

describe("Test global header", () => {
    it('Load header as URL Shortener', async () => {
        render(<Header />);
        expect(screen.getByText('URL Shortener')).toBeInTheDocument()
    })
});