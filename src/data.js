let data = [
    // {
    //     id: 1,
    //     account: 'Netflix Premium',
    //     name: 'Gunawan Cipta',
    //     status: 'Active',
    //     activeFrom: 'Friday, 23 July 2021',
    //     expired: 'Saturday, 24 July 2021'
    // }
];

const Data = {
    showData(){
        return data;
    },
    addData(item){
        data.push(item);
        console.log(data)
    },
    deleteData(id){
        data.forEach(item => {
            if(id == item.id){
                console.log('Found! the data will be deleted.');
            }
        })
    }
}

export default Data;