

const dataLoad=()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>{
         showData(data);
    
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
        <td>
            <button onclick="handleAction('${cellData?.userId}','${cellData?.userName}')" type="button" class="btn btn-primary">Primary</button>
        </td>
       `
       reportTable.appendChild(tr);
        
    }

}

    const handleAction=(userId,userName)=>{
   
    const data={'UserId':userId,'UserName':userName};
     console.log(data);


}
