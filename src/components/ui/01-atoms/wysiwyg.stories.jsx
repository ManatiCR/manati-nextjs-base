/** @jsxImportSource theme-ui */
import { BaseStyles } from 'theme-ui';
import parse from 'html-react-parser';

export default {
  title: 'Atoms/WYSIWYG Text',
  component: BaseStyles,
};

const Template = (args) => (
  // eslint-disable-next-line react/destructuring-assignment
  <BaseStyles sx={{ variant: 'text.body' }}>{parse(args.content)}</BaseStyles>
);

const dummyContent = `<p>
  Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit
  amet non magna. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo,
  tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
</p>
<h2>Cum sociis natoque penatibus et magnis</h2>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet
  fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam.
  Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis
  dapibus posuere velit aliquet.
</p>
<ul>
  <li>Nulla vitae elit libero, a pharetra augue.</li>
  <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
  <li>Nullam id dolor id nibh ultricies vehicula ut id elit.</li>
  <li>Maecenas faucibus mollis interdum.</li>
  <li>Vestibulum id ligula porta felis euismod semper.</li>
  <li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
</ul>
<p>
  Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce
  dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
  amet risus. Nullam quis risus eget urna mollis ornare vel eu leo.
</p>
`;

export const Default = Template.bind({});
Default.args = {
  content: dummyContent,
};
