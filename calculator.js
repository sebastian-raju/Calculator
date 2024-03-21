displayData = (num) => {
  result.value += num;
}

clearData = () =>{
  result.value = '';
}

lastElementRemove = () => {
  result.value = result.value.slice(0, -1);
}

mainResult = () => {
  result.value = eval(result.value);
}