import styled from 'styled-components';

const windowHeight = window.innerHeight;

export const CommentList = styled.div`
  position: relative;
  width: 100%;
  height: calc(44vw - 102px);
  ul {
    width: 100%;
    height: 100%;
    padding: 12px 0 0 0;
    list-style: none;
    overflow: auto;
  }

  li {
    display: flex;
    width: 100%;
    padding: 12px 16px;
  }

  .image {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #bdbdbd;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    &.is-default {
      background-size: 80% auto;
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1595771754908' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2261' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M512 512c94.293333 0 170.666667-76.373333 170.666667-170.666667s-76.373333-170.666667-170.666667-170.666666-170.666667 76.373333-170.666667 170.666666 76.373333 170.666667 170.666667 170.666667z m0 85.333333c-113.92 0-341.333333 57.173333-341.333333 170.666667v85.333333h682.666666v-85.333333c0-113.493333-227.413333-170.666667-341.333333-170.666667z' fill='%23ffffff' p-id='2262'%3E%3C/path%3E%3C/svg%3E");
    }
  }

  .text {
    width: 100%;
    padding-left: 8px;
    font-size: 12px;
  }

  .user-name {
    width: 100%;
    display: flex;
    align-items: center;
    color: #888;
    font-weight: 500;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  }

  .content {
    word-break: break-word;
  }

  .button {
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 120px;
    height: 24px;
    margin-left: -70px;
    font-size: 12px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 4px;
    transition: bottom 0.2s ease-in;
    &:hover {
      opacity: 1;
    }

    &.hidden {
      bottom: -32px;
    }
  }

  @media (max-width: 992px) {
    height: calc(${windowHeight}px - 67vw);
    
    ul {
      padding-top: 60px;
      padding-bottom: 74px;
    }

    .button {
      bottom: 80px;
    }
  }

  .icon-official-account {
    margin-left: 6px;
    width: 10px;
    height: 10px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='19px' height='12px' viewBox='0 0 19 12' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E形状@1x%3C/title%3E%3Cg id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Phone-发送' transform='translate(-122.000000, -559.000000)' fill='%23E5012C' fill-rule='nonzero'%3E%3Cg id='编组' transform='translate(16.000000, 372.000000)'%3E%3Cg id='评论备份-3' transform='translate(0.000000, 186.000000)'%3E%3Cg id='编组-2' transform='translate(40.000000, 0.000000)'%3E%3Cg id='LOGO' transform='translate(66.000000, 1.000000)'%3E%3Cg id='编组'%3E%3Cpath d='M14.7024366,4.31477599 C14.2493259,4.06269286 13.6095698,3.01405077 13.6168021,2.69678624 C13.647788,1.35806053 12.7428271,1.16205451 12.2901145,1.19880152 C11.286158,1.28001438 10.6560229,0.980760491 10.1792248,0.479826906 C9.70242676,-0.0215025184 9.27472842,0.00013665141 9.27472842,0.00013665141 C8.93428161,0.00013665141 8.66151278,0.124561878 8.3097863,0.539466569 C7.75854246,1.18963126 6.88576184,1.21285378 6.62095512,1.19840568 C6.35661287,1.18441938 5.7345062,1.12959576 5.35464691,1.43848171 C4.97478762,1.74736766 4.96516673,2.28267322 4.87220903,2.87682677 C4.77925132,3.47058448 4.15880342,4.05668931 3.84695388,4.31477599 C3.53510433,4.5727967 3.35244012,4.7744764 3.30413661,5.0337506 C3.25583311,5.29335466 3.17050576,5.38459543 3.66628019,6.23234949 C4.22077523,7.18058055 3.93387364,7.85350595 3.84735198,8.50927835 C3.76083032,9.16544659 4.15475601,9.59915361 4.99336589,9.82755241 C5.83197577,10.0560172 6.37353237,10.9154485 6.4407459,11.0858569 C6.50795943,11.2563314 6.94050138,11.9128954 7.34530864,11.9848721 C7.8708083,12.078092 8.2104589,11.7135908 8.55163558,11.6251869 C8.8924805,11.5367829 9.64131751,11.4591326 10.059395,11.6852224 C11.3474663,12.3813703 11.8910798,11.6687951 12.0495922,11.2059279 C12.2201806,10.7074354 12.8627897,9.99921436 13.5573516,9.82761838 C15.1025329,9.44635996 14.6200287,8.10044318 14.5826068,7.97001441 C14.5451848,7.83958563 14.4325209,6.72774134 14.8240579,6.29205513 C15.6444876,5.3778002 15.1555474,4.56679315 14.7024366,4.31477599 Z M10.5615391,6.74251931 L10.5594822,6.73532824 L10.5594822,6.74416863 L10.5619372,6.74258528 C10.893493,7.84004744 10.9667444,8.7806916 10.9667444,8.7806916 L9.20910731,7.71845906 C9.20820327,7.71891027 9.20727266,7.71930682 9.20632057,7.71964657 L9.20028263,7.71766738 C8.34196652,8.30779657 7.4458967,8.7806916 7.4458967,8.7806916 C7.4458967,8.7806916 7.51875007,7.84248845 7.84950964,6.74660964 C7.03909892,6.14209832 6.38965565,5.27989615 6.38965565,5.27989615 L8.32590958,5.1050675 L9.20632057,3.17944528 L10.0867316,5.10467166 L12.0229855,5.27989615 C12.0229855,5.27976421 11.372746,6.13715034 10.5615391,6.74251931 L10.5615391,6.74251931 Z' id='形状'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }


  /* @media screen and (max-width: 992px) and (orientation: landscape) {
    height: 100vh;
  } */
`;
