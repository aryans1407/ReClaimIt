const database = firebase.database().ref();

const sendBtn = document.getElementById('send-btn');

const itemPictureElement = document.getElementById("itemPicture");
const itemNameElement = document.getElementById("itemName");
const locationElement = document.getElementById("location")
const emailElement = document.getElementById("contactEmail");
const phoneElement = document.getElementById("contactPhone");
const descriptionElement = document.getElementById("description");
const categoryElement = document.getElementById("category");
const submitMessageElement = document.getElementById("submitMessage");

const itemsContainer = document.querySelector("#itemsContainer");

console.log(itemsContainer);

submitMessageElement.style.display = "none";
sendBtn.onclick = function(event) {
    // Prevent default refresh
    event.preventDefault();
    if (itemPictureElement.value == "" || itemNameElement.value == "" || locationElement.value == "" || emailElement.value == "" || phoneElement.value == "" || descriptionElement.value == "" || categoryElement.value == "") {
        alert("Please fill in all fields");
    } else {
         updateDB();
         set
    }
}

function updateDB(event) {
    // Create data object
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
            
            <p>Location: ${item.LOCATION}</p>
            <p>Email: ${item.EMAIL}</p>
            <p>Phone: ${item.PHONE}</p>
            <p>Description: ${item.DESCRIPTION}</p>
            <p>Category: ${item.CATEGORY}</p>
            <a id = "request" href="https://mail.google.com/mail/?view=cm&fs=1&to=${item.EMAIL}&su=myLostItem&body=Hi, I belive this item belong to me!
">REQUEST ITEM</a>
            <hr>
         `;
        itemsContainer.append(itemDiv);
    });
}

addItems();

document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('imageUpload');
    const preview = document.getElementById('preview');
    if (imageInput && preview) {
        imageInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                preview.src = URL.createObjectURL(file);
                preview.style.display = 'block';
            } else {
                preview.style.display = 'none';
            }
        });
    }
});