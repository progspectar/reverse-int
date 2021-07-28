function reverse(n) {
    const str = "" + Math.abs(n);
    return +[...str].reverse().join("");
}

module.exports = reverse;
