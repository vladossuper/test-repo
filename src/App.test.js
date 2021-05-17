import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { reposReducer } from './store/slices/reposSlice';
import store from './store';
import App from './App';
import userEvent from '@testing-library/user-event';
import { createStore } from 'redux';

describe('App', () => {
  it('render placeholder and button', () => {
    const { debug, queryByPlaceholderText, getByRole, getByPlaceholderText, getByLabelText } = screen; 
    render(
      <Provider store ={store}>
        <App/>
      </Provider>
    );
    // debug();
    expect(queryByPlaceholderText(/search github repos/i)).toBeInTheDocument();
    expect(getByRole('button', { pressed: false })).toBeInTheDocument();
    expect(getByPlaceholderText(/search github repos/i)).toBeInTheDocument();
    expect(getByLabelText(/search github repos/i)).toBeInTheDocument();
  });
});

describe('App', () => {
  it('Render Async Element', () => {
    const { getByLabelText } = screen;

    render(
      <Provider store ={store}>
        <App/>
      </Provider>
    );

    expect(getByLabelText(/search github repos/i)).not.toBeRequired();

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
    debug();

    fireEvent.change(getByPlaceholderText(/search github repos/i), {
      target: { value: 'jira' }
    });

    debug();

  })
});

// jest.mock('axios');

const data = {
  incomplete_results: false,
  total_count: 18725,
  items: [
    {
      archive_url: "https://api.github.com/repos/pycontribs/jira/{archive_format}{/ref}",
      archived: false,
      assignees_url: "https://api.github.com/repos/pycontribs/jira/assignees{/user}",
      blobs_url: "https://api.github.com/repos/pycontribs/jira/git/blobs{/sha}",
      branches_url: "https://api.github.com/repos/pycontribs/jira/branches{/branch}",
      clone_url: "https://github.com/pycontribs/jira.git",
      collaborators_url: "https://api.github.com/repos/pycontribs/jira/collaborators{/collaborator}",
      comments_url: "https://api.github.com/repos/pycontribs/jira/comments{/number}",
      commits_url: "https://api.github.com/repos/pycontribs/jira/commits{/sha}",
      compare_url: "https://api.github.com/repos/pycontribs/jira/compare/{base}...{head}",
      contents_url: "https://api.github.com/repos/pycontribs/jira/contents/{+path}",
      contributors_url: "https://api.github.com/repos/pycontribs/jira/contributors",
      created_at: "2014-06-28T14:06:53Z",
      default_branch: "master",
      deployments_url: "https://api.github.com/repos/pycontribs/jira/deployments",
      description: "Python JIRA Library is the easiest way to automate JIRA. Support for py27 was dropped on 2019-10-14, do not raise bugs related to it. ",
      disabled: false,
      downloads_url: "https://api.github.com/repos/pycontribs/jira/downloads",
      events_url: "https://api.github.com/repos/pycontribs/jira/events",
      fork: false,
      forks: 672,
      forks_count: 672,
      forks_url: "https://api.github.com/repos/pycontribs/jira/forks",
      full_name: "pycontribs/jira",
      git_commits_url: "https://api.github.com/repos/pycontribs/jira/git/commits{/sha}",
      git_refs_url: "https://api.github.com/repos/pycontribs/jira/git/refs{/sha}",
      git_tags_url: "https://api.github.com/repos/pycontribs/jira/git/tags{/sha}",
      git_url: "git://github.com/pycontribs/jira.git",
      has_downloads: true,
      has_issues: true,
      has_pages: false,
      has_projects: true,
      has_wiki: false,
      homepage: "https://jira.readthedocs.io",
      hooks_url: "https://api.github.com/repos/pycontribs/jira/hooks",
      html_url: "https://github.com/pycontribs/jira",
      id: 21303988,
      issue_comment_url: "https://api.github.com/repos/pycontribs/jira/issues/comments{/number}",
      issue_events_url: "https://api.github.com/repos/pycontribs/jira/issues/events{/number}",
      issues_url: "https://api.github.com/repos/pycontribs/jira/issues{/number}",
      keys_url: "https://api.github.com/repos/pycontribs/jira/keys{/key_id}",
      labels_url: "https://api.github.com/repos/pycontribs/jira/labels{/name}",
      language: "Python",
      languages_url: "https://api.github.com/repos/pycontribs/jira/languages",
      merges_url: "https://api.github.com/repos/pycontribs/jira/merges",
      milestones_url: "https://api.github.com/repos/pycontribs/jira/milestones{/number}",
      mirror_url: null,
      name: "jira",
      node_id: "MDEwOlJlcG9zaXRvcnkyMTMwMzk4OA==",
      notifications_url: "https://api.github.com/repos/pycontribs/jira/notifications{?since,all,participating}",
      open_issues: 116,
      open_issues_count: 116,
      owner: {
        avatar_url: "https://avatars.githubusercontent.com/u/1846087?v=4",
        events_url: "https://api.github.com/users/pycontribs/events{/privacy}",
        followers_url: "https://api.github.com/users/pycontribs/followers",
        following_url: "https://api.github.com/users/pycontribs/following{/other_user}",
        gists_url: "https://api.github.com/users/pycontribs/gists{/gist_id}",
        gravatar_id: "",
        html_url: "https://github.com/pycontribs",
        id: 1846087,
        login: "pycontribs",
        node_id: "MDEyOk9yZ2FuaXphdGlvbjE4NDYwODc=",
        organizations_url: "https://api.github.com/users/pycontribs/orgs",
        received_events_url: "https://api.github.com/users/pycontribs/received_events",
        repos_url: "https://api.github.com/users/pycontribs/repos",
        site_admin: false,
        starred_url: "https://api.github.com/users/pycontribs/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/pycontribs/subscriptions",
        type: "Organization",
        url: "https://api.github.com/users/pycontribs",
      },
      private: false,
      pulls_url: "https://api.github.com/repos/pycontribs/jira/pulls{/number}",
      pushed_at: "2021-05-14T08:50:43Z",
      releases_url: "https://api.github.com/repos/pycontribs/jira/releases{/id}",
      score: 1,
      size: 2993,
      ssh_url: "git@github.com:pycontribs/jira.git",
      stargazers_count: 1350,
      stargazers_url: "https://api.github.com/repos/pycontribs/jira/stargazers",
      statuses_url: "https://api.github.com/repos/pycontribs/jira/statuses/{sha}",
      subscribers_url: "https://api.github.com/repos/pycontribs/jira/subscribers",
      subscription_url: "https://api.github.com/repos/pycontribs/jira/subscription",
      svn_url: "https://github.com/pycontribs/jira",
      tags_url: "https://api.github.com/repos/pycontribs/jira/tags",
      teams_url: "https://api.github.com/repos/pycontribs/jira/teams",
      trees_url: "https://api.github.com/repos/pycontribs/jira/git/trees{/sha}",
      updated_at: "2021-05-14T10:10:09Z",
      url: "https://api.github.com/repos/pycontribs/jira",
      watchers: 1350,
      watchers_count: 1350,
    }
  ]
}

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

      debug();
    })
});
