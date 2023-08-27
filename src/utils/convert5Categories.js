export function getRandomDictionaries(arr, num) {
  const result = [];
  const copy = arr.slice();
  for (let i = 0; i < num; i++) {
    const index = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(index, 1)[0]);
  }
  return result;
}