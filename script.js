const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const invalidPassword = document.getElementById("invalid-password");
const requiredWarning = document.getElementsByClassName("invalid");

function checkPassword() {
	invalidPassword.innerText = "";
	if (password.value !== confirmPassword.value && confirmPassword.value !== "") {
		invalidPassword.innerText = "*Password do not match";
	}
}

[...requiredWarning].forEach((element) => {
	element.addEventListener("blur", () => {
		if (element.previousElementSibling.value === "") {
			element.style.dipslay = "block";
		}
	});
});

password.addEventListener("blur", checkPassword);
confirmPassword.addEventListener("blur", checkPassword);
