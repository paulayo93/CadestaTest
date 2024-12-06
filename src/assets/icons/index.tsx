import React from 'react';
import Svg, {SvgProps, Path, Mask, G, Circle, Rect} from 'react-native-svg';

interface Props extends SvgProps {
  size?: number;
  color?: string;
}

// export const HomeTabIcon = (props: SvgProps) => (
//   <Svg width={13} height={14} fill="none" {...props}>
// <Path
//   fillRule="evenodd"
// clipRule="evenodd"
// d="m7.004.204 5.43 5.565c.258.265.406.635.406 1.015v5.912c0 .779-.597 1.412-1.33 1.412H9.318V7.756a.705.705 0 0 0-.705-.706H4.387a.705.705 0 0 0-.705.706v6.352H1.491c-.733 0-1.33-.633-1.33-1.412V6.784c0-.38.147-.75.404-1.015L5.996.204a.724.724 0 0 1 1.008 0Zm.906 13.199H5.092V8.462H7.91v4.94Z"
// fill={props.fill || '#1A75FD'}
// />
// </Svg>
// );

export const HomeTabIcon = () => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <Path
      d="M20.4325 6.97619L14.6725 2.94619C13.1025 1.84619 10.6925 1.90619 9.18251 3.07619L4.17251 6.98619C3.17251 7.76619 2.38251 9.36619 2.38251 10.6262V17.5262C2.38251 20.0762 4.45251 22.1562 7.00251 22.1562H17.7825C20.3325 22.1562 22.4025 20.0862 22.4025 17.5362V10.7562C22.4025 9.40619 21.5325 7.74619 20.4325 6.97619ZM13.1425 18.1562C13.1425 18.5662 12.8025 18.9062 12.3925 18.9062C11.9825 18.9062 11.6425 18.5662 11.6425 18.1562V15.1562C11.6425 14.7462 11.9825 14.4062 12.3925 14.4062C12.8025 14.4062 13.1425 14.7462 13.1425 15.1562V18.1562Z"
      fill="#8BAA9E"
    />
  </Svg>
);

export const NotifyIcon = () => (
  <Svg width="26" height="27" viewBox="0 0 26 27" fill="none">
    <Path
      d="M12.5208 4.61523C9.07292 4.61523 6.27083 7.41732 6.27083 10.8652V13.8757C6.27083 14.5111 6 15.4798 5.67708 16.0215L4.47917 18.0111C3.73958 19.2402 4.25 20.6048 5.60417 21.0632C10.0937 22.5632 14.9375 22.5632 19.4271 21.0632C20.6875 20.6465 21.2396 19.1569 20.5521 18.0111L19.3542 16.0215C19.0417 15.4798 18.7708 14.5111 18.7708 13.8757V10.8652C18.7708 7.42773 15.9583 4.61523 12.5208 4.61523Z"
      stroke="#0A0C0F"
      stroke-width="1.5625"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <Path
      d="M14.4479 4.91733C14.125 4.82358 13.7917 4.75066 13.4479 4.70899C12.4479 4.58399 11.4896 4.65691 10.5938 4.91733C10.8958 4.14649 11.6458 3.60483 12.5208 3.60483C13.3958 3.60483 14.1458 4.14649 14.4479 4.91733Z"
      stroke="#0A0C0F"
      stroke-width="1.5625"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M15.6458 21.4381C15.6458 23.1569 14.2396 24.5631 12.5208 24.5631C11.6667 24.5631 10.875 24.209 10.3125 23.6465C9.75 23.084 9.39584 22.2923 9.39584 21.4381"
      stroke="#0A0C0F"
      stroke-width="1.5625"
      stroke-miterlimit="10"
    />
    <Circle cx="19" cy="6.58398" r="6" fill="#FF4B4B" stroke="white" />
  </Svg>
);
export const BriefCase = (props: Props) => (
  <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
    <Path
      d="M13.3334 19.7923H6.66668C2.81668 19.7923 2.10002 18.0006 1.91668 16.259L1.29168 9.58398C1.20002 8.70898 1.17502 7.41732 2.04168 6.45065C2.79168 5.61732 4.03335 5.21732 5.83335 5.21732H14.1667C15.975 5.21732 17.2167 5.62565 17.9583 6.45065C18.825 7.41732 18.8 8.70898 18.7084 9.59232L18.0834 16.2506C17.9 18.0006 17.1834 19.7923 13.3334 19.7923ZM5.83335 6.45898C4.42502 6.45898 3.45835 6.73398 2.96668 7.28398C2.55835 7.73398 2.42502 8.42565 2.53335 9.45898L3.15835 16.134C3.30002 17.4506 3.65835 18.5423 6.66668 18.5423H13.3334C16.3334 18.5423 16.7 17.4506 16.8417 16.1256L17.4667 9.46732C17.575 8.42565 17.4417 7.73398 17.0334 7.28398C16.5417 6.73398 15.575 6.45898 14.1667 6.45898H5.83335Z"
      fill={props?.color || '#34C759'}
    />
    <Path
      d="M13.3333 6.45897C12.9917 6.45897 12.7083 6.17564 12.7083 5.83397V5.16731C12.7083 3.68397 12.7083 3.12564 10.6667 3.12564H9.33332C7.29166 3.12564 7.29166 3.68397 7.29166 5.16731V5.83397C7.29166 6.17564 7.00832 6.45897 6.66666 6.45897C6.32499 6.45897 6.04166 6.17564 6.04166 5.83397V5.16731C6.04166 3.70064 6.04166 1.87564 9.33332 1.87564H10.6667C13.9583 1.87564 13.9583 3.70064 13.9583 5.16731V5.83397C13.9583 6.17564 13.675 6.45897 13.3333 6.45897Z"
      fill={props?.color || '#34C759'}
    />
    <Path
      d="M10 14.7923C7.70834 14.7923 7.70834 13.3757 7.70834 12.5257V11.6673C7.70834 10.4923 7.99168 10.209 9.16668 10.209H10.8333C12.0083 10.209 12.2917 10.4923 12.2917 11.6673V12.5007C12.2917 13.3673 12.2917 14.7923 10 14.7923ZM8.95834 11.459C8.95834 11.5257 8.95834 11.6007 8.95834 11.6673V12.5257C8.95834 13.384 8.95834 13.5423 10 13.5423C11.0417 13.5423 11.0417 13.409 11.0417 12.5173V11.6673C11.0417 11.6007 11.0417 11.5257 11.0417 11.459C10.975 11.459 10.9 11.459 10.8333 11.459H9.16668C9.10001 11.459 9.02501 11.459 8.95834 11.459Z"
      fill={props?.color || '#34C759'}
    />
    <Path
      d="M11.6667 13.1423C11.3583 13.1423 11.0833 12.909 11.05 12.5923C11.0083 12.2507 11.25 11.934 11.5917 11.8923C13.7917 11.6173 15.9 10.784 17.675 9.49232C17.95 9.28399 18.3417 9.35066 18.55 9.63399C18.75 9.90899 18.6917 10.3007 18.4083 10.509C16.4583 11.9257 14.1583 12.834 11.7417 13.1423C11.7167 13.1423 11.6917 13.1423 11.6667 13.1423Z"
      fill={props?.color || '#34C759'}
    />
    <Path
      d="M8.33333 13.1507C8.30833 13.1507 8.28333 13.1507 8.25833 13.1507C5.97499 12.8923 3.74999 12.059 1.82499 10.7423C1.54166 10.5507 1.46666 10.159 1.65833 9.87565C1.84999 9.59232 2.24166 9.51732 2.52499 9.70898C4.28333 10.909 6.30833 11.6673 8.39166 11.909C8.73332 11.9507 8.98332 12.259 8.94166 12.6007C8.91666 12.9173 8.64999 13.1507 8.33333 13.1507Z"
      fill={props?.color || '#34C759'}
    />
  </Svg>
);

export const VerticalDots = () => (
  <Svg width="4" height="11" viewBox="0 0 4 11" fill="none">
    <Path
      d="M1.99406 5.33101H2.00001V5.33695H1.99406V5.33101ZM1.99406 1.17224H2.00001V1.17818H1.99406V1.17224ZM1.99406 9.48979H2.00001V9.49573H1.99406V9.48979Z"
      stroke="#2E2E2E"
      stroke-width="2.22792"
      stroke-linejoin="round"
    />
  </Svg>
);

export const Calendar = () => (
  <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
    <Path d="M5.33328 2.06905V4.06905" stroke="#34C759" stroke-miterlimit="10" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M10.6666 2.06905V4.06905" stroke="#34C759" stroke-miterlimit="10" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M2.33328 6.79562H13.6666" stroke="#34C759" stroke-miterlimit="10" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path
      d="M13.9999 6.40238V12.069C13.9999 14.069 12.9999 15.4024 10.6666 15.4024H5.33327C2.99994 15.4024 1.99994 14.069 1.99994 12.069V6.40238C1.99994 4.40238 2.99994 3.06905 5.33327 3.06905H10.6666C12.9999 3.06905 13.9999 4.40238 13.9999 6.40238Z"
      stroke="#34C759" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M10.4631 9.86896H10.4691" stroke="#34C759" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M10.4631 11.869H10.4691" stroke="#34C759" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M7.99694 9.86896H8.00293" stroke="#34C759" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M7.99694 11.869H8.00293" stroke="#34C759" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M5.5295 9.86896H5.53549" stroke="#34C759" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M5.5295 11.869H5.53549" stroke="#34C759" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
  </Svg>
);
export const Calendar2 = () => (
  <Svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M5.33328 2.06905V4.06905" stroke="#34C759" stroke-miterlimit="10" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M10.6666 2.06905V4.06905" stroke="#34C759" stroke-miterlimit="10" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M2.33328 6.79562H13.6666" stroke="#34C759" stroke-miterlimit="10" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path
      d="M13.9999 6.40238V12.069C13.9999 14.069 12.9999 15.4024 10.6666 15.4024H5.33327C2.99994 15.4024 1.99994 14.069 1.99994 12.069V6.40238C1.99994 4.40238 2.99994 3.06905 5.33327 3.06905H10.6666C12.9999 3.06905 13.9999 4.40238 13.9999 6.40238Z"
      stroke="#34C759" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M10.4631 9.86896H10.4691" stroke="#34C759" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M10.4631 11.869H10.4691" stroke="#34C759" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M7.99694 9.86896H8.00293" stroke="#34C759" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M7.99694 11.869H8.00293" stroke="#34C759" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M5.5295 9.86896H5.53549" stroke="#34C759" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
    <Path d="M5.5295 11.869H5.53549" stroke="#34C759" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
  </Svg>

);

export const Clock = () => (
  <Svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M14.6667 8.73577C14.6667 12.4158 11.68 15.4024 8.00001 15.4024C4.32001 15.4024 1.33334 12.4158 1.33334 8.73577C1.33334 5.05577 4.32001 2.0691 8.00001 2.0691C11.68 2.0691 14.6667 5.05577 14.6667 8.73577Z"
      stroke="#F0A500" stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M10.4733 10.8558L8.40666 9.62244C8.04666 9.40911 7.75333 8.89577 7.75333 8.47577V5.74244" stroke="#F0A500"
          stroke-linecap="round" stroke-linejoin="round" />
  </Svg>
);

export const ClockChecked = () => (
  <Svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M12 22.2358C17.5 22.2358 22 17.7358 22 12.2358C22 6.73578 17.5 2.23578 12 2.23578C6.5 2.23578 2 6.73578 2 12.2358C2 17.7358 6.5 22.2358 12 22.2358Z"
      stroke="#34C759"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M7.75 12.2358L10.58 15.0658L16.25 9.40578"
      stroke="#34C759"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const Message = () => (
  <Svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M5.66667 7.73577H10.3333"
      stroke="#007AFF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M4.66666 13.0224H7.33333L10.3 14.9958C10.74 15.2891 11.3333 14.9758 11.3333 14.4424V13.0224C13.3333 13.0224 14.6667 11.6891 14.6667 9.6891V5.6891C14.6667 3.6891 13.3333 2.35577 11.3333 2.35577H4.66666C2.66666 2.35577 1.33333 3.6891 1.33333 5.6891V9.6891C1.33333 11.6891 2.66666 13.0224 4.66666 13.0224Z"
      stroke="#007AFF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
