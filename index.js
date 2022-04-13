
document.getElementById('alertShowId').style.display='none';
document.getElementById('alertFailedId').style.display='none';
document.getElementById('loadingId').style.display='none';


const dataLoad=()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
         showData(data);
    
    })

}

dataLoad();


const showData=(data)=>{

    for (const [idx,cellData] of data.entries()) {
       // console.log(cellData,idx);


       const tableBody=document.getElementById('tbodyID');
       const tr=document.createElement('tr');
       tr.innerHTML=`
       
          <th scope="row">${idx+1}</th>
          <td >${cellData.userId}</td>
          <td >${cellData.userName}</td>
        <td>
            <label onclick="handleAction('${cellData?.userId}','${cellData?.userName}')" class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
            </label>
        </td>
       `
       tableBody.appendChild(tr);
        
    }


}

const handleButton=(id)=>{
    console.log(id);

}


const handleAction=(userId,userName)=>{
   
    document.getElementById('loadingId').style.display='block';
    
    const data={'UserId':userId,'UserName':userName};
     console.log(data);


    // data send to server
    const url='http://localhost:5000/users';
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {

        document.getElementById('alertShowId').style.display='block';
        document.getElementById('loadingId').style.display='none';
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('loadingId').style.display='none';
        document.getElementById('alertFailedId').style.display='block';

    });

}

const handleAlert=()=>{
    document.getElementById('alertShowId').style.display='none'
    document.getElementById('alertFailedId').style.display='none';


}