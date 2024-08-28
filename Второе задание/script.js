const openBtnEl = document.querySelector(".open-btn");
const formEl = document.querySelector(".form");
const formCloseBtnEl = document.querySelector(".form__close-btn");

// iMask

function maskStateNumber() {
  const input = document.getElementById("state-number");
  const maskOptions = {
    mask: "a 000 aa 000",
    definitions: {
      a: /[АВЕКМНОРСТУХ]/,
      0: /[0-9]/,
    },
  };
  const mask = IMask(input, maskOptions);
}
function maskPassportSeries() {
  const seriesInput = document.getElementById("passport-series");
  const numberInput = document.getElementById("passport-number");

  const seriesMaskOptions = {
    mask: "0000",
    definitions: {
      0: /[0-9]/,
    },
  };

  const numberMaskOptions = {
    mask: "000000",
    definitions: {
      0: /[0-9]/,
    },
  };

  const seriesMask = IMask(seriesInput, seriesMaskOptions);
  const numberMask = IMask(numberInput, numberMaskOptions);
}
function maskDate(elId) {
  const dateInput = document.getElementById(elId);
  flatpickr(dateInput, {
    dateFormat: "d.m.Y",
    enableTime: false,
    locale: "ru",
  });
}

// Загурзка данных из localStorage
document.addEventListener("DOMContentLoaded", function () {
  const stateNumber = localStorage.getItem("stateNumber");
  const vehicle = localStorage.getItem("vehicle");
  const date = localStorage.getItem("date");
  const name = localStorage.getItem("name");
  const passportSeries = localStorage.getItem("passportSeries");
  const passportNumber = localStorage.getItem("passportNumber");
  const issuedBy = localStorage.getItem("issuedBy");
  const whenIssued = localStorage.getItem("whenIssued");

  if (stateNumber) document.getElementById("state-number").value = stateNumber;
  if (vehicle) document.getElementById("vehicle").value = vehicle;
  if (date) document.getElementById("date").value = date;
  if (name) document.getElementById("name").value = name;
  if (passportSeries)
    document.getElementById("passport-series").value = passportSeries;
  if (passportNumber)
    document.getElementById("passport-number").value = passportNumber;
  if (issuedBy) document.getElementById("issued-by").value = issuedBy;
  if (whenIssued) document.getElementById("when-issued").value = whenIssued;

  maskStateNumber();
  maskPassportSeries();
  maskDate("date");
  maskDate("when-issued");
});

//  Добавлении данных в localStorage при вводе текста
formEl.addEventListener("input", function () {
  localStorage.setItem(
    "stateNumber",
    document.getElementById("state-number").value
  );
  localStorage.setItem("vehicle", document.getElementById("vehicle").value);
  localStorage.setItem("date", document.getElementById("date").value);
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem(
    "passportSeries",
    document.getElementById("passport-series").value
  );
  localStorage.setItem(
    "passportNumber",
    document.getElementById("passport-number").value
  );
  localStorage.setItem("issuedBy", document.getElementById("issued-by").value);
  localStorage.setItem(
    "whenIssued",
    document.getElementById("when-issued").value
  );
});

// Активация popup
openBtnEl.addEventListener("click", () => {
  formEl.classList.add("active");
});

// Закрытие popup
formCloseBtnEl.addEventListener("click", () => {
  formEl.classList.remove("active");
});

// Отправка формы
formEl.addEventListener("submit", (e) => {
  localStorage.removeItem("stateNumber");
  localStorage.removeItem("vehicle");
  localStorage.removeItem("date");
  localStorage.removeItem("name");
  localStorage.removeItem("passportSeries");
  localStorage.removeItem("passportNumber");
  localStorage.removeItem("issuedBy");
  localStorage.removeItem("whenIssued");
  formEl.classList.remove("active");
});
