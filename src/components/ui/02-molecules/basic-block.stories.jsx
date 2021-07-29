/** @jsxImportSource theme-ui */
import { BaseStyles } from 'theme-ui';
import parse from 'html-react-parser';

import BasicBlock from './basic-block';

export default {
  title: 'Molecules/Basic Block',
  component: BasicBlock,
};

const dummyText = `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo,
  tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac
  cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec
  ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient
  montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus.
</p>`;

const Template = (args) => (
  /* eslint-disable */
  <BasicBlock
    {...{ ...args, body: <BaseStyles>{parse(args.body)}</BaseStyles> }}
  />
  /* eslint-enable */
);

export const Default = Template.bind({});
Default.args = {
  title: 'This is a test',
  body: dummyText,
  headingLevel: 'h2',
};
