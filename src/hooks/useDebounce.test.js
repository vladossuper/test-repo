import { useDebounce } from './useDebounce';
import '@testing-library/jest-dom/extend-expect';
import { renderHook } from "@testing-library/react-hooks";

test('Can change value', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
        useDebounce('jira', 1000)
    );

    const { debounceSearch, prevDebounceSearch } = result.current;

    expect(debounceSearch).toEqual('jira');
    expect(prevDebounceSearch).toEqual('');
})