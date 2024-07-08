// Start with cheaking if The Value Of The Input Is Match Good

// Select The Email
let emailInput = document.getElementById("email");

// Select The Label
let label = document.querySelector("label");

// Make The Regx

let regx = /\w+@[a-z]+\.[a-z]+/i;

// Remove The Class When Foucs On The Input File and The Before Elemtn

emailInput.onfocus = () => {
  emailInput.style.borderColor = "#ccc";
  for (let n of document.styleSheets[0].cssRules) {
    if (n.selectorText === ".page .content > div.left .form label::after") {
      n.style.display = "none";
    }
  }
};

// Cheak If The Value Of The Input Is In Order

emailInput.onblur = () => {
  if (!regx.test(emailInput.value)) {
    emailInput.style.borderColor = "red";
    displayBlock();
  }
};

// Select The Content Section Or All Thing

let Content = document.querySelector(".content");

// Select The Page

let Page = document.querySelector(".page");

// Click On The Submit Button

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
  if (regx.test(emailInput.value)) {
    // hidden the content

    Content.style.display = "none";

    // creat the succssiful content

    let succssifulContent = document.createElement("div");
    succssifulContent.classList.add("succssifulContent");
    succssifulContent.style.cssText =
      "width:500px; padding-bottom:70px; background-color :white; padding:50px; border-radius:30px; transition:2s;";

    // Crate The Elemnts For succssifulContent

    //Start Creating

    // create the img

    let img = document.createElement("img");
    img.src = "assets/images/icon-success.svg";

    //creat the h1

    let h1 = document.createElement("h1");

    //creat the p

    let p = document.createElement("p");

    // creat the span

    let span = document.createElement("span");

    span.innerHTML = emailInput.value;

    //creat the p1

    let p1 = document.createElement("p");

    p1.textContent = `A confirmation email has been sent to `;

    p1.appendChild(span);

    span.style.color = "#591ac8";

    p.innerHTML = `${p1.innerHTML}.Please open it and click the button inside to confirm your subscription. `;

    p.style.cssText =
      "line-height:1.6; color:rgb(47, 51, 80); font-weight:bold;";

    h1.textContent = "Tanks For Subscribing";
    h1.style.cssText =
      "font-size :50px; color :rgb(47, 51, 80); margin-bottom :10px;";

    //creat the button

    let dismissButton = document.createElement("button");
    dismissButton.textContent = "Dismiss message";
    dismissButton.style.cssText =
      "padding:20px; color :white; background-color:rgb(47, 51, 80); border-radius:10px; cursor:pointer;";
    dismissButton.classList.add("dismissButton");

    //End Creating

    //append the elemnts to the succssifulContent

    succssifulContent.append(img);
    succssifulContent.append(h1);
    succssifulContent.append(p);
    succssifulContent.append(dismissButton);

    // appen the succssifulContent to the page

    Page.append(succssifulContent);

    // return to the main page when click on the dismissButton

    dismissButton.addEventListener("click", () => {
      succssifulContent.style.display = "none";
      Content.style.display = "flex";
    });
  }
});

// Create The Functions

function displayBlock() {
  for (let n of document.styleSheets[0].cssRules) {
    if (n.selectorText === ".page .content > div.left .form label::after") {
      n.style.display = "block";
    }
  }
}
