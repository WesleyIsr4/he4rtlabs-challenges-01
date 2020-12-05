function clear(element) {
  clear.innerHTML = "";
}

document.getElementById("calcular").addEventListener("click", calcule);
let result = document.getElementById("result-freelar");

function calcule() {
  clear(result);

  let valueProj = document.getElementById("valueProject").value;
  let hoursPerDay = document.getElementById("hoursPerDay").value;
  let daysWeek = document.getElementById("daysWeek").value;
  let dayHoliday = document.getElementById("dayHoliday").value;

  let costPerHour =
    valueProj / (daysWeek * 4 * hoursPerDay) +
    dayHoliday * daysWeek * hoursPerDay;

  let resultCost = `Seu valor por hora é: R$ ${costPerHour.toFixed(2)}`;

  let newContent = document.createTextNode(resultCost);
  result.appendChild(newContent);
  document.innerHTML = result;
}
