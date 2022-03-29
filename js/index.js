let thisYear = new Date().getFullYear();
let footer = document.querySelector("footer");
let copyRight = document.createElement("p");
copyRight.innerHTML = `Cecilia ${thisYear}`;
footer.appendChild (copyRight);

const skillsSelection = document.getElementById('skills');
const skillList = skillsSelection.querySelector('ul');
const skills = ['JavaScript'];
for (let i = 0; i < skills.length; i++) {
    const item = document.createElement ('li');
    item.textContext = skills[i];
    skillsList.appendChild(item);
};