const userEmail = document.getElementById("user-input");
const submitButton = document.querySelector(".submit-button");
const errorMessages = [...document.querySelectorAll(".hidden")];


submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (!userEmail.value.includes("@") || !userEmail.value.includes(".com")) {
        errorMessages.map((errorMessage) => {
            if (errorMessage.classList.contains("hidden")) {
                errorMessage.classList.remove("hidden");
                errorMessage.classList.add("display-error");
                userEmail.classList.add("display-error");
            }
        });
    } else {
        errorMessages.map((errorMessage) => {
            if (!errorMessage.classList.contains("hidden")) {
                errorMessage.classList.add("hidden");
                errorMessage.classList.remove("display-error");
                userEmail.classList.remove("display-error");
            }
        })
    }
})