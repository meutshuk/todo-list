const project = JSON.parse(localStorage.getItem("storage"));

function getProject() {
  return JSON.parse(localStorage.getItem("storage"));
}

function updateStorage(pr) {
  localStorage.setItem("storage", JSON.stringify(pr));
}

function addProject(name) {
  const newProject = getProject();
  console.log(newProject);
  const p = {
    projectName: name,
    task: [],
  };
  newProject.push(p);
  updateStorage(newProject);
}

export { project, updateStorage, addProject };
