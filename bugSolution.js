function myFunc(...args) {
  console.log(args[0]);
  console.log(args[1]);
  console.log(args[2]); //This will now work correctly
}

myFunc(1,2,3); //Outputs 1, 2, 3 correctly