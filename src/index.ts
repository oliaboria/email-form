import EmailsInput from 'emails-input';

import '../assets/styles/main.scss';

const container = document.getElementById('emails-input');

const emailsInput = new EmailsInput(container);

const addEmailBtn = document.getElementById('add-email-btn');
const getEmailsCountBtn = document.getElementById('get-count-btn');

const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * Math.floor(max));
};

addEmailBtn.addEventListener('click', () => {
    const emails = ['john@miro.com', 'mike@miro.com', 'alexander@miro.com'];
    const randomNumber = getRandomInt(3);

    emailsInput.addEmail(emails[randomNumber]);
});

getEmailsCountBtn.addEventListener('click', () => {
    // eslint-disable-next-line no-alert
    alert(emailsInput.getEmailsCount());
});
