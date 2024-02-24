//create a function that makes every start of a word uppercase and deletes spaces
//
function processName(name) {
    return name.toLowerCase().split(' ').join('');

 }

    export default processName;