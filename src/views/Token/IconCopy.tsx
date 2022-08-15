import styled from 'styled-components';

const CopyStyle = styled.svg`
  width: 24px;
  height: 24px;
`;

const CopySvg = () => (
  <path d="M6.21152 0.467532C5.54641 0.933262 5.544 0.966293 5.544 10.1896C5.544 18.4262 5.59865 19.4898 6.03976 19.8568C6.41901 20.1717 8.09366 20.2904 13.1593 20.3606C16.8023 20.4111 20.0831 20.3771 20.4498 20.2849C22.0593 19.8811 22.0593 19.8814 22.0593 10.1881C22.0593 1.60138 22.0325 1.17439 21.4587 0.600555C20.8927 0.0345319 20.4579 0 13.8686 0C8.0282 0 6.76914 0.0768708 6.21152 0.467532ZM20.5579 10.2094V18.6172H13.8016H7.04539V10.2094V1.80167H13.8016H20.5579V10.2094ZM2.15117 4.39366C2.03556 4.50957 1.94067 8.75399 1.94067 13.826C1.94067 22.0317 1.99532 23.0931 2.43643 23.4601C2.81568 23.7751 4.49033 23.8937 9.55601 23.9639C17.0584 24.0678 17.6368 24.0003 17.4996 23.0358C17.4053 22.3737 17.3737 22.3704 10.428 22.2902L3.45107 22.2094L3.3715 13.2858C3.30213 5.50859 3.23217 4.35042 2.82679 4.27265C2.57096 4.2234 2.26708 4.27775 2.15117 4.39366Z" />
);

export const IconCopy = () => (
  <CopyStyle>
    <CopySvg />
  </CopyStyle>
);
