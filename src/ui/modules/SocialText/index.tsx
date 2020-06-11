import { Textarea } from '@rebass/forms';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Flex } from 'rebass/styled-components';
// import { dropEmoji } from '../../lib/emoji';
// import EmojiPicker from 'emoji-picker-react';
// import OutsideClickHandler from 'react-outside-click-handler';
import Button from 'ui/elements/Button';
import styled from 'ui/themes/styled';
import { Trans } from '@lingui/macro';
// const PickerWrap = styled.div`
//   position: absolute;
//   right: 10px;
//   top: 45px;
//   z-index: 999999999999999999;
// `;
const Wrapper = styled(Flex)`
  width: 100%;
  position: relative;
  height: 200px;
  flex-direction: column;
`;
const SocialTextDiv = styled(Flex)`
  position: relative;
  width: 100%;
  align-items: center;
  border: ${props => props.theme.colors.border};
  border-radius: 4px;
  margin-bottom: 8px;
  background: white;
  flex: 1;
`;
// const EmojiPickerTrigger = styled(Box)`
//   cursor: pointer;
//   &:hover {
//     svg {
//       stroke: ${props => props.theme.colors.primary}
//     }
//   }
// `;

const SocialTextArea = styled(Textarea)`
  height: 100%;
  resize: none;
  background: ${props => props.theme.colors.appInverse};
  flex: 1;
  border: 0 !important;
  font-size: 16px !important;
  &:focus {
    outline: none;
  }
  font-family: 'Open Sans', sans-serif !important;
`;

const SocialActions = styled(Flex)`
  align-self: flex-end;
`;

export interface Props {
  submit(text: string): void;
  defaultValue?: string;
  keepTextOnSubmit?: boolean;
  placeholder?: string;
}
export const SocialText: React.FC<Props> = ({
  submit,
  defaultValue = '',
  keepTextOnSubmit = false,
  placeholder = ''
}) => {
  const ref = useRef<any>(null);
  const [text, setText] = useState(defaultValue);
  // const [isEmojiOpen, setEmojiOpen] = useState(false);
  // const toggleEmoji = useCallback(() => setEmojiOpen(!isEmojiOpen), [
  //   isEmojiOpen
  // ]);
  // const addEmoji = React.useCallback(
  //   (code, obj) => {
  //     // console.log(code, obj);
  //     if (!ref.current) {
  //       return;
  //     }
  //     const textarea = ref.current as HTMLTextAreaElement;
  //     const selectionStart = textarea.selectionStart;
  //     // const selectionEnd = textarea.selectionEnd
  //     const offset = dropEmoji(textarea, obj.emoji);
  //     const pos = selectionStart + offset;
  //     textarea.focus();
  //     // console.log([selectionStart,selectionEnd], offset, pos, [textarea.selectionStart, textarea.selectionEnd] )
  //     textarea.selectionEnd = pos;
  //   },
  //   [ref.current]
  // );
  const handleSubmit = useCallback(() => {
    if (!text) {
      return;
    }
    submit(text);
    if (!keepTextOnSubmit) {
      setText('');
    }
  }, [text, keepTextOnSubmit, submit]);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.value = text;
  }, [text]);
  const onChange = useCallback(() => {
    if (!ref.current) {
      return;
    }
    const txt = ref.current.value;
    setText(txt);
  }, [setText]);
  return (
    <Wrapper>
      <SocialTextDiv>
        <SocialTextArea
          placeholder={placeholder}
          ref={ref}
          defaultValue={defaultValue}
          onInput={onChange}
        />
        {/* {isEmojiOpen && (
          <OutsideClickHandler onOutsideClick={toggleEmoji}>
            <PickerWrap>
              <EmojiPicker preload onEmojiClick={addEmoji} />
            </PickerWrap>
          </OutsideClickHandler>
        )} */}
      </SocialTextDiv>
      <SocialActions>
        {/* <EmojiPickerTrigger onClick={toggleEmoji}>
            <Smile color={'rgba(0,0,0,.4)'} size="24" />
          </EmojiPickerTrigger> */}
        <Button
          variant="primary"
          sx={{
            cursor: text ? 'pointer' : 'default',
            textTransform: 'capitalize'
          }}
          onClick={handleSubmit}
        >
          <Trans>Publish</Trans>
        </Button>
      </SocialActions>
    </Wrapper>
  );
};
export default SocialText;
