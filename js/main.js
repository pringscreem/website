const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

//He is not using semicolons.  These might need to be removed.

function submitForm() {
    let name = document.getElementById('name').value;
    let name = document.getElementById('email').value;
    let name = document.getElementById('message').value;

    let subject = "Contact Form Submission";
    let body = "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + MessageChannel;

    let mailtoLink = "mailto:sonnleitner.s@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.open(mailtoLink);
}