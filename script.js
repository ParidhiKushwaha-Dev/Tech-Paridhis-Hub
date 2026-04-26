document.addEventListener('DOMContentLoaded', function() {
    // Buttons ko select karo
    const btnIT = document.getElementById('btn-it');
    const btnDM = document.getElementById('btn-dm');

    // IT Button click event
    if(btnIT) {
        btnIT.addEventListener('click', function() {
            showTab('it-jobs', this);
        });
    }

    // DM Button click event
    if(btnDM) {
        btnDM.addEventListener('click', function() {
            showTab('digital-marketing', this);
        });
    }

    // View Roadmap buttons ke liye
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const role = this.parentElement.querySelector('h3').innerText;
            alert("Pari, " + role + " ka roadmap jald aa raha hai! ✨");
        });
    });
});

function showTab(tabId, btn) {
    document.querySelectorAll('.roadmap-grid').forEach(grid => {
        grid.style.display = 'none';
        grid.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    const target = document.getElementById(tabId);
    if(target) {
        target.style.display = 'grid';
        target.classList.add('active');
    }
    btn.classList.add('active');
}