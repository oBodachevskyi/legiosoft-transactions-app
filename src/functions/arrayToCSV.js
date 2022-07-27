 const arrayToCSV = (header, array) => {
    const filtrHeader = header.filter(item => item !== false);
    const arr = array.map(item => filtrHeader.map(cs => (item[cs])))
      
    const csv = [
        filtrHeader,
        ...arr]
       .map(e => e.join(",")) 
       .join("\n");
       return csv 
 }

 export default arrayToCSV;