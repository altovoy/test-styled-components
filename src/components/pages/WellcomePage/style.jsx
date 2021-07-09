import styled from "styled-components"

const WellcomPageWrapper = styled.div`

  .full-container {
    width: 100%;
    display: flex;
    justify-content: center;

  }

  .container {
    display: grid;
    max-width: 300px;
    padding: 4px 16px 40px 16px;
    grid-template-columns: repeat(4, 1fr);
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-column: 1 / span 5;
  }

  .full-width {
    width: 100%;
  }

  .home-img {
    margin-bottom: 16px;
    padding: 0 28px;
    grid-column: 1 / span 5;
  }

  .title {
    font-weight: 900;
    text-align: center;
    font-size: 24px;
    line-height: 24px;
    margin: 0 0 16px 0;
  }

  .content-text {
    margin: 0 auto 94px 0;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
  }

  .btn {
    border: none;
    background: #7c01ff;
    font-style: normal;
    font-weight: bold;
    color: white;
    padding: 11px 24px;
    height: 40px;
    font-size: 13px;
    border-radius: 100px;
    grid-column: 3 / span 5;
  }
`;

export default WellcomPageWrapper
