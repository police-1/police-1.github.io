document.addEventListener('DOMContentLoaded', () => {
    const phoneNumber = "+380939539245"; 

    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 900,
            once: true,
            offset: 80
        });
    }

    const modal = document.getElementById('contactModal');
    const openBtnTop = document.getElementById('openModalBtn');
    const openBtnBottom = document.getElementById('openModalBtnBottom');
    const closeBtn = document.getElementById('closeModalBtn');

    function showModal(e) {
        if (e) e.preventDefault();
        if (modal) modal.classList.add('show');
    }

    if (openBtnTop) openBtnTop.addEventListener('click', showModal);
    if (openBtnBottom) openBtnBottom.addEventListener('click', showModal);

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => modal.classList.remove('show'));
    }

    window.addEventListener('click', (e) => {
        if (modal && e.target === modal) modal.classList.remove('show');
    });

    const modalCallButton = document.getElementById('modalCallBtn');
    
    if (modalCallButton) {
        modalCallButton.addEventListener('click', (event) => {
            event.preventDefault();
            const userConfirmed = confirm("Ви впевнені, що хочете зателефонувати командиру?");
            if (userConfirmed) {
                window.location.href = `tel:${phoneNumber}`;
            }
        });
    }

    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(phoneNumber).then(() => {
                copyBtn.innerHTML = '✅';
                copyBtn.style.borderColor = '#22c55e';
                setTimeout(() => {
                    copyBtn.innerHTML = '📋';
                    copyBtn.style.borderColor = 'var(--accent)';
                }, 1500);
            }).catch(err => {
                console.error('Не вдалося скопіювати номер: ', err);
            });
        });
    }
});