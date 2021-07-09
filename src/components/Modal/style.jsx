import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  .modal-container {
    background-color: rgba(35, 35, 19, 0.5);
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  .modal-content .btn {
    display: block;
    margin-bottom: 32px;
  }
`;