(() => {
    console.log('start')
    const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]")
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        console.log('start')
    console.log("toggle");
    refs.modal.classList.toggle("is-hidden");
    // document.body.classList.toggle("no-scroll");
}
})();

(() => {
    console.log('start')
    const refs = {
    openMenuBtn: document.querySelector("[menu-modal-open]"),
    closeMenuBtn: document.querySelector("[menu-modal-close]"),
    menu: document.querySelector("[menu-modal]")
    };

    refs.openMenuBtn.adddEventListener("click", toggleModal);
    refs.closeMenuBtn.adddEventListener("click", toggleModal);

    function toggleMenu() {
        console.log('start')
    console.log("toggle");
    refs.menu.classList.toggle("is-hidden");
    // document.body.classList.toggle("no-scroll");
}
})();