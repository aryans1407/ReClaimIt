const database = firebase.database().ref();

const sendBtn = document.getElementById('send-btn');

const itemPictureElement = document.getElementById("itemPicture");
const itemNameElement = document.getElementById("itemName");
const locationElement = document.getElementById("location")
const emailElement = document.getElementById("contactEmail");
const phoneElement = document.getElementById("contactPhone");
const descriptionElement = document.getElementById("description");
const categoryElement = document.getElementById("category");

const itemsContainer = document.querySelector("#itemsContainer");

console.log(itemsContainer);

sendBtn.onclick = function(event) {
    // Prevent default refresh
    event.preventDefault();
    if (itemPictureElement.value == "" || itemNameElement.value == "" || locationElement.value == "" || emailElement.value == "" || phoneElement.value == "" || descriptionElement.value == "" || categoryElement.value == "") {
        alert("Please fill in all fields");
    } else {
         updateDB();
    }
}

function updateDB(event) {
    // Create data object
    if (isValidUrl(itemPictureElement.value) == false) {
        itemPictureElement.value = "https://images.unsplash.com/photo-1493612276216-ee3925520721?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww";
    }
    const data = {
        IMAGE_URL: itemPictureElement.value,
        NAME: itemNameElement.value,
        LOCATION: locationElement.value,
        EMAIL: emailElement.value,
        PHONE: phoneElement.value,
        DESCRIPTION: descriptionElement.value,
        CATEGORY: categoryElement.value,
    };
    // console.log the object
    console.log(data);
    // GET *PUSH* PUT DELETE
    // Write to our database
    database.push(data);
    // Reset message
    itemPictureElement.value = "";
    itemNameElement.value = "";
    locationElement.value = "";
    emailElement.value = "";
    phoneElement.value = "";
    descriptionElement.value = "";
    categoryElement.value = "";
}

function addItems() {
    database.on('child_added', function (snapshot) {
        const item = snapshot.val();
        const itemDiv = document.createElement('div');
        itemDiv.className = "items";
        itemDiv.innerHTML = `
            <h3>${item.NAME}</h3>
            <img src="${item.IMAGE_URL}" style="max-width: 300px; height: 200px;" />
            <p><strong>Location:</strong> ${item.LOCATION}</p>
            <p><strong>Email:</strong> ${item.EMAIL}</p>
            <p><strong>Phone:</strong> ${item.PHONE}</p>
            <p><strong>Description:</strong> ${item.DESCRIPTION}</p>
            <p><strong>Category:</strong> ${item.CATEGORY}</p>
            <a id = "request" href="https://mail.google.com/mail/?view=cm&fs=1&to=${item.EMAIL}&su=myLostItem&body=Hi, I believe this item belongs to me!
" target="_blank">REQUEST ITEM</a>
            <hr>
            
         `;
        itemsContainer.append(itemDiv);
    });
}

addItems();

//checking IF A URL IS VALID
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}