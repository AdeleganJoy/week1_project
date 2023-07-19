import "./styles.css";
const myButton = document.getElementById("my-button");

myButton.addEventListener("click", function () {
  console.log("hello world");
  const notes = document.getElementById("heading");
  notes.removeChild(notes.lastChild);
  notes.append("My notebook");
});

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const addDataButton = document.getElementById("add-data");
  addDataButton.addEventListener("click", function () {
    const norder = document.getElementById("norder");
    /*norder.append("hello world");*/
    norder.append(document.getElementById("message").value);
  });
}
