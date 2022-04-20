/* 
let = dynamic var
const = static var
*/

let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");
const eraseBtn = document.getElementById("erase-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listsItems = "";
  for (let i = 0; i < leads.length; i++) {
    listsItems += `
    <li>
      <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
      </a>
    </li>
    `;
  }
  ulEl.innerHTML = listsItems; 
}

eraseBtn.addEventListener("click", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
// easier method
// ------------------------------------
// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// create element
// set text content
// append to ul
//-------------------------------------
/* other method
  const li = document.createElement("li")
  li.textContent = myLeads[i]
  ulEl.append(li)
  */
