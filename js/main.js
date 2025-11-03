// // js/main.js

// // 1. COMPONENT LOADER
// function loadHtmlComponent(url, targetId) {
//     fetch(url)
//         .then(response => response.text())
//         .then(html => {
//             document.getElementById(targetId).innerHTML = html;
//             if (targetId === 'header-placeholder') {
//                 setupMobileMenu();
//             }
//         })
//         .catch(error => {
//             console.error('Error loading component:', error);
//         });
// }

// // 2. MOBILE MENU LOGIC
// function setupMobileMenu() {
//     const menuToggle = document.querySelector('.menu-toggle-btn');
//     const mobileNav = document.querySelector('.mobile-nav-overlay');
//     const desktopNavList = document.querySelector('.nav-links');

//     if (menuToggle && mobileNav && desktopNavList) {
//         // Clone the full menu structure (including dropdowns)
//         const mobileNavContent = desktopNavList.cloneNode(true);
//         mobileNav.innerHTML = '';
//         mobileNav.appendChild(mobileNavContent);

//         // Toggle functionality
//         menuToggle.addEventListener('click', () => {
//             mobileNav.classList.toggle('is-open');
//             document.body.classList.toggle('no-scroll');
//         });

//         // Add logic for mobile accordion/submenu toggles here if needed
//     }
// }

// // 3. INITIALIZATION
// document.addEventListener('DOMContentLoaded', () => {
//     loadHtmlComponent('header.html', 'header-placeholder');
//     loadHtmlComponent('footer.html', 'footer-placeholder');
    
//     // Add logic here to animate counters on the homepage if needed
// });





// 1. COMPONENT LOADER
function loadHtmlComponent(url, targetId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetId).innerHTML = html;
            if (targetId === 'header-placeholder') {
                setupMobileMenu();
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

// 2. MOBILE MENU LOGIC
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle-btn');
    const mobileNav = document.querySelector('.mobile-nav-overlay');
    const desktopNavList = document.querySelector('.nav-links');

    if (menuToggle && mobileNav && desktopNavList) {
        const mobileNavContent = desktopNavList.cloneNode(true);
        mobileNav.innerHTML = '';
        mobileNav.appendChild(mobileNavContent);

        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('is-open');
            document.body.classList.toggle('no-scroll');
        });
    }
}

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    const basePath = window.location.origin.includes('vercel.app') ? '' : '.';
    loadHtmlComponent(`${basePath}/Header.html`, 'header-placeholder');
    loadHtmlComponent(`${basePath}/Footer.html`, 'footer-placeholder');
});
