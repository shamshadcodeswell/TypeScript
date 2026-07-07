function getData(data: string | number) {
  if (typeof data === "string") {
    return `${data} is string`;
  }
  if (typeof data === "number") {
    return `${data} is number`;
  }
}
console.log(getData("kdasj"));
