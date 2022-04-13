
let showLimit=10;
const dataLoad=(limit)=>{
    fetch('./reportdetails.json')
    .then(res=>res.json())
    .then(data=>{
         showData(data.slice(0,limit));
    
    })

}

dataLoad(showLimit);


const showData=(data)=>{
    $("#reportDetailsId").empty();


    for (const [idx,cellData] of data.entries()) {
        console.log(cellData,idx);

       
       const reportTable=document.getElementById('reportDetailsId');
       const tr=document.createElement('tr');
       tr.innerHTML=`
       
          <th scope="row">${idx+1}</th>
          <td >${cellData.userId}</td>
          <td >${cellData.userName}</td>
          <td >${cellData.login}</td>
          <td >${cellData.break}</td>
          <td >${cellData.logout}</td>
            
       `
       reportTable.appendChild(tr);
        
    }

}


const handleShowDays=(value)=>{
    // console.log(value)
   const daysLimit=parseInt(value);
   console.log(daysLimit);
   dataLoad(daysLimit);
    


}


