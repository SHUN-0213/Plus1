document.querySelectorAll(".js-accordion").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("is-open");

        const content = btn.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

const menuToggle = document.querySelector(".menu-toggle");
const menuDrawer = document.querySelector(".menu-drawer");
const menuBackdrop = document.querySelector(".menu-drawer-backdrop");
const menuDrawerLinks = document.querySelectorAll(".menu-drawer-link");

if (menuToggle && menuDrawer && menuBackdrop) {
    const closeMenu = () => {
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "メニューを開く");
    };

    const openMenu = () => {
        document.body.classList.add("menu-open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "メニューを閉じる");
    };

    menuToggle.addEventListener("click", () => {
        if (document.body.classList.contains("menu-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menuBackdrop.addEventListener("click", closeMenu);

    menuDrawerLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}

const contactForm = document.querySelector("#contact-form");
const contactFormStatus = document.querySelector("#contact-form-status");

if (contactForm && contactFormStatus) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        contactFormStatus.textContent = "入力内容を確認しました。このデモでは実際の送信は行われません。";
        contactFormStatus.hidden = false;
        contactForm.reset();
        contactFormStatus.focus();
    });
}
