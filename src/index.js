import './index.css';
import Data from './data';
let num = 0;

// Form Selection
const formModal = document.querySelector('.add-modal');
const account = document.querySelector('.add-modal form #account');
const name = document.querySelector('.add-modal form #name');
const totalDays = document.querySelector('.add-modal form #total-days');

// const made = document.querySelector('.made');

// Table Body Selection
const accList = document.querySelector('tbody');

// Modal Button Selection
const saveButtonModal = document.querySelector('.add-modal form .buttons button:first-child');
const cancelButtonModal = document.querySelector('.add-modal form .buttons button:last-child');
const addButton = document.querySelector('section.account .title button');


function showData(){
    let listDOM = '';

    if(Data.showData() === []){
        return null;
    }

    Data.showData().forEach(item => {
        listDOM += `<tr>
                        <td>${item.id}</td>
                        <td>${item.account}</td>
                        <td>${item.name}</td>
                        <td>${item.status}</td>
                        <td>${item.activeFrom}</td>
                        <td>${item.expired}</td>
                        <td><button class="delete" data-id="${item.id}">Delete</button></td>
                    </tr>`;
    
        accList.innerHTML = listDOM;
    });
};

addButton.addEventListener('click', () => {
    formModal.classList.toggle('hidden');
});

cancelButtonModal.addEventListener('click', (e) => {
    e.preventDefault();
    formModal.classList.toggle('hidden');
})

saveButtonModal.addEventListener('click', (e) => {
    e.preventDefault();

    num += 1;
    console.log(num)

    const accountName = account.value;
    const nameOwner = name.value;
    const days = totalDays.value;

    // Instantiate the Date
    let dt = new Date();

    const dateBefore = dt.toString();
    const dayFrom = dateBefore.slice(0, 3); // get the dayFrom
    const monthFrom = dateBefore.slice(4, 7) // get Month Before
    const dateFrom = dateBefore.slice(8, 10); // get the date
    const yearFrom = dateBefore.slice(11, 15); // get the Year

    dt.setDate(dt.getDate() + parseInt(days)); // get the Future Date
    
    const dateAfter = dt.toString();
    const dayExp = dateAfter.slice(0, 3);
    const monthExp = dateAfter.slice(4, 7);
    const dateExp = dateAfter.slice(8, 10);
    const yearExp = dateAfter.slice(11, 15);
    
    // Add Data
    Data.addData(
        {   
            id: num,
            account: accountName, 
            name: nameOwner,
            status: 'Active',
            activeFrom: `${dayFrom}, ${dateFrom} ${monthFrom} ${yearFrom}`,
            expired: `${dayExp}, ${dateExp} ${monthExp} ${yearExp}`
        }
    );

    account.value = ''; name.value = ''; totalDays.value = '';

    formModal.classList.toggle('hidden');
    accList.innerHTML = 'Loading ...';
    setTimeout(() => {
        showData();
    }, 500);
})

showData();

// Testing localStorage
localStorage.setItem(1, [ 'One', 'Two' ]);
console.log(localStorage);
localStorage.removeItem(1);