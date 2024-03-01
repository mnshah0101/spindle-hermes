//create a function that replaces spaces with underscores, removes parentheses, and lowercases all letters

export default function cleanString(string) {
    return string.trim().replace(/ /g, '_').toLowerCase().replace(/[()]/g, '');
    }
