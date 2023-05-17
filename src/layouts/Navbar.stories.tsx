import type { Meta, StoryObj } from '@storybook/react';

import Navbar from './Navbar.tsx';


const meta: Meta<typeof Navbar> = {
    title: 'Navbar',
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;


export const Authenticated: Story = {
    render: () => <Navbar authenticated />,
};

export const Unauthenticated: Story = {
    render: () => <Navbar authenticated={false} />,
};