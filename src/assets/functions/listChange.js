const addToList=(list,id)=>{
    const storedList=getList(list);
    if(list==='wish-list'){
        if(storedList.includes(id)){
            console.log("This is already in the wish list.");
        }
        else{
            storedList.push(id);
            console.log("Added to wish list.");
        }
    }
    else{
         storedList.push(id);
         console.log("Added to cart");
    }
    const storedListStr=JSON.stringify(storedList);
    localStorage.setItem(list,storedListStr);
}
const getList=(list)=>{
    const storedListstr=localStorage.getItem(list);
    if(storedListstr){
        const storedListArr=JSON.parse(storedListstr);
        return storedListArr;
    }
    else{
        return [];
    }
}
export {addToList,getList};