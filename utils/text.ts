/**
 * @ref: https://stackoverflow.com/questions/1199352/smart-way-to-truncate-long-strings
 * @param text
 * @param size
 * @returns
 */
export function truncate(text: string, size: number = 200) {
  return text.length > size ? `${text.slice(0, size - 1).trim()}...` : text;
}
