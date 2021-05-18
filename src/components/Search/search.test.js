import { Search } from './index';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

const handleSearchQuery = jest.fn();
const handleStop = jest.fn()


const setup = () => {
    const utils = render(<Search handleSearchQuery={handleSearchQuery} handleStop={handleStop} />)
    const input = utils.getByPlaceholderText(/search github repos/i)
    return {
        input,
        ...utils,
    }
}

describe('testing search', () => {
    it('searching', () => {
        const { input } = setup();

        fireEvent.change(input, { target: { value: 'jira' } })

        expect(input.value).toBe('jira');
    })
})