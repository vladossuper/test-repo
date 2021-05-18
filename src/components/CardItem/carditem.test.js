import { CardItem } from './index';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { data } from '../../mock/repository';

describe('Card item testing', () => {
    it('Pass data in CardItem component and test all rendered items', () => {
        const { items } = data;
        const { getByText, getAllByText } = screen;

        render(
            <CardItem repo={items[0]} />
        )

        expect(getAllByText(/pycontribs/i)).toHaveLength(2);
        expect(getByText(/Python JIRA Library is the easiest way to automate JIRA. Support for py27 was dropped on 2019-10-14, do not raise bugs related to it./i)).toBeInTheDocument();
        expect(getByText('pycontribs/jira')).toBeInTheDocument();
        expect(getByText(/1350/i)).toBeInTheDocument();
        expect(getByText(/language:/i)).toBeInTheDocument();
    })
})