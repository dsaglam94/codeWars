// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid

function multiply(a, b) {
    return (BigInt(a) * BigInt(b)).toString()
}