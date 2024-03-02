// #1 looping a triangle
{
  console.info("---------- #1 looping a triangle ----------");

  for (let i = 1; i < 8; i++) console.log("#".repeat(i));
}

// #2 FizzBuzz
{
  console.info("---------- #2 FizzBuzz ----------");

  let output = Array.from({ length: 100 }, (_, i) =>
    (i + 1) % 3 === 0 ? "Fizz" : (i + 1) % 5 === 0 ? "Buzz" : i + 1,
  ).join(" ");

  console.log(output);
}

// #3 chessboard
{
  console.info("---------- #3 chessboard ----------");

  const size = 10;
  let board = "";

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      board += (x + y) % 2 === 0 ? " " : "#";
    }
    board += "\n";
  }

  console.log(board);
}
