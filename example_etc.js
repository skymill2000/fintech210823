let car = {
  name: "sonata",
  ph: 120,
  sn: 1232123123,
  date: new Date(),
};

const printCar = (car) => {
  const { name, ph, sn, date } = car;
  //...
  const description =
    "자동차의 이름은 : " +
    name +
    " 입니다. 자동차의 마력은 : " +
    ph +
    " 입니다.";
  const templetDescription = `자동차의 이름은 : ${name} 입니다. 자동차의 마력은 : ${ph} 입니다`;
  console.log(templetDescription);
};

printCar(car);
