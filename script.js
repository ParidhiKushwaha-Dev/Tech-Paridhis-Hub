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

    // "View Roadmap" buttons ke liye logic
    document.querySelectorAll('.btn-view').forEach(button => {
        button.addEventListener('click', function() {
            const title = this.parentElement.querySelector('h3').innerText;
            alert("Pari, " + title + " ka roadmap jald aa raha hai! ✨");
        });
    });
});



document.querySelectorAll('.btn-view').forEach(button => {
    button.addEventListener('click', function() {
        // Hum check karenge ki kaunsa card click hua hai
        const title = this.parentElement.querySelector('h3').innerText.toLowerCase();

        if (title.includes('ai') || title.includes('artificial')) {
            window.location.href = 'path-details.html'; // AI ke liye aapka naya page
        } 
        else if (title.includes('web')) {
            window.location.href = 'web-dev-roadmap.html'; // Future pages ke liye
        }
        else {
            // Agar page abhi nahi bana hai toh alert dikha sakte hain
            alert("Pari, " + title + " ka detailed roadmap jald update hoga! ✨");
        }
    });
});