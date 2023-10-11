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
  passwordTitle.textContent = `Password: ${password}`;
  loginTitle.textContent = `Login: ${login}`;
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

let localCategories = localStorage.getItem("localCategories") || "";

if (localCategories != "") {
  let localCategoriesArr = localCategories.split(",").forEach(function (el) {
    let categoryList = document.createElement("li");
    categoryList.setAttribute("class", "list");
    categoryList.textContent = `${el}`;
    categoriesList.append(categoryList);
  });
}

categoryBtn.onclick = function () {
  let categoryList = document.createElement("li");
  categoryList.setAttribute("class", "list");
  categoryList.textContent = `${categoryTitle.value}`;
  categoriesList.append(categoryList);
  if (localCategories == "") {
    localCategories += categoryTitle.value;
  } else {
    localCategories += "," + categoryTitle.value;
  }
  incomeCategory();
  expenseCategory();
  localStorage.setItem("localCategories", localCategories);
};
categoriesList.onclick = function () {
  let icomesArr = document.querySelectorAll(".list");
  icomesArr.forEach(function (elem) {
    elem.onclick = function () {
      localCategories.split(",").forEach(function (el) {
        if (elem.textContent == el) {
          localCategories = localCategories.replace(el, "");
          localCategories = localCategories.replace(",", "");
        }
      });
      elem.remove();
      incomeCategory();
      expenseCategory();
      localStorage.setItem("localCategories", localCategories);
    };
  });
};

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
        incomeList.textContent = `Title: ${elem}`;
        resultList = incomeList.textContent + ", ";
      } else if (i == 2) {
        incomeList.textContent = `sum: ${elem}`;
        resultList = resultList + incomeList.textContent + ", ";
      } else if (i == 3) {
        incomeList.textContent = `date: ${elem}`;
        resultList = resultList + incomeList.textContent + ", ";
      } else {
        incomeList.textContent = `category: ${elem}`;
        resultList = resultList + incomeList.textContent + " ";
        i = 0;
        incomeList.textContent = resultList;
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
  incomeList.textContent = `Title: ${incomeTitle.value}, sum: ${incomeSum.value}, date: ${incomeData.value}, category: ${incomeSelect.value}`;
  incomesList.append(incomeList);
  localIncomes += `${incomeTitle.value},${incomeSum.value},${incomeData.value},${incomeSelect.value}/`;
  localStorage.setItem("localIncomes", localIncomes);
};

incomesList.onclick = function () {
  let icomesArr = document.querySelectorAll(".list");
  icomesArr.forEach(function (el) {
    el.onclick = function () {
      el.textContent = el.textContent.replace("Title: ", "");
      el.textContent = el.textContent.replace(" sum: ", "");
      el.textContent = el.textContent.replace(" date: ", "");
      el.textContent = el.textContent.replace(" category: ", "");
      el.textContent = el.textContent.slice(0, -1);
      localIncomes.split("/").forEach(function (elem) {
        // Уменьшение балалнса при удалении
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
          console.log("🚀 ~ file: script.js:192 ~ localIncomes:", localIncomes);
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
        expenseList.textContent = `Title: ${elem}`;
        resultList = expenseList.textContent + ", ";
      } else if (i == 2) {
        expenseList.textContent = `sum: ${elem}`;
        resultList = resultList + expenseList.textContent + ", ";
      } else if (i == 3) {
        expenseList.textContent = `date: ${elem}`;
        resultList = resultList + expenseList.textContent + ", ";
      } else {
        expenseList.textContent = `category: ${elem}`;
        resultList = resultList + expenseList.textContent + " ";
        i = 0;
        expenseList.textContent = resultList;
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
  expenseList.textContent = `Title: ${expenseTitle.value}, sum: ${expenseSum.value}, date: ${expenseData.value}, category: ${expenseSelect.value}`;
  expensesList.append(expenseList);
  localExpenses += `${expenseTitle.value},${expenseSum.value},${expenseData.value},${expenseSelect.value}/`;
  localStorage.setItem("localExpenses", localExpenses);
};
expensesList.onclick = function () {
  let icomesArr = document.querySelectorAll(".list");
  icomesArr.forEach(function (el) {
    el.onclick = function () {
      el.remove();
      el.textContent = el.textContent.replace("Title: ", "");
      el.textContent = el.textContent.replace(" sum: ", "");
      el.textContent = el.textContent.replace(" date: ", "");
      el.textContent = el.textContent.replace(" category: ", "");
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
