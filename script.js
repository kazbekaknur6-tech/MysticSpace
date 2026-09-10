// MENU
function toggleMenu() {

    const nav = document.getElementById("nav");

    if (nav) {
        nav.classList.toggle("open");
    }

}


// DARK / LIGHT THEME
function toggleTheme() {

    document.body.classList.toggle("light");

    if (
        document.body.classList.contains("light")
    ) {

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

}


// SAVED THEME
window.addEventListener(
    "DOMContentLoaded",
    function () {

        const savedTheme =
            localStorage.getItem("theme");

        if (savedTheme === "light") {

            document.body.classList.add("light");

        }

        loadPlanet();

    }
);


// SEARCH
function searchPlanets() {

    const input =
        document.getElementById("search");

    if (!input) return;


    const query =
        input.value
            .toLowerCase()
            .trim();


    const cards =
        document.querySelectorAll(
            ".planet-card"
        );


    let found = 0;


    cards.forEach(function (card) {

        const name =
            card.dataset.name;

        if (name.includes(query)) {

            card.style.display = "block";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    const noResult =
        document.getElementById(
            "noResult"
        );


    if (noResult) {

        if (found === 0) {

            noResult.style.display = "block";

        } else {

            noResult.style.display = "none";

        }

    }

}


// CONTACT FORM
function sendForm(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const message =
        document.getElementById("message").value.trim();


    const result =
        document.getElementById(
            "formMessage"
        );


    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        message === ""
    ) {

        result.textContent =
            "Барлық жолдарды толтырыңыз!";

        return;

    }


    if (!email.includes("@")) {

        result.textContent =
            "Email дұрыс енгізілмеген!";

        return;

    }


    if (message.length < 10) {

        result.textContent =
            "Хабарлама кемінде 10 таңба болуы керек!";

        return;

    }


    result.textContent =
        "✓ Хабарлама сәтті жіберілді!";


    document.getElementById(
        "contactForm"
    ).reset();

}


// PLANET DETAILS
function loadPlanet() {

    const nameElement =
        document.getElementById(
            "planetName"
        );


    if (!nameElement) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        params.get("id");


    const planets = {

        "1": {
            name: "Меркурий",
            type: "ПЛАНЕТА",
            symbol: "☿",
            description:
                "Меркурий — Күнге ең жақын орналасқан планета. Ол шағын, тасты және Күнді өте жылдам айналып өтеді.",
            facts: [
                "Күнге ең жақын планета.",
                "Бір жылы Жердегі 88 күнге тең.",
                "Күн жүйесіндегі ең кішкентай планета."
            ]
        },


        "2": {
            name: "Венера",
            type: "ПЛАНЕТА",
            symbol: "♀",
            description:
                "Венера — көлемі жағынан Жерге ұқсас, бірақ атмосферасы өте тығыз және температурасы жоғары планета.",
            facts: [
                "Күннен екінші планета.",
                "Атмосферасы өте тығыз.",
                "Күн жүйесіндегі ең ыстық планета."
            ]
        },


        "3": {
            name: "Жер",
            type: "ПЛАНЕТА",
            symbol: "🌍",
            description:
                "Жер — адамдар мен көптеген тіршілік иелері өмір сүретін Күн жүйесіндегі планета.",
            facts: [
                "Күннен үшінші планета.",
                "Жердің табиғи серігі — Ай.",
                "Бетінің үлкен бөлігін су алып жатыр."
            ]
        },


        "4": {
            name: "Марс",
            type: "ПЛАНЕТА",
            symbol: "♂",
            description:
                "Марс қызыл түсімен ерекшеленетін тасты планета. Ол болашақ ғарыш зерттеулерінің маңызды нысаны.",
            facts: [
                "Күннен төртінші планета.",
                "Қызыл планета деп аталады.",
                "Екі табиғи серігі бар."
            ]
        },


        "5": {
            name: "Юпитер",
            type: "ГАЗ АЛЫБЫ",
            symbol: "♃",
            description:
                "Юпитер — Күн жүйесіндегі ең үлкен планета. Ол негізінен сутек пен гелийден тұрады.",
            facts: [
                "Күн жүйесіндегі ең үлкен планета.",
                "Газ алыптарына жатады.",
                "Өзінің көптеген серіктері бар."
            ]
        },


        "6": {
            name: "Сатурн",
            type: "ГАЗ АЛЫБЫ",
            symbol: "🪐",
            description:
                "Сатурн өзінің үлкен әрі ерекше сақиналарымен танымал газ алыбы.",
            facts: [
                "Күннен алтыншы планета.",
                "Керемет сақиналар жүйесі бар.",
                "Газ алыптарына жатады."
            ]
        }

    };


    const planet =
        planets[id];


    if (!planet) {

        window.location.href =
            "404.html";

        return;

    }


    document.title =
        planet.name +
        " — MysticSpace";


    document.getElementById(
        "planetName"
    ).textContent =
        planet.name;


    document.getElementById(
        "planetType"
    ).textContent =
        planet.type;


    document.getElementById(
        "planetSymbol"
    ).textContent =
        planet.symbol;


    document.getElementById(
        "planetDescription"
    ).textContent =
        planet.description;


    const facts =
        document.getElementById(
            "planetFacts"
        );


    facts.innerHTML = "";


    planet.facts.forEach(
        function (fact) {

            const li =
                document.createElement("li");

            li.textContent = fact;

            facts.appendChild(li);

        }
    );

}
