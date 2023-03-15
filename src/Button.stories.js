
import React from 'react';

import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    initTitle: 'Click me!',
    initState: true,
  },
};

export const Clicked = Template.bind({});
Clicked.args = {
  task: {
    id: '1',
    initTitle: 'Thanks!',
    initState: false,
  },
};