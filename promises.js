new Promise((res,rej)=>{
    fetch("https://randomuser.me/api")
    .then((response1)=>{
       if(!response1.ok){
        throw new Error("Network Error")
    }
    else{
        return response1.json();
    }
})
.then((response2)=>{
    return response2
})
.then((response3)=>{
    let image = response3.results[0].picture.large;
    let name = response3.results[0].name.first;
    document.getElementById('image').src = image;
    document.getElementById('name').innerText = name;
    console.log(image)
    res();
})
.catch((error)=>{
    console.log("Error", error)
    rej();
})
})