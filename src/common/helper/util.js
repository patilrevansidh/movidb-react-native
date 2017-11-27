const obj = {
    calCategory (ids=[],category=[]) {
        let categories = ''
        const a = ids.map((c)=>{
            category.filter((ct)=>{
                    const name=  c == ct.id ? ct.name :''
                    if(name) {
                        categories = `${categories}${name},`
                    }
                    return name
                }).filter(d=>d)
        }); 
        return categories;           
    },
    uniqueCalculator(arr=[],id) {
        const index = arr.length ? arr.findIndex((m)=> m == id) : -1;
        return index < 0 ? [...arr,id] : arr.filter(m => id != m);
    }

}

export default obj;