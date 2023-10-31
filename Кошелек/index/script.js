//  auth
let login = localStorage.getItem("login");
let password = localStorage.getItem("password");
let is_auth = false;
let formPassword = localStorage.getItem("form-password");
let formLogin = localStorage.getItem("form-login");
if (localStorage.getItem("password") == null) {
  password = "0000";
}
if (localStorage.getItem("login") == null) {
  login = "login";
}
if (password == formPassword && login == formLogin) {
  is_auth = true;
}

const loginTitle = document.querySelector("#loginTitle");
const passwordTitle = document.querySelector("#passwordTitle");
const authFalse = document.querySelector(".auth-false");
const authTrue = document.querySelector(".auth-true");
const balanceTag = document.querySelector("#balance");

if (is_auth) {
  passwordTitle.textContent = `Пароль: ${password}`;
  loginTitle.textContent = `Логин: ${login}`;
  authFalse.classList.add("d-none");
} else {
  authTrue.classList.add("d-none");
}

if (localStorage.getItem("balance") != null) {
  balanceTag.textContent = localStorage.getItem("balance");
} else {
  balanceTag.textContent = 0;
}
// end auth

// Password
const updatePassword = document.querySelector("#updatePassword");
const confirmPassword = document.querySelector("#confirmPassword");
const updateBtn = document.querySelector("#updatePasswordBtn");
const confirmAlarm = document.querySelector("#confirmAlarm");
const updateAlarm = document.querySelector("#updateAlarm");

updateBtn.onclick = function () {
  if (updatePassword.value == confirmPassword.value) {
    confirmAlarm.classList.add("d-none");
    updateAlarm.classList.remove("d-none");
    localStorage.setItem("password", updatePassword.value);
    passwordTitle.textContent = `Password: ${updatePassword.value}`;
  } else {
    confirmAlarm.classList.remove("d-none");
    updateAlarm.classList.add("d-none");
  }
};
// End password

// Category
const categoryTitle = document.querySelector("#categoryTitle");
const categoriesList = document.querySelector("#categories");

const ActiveCategories = [];

let localCategories = localStorage.getItem("localCategories") || "";

// if (localCategories != "") {
//   let localCategoriesArr = localCategories.split(",").forEach(function (el) {
//     let categoryList = document.createElement("li");
//     categoryList.setAttribute("class", "list");
//     categoryList.textContent = `${el}`;
//     let trash = document.createElement("div");
//     trash.innerHTML =
//       '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path fill="#efefef" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
//     categoryList.append(trash);
//     categoriesList.append(categoryList);
//   });
// }

if (localCategories != "") {
  let localCategoriesArr = localCategories.split(",").forEach(function (el) {
    let categoryList = document.createElement("li");
    categoryList.innerHTML = `<label for="${el}" class="checkbox-label">
      <input id="${el}" type="checkbox" class="checkbox" value="${el}"/>
      <span class="check-style"></span>
      ${el}
      <div><svg class="svg svg-categories" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path fill="#efefef" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></div>
    </label>`;
    categoriesList.append(categoryList);
  });
}

categoryBtn.onclick = function () {
  let categoryList = document.createElement("li");
  categoryList.innerHTML = `<label for="${categoryTitle.value}" class="checkbox-label">
      <input id="${categoryTitle.value}" type="checkbox" class="checkbox" value="${categoryTitle.value}"/>
      <span class="check-style"></span>
      ${categoryTitle.value}
      <div><svg class="svg svg-categories" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path fill="#efefef" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></div>
  </label>`;
  categoriesList.append(categoryList);
  if (localCategories == "") {
    localCategories += categoryTitle.value;
  } else {
    localCategories += "," + categoryTitle.value;
  }
  incomeCategory();
  expenseCategory();
  localStorage.setItem("localCategories", localCategories);
  let svg = document.querySelectorAll(".svg-categories");
  deleteCategories(svg);
};
let svg = document.querySelectorAll(".svg-categories");
deleteCategories(svg);

function deleteCategories(svg) {
  console.log(svg);
  svg.forEach(function (el) {
    el.onclick = function (item) {
      let some = el.parentNode.parentNode.textContent;
      some = some.trim();
      localCategories.split(",").forEach(function (el) {
        if (some == el) {
          localCategories = localCategories.replace(el, "");
          localCategories = localCategories.replace(",", "");
        }
      });
      el.parentNode.parentNode.parentNode.remove();
      incomeCategory();
      expenseCategory();
      localStorage.setItem("localCategories", localCategories);
    };
  });
}

// End category

// Incomes
const form = document.querySelector("#form");

const incomeSum = document.querySelector("#incomeSum");
const incomeTitle = document.querySelector("#incomeTitle");
const incomeData = document.querySelector("#incomeData");
const incomeSelect = document.querySelector("#incomeSelect");
const incomeBtn = document.querySelector("#incomeBtn");
const incomesList = document.querySelector("#incomes");

// спасибо челику
incomeData.value = new Date().toISOString().substring(0, 10);

let localIncomes = localStorage.getItem("localIncomes") || "";
function restoreIncomes() {
  let i = 1;
  localIncomes.split("/").forEach(function (el) {
    let incomeList = document.createElement("li");
    incomeList.setAttribute("class", "list");
    let resultList = "";
    el.split(",").forEach(function (elem) {
      if (i == 1) {
        incomeList.textContent = `Загаловок: ${elem}`;
        resultList = incomeList.textContent + ", ";
      } else if (i == 2) {
        incomeList.textContent = `сумма: ${elem}`;
        resultList = resultList + incomeList.textContent + ", ";
      } else if (i == 3) {
        incomeList.textContent = `дата: ${elem}`;
        resultList = resultList + incomeList.textContent + ", ";
      } else {
        incomeList.textContent = `категория: ${elem}`;
        resultList = resultList + incomeList.textContent + " ";
        i = 0;
        incomeList.textContent = resultList;
        let trash = document.createElement("div");
        trash.innerHTML =
          '<svg class="green-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path fill="#efefef" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
        incomeList.append(trash);
        incomesList.append(incomeList);
      }
      i++;
    });
  });
}
if (localIncomes != "") {
  restoreIncomes();
}
function incomeCategory() {
  if (localCategories != "") {
    incomeSelect.innerHTML = "";
    let localCategoriesArr = localCategories.split(",").forEach(function (el) {
      let categoryList = document.createElement("option");
      categoryList.setAttribute("class", "option");
      categoryList.setAttribute("value", el);
      categoryList.textContent = `${el}`;
      incomeSelect.append(categoryList);
    });
  }
}
incomeCategory();

incomeBtn.onclick = function () {
  balanceTag.textContent = `${
    Number(balanceTag.textContent) + Number(incomeSum.value)
  }`;
  localStorage.setItem("balance", Number(balanceTag.textContent));
  let incomeList = document.createElement("li");
  incomeList.setAttribute("class", "list");
  incomeList.textContent = `Загаловок: ${incomeTitle.value}, сумма: ${incomeSum.value}, дата: ${incomeData.value}, категория: ${incomeSelect.value}`;
  let trash = document.createElement("div");
  trash.innerHTML =
    '<svg class="green-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path fill="#efefef" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
  incomeList.append(trash);
  incomesList.append(incomeList);
  localIncomes += `${incomeTitle.value},${incomeSum.value},${incomeData.value},${incomeSelect.value}/`;
  localStorage.setItem("localIncomes", localIncomes);
};

incomesList.onclick = function () {
  let icomesArr = document.querySelectorAll(".list");
  icomesArr.forEach(function (el) {
    el.onclick = function () {
      el.textContent = el.textContent.replace("Загаловок: ", "");
      el.textContent = el.textContent.replace(" сумма: ", "");
      el.textContent = el.textContent.replace(" дата: ", "");
      el.textContent = el.textContent.replace(" категория: ", "");
      el.textContent = el.textContent.slice(0, -1);
      localIncomes.split("/").forEach(function (elem) {
        // elem.split(",").forEach(function (word) {
        //   if (Number(word) >= 1) {
        //     balanceTag.textContent = `${
        //       Number(balanceTag.textContent) - Number(word)
        //     }`;
        //     localStorage.setItem("balance", Number(balanceTag.textContent));
        //   }
        // });
        if (el.textContent == elem) {
          localIncomes = localIncomes.replace(elem, "");
          localIncomes = localIncomes.slice(0, -1);
          if (localIncomes[0] == "/") {
            localIncomes = localIncomes.replace("/", "");
          }
          localStorage.setItem("localIncomes", localIncomes);
        }
      });
      el.remove();
    };
  });
};
// end incomes

// expenses
const expenseSum = document.querySelector("#expenseSum");
const expenseTitle = document.querySelector("#expenseTitle");
const expenseData = document.querySelector("#expenseData");
const expenseSelect = document.querySelector("#expenseSelect");
const expenseBtn = document.querySelector("#expenseBtn");
const expensesList = document.querySelector("#expenses");

expenseData.value = new Date().toISOString().substring(0, 10);

let localExpenses = localStorage.getItem("localExpenses") || "";
function restoreExpenses() {
  let i = 1;
  localExpenses.split("/").forEach(function (el) {
    let expenseList = document.createElement("li");
    expenseList.setAttribute("class", "list");
    let resultList = "";
    el.split(",").forEach(function (elem) {
      if (i == 1) {
        expenseList.textContent = `Загаловок: ${elem}`;
        resultList = expenseList.textContent + ", ";
      } else if (i == 2) {
        expenseList.textContent = `сумма: ${elem}`;
        resultList = resultList + expenseList.textContent + ", ";
      } else if (i == 3) {
        expenseList.textContent = `дата: ${elem}`;
        resultList = resultList + expenseList.textContent + ", ";
      } else {
        expenseList.textContent = `категория: ${elem}`;
        resultList = resultList + expenseList.textContent + " ";
        i = 0;
        expenseList.textContent = resultList;
        let trash = document.createElement("div");
        trash.innerHTML =
          '<svg class="red-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path fill="#efefef" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
        expenseList.append(trash);
        expensesList.append(expenseList);
      }
      i++;
    });
  });
}
if (localExpenses != "") {
  restoreExpenses();
}

function expenseCategory() {
  if (localCategories != "") {
    expenseSelect.innerHTML = "";
    let localCategoriesArr = localCategories.split(",").forEach(function (el) {
      let categoryList = document.createElement("option");
      categoryList.setAttribute("class", "option");
      categoryList.setAttribute("value", el);
      categoryList.textContent = `${el}`;
      expenseSelect.append(categoryList);
    });
  }
}
expenseCategory();

expenseBtn.onclick = function () {
  balanceTag.textContent = `${
    Number(balanceTag.textContent) - Number(expenseSum.value)
  }`;
  localStorage.setItem("balance", Number(balanceTag.textContent));
  let expenseList = document.createElement("li");
  expenseList.setAttribute("class", "list");
  expenseList.textContent = `Загаловок: ${expenseTitle.value}, сумма: ${expenseSum.value}, дата: ${expenseData.value}, категория: ${expenseSelect.value}`;
  let trash = document.createElement("div");
  trash.innerHTML =
    '<svg class="red-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path fill="#efefef" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
  expenseList.append(trash);
  expensesList.append(expenseList);
  localExpenses += `${expenseTitle.value},${expenseSum.value},${expenseData.value},${expenseSelect.value}/`;
  localStorage.setItem("localExpenses", localExpenses);
};
expensesList.onclick = function () {
  let icomesArr = document.querySelectorAll(".list");
  icomesArr.forEach(function (el) {
    el.onclick = function () {
      el.remove();
      el.textContent = el.textContent.replace("Загаловок: ", "");
      el.textContent = el.textContent.replace(" сумма: ", "");
      el.textContent = el.textContent.replace(" дата: ", "");
      el.textContent = el.textContent.replace(" категория: ", "");
      el.textContent = el.textContent.slice(0, -1);
      localExpenses.split("/").forEach(function (elem) {
        if (el.textContent == elem) {
          localExpenses = localExpenses.replace(elem, "");
          localExpenses = localExpenses.slice(0, -1);
          if (localExpenses[0] == "/") {
            localExpenses = localExpenses.replace("/", "");
          }
          localStorage.setItem("localExpenses", localExpenses);
        }
      });
      el.remove();
    };
  });
};
// end expenses
