import styled from 'styled-components';

const PageStyle = styled.svg`
  width: 24px;
  height: 24px;
`;

const PageSvg = () => (
  <path d="M0.818334 0.818334L0 1.63633V12V22.3637L0.818334 23.1817L1.63633 24H12H22.3637L23.1817 23.1817L24 22.3637V12V1.63633L23.1817 0.818334L22.3637 0H12H1.63633L0.818334 0.818334ZM22 12V22H12H2V12V2H12H22V12ZM5.45233 5.83767C5.34567 6.115 5.444 6.565 5.67033 6.83767C6.27767 7.56933 17.7223 7.56933 18.3297 6.83767C18.556 6.565 18.6543 6.115 18.5477 5.83767C18.2583 5.083 5.74167 5.083 5.45233 5.83767ZM5.75 11.2207C5.15667 11.46 5.23367 12.557 5.86067 12.7977C6.548 13.0613 17.452 13.0613 18.1393 12.7977C18.8213 12.536 18.8213 11.464 18.1393 11.2023C17.512 10.9617 6.35133 10.978 5.75 11.2207ZM5.67033 17.1623C5.444 17.435 5.34567 17.885 5.45233 18.1623C5.735 18.899 13.389 18.9027 14 18.1667C14.331 17.7677 14.331 17.5657 14 17.1667C13.4003 16.4443 6.26933 16.4407 5.67033 17.1623Z" />
);

export const IconPage = () => (
  <PageStyle>
    <PageSvg />
  </PageStyle>
);
