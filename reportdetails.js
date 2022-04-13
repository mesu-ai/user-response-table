



const dataLoad=()=>{
    fetch('./reportdetails.json')
    .then(res=>res.json())
    .then(data=>{
         showData(data.slice(0,7));
    
    })

}

dataLoad();


const showData=(data)=>{

    for (const [idx,cellData] of data.entries()) {
        console.log(cellData,idx);

       
       const reportTable=document.getElementById('reportID');
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

let daysLimit=7;
const handleShowDays=(value)=>{
    // console.log(value)
    daysLimit=value;
    console.log(daysLimit);

}

console.log(daysLimit);





//     const handleAction=(userId,userName)=>{

        
   
//     const data={'UserId':userId,'UserName':userName};
//      console.log(data);

// }
