export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const vSubStr = value.substring(startString.length);

      if (vSubStr && vSubStr !== value) {
        parts.push(vSubStr);
      }
    }
  }
  return parts.join('-');
}
