const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyButton");
const uselength = document.getElementById("length");
const useUpperCase = document.getElementById("includeUppercase");
const useLowerCase = document.getElementById("includeLowercase");
const useNumbers = document.getElementById("includeNumbers");
const useSymbol = document.getElementById("includeSymbols");
const getPassword = document.getElementById("generateButton");

const UPPERCASE = "POIUYTREWQLKJHGFDSAMNBVCXZ";
const LOWERCASE = "poiuytrewqlkjhgfdsamnbvcxz";
const NUMBERS = "0987654321";
const SYMBOLS = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
  const length = parseInt(uselength.value);

  let char = "";

  if (useUpperCase.checked) char += UPPERCASE;

  if (useLowerCase.checked) char += LOWERCASE;
  if (useNumbers.checked) char += NUMBERS;

  if (useSymbol.checked) char += SYMBOLS;

  if (char === "") {
    alert("Plese check atleast one checkbox");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * char.length);

    password += char[randomNumber];
  }

  passwordOutput.textContent = password;
}

function copyPassword() {
  let validPassword = passwordOutput.textContent;

  if (validPassword === "Start to get Password") {
    alert("please generate a password fist");
    return;
  }

  navigator.clipboard
    .writeText(validPassword)
    .then(() => {
      alert("Password Copied");
    })
    .catch(() => {
      alert("Failed to copy password");
    });
}

getPassword.addEventListener("click", () => {
  generatePassword();
});

copyBtn.addEventListener("click", () => {
  copyPassword();
});
