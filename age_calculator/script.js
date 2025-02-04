document.getElementById('age-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    if (isNaN(birthdate)) {
        document.getElementById('result').textContent = "Please enter a valid date.";
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;

    // Calculate days until the next birthday
    const nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').textContent = `Your next birthday is in ${daysUntilBirthday} days!`;
});

// Dark mode toggle
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});