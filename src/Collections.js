const Collection = {
    showCollections(){
        return localStorage.Collections;
    },
    addCollections(item){
        console.log(item);
        let arr = localStorage.Collections = [];
        arr.push(item);
        console.log(localStorage.Collections);
        return "Berhasil menambahkan data!";
    }
}

export default Collection;