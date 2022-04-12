

document.getElementById('alertShowId').style.display='none';
document.getElementById('alertFailedId').style.display='none';
document.getElementById('loadingId').style.display='none';

const handleAction=()=>{
    document.getElementById('loadingId').style.display='block';

    const userId= document.getElementById('userId').innerText;
    const userName= document.getElementById('userName').innerText;
    
    const data={'UserId':userId,'UserName':userName};
    // console.log(data);


    // data send to server
    const url='http://127.0.0.1:8000/changing-state';
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