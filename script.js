let ownerName = "Angel Atenco"; // update the part BETWEEN the "quotes"
let userName = "angela1251"; // same here

document.querySelectorAll(".owner-name").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href =  + userName + "/" + userName + ".github.io";
