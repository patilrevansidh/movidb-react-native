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
    }
}

export default obj;