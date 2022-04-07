//lesson 4-2 
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
    item.textContent = skills[i];
    skillList.appendChild(item);
};

//lesson 4-3
const messageForm = document.getElementsByName('leave_message')[0];
console.log(messageForm);
messageForm.addEventListener('submit', myEvent => {
    myEvent.preventDefault();
    const name = myEvent.target.name;
    const email = myEvent.target.email;
    const message = myEvent.target.message;

    console.log("form submitted");

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    const span = document.createElement('span');
    span.textContent = message;
    const newMessage = document.createElement('li');

    newMessage.innerHTML = `<a href="mailto: ${email.value}" target ="_blank">${name.value}</a><span> wrote: ${message.value} </span>`

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.addEventListener('click', (e) => {
        const entry = e.target.parentNode;
        const ul = entry.parentNode;
        ul.removeChild(entry);
        newMessage.appendChild(removeButton);
    });

    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);

    messageForm.reset();
});