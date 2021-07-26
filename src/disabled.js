const resetAccount = document.querySelector('.add-modal form .account .reset-account');
const resetName = document.querySelector('.add-modal form .owner-name .reset-name');
const resetPeriod = document.querySelector('.add-modal form .active-period .reset-period');

function makeResetDisabled(){
    resetAccount.classList.add('disabled');
    resetName.classList.add('disabled');
    resetPeriod.classList.add('disabled');
}

export default makeResetDisabled;