export function limitTextLength (text, maxLength) {
  if (!text) return
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...'
  } else {
    return text
  }
}

export function limitCharacters (text) {
  if (text) {
    if (text.length > 25) {
      return `${text.slice(0, 15)}...${text.slice(text.length - 7, text.length)}`
    } else {
      return text
    }
  }
}