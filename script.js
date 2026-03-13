function openTab(event, tabId) {
    let tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.classList.remove('active');
    });

    let navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

function clearForm(button) {
    let formContainer = button.closest('.form-container');
    if (formContainer) {
        let inputs = formContainer.querySelectorAll('input, select');
        inputs.forEach(function(input) {
            input.value = '';
        });
    }
}
