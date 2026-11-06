// 1. Sağ tık ve kısayol engelleme
window.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO' || e.target.closest('.lb-image') || e.target.closest('a')) {
        e.preventDefault();
        return false;
    }
}, true);

// 2. Metin ve görsel seçimini engellemek için gövdeye CSS sınıfı ekleme
document.addEventListener("DOMContentLoaded", function() {
    const style = document.createElement('style');
    style.innerHTML = `
        img, .lb-image, video {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            pointer-events: none !important;
        }
        a.group {
            pointer-events: auto !important;
        }
    `;
    document.head.appendChild(style);
});
