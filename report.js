
const loadData=()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>{
         showReportData(data);
    
    })
}

loadData();

const showReportData=(data)=>{

    for (const [idx,cellData] of data.entries()) {
        // console.log(cellData,idx);
       
       const reportTable=document.getElementById('reportID');
       const tr=document.createElement('tr');
       tr.innerHTML=`
        <th scope="row">${idx+1}</th>
        <td >${cellData.userId}</td>
        <td >${cellData.userName}</td>
        <td>   
            <button  method="POST" onclick="window.location.href = 'reportdetails.html'" type="button" class="btn btn-primary">Primary</button>
        </td>
       `
       reportTable.appendChild(tr);
       
        
    }

}

