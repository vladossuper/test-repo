import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { reposReducer } from './store/slices/reposSlice';
import store from './store';
import App from './App';
import { data } from './mock/repository';
import { createStore } from 'redux';

describe('App', () => {
  it('render placeholder and button', () => {
    const { queryByPlaceholderText, getByRole, getByPlaceholderText } = screen; 
    render(
      <Provider store ={store}>
        <App/>
      </Provider>
    );
    // debug();
    expect(queryByPlaceholderText(/search github repos/i)).toBeInTheDocument();
    expect(getByRole('button', { pressed: false })).toBeInTheDocument();
    expect(getByPlaceholderText(/search github repos/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/search github repos/i)).toBeInTheDocument();
  });
});

describe('App', () => {
  it('Render Async Element', () => {
    const { getByPlaceholderText } = screen;

    render(
      <Provider store ={store}>
        <App/>
      </Provider>
    );

    expect(getByPlaceholderText(/search github repos/i)).not.toBeRequired();

    // expect(findAllByText(/language:/i)).toBeInTheDocument();
  })
});

describe('Render', () => {
  test('change event', () => {
    const { debug, getByRole, getByPlaceholderText } = screen;
    render(
      <Provider store ={store}>
        <App/>
      </Provider>
    );

    fireEvent.change(getByPlaceholderText(/search github repos/i), {
      target: { value: 'jira' }
    });

  })
});

const renderWithRedux = (component, { initialState, store = createStore(reposReducer, initialState) } = {}) => { 
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store 
  }
}



describe('Redux test', () => {
    it('test', () => {
      const { getByText } = renderWithRedux(<App/>);
  
      expect(getByText(/There is nothing... Search for the repo./i)).toBeInTheDocument();
    })

    it('set data', async () => {
      const { findByText, getByPlaceholderText, debug } = renderWithRedux(<App />, { initialState: { repos: { ...store.getState().repos, repos: data.items } } });
      fireEvent.change(getByPlaceholderText(/search github repos/i), {
        target: { value: 'jira' }
      });

      expect(await findByText(/language:/i)).toBeInTheDocument();
    })
});
