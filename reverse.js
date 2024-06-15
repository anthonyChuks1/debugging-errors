const reverse = function(original) {
  return original.split('').join('');
};

let input = process.argv[2];

if (input) {
  console.log(reverse(input));
}