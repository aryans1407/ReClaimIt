const database = firebase.database().ref();

const sendBtn = document.getElementById('send-btn');
const itemNameElement = document.getElementById("itemName");
const locationElement = document.getElementById("location")
const emailElement = document.getElementById("contactEmail");
const phoneElement = document.getElementById("contactPhone");
const descriptionElement = document.getElementById("description");
const categoryElement = document.getElementById("category");

sendBtn.onclick = updateDB;

function updateDB(event) {
  // Prevent default refresh
  event.preventDefault();

  // Create data object
  const data = {
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

function addMessageToBoard(rowData) {
//   // Store the value of rowData inside object named 'data'
//   const data = rowData.val();
//   // console.log data
//   console.log(data);
//   // Create a variable named singleMessage
//   // that stores function call for makeSingleMessageHTML()
//   let singleMessage = makeSingleMessageHTML(data.USERNAME, data.EMAIL, data.MESSAGE, data.PROFILE);
//   // Append the new message HTML element to allMessages
//   allMessages.append(singleMessage);
// }

// function makeSingleMessageHTML(usernameTxt, emailTxt, messageTxt, profileTxt) {
//   // Create Parent Div
//   let parentDiv = document.createElement('div');
//   // Add Class name .single-message
//   parentDiv.className = 'single-message';
//   // parentDiv.classList.add('single-message');

//   let profilePic = document.createElement("img");
//   profilePic.className = "single-message-img";
//   profilePic.src = profileTxt;
//   parentDiv.appendChild(profilePic);

//   // Create Username P Tag
//   let usernameP = document.createElement('p');
//   usernameP.className = 'single-message-username';
//   usernameP.innerHTML = usernameTxt + ':';
  
//   // Append username
//   parentDiv.appendChild(usernameP);

//   //Email + Append
//   let emailP = document.createElement("p");
//   emailP.innerHTML = emailTxt;
//   parentDiv.append(emailP);

//   // Create message P Tag
//   let messageP = document.createElement('p');
//   messageP.innerHTML = messageTxt;
  
//   // Append message
//   parentDiv.append(messageP);

//   //Date
//   const date = new Date();
//   dateTxt = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
//   let dateP = document.createElement('p');
//   dateP.className = "single-message-date";
//   dateP.innerHTML = dateTxt;
//   parentDiv.append(dateP);

//   timeTxt = date.getHours() + ":" + date.getMinutes() + ":" + date.getMinutes();
//   let timeP = document.createElement("p");
//   timeP.className = "single-message-time";
//   timeP.innerHTML = timeTxt;
//   parentDiv.append(timeP);
  
//   // Return Parent Div
//   return parentDiv;
// }
