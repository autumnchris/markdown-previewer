import getLocalStorage from './getLocalStorage';
import setToLocalStorage from './setToLocalStorage';

export default function getMarkdownCode(value) {
  if (value) setToLocalStorage('markdownCode', value);
  return getLocalStorage('markdownCode') || '';
}