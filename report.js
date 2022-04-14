
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
        
        // storeId(cellData.userId,cellData.userName);

        // console.log(cellData,idx);
       
       const reportTable=document.getElementById('reportID');
       const tr=document.createElement('tr');
       tr.innerHTML=`
        <th scope="row">${idx+1}</th>
        <td >${cellData.userId}</td>
        <td >${cellData.userName}</td>
        <td>   
            <button onclick="storeId('${cellData.userId}','${cellData.userName}')" type="button" class="btn btn-primary">Details</button>
        </td>
       `
       reportTable.appendChild(tr);
    //    window.location.href = 'reportdetails.html'
       
    }

}


const storeId=(id,name)=>{

    localStorage.setItem("id",id);
    window.location.href='reportdetails.html';
}

