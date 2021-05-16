document.addEventListener(("DOMContentLoaded"), () => {
  document.querySelector("#signup-btn-modal").onclick = () => {
    validateSingUpForm();
  }
  document.querySelector("#signup-cancel-btn-modal").onclick = () => {
    clearSignUpForm();
  }
  document.querySelector("#signin-btn-modal").onclick = () => {
    clearSignInForm();
    closeSignInForm();
  }
  document.querySelector("#signin-cancel-btn-modal").onclick = () => {
    clearSignInForm();
  }
});

function validateSingUpForm() {
  const email = document.querySelector("#email-input-signup").value;
  const pwd = document.querySelector("#pwd-input-signup").value;
  try {
    if (signUpFormOk(email, pwd)) {
      $("#signup_modal").modal("hide");
      clearSignUpForm();
    }
  } catch (exception) {
    const errorField = document.querySelector("#signup-error");
    errorField.innerHTML = exception;
  }
}

function emailOk(email) {
  const simplifiedRfc2822 =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (simplifiedRfc2822.test(email)) {
    return true;
  } else {
    throw "Incorrect email form!";
  }
}

function lengthOk(pwd) {
  if (pwd.length >= 8) {
    return true;
  } else {
    throw "Password has to be at least 8 characters long!";
  }
}

function containsNumbers(pwd) {
  const anyDigit = /\d/;
  if (anyDigit.test(pwd)) {
    return true;
  } else {
    throw "Password has to contain at least one digit!";
  }
}

function containsSpecials(pwd) {
  const printableAsciiNotSpaceCharNum = /[!-\/:-@[-`{-~]/;
  if (printableAsciiNotSpaceCharNum.test(pwd)) {
    return true;
  } else {
    throw "Your password must contain at least one special character!";
  }
}

function passwordFieldsMatch() {
  const pwd = document.querySelector("#pwd-input-signup").value;
  const repeatedPwd = document.querySelector("#pwd-input-repeat-signup").value;

  if (passwordsMatch(pwd, repeatedPwd)) {
    return true;
  } else {
    throw "Password fields don't match!";
  }
}

function passwordsMatch(pwd, pwd2) {
  return pwd === pwd2;
}

function tosAccepted() {
  const tosChecBox = document.querySelector("#tos_check");
  if (tosChecBox.checked) {
    return true;
  } else {
    throw "You have to accept the Terms of Service in order to sign up";
  }
}

function signUpFormOk(email, pwd) {
  return emailOk(email) && lengthOk(pwd) && containsNumbers(pwd) 
    && containsSpecials(pwd) && passwordFieldsMatch() && tosAccepted();
}

function clearSignUpForm() {
  document.querySelector("#email-input-signup").value = "";
  document.querySelector("#pwd-input-signup").value = "";
  document.querySelector("#pwd-input-repeat-signup") .value = "";
  document.querySelector("#tos_check").checked = false;
}

function clearSignInForm() {
  document.querySelector("#email-input-signin").value = "";
  document.querySelector("#pwd-input-signin").value = "";
}

function closeSignInForm() {
      $("#signin_modal").modal("hide");
}

module.exports = {
  emailOk: emailOk,
  lengthOk: lengthOk,
  containsNumbers: containsNumbers,
  containsSpecials: containsSpecials,
  passwordsMatch: passwordsMatch
}
