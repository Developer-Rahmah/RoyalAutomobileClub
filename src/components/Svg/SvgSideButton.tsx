import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgSideButton: React.FC<SvgProps> = (props) => (
  <Svg width={20} height={120} viewBox="0 0 27 157" fill="none" {...props}>
    <Path
      d="M0 0H17C22.5228 0 27 4.47715 27 10V147C27 152.523 22.5228 157 17 157H0V0Z"
      fill="#575757"
    />
    <Path
      d="M19.5 141.508L15.292 141.508L15.292 139.748C15.292 136.964 14.14 135.332 11.388 135.332C9.548 135.332 7.916 136.228 7.916 139.188L7.916 142.964L19.5 142.964L19.5 141.508ZM14.028 139.86L14.028 141.508L9.164 141.508L9.164 139.62C9.164 137.764 9.804 136.852 11.468 136.852C13.628 136.852 14.028 138.18 14.028 139.86ZM19.692 126.549C19.692 124.901 18.908 123.621 17.308 123.285L17.02 124.565C17.948 124.789 18.476 125.333 18.476 126.501C18.476 127.813 17.82 128.741 15.724 128.805L15.724 123.269C15.34 123.221 14.972 123.205 14.652 123.205C12.62 123.205 11.1 124.165 11.1 126.469C11.1 128.581 12.396 130.341 15.404 130.341C17.66 130.341 19.692 129.461 19.692 126.549ZM14.572 124.709L14.572 128.789C12.94 128.709 12.284 127.653 12.284 126.565C12.284 125.269 13.1 124.709 14.572 124.709ZM12.62 113.211L11.116 113.211C11.1 113.355 11.1 113.419 11.1 113.515C11.1 114.667 11.484 115.531 12.46 116.251L11.276 116.363L11.276 117.579L19.5 117.579L19.5 116.123L13.516 116.123C12.892 115.451 12.476 114.235 12.62 113.211ZM11.1 105.563C11.1 107.227 11.916 108.603 13.58 108.603C15.5 108.603 15.788 106.987 16.06 105.643C16.284 104.523 16.444 103.851 17.356 103.851C18.236 103.851 18.54 104.571 18.54 105.563C18.54 107.019 17.836 107.387 16.956 107.611L17.308 108.907C18.956 108.651 19.692 107.515 19.692 105.627C19.692 103.627 18.764 102.411 17.196 102.411C15.356 102.411 15.052 103.835 14.732 105.339C14.492 106.491 14.252 107.163 13.404 107.163C12.78 107.163 12.252 106.779 12.252 105.579C12.252 104.379 12.828 104.059 13.772 103.867L13.484 102.555C12.028 102.811 11.1 103.611 11.1 105.563ZM19.692 93.6427C19.692 90.8747 17.932 89.7547 15.228 89.7547C12.78 89.7547 11.1 90.8267 11.1 93.4347C11.1 96.0587 12.764 97.4347 15.42 97.4347C17.852 97.4347 19.692 96.4907 19.692 93.6427ZM18.524 93.5627C18.524 95.1627 17.532 95.9307 15.356 95.9307C13.164 95.9307 12.3 94.9547 12.3 93.4987C12.3 92.0747 13.052 91.2747 15.324 91.2747C17.66 91.2747 18.524 92.1387 18.524 93.5627ZM19.5 77.3091L13.916 77.3091C12.06 77.3091 11.1 78.0771 11.1 79.8371C11.1 80.9731 11.612 81.9971 12.252 82.7971L11.276 82.8771L11.276 84.1571L19.5 84.1571L19.5 82.7011L13.372 82.7011C12.988 82.2691 12.38 81.2451 12.38 80.3011C12.38 79.1811 13.004 78.7651 14.14 78.7651L19.5 78.7651L19.5 77.3091ZM17.948 65.313L13.932 65.313C11.884 65.313 11.1 66.225 11.1 68.257C11.1 70.161 11.82 71.153 13.356 71.409L13.596 70.129C12.684 69.953 12.236 69.521 12.236 68.385C12.236 67.041 12.876 66.753 13.916 66.753L14.716 66.753C14.7 66.977 14.684 67.217 14.684 67.473C14.684 69.793 15.292 71.729 17.484 71.729C18.284 71.729 19.692 71.377 19.692 69.297C19.692 68.145 19.324 67.297 18.684 66.657C19.212 66.577 19.66 66.209 19.66 65.393C19.66 64.993 19.564 64.577 19.404 64.257L18.492 64.321C18.556 64.529 18.588 64.673 18.588 64.817C18.588 65.233 18.396 65.313 17.948 65.313ZM15.772 66.737L17.628 66.737C18.108 67.185 18.556 68.001 18.556 68.849C18.556 69.969 17.948 70.225 17.244 70.225C15.836 70.225 15.724 68.705 15.724 67.569C15.724 67.265 15.74 66.961 15.772 66.737ZM19.5 57.6386L7.42 57.6386L7.42 59.0946L19.5 59.0946L19.5 57.6386Z"
      fill="white"
    />
    <Path d="M9.5 21.5L16.5 29.5L9.5 36.5" stroke="white" strokeWidth={2} />
  </Svg>
);

export default SvgSideButton;