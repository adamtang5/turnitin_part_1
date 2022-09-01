// xs: array
// returns: a new array, with unique items

/*
Upon clarification:
Someone on the tech team had this response to your question:
I would say this exercise is referring to value equality only.
I would focus this function on data types passed by value and
omit those passed by reference.
*/

function removeDuplicates(xs) {
    const set = new Set();
    xs.forEach(el => set.add(el));
    return Array.from(set);
}
