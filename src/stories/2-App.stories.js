import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import App from '../App';

export default {
  title: 'App',
};

export const AppDefault = () => <App/>

export const AppWithTitle = () => <App title="tony"/>