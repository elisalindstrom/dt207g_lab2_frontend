import './style.css'

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
        const enddate = new Date(experience.enddate).toLocaleDateString();

        liEl.textContent = `${experience.jobtitle}, ${experience.companyname} (${startdate} - ${enddate})`;

        cvList.appendChild(liEl);
    });
}