import styled from '../../themes/styled';

export const Container = styled('div')<any>`
  margin: 0 10px 12px 0;
`;

export const FormGroup = styled('div')<any>`
  display: block;
  position: relative;
`;
export const FormLabel = styled('label')<any>`
  display: block;
  font-size: 10px;
  color: #aaa;
  font-family: 'Arial', sans-serif;
  text-transform: uppercase;
  margin-bottom: 2px;
`;

export const FormStyled = styled('form')<any>`
  .d-flex {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
      width: calc(50% - 5px);
    }

    button {
      width: 100%;
      background: #cdcdcd;
    }
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  margin-bottom: 16px;

  > button {
    width: 100%;
  }

  .event_btn {
    height: 40px;
    text-transform: uppercase;
    font-family: 'Arial', sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;
