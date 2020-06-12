import React from 'react';
import { withKnobs, text, number } from "@storybook/addon-knobs";

import App from '../App';

export default {
  title: 'App',
  decorators: [withKnobs]
};

export const AppDefault = () => <App/>

export const AppWithTitle = () => <App title="tony"/>

export const asDynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const title = text("title", "tony");
  const content = `I am ${name} and I'm ${age} years old.`;
 
  return (
    <>
      <App title={title} />
      {content}
    </>
  )
};

export const inGroups = () => {
  const personalGroupId = 'personal info';
  const generalGroupId = 'general info';
 
  const name = text("Name", "James", personalGroupId);
  const age = number("Age", 35, {min: 0, max: 99}, personalGroupId);
  const message = text("Hello!", 35, generalGroupId);
  const content = `
    I am ${name} and I'm ${age} years old.
    ${message}
  `;
 
  return <div>{content}</div>;
};