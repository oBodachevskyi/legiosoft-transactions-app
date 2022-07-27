function filterTransactionsList(arr, type, status) {
 /*    console.log(arr)
    console.log(type)
    console.log(status) */
    if(type && !status) {
        return arr.filter(item => item.Type === type)             
    }
    if (status && !type) {
        return arr.filter(item => item.Status === status) 
    }

    if(type && status){
        return arr.filter(item => (item.Status === status && item.Type === type))
    }
    
    return arr
}

export default filterTransactionsList;