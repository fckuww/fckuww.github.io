document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const pages = document.querySelectorAll(".page");
    const welcomeScreen = document.querySelector(".welcome-screen");
    const themeToggle = document.getElementById("theme-toggle");
    let activePage = document.querySelector(".page.active");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetPage = document.getElementById(targetId);

            if (targetPage === activePage) return; 

            
            activePage.style.opacity = "0";

            setTimeout(() => {
                activePage.style.display = "none";
                activePage.classList.remove("active");

               
                targetPage.style.display = "block";
                targetPage.style.opacity = "0";

               
                requestAnimationFrame(() => {
                    targetPage.style.opacity = "1";
                });

                targetPage.classList.add("active");
                activePage = targetPage;
            }, 500); 
            
            
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });

    setTimeout(() => {
        welcomeScreen.classList.add("hidden");
    }, 2000);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
