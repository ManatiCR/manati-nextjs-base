/** @jsxImportSource theme-ui */
import { ColorPalette } from '@theme-ui/style-guide';

export default {
  title: 'Atoms/Colors',
  component: ColorPalette,
};

const styles = {
  fontSize: 'px-12',
};

const Template = () => <ColorPalette sx={styles} />;

export const Default = Template;
