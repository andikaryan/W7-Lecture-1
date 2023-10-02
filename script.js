const formCustomer = document.getElementById("formCustomer");
formCustomer.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const role = document.getElementById("role").value;

    console.log(name, username, role);

    // fetch("url",{
    //     method:"GET/POST/PUT/DELETE",
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
    // }).then((res)=>{

    // }).catch((error)=>{

    // })

    
    
    // fetch(`http://localhost:3000/api/customers/${name}`,{
    //     method:"GET",
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
    // }).then((res)=>{
    //     if(res.ok){
    //         alert("Berhasil menambahkan customer!")
    //     }else{
    //         alert("Gagal menambahkan customer!")
    //     }
    //     console.log(res);
    // }).catch((error)=>{
    //     alert(`Error messages: ${error.message}`);
    // })



    fetch("http://localhost:3000/api/customers",{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name:name,
            username:username,
            role:role
        })
    }).then((res)=>{
        if(res.ok){
            alert("Berhasil menambahkan customer!")
        }else{
            alert("Gagal menambahkan customer!")
        }
        console.log(res);
    }).catch((error)=>{
        alert(`Error messages: ${error.message}`);
    });
});