import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgCloud: React.FC<SvgProps> = (props) => (
  <Svg width={396} height={177} viewBox="0 0 396 177" fill="none" {...props}>
    <Path
      d="M44.6582 69.7273C8.65823 46.4849 0 3.19698e-06 0 3.19698e-06L335.392 0H370.481C370.481 0 382.424 0.596422 390.076 9.83333C396 16.9848 396 26.3712 396 26.3712V69.7273V177C368.203 172.083 364.557 168.955 340.861 153.758C340.861 153.758 294.07 181.553 224.658 168.061C162.684 156.014 138.532 99.2273 138.532 99.2273C138.532 99.2273 91.9156 100.238 44.6582 69.7273Z"
      fill="#A9A9A9"
    />
  </Svg>
);

export default SvgCloud;
