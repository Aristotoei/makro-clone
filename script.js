const Calculate = (x) => {
  let y = 5832;
  for (let i = 0; i < x; i++) {
    y = y-(y/3)
    console.log(y);
  }
}
Calculate(100);