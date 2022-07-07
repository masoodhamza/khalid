const registerList = [
  {
    id: 1,
    avatar: "./src/download.jpg",
    firstName: "ali",
    lastName: "ahmed",
    email: "khlalid@gmail.com",
  },
  {
    id: 2,
    avatar: "./src/download.jpg",
    firstName: "Noor",
    lastName: "sab",
    email: "kd@gmail.com",
  },
];

const createForm = document.querySelector("#create-form");
const tbody = document.querySelector("tbody");

createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  item = {
    id: Math.random(),
    avatar: "./src/download.jpg",
    firstName: createForm["first-name"].value,
    lastName: createForm["last-name"].value,
    email: createForm["email"].value,
  };
  //   console.log(item);
  registerList.push(item);
  updateList();
  createForm["first-name"].value = "";
  createForm["last-name"].value = "";
  createForm["email"].value = "";
  //   console.log(registerList);
});

const updateList = () => {
  registerList.map((item) => {
    tbody.innerHTML += `<tr>
    <td>1</td>
    <td><img src="${item.avatar}" alt="avatart"
            style="border-radius: 50%; width: 30px; height: 30px;">
    </td>
    <td>${item.firstName}</td>
    <td>${item.lastName}</td>
    <td>${item.email}</td>
    <td>del/edit</td>
</tr>`;
  });
};
