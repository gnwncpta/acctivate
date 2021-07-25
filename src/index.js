import './index.css';
import Data from './data';
let num = 0;

// Form Selection
const formModal = document.querySelector('.add-modal');
const account = document.querySelector('.add-modal form #account');
const name = document.querySelector('.add-modal form #name');
const totalDays = document.querySelector('.add-modal form #active-period');

// Modal Button Selection
const saveButtonModal = document.querySelector('.add-modal form .buttons button:first-child');
const cancelButtonModal = document.querySelector('.add-modal form .buttons button:last-child');
const addButton = document.querySelector('section.account .title button');

// Header Container Selection
const stack = document.querySelector('header a');

// Table Body Selection
const accList = document.querySelector('tbody');

// Empty State Selection
const emptyState = document.querySelector('.empty-state');

// Tech Stack Selection
const techStackModal = document.querySelector('.tech-stack');
const close = document.querySelector('.tech-stack .head .close');

stack.addEventListener('click', () => {
    techStackModal.classList.toggle('hidden');
})

close.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.classList.toggle('hidden');
});

function showData(reshow){
    let listDOM = '';

    if(Data.showData().length === 0){
        if(reshow){
            emptyState.classList.add('hidden');
            listDOM = null;
            accList.innerHTML = listDOM;
        }
        return null;
    }

    Data.showData().forEach(item => {
        listDOM += `<tr>
                        <td>${item.id}</td>
                        <td>${item.account}</td>
                        <td>${item.name}</td>
                        <td>${item.status}</td>
                        <td>${item.activePeriod} ${item.activePeriod > 1 ? 'Days' : 'Day'}</td>
                        <td>${item.activeFrom}</td>
                        <td>${item.expired}</td>
                        <td><button class="delete" data-id="${item.id}">Delete</button></td>
                    </tr>`;
    
        accList.innerHTML = listDOM;
    });
}

function instantiateCurrent(){
    // Instantiate the Date
    let dt = new Date();

    const dateBefore = dt.toString();
    const dayFrom = dateBefore.slice(0, 3); // get the dayFrom
    const monthFrom = dateBefore.slice(4, 7) // get Month Before
    const dateFrom = dateBefore.slice(8, 10); // get the date
    const yearFrom = dateBefore.slice(11, 15); // get the Year

    return `${dayFrom}, ${dateFrom} ${monthFrom} ${yearFrom}`;
}

function instantiateExpired(days){
    // Instantiate the Date
    let dt = new Date();
    dt.setDate(dt.getDate() + parseInt(days)); // get the Future Date

    const dateAfter = dt.toString();
    const dayExp = dateAfter.slice(0, 3);
    const monthExp = dateAfter.slice(4, 7);
    const dateExp = dateAfter.slice(8, 10);
    const yearExp = dateAfter.slice(11, 15);

    return `${dayExp}, ${dateExp} ${monthExp} ${yearExp}`;
}

addButton.addEventListener('click', () => {
    formModal.classList.toggle('hidden');
});

cancelButtonModal.addEventListener('click', (e) => {
    e.preventDefault();
    formModal.classList.toggle('hidden');
});

document.body.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        let id = e.target.dataset.id;
        Data.deleteData(id);
        showData(true);
        
        num -= 1;
    }
});

saveButtonModal.addEventListener('click', (e) => {
    e.preventDefault();

    num += 1;
    console.log(num)

    const accountName = account.value;
    const nameOwner = name.value;
    const days = totalDays.value;

    
    // Add Data
    Data.addData(
        {   
            id: num,
            account: accountName, 
            name: nameOwner,
            status: `Active`,
            activePeriod: days,
            activeFrom: `${instantiateCurrent()}`,
            expired: `${instantiateExpired(days)}`
        }
    );

    account.value = ''; name.value = ''; totalDays.value = '';
    emptyState.classList.add('hidden');
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