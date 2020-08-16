getjson = (newsURL) => {
    fetch(newsURL)
    .then((rawRes) => {
        rawRes.json().then(res=>{
            for(let i=0; i<5; i++){
                let resultElement = document.createElement("pre")
                resultElement.innerHTML = JSON.stringify(res[i]);
                document.getElementById("newsList").appendChild(resultElement)
                console.log(res[i])
            }
        })
        
    }).catch(err => console.error(err));
}



