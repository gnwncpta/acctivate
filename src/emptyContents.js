const account = document.querySelector('.add-modal form #account');
const name = document.querySelector('.add-modal form #name');
const totalDays = document.querySelector('.add-modal form #active-period');
const activeFrom = document.querySelector('.add-modal form #active-from');

function emptyFields(){
    account.value = '';
    name.value = '';
    totalDays.value = '';
    activeFrom.value = 'dd/mm/yyyy';
}

export default emptyFields;