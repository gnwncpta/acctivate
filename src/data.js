let data = [
    // {
    //     id: 1,
    //     account: 'Netflix Premium',
    //     name: 'Gunawan Cipta',
    //     status: 'Active',
    //     activeFrom: 'Friday, 23 July 2021',
    //     expired: 'Saturday, 24 July 2021'
    // } -> the data format
];

const Data = {
    showData(){
        return data;
    },
    addData(item){
        data.push(item);
        console.log(data);
        return "Success Add Data!";
    },
    deleteData(id){
        data.forEach(item => {
            if(id == item.id){
                data.splice(item.id - 1, 1);
                console.log('Found! Deleted.');
            }
        });
        
        console.log(data);
    }
}

export default Data;