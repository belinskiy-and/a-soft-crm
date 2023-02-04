
// Refs
const refs = {
    modalBackdrop: document.querySelector("[data-backdrop]"),
    closeButton: document.querySelector("[data-close-button]"),
    closeWindowButton: document.querySelector("[data-close-window-button]"),
    addCustomerButton: document.querySelector("[data-new-customer]"),

    form: {
        form: document.forms.customerForm,
        submitButton: document.querySelector("[data-submit-fosm-button]")
    }
}

// --------- Modal ---------

// Listeners

refs.addCustomerButton.addEventListener("click", openModal);
refs.closeButton.addEventListener("click", closeModal);
refs.closeWindowButton.addEventListener("click", closeModal);

// Methods

function openModal() {
    refs.modalBackdrop.classList.remove("is-hidden");
}

function closeModal() {
    refs.modalBackdrop.classList.add("is-hidden");

}

// --------- Modal ---------

const { form, submitButton } = refs.form;

// Listeners

submitButton.addEventListener("click", formSubmit);

// Methods
function formSubmit(e) {
    e.preventDefault;

    const formData = {
        name: form.name.value,
        fullName: form.fullName.value,
        mail: form.mail.value,
    }

    console.log(formData);
}
