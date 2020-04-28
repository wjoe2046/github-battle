function add(x, y) {
  return x + y;
}

function makeAdder(x, addReference) {
  console.log(addReference);
  return function (y) {
    console.log(y);
    return addReference(x, y);
  };
}

const addFive = makeAdder(5, add);
