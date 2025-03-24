const addToList = (list, id) => {
  const storedList = getList(list);
    if(list=== 'compare' && storedList.length===2){
     console.log("Max count reached");
     return;
  }
  else{
    storedList.push(id);
    console.log("Added to ",list);
     const storedListStr = JSON.stringify(storedList);
    localStorage.setItem(list, storedListStr);
  }
    
};
const removeFromList = (list, id) => {
  const storedList = getList(list);
    const newList=storedList.filter((idx)=>idx!==id);
    console.log("removed from ",list);
  const storedListStr = JSON.stringify(newList);
  localStorage.setItem(list, storedListStr);
};

const getList = (list) => {
  const storedListstr = localStorage.getItem(list);
  if (storedListstr) {
    const storedListArr = JSON.parse(storedListstr);
    return storedListArr;
  } 
  else {
    return [];
  }
};
export { addToList, getList,removeFromList };
