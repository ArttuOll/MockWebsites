const validationFunctions = require('./form_validation');

// Not exhaustive testing... just a dummy website after all...
const correctEmail = "email@example.com";
const correctEmail2 = "mysite@you.me.net";
const wrongEmail = "mysite.ourearth.com";
const wrongEmail2 = "mysite@.org.org";
const correctPwd = "testisalasana123!"
const repeatedPwd = "testisalasana123!"
const wrongPwd = "huono"

test("Test that email follows simplified RFC 2822 with correct input", () => {
    expect(validationFunctions.emailOk(correctEmail)).toBeTruthy();
});

test("Test that email follows simplified RFC 2822 with correct input", () => {
    expect(validationFunctions.emailOk(correctEmail2)).toBeTruthy();
});

test("Test that email follows simplified RFC 2822 with wrong input", () => {
  expect(() => {
    validationFunctions.emailOk(wrongEmail)
  }).toThrow("Incorrect email form!");
});

test("Test that email follows simplified RFC 2822 with wrong input", () => {
  expect(() => {
    validationFunctions.emailOk(wrongEmail2)
  }).toThrow("Incorrect email form!");
});

test("Test password length with correct input", () => {
    expect(validationFunctions.lengthOk(correctPwd)).toBeTruthy();
});

test("Test password length with wrong input", () => {
  expect(() => {
    validationFunctions.lengthOk(wrongPwd)
  }).toThrow("Password has to be at least 8 characters long!");
});

test("Test if contains numbers with correct input", () => {
  expect(validationFunctions.containsNumbers(correctPwd)).toBeTruthy();
});

test("Test if contains numbers with wrong input", () => {
  expect(() => {
    validationFunctions.containsNumbers(wrongPwd)
  }).toThrow("Password has to contain at least one digit!");
});

test("Test if contains special characters with correct input", () => {
  expect(validationFunctions.containsSpecials(correctPwd)).toBeTruthy();
});

test("Test if contains special characters with wrong input", () => {
  expect(() => {
    validationFunctions.containsSpecials(wrongPwd)
  }).toThrow("Your password must contain at least one special character!");
});


test("Test that both pasword fields are fillend and contents match", () => {
  expect(validationFunctions.passwordsMatch(correctPwd, repeatedPwd))
    .toBeTruthy();
});

test("Test that non-matching passwords return false", () => {
  expect(validationFunctions.passwordsMatch(correctPwd, wrongPwd)).toBeFalsy();
})
