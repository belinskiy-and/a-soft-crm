// import customers from "../data/customers.json";


// Refs
const refs = {
    modalBackdrop: document.querySelector("[data-backdrop]"),
    closeButton: document.querySelector("[data-close-button]"),
    closeWindowButton: document.querySelector("[data-close-window-button]"),
    addCustomerButton: document.querySelector("[data-new-customer]"),
    modalTitle: document.querySelector("[data-modal-title]"),

    form: {
        form: document.forms.customerForm,
        submitButton: document.querySelector("[data-submit-fosm-button]")
    },

    workList: {
        list: document.querySelector("[works-list-items]")
    },
}

getCustomerList();

// --------- Modal ---------

// Listeners

refs.addCustomerButton.addEventListener("click", newCustomer);
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

    closeModal();
}

// --------- Customer list ---------

function getCustomerList() {
    
    fetchData('../data/customers.json', printCustomersList);    
}

function printCustomersList(data) {
    data.map(item => {
        refs.workList.list.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.fullName}</td>
                <td>${item.mail}</td>
                <td class="customer-table-activity">${item.lastActive}</td>
                <td class="customer-table-status">
                    <span class="label warning">${item.status}</span>
                </td>
                <td class="customer-table-actions">
                    <button class="action-button success fa-solid fa-pencil" type="button" onClick="editCustomer('${item.id}')"></button>
                    <button class="action-button danger fa-solid fa-trash-can" type="button onClick="deleteCustomer('${item.id}')"></button>
                </td>
            </tr>
        `;
    });
}

// --------- Fetch ---------

async function fetchData(source, method, id) {
    await fetch(source)
        .then(res => res.json())
        .then(res => method(res, id));
}

// --------- New customer ---------

function newCustomer() {
    const { modalTitle } = refs;
    const { form } = refs.form;

    // Set title
    modalTitle.innerHTML = "New customer";

    // Clear form data
    form.name.value = "";
    form.fullName.value = "";
    form.mail.value = "";

    openModal();
}

// --------- Edit customer ---------

function editCustomer(id) {
    fetchData("../data/customers.json", fillEditForm, id);   
}

function fillEditForm(data, id) {
    // Temp
    customer = data.filter(item => item.id === id);
    
    const { form } = refs.form;
    const { modalTitle } = refs;

    form.name.value = customer[0].name;
    form.fullName.value = customer[0].fullName;
    form.mail.value = customer[0].mail;

    modalTitle.innerHTML = "Edit customer";

    openModal();
}

// --------- Delete customer ---------

function deleteCustomer(id) {
    fetchData("../data/customers.json", fillDeleteForm, id);   
}

function fillDeleteForm(id) {}

// Are you sure you want to delete the entry