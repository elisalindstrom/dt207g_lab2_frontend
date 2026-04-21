fetchWorkexperiences();

// Hämta data från API
async function fetchWorkexperiences() {
    try {
        const response = await fetch("https://dt207g-lab2.onrender.com/api/workexperience");
        const workexperience = await response.json();

        if (!workexperience.length) return;

        console.log(workexperience)
        displayWorkexperiences(workexperience);
    } catch (error) {
        console.error("Något gick fel:" + error);
    }
}

// Skriv ut lista på arbetserfarenheter
function displayWorkexperiences(workexperience) {
    const cvList = document.querySelector("#cv-list");
    cvList.innerHTML = "";

    workexperience.forEach(experience => {
        const liEl = document.createElement("li");
        const startdate = new Date(experience.startdate).toLocaleDateString();
        let enddate = experience.enddate;

        // Kontroll av enddate
        if (enddate) {
            enddate = new Date(experience.enddate).toLocaleDateString();
        } else {
            enddate = "Pågående";
        }

        liEl.textContent = `${experience.jobtitle}, ${experience.companyname} (${startdate} - ${enddate})`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Ta bort";

        // Lägg till eventlistener

        liEl.appendChild(deleteBtn);
        cvList.appendChild(liEl);
    });
}