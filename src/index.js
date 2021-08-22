import { project, updateStorage, addProject } from "./storage";

const divProjects = document.querySelector(".projects2");
const addItemBtn = document.querySelector(".addItem");
// addItemBtn.addEventListener("click", addTask);

var projectList = [];

if (localStorage.getItem("storage") == null) {
  var firstData = [
    {
      projectName: "Project",
      task: [
        {
          title: "Laundry",
          description: "Do your Laundry",
          dueDate: "2020-07-21",
          priority: true,
        },
        {
          title: "Home-Work",
          description: "Do your homework",
          dueDate: "2020-07-21",
          priority: false,
        },
      ],
    },
  ];

  localStorage.setItem("storage", JSON.stringify(firstData));
}

// window.onload = loadProject;

const addProjectBtn = document.querySelector(".addProject-btn");
addProjectBtn.addEventListener("click", adProject);
const addProjectForm = document.querySelector(".add-project-form");

function closeProjectForm() {
  addProjectForm.classList.add("hidden");
  addProjectBtn.classList.remove("hidden");
}

function loadProject() {
  
}

function adProject() {
  addProjectBtn.classList.add("hidden");
  addProjectForm.classList.remove("hidden");

  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", closeProjectForm);

  const addBtn = document.querySelector(".add");
  addBtn.addEventListener("click", () => {
    const projectFormText = document.querySelector(".projectname-text");
    addProject(projectFormText.value);
  });
}

// * w3 school popup
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var sp = document.querySelector(".closee");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
sp.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
