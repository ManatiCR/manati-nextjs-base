/** @jsxImportSource theme-ui */
import Link from './link';

export default {
  title: 'Atoms/Buttons',
  component: Link,
};

// eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
const Template = (args) => <Link {...args}>{args.title}</Link>;

export const Primary = Template.bind({});
Primary.args = {
  href: 'http://www.google.com/',
  title: 'This is a link',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  href: 'http://www.google.com/',
  title: 'This is a link',
  variant: 'secondary',
};

export const WhiteOutline = Template.bind({});
WhiteOutline.args = {
  href: 'http://www.google.com/',
  title: 'This is a link',
  variant: 'white-outline',
};

export const LinkOnly = Template.bind({});
LinkOnly.args = {
  href: 'http://www.google.com/',
  title: 'This is a link',
  variant: 'link-only',
};

export const BlueLight = Template.bind({});
BlueLight.args = {
  href: 'http://www.google.com/',
  title: 'This is a link',
  variant: 'blue-light',
};

export const Orange = Template.bind({});
Orange.args = {
  href: 'http://www.google.com/',
  title: 'This is a link',
  variant: 'orange',
};
