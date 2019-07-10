const myFunc = require('.').myFunc

if (myFunc() !== 42) {
  console.error("+++ :node: Tests failed")
  console.error("myFunc !== 42")
  process.exit(1)
} else {
  console.log("Tests pass")
}