import './index.css';
import Data from './data';
import Collection from './Collections';
import makeResetDisabled from './disabled';
import emptyFields from './emptyContents';
import instantiateCurrent from './Date/instantiateCurrent';
import instantiateExpired from './Date/instantiateExpired';

// Instantiate localStorage to zero length of Array
localStorage.Collections = []

// Masalah yang harus dihadapi sekarang adalah
// Memasukkan data JSON ke dalam localStorage.Collections
// localStorage.Collections ini harus bertipe data Array agar nanti bisa di looping
// lalu memasukkan data JSON ke dalam localStorage.Collections array

const data = {
    num: 0
}

// Form Selection
const formModal = document.querySelector('.add-modal');
const account = document.querySelector('.add-modal form #account');
const name = document.querySelector('.add-modal form #name');
const totalDays = document.querySelector('.add-modal form #active-period');
const activeFrom = document.querySelector('.add-modal form #active-from');

// Reset From Value
const resetAccountBtn = document.querySelector('.add-modal form .account button.reset-account');
const resetNameBtn = document.querySelector('.add-modal form .owner-name button.reset-name');
const resetPeriodBtn = document.querySelector('.add-modal form .active-period button.reset-period');

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

// Form -> Event
account.addEventListener('input', (e) => {
    if(e.target.value == ''){
        resetAccountBtn.classList.add('disabled');
        resetAccountBtn.setAttribute('disabled', ' ');
    } else {
        resetAccountBtn.classList.remove('disabled');
        resetAccountBtn.removeAttribute('disabled');
    }
});

name.addEventListener('input', (e) => {
    if(e.target.value == ''){
        resetNameBtn.classList.add('disabled');
        resetNameBtn.setAttribute('disabled', ' ');
    } else {
        resetNameBtn.classList.remove('disabled');
        resetNameBtn.removeAttribute('disabled');
    }
});

totalDays.addEventListener('input', (e) => {
    if(e.target.value == ''){
        resetPeriodBtn.classList.add('disabled');
        resetPeriodBtn.setAttribute('disabled', ' ');
    } else {
        resetPeriodBtn.classList.remove('disabled');
        resetPeriodBtn.removeAttribute('disabled');
    }
});

// Reset -> Event
resetAccountBtn.addEventListener('click', (e) => {
    e.preventDefault();

    resetAccountBtn.classList.add('disabled');
    resetAccountBtn.setAttribute('disabled', ' ');
    account.value = '';
});

resetNameBtn.addEventListener('click', (e) => { 
    e.preventDefault();

    resetNameBtn.classList.add('disabled');
    resetNameBtn.setAttribute('disabled', ' ');
    name.value = '';
});

resetPeriodBtn.addEventListener('click', (e) => { 
    e.preventDefault();
    
    resetPeriodBtn.classList.add('disabled');
    resetPeriodBtn.setAttribute('disabled', ' ');
    totalDays.value = '';
});


stack.addEventListener('click', () => {
    techStackModal.classList.toggle('hidden');
})

close.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.classList.toggle('hidden');
});

function showData(data, reshow){
    let listDOM = '';

    if(Data.showData().length === 0){
        if(reshow){
            emptyState.classList.add('hidden');
            listDOM = null;
            accList.innerHTML = listDOM;
        }
        return null;
    }

    console.log(data)

    Data.showData().forEach((item, index) => {
        listDOM += `<tr>
                        <td>${index+1}</td>
                        <td>${item.account}</td>
                        <td>${item.name}</td>
                        <td>${item.status}</td>
                        <td>${item.activePeriod} ${item.activePeriod > 1 ? 'Days' : 'Day'}</td>
                        <td>${item.activeFrom}</td>
                        <td>${item.expired}</td>
                        <td><button class="delete" data-id="${index+1}">Delete</button></td>
                    </tr>`;
    
        accList.innerHTML = listDOM;
    });
}

addButton.addEventListener('click', () => {
    formModal.classList.toggle('hidden');
});

cancelButtonModal.addEventListener('click', (e) => {
    e.preventDefault();
    formModal.classList.toggle('hidden');
    emptyFields();
    makeResetDisabled();
});

document.body.addEventListener('click', (e) => {

    // If users click delete button
    if(e.target.classList.contains('delete')){
        let id = e.target.dataset.id;
        Data.deleteData(id);
        showData(true);

        data.num -= 1;
    }
});

saveButtonModal.addEventListener('click', (e) => {
    e.preventDefault();

    data.num += 1;

    const accountName = account.value;
    const nameOwner = name.value;
    const days = totalDays.value;
    const activeBefore = activeFrom.value;

    let item = {   
        id: data.num,
        account: accountName.trim(), 
        name: nameOwner.trim(),
        status: `Active`,
        activePeriod: days.trim(),
        activeFrom: `${instantiateCurrent(activeBefore)}`,
        expired: `${instantiateExpired(activeBefore, days)}`
    }
    
    // Add Data
    console.log(Data.addData(item));
    localStorage.setItem('dataSaved', true);

    let jsonify = JSON.stringify(item);
    console.log(Collection.addCollections(jsonify));

    emptyFields();
    makeResetDisabled();

    formModal.classList.toggle('hidden');
    emptyState.classList.add('hidden');
    accList.innerHTML = 'Loading ...';

    setTimeout(() => {
        showData();
    }, 500);
})

if(localStorage.getItem('dataSaved') === 'true'){   
    console.log('Found Data on localStorage!');
    
    showData(localStorage.getItem(data.num), false);
}