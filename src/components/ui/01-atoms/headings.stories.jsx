/** @jsxImportSource theme-ui */

import { Heading } from 'theme-ui';

export default {
  title: 'Atoms/Headings',
  component: Heading,
};

// eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
const Template = (args) => <Heading {...args}>{args.text}</Heading>;

export const headingLevel1 = Template.bind({});
headingLevel1.args = {
  text: 'This is a H1 heading',
  as: 'h1',
  variant: 'styles.h1',
};

export const headingLevel2 = Template.bind({});
headingLevel2.args = {
  text: 'This is a H2 heading',
  as: 'h2',
  variant: 'styles.h2',
};

export const headingLevel3 = Template.bind({});
headingLevel3.args = {
  text: 'This is a H3 heading',
  as: 'h3',
  variant: 'styles.h3',
};

export const headingLevel4 = Template.bind({});
headingLevel4.args = {
  text: 'This is a H4 heading',
  as: 'h4',
  variant: 'styles.h4',
};

export const headingLevel5 = Template.bind({});
headingLevel5.args = {
  text: 'This is a H5 heading',
  as: 'h5',
  variant: 'styles.h5',
};

export const headingLevel6 = Template.bind({});
headingLevel6.args = {
  text: 'This is a H6 heading',
  as: 'h6',
  variant: 'styles.h6',
};
