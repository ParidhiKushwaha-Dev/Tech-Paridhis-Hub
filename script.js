document.addEventListener('DOMContentLoaded', () => {
    const btnIT = document.getElementById('btn-it');
    const btnDM = document.getElementById('btn-dm');
    const itGrid = document.getElementById('it-jobs');
    const dmGrid = document.getElementById('digital-marketing');

    // Tab Switching Logic
    function switchTab(showId, hideId, activeBtn, inactiveBtn) {
        document.getElementById(showId).style.display = 'grid';
        document.getElementById(hideId).style.display = 'none';
        activeBtn.classList.add('active');
        inactiveBtn.classList.remove('active');
    }

    if(btnIT && btnDM) {
        btnIT.addEventListener('click', () => switchTab('it-jobs', 'digital-marketing', btnIT, btnDM));
        btnDM.addEventListener('click', () => switchTab('digital-marketing', 'it-jobs', btnDM, btnIT));
    }
})
