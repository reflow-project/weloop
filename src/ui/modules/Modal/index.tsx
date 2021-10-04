import { clearFix } from 'polished';
import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
// import Icons from 'ui/atoms/icons.tsx'
import styled from 'ui/themes/styled';
import { Box } from 'rebass/styled-components';
import { X } from 'react-feather';
import media from 'styled-media-query';
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(51, 60, 69, 0.95);
  z-index: 9999999999999;
  height: 100%;
  justify-content: center;
  overflow: auto;
  cursor: pointer;
`;

export const AlertWrapper = styled.div`
  margin-top: 4px;
  z-index: 99999;
  position: relative;
`;

const Dialog = styled.div`
  width: 700px;
  box-shadow: 0 2px 8px 3px rgba(0, 0, 0, 0.3);
  z-index: 9999999999;
  background-color: #ffffff;
  padding: 0;
  margin: 40px auto;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -350px;
  border-radius: 3px;
  outline: none;
  transform: translateY(-50%);

  ${media.lessThan('medium')`
    width: auto;
    left: 8px;
    right: 8px;
    margin: 0;
  `};
`;

const Action = styled.div`
  ${clearFix()};
  position: relative;
`;

const Close = styled(Box)`
  position: absolute;
  right: -10px;
  top: -10px;
  cursor: pointer;
  background: ${props => props.theme.colors.primary};
  width: 24px;
  height: 24px;
  border-radius: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999999999;
`;

const Content = styled.div`
  ${clearFix()};
  font-family: ${props => props.theme.fontFamily};
`;
export const Container = styled.div`
  font-family: ${props => props.theme.fontFamily};
  min-height: 300px;
  overflow-y: auto;
  max-height: 96vh;
`;
export const ModalContainer = styled(Container)`
  padding-bottom: 20px;
`;
export const Actions = styled(Box)`
  ${clearFix()};
  padding-top: 10px;
  padding-right: 10px;
  & button {
    float: right;
  }
`;

export const CounterChars = styled.div`
  position: absolute;
  top: 2px;
  right: 8px;
  text-transform: uppercase;
  text-align: center;
  background: #d0d9db;
  padding: 2px 10px;
  border-radius: 12px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1px;
`;

export const ContainerForm = styled.div`
  flex: 1;
  ${clearFix()};
  padding-top: 13px;
  position: relative;
  input {
    height: 40px;
    background: white;
    border-radius: 2px;
    border: ${props => props.theme.colors.border};
  }
  textarea {
    padding-top: 16px;
    line-height: 20px;
    background: white;
    border-radius: 2px;
    border: ${props => props.theme.colors.border};
    font-family: ${props => props.theme.fontFamily};
  }
`;

export const Header = styled.div`
  padding: 0 16px;
  padding-top: 16px;
  // border-bottom: 1px solid ${props => props.theme.colors.lighter};
  & h5 {
    text-align: center !important;
    margin: 0 !important;
  }
`;

export const Row = styled.div<{ big?: boolean }>`
  ${clearFix()};
  border-bottom: 1px solid ${props => props.theme.colors.lighter};
  height: ${props => (props.big ? '180px' : 'auto')};
  display: flex;
  padding: 20px;
  & textarea {
    height: 120px;
  }
  & label {
    width: 200px;
    line-height: 40px;
    ${media.lessThan('medium')`
    width: 100%;
  `};
  }

  ${media.lessThan('medium')`
    display: block;

  `};
`;

class Portal extends React.Component {
  static el = (() => {
    const _el = document.createElement('div');
    _el.setAttribute('id', 'modalPortal');
    _el.style.display = 'none';
    document.body.appendChild(_el);
    return _el;
  })();
  componentDidMount() {
    Portal.el.style.display = 'block';
  }

  componentWillUnmount() {
    Portal.el.style.display = 'none';
  }

  render() {
    return ReactDOM.createPortal(this.props.children, Portal.el);
  }
}

interface Props {
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ closeModal, children }) => {
  const handleCloseModal = useCallback(() => closeModal(), [closeModal]);
  return (
    <Portal>
      <Background onClick={handleCloseModal} />
      <Dialog>
        <Action>
          <Close onClick={handleCloseModal}>
            <X color="#fff" size={16} />
          </Close>
        </Action>
        <Content>{children}</Content>
      </Dialog>
    </Portal>
  );
};

export default Modal;
