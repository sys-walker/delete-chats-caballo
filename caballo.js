console.log("The Caballo extension is up and running");

async function optionChatButton() {
  const button = await new Promise((resolve) => {
    setTimeout(() => {
      let optionsChat = document.querySelector(
        "#conversations-list-0 > div:nth-child(2) > button > span.mat-mdc-focus-indicator"
      );

      console.log("optionChat:", optionsChat);
      resolve(optionsChat);
    }, 150);
  });
  return button;
}
async function deleteChat(buttonChat) {
  buttonChat.click();
  const deleteButton = await new Promise((resolve) => {
    setTimeout(() => {
      let menu = document.getElementsByClassName("mat-mdc-menu-content")[0];
      console.log("menuOptions:", menu);
      let buttons = menu.getElementsByTagName("button");
      console.log("deleteButton:", buttons[2]);
      resolve(buttons[2]);
    }, 150);
  });

  deleteButton.click();

  const deleteConfirm = await new Promise((resolve) => {
    setTimeout(() => {
      let deleteDialog = document.getElementsByTagName(
        "mat-dialog-container"
      )[0];
      console.log("deleteDialog:", deleteDialog);
      let buttons = deleteDialog.getElementsByTagName("button");
      console.log("confirmDelete:", buttons[2]);
      resolve(buttons[1]);
    }, 150);
  });
  deleteConfirm.click();
}

async function caballo() {
  //Caballo homosexual de las montañas
  while (true) {
    let button = await optionChatButton();
    if (button === null) {  
      console.log("All chats deleted");
      break;
    }
    await deleteChat(button);
  }
  window.alert("All chats were deleted")
}

async function main() {
  const doc = await new Promise((resolve) => {
    setTimeout(() => {
      let d = document.querySelector("#app-root > side-navigation > mat-sidenav-container > mat-sidenav > div > div > div > div.new-conversation-container.ng-star-inserted")
      resolve(d);
    }, 1000);
  });

  //1. Create the button element:
  const newButton = document.createElement("button");
  newButton.style.backgroundColor = "red";
  newButton.style.color = "white";
  newButton.style.width = "100% !important";

  var txt = document.createTextNode("Delete All Chats");
  newButton.appendChild(txt);
  //2. Set the necessary attributes and classes:
  newButton.classList.add(
    "new-conversation2",
    "mdc-button",
    "mdc-button--unelevated",
    "mat-mdc-unelevated-button",
    "mat-unthemed",
    "mat-mdc-button-base"
  );
  

  newButton.addEventListener("click", (e) => {
    caballo();
  });
  //4. Append the button to the desired location:
  doc.appendChild(newButton);
}

main();
