// --------- User menu ---------

const userMenuRefs = {
    userMenuButton: document.querySelector("[data-user-menu-button]"),
    userMenu: document.querySelector("[data-user-menu]")
};

userMenuRefs.userMenuButton.addEventListener("click", toggleUserMenu);

function toggleUserMenu () {
    userMenuRefs.userMenu.classList.toggle("is-hidden");
}