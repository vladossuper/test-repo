import React from 'react';
import { Provider } from 'react-redux'
import store from '../../store';
import { createStore } from 'redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { data } from '../../mock/repository';
import { reposReducer } from '../../store/slices/reposSlice';
import '@testing-library/jest-dom/extend-expect';

import { Repos } from './index';

const renderWithRedux = (component, { initialState, store = createStore(reposReducer, initialState) } = {}) => { 
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store 
    }
  }

describe('Repos component', () => {
    it('render component', () => {
        render(
            <Provider store={store}>
                <Repos />
            </Provider>
        )
    });

    beforeEach(() => {
        global.fetch = jest.fn(() => {
            Promise.resolve({
                data: () => Promise.resolve(data)
            })
        })
    });


    it('render result block', async () => {
        const { getByText, getAllByText } = renderWithRedux(<Repos/>, { initialState: { repos: { ...store.getState().repos, repos: data.items, totalRepos: 1 } } });

        expect(await getByText(/repository results/i)).toBeInTheDocument();
        expect(await getAllByText(/pycontribs/i)).toHaveLength(2);
        expect(await (getByText(/Python JIRA Library is the easiest way to automate JIRA/i))).toBeInTheDocument();


        const switcher = screen.getByRole('checkbox');
        expect(switcher.checked).toEqual(false);
        fireEvent.click(switcher);
        expect(switcher.checked).toEqual(true);
    });
})