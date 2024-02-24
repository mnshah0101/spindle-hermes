//create a function that makes everything lowercase and connects spaces with _

function processName(name) {
  return name.toLowerCase().split(' ').join('');
}
export default processName;