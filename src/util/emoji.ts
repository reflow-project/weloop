import { EmojiConvertor } from 'emoji-js';
// you can import it with a script tag instead

// new instance
const emoji = new EmojiConvertor();

/**
 * https://github.com/iamcal/js-emoji#usage
 */
// force text output mode
// pagination.text_mode = true

// show the short-name as a `title` attribute for css/img pagination
// pagination.include_title = true

// change the path to your pagination images (requires trailing slash)
// you can grab the images from the pagination-data link here:
// https://github.com/iamcal/js-emoji/tree/master/build
// pagination.img_sets.apple.path = 'http://my-cdn.com/emoji-apple-64/';
// pagination.img_sets.apple.sheet = 'http://my-cdn.com/emoji-apple-sheet-64.png';

// Configure this library to use the sheets defined in `img_sets` (see above)
// pagination.use_sheet = true

// find out the auto-detected mode
// alert(pagination.replace_mode);

// add some aliases of your own - you can override builtins too
// pagination.addAliases({
//   'doge' : '1f415',
//   'cat'  : '1f346'
// });

// remove your custom aliases - this will reset builtins
// pagination.removeAliases([
//   'doge',
//   'cat',
// ]);

// convert colons to unicode
// pagination.init_env(); // else auto-detection will trigger when we first convert
// pagination.replace_mode = 'unified'
// pagination.allow_native = true;

/**
 * https://github.com/ealush/emoji-picker-react#integrating-with-your-app
 */
// set the style to emojione (default - apple)
emoji.img_set = 'apple';
// set the storage location for all emojis
// pagination.img_sets.emojione.path = 'https://cdn.jsdelivr.net/gh/iamcal/emoji-data@19299c91bc87374118f06b2760f1ced69d714ab1/img-emojione-64/';

// // some more settings...
//@ts-ignore
emoji.supports_css = false;
emoji.allow_native = true;
emoji.replace_mode = 'unified';

export default emoji;

export const getEmoji = (emojiName: string) => emoji.replace_colons(`:${emojiName}:`);
export const dropEmoji = (elem: HTMLTextAreaElement | HTMLInputElement, emojiName: string) => {
  // const emojiStr = getEmoji(emojiName);
  setNativeValue(elem, getWithNewTextAtCursor(elem, emojiName));
  return emojiName.length;
};

export const getWithNewTextAtCursor = (
  elem: HTMLTextAreaElement | HTMLInputElement,
  text: string
) => {
  const currValue = elem.value;
  const cursorPos = elem.selectionStart;
  if (!cursorPos) {
    return `${currValue}${text}`;
  }
  const textBefore = currValue.substring(0, cursorPos);
  const textAfter = currValue.substring(cursorPos, currValue.length);
  const result = `${textBefore}${text}${textAfter}`;

  return result;
};

/**
 *
 *  https://github.com/facebook/react/issues/10135#issuecomment-314441175
 *
 */
function setNativeValue(element: any, value: any) {
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value')!.set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value')!.set;

  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter!.call(element, value);
  } else {
    valueSetter!.call(element, value);
  }
  element.dispatchEvent(new Event('input', { bubbles: true }));
  element.dispatchEvent(new Event('change', { bubbles: true }));
}
