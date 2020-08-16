getjson = (newsURL) => {
    clearData();
    let resultArray = [];
    fetch(newsURL)
    .then((rawRes) => {
        rawRes.json().then(res=>{
            for(let i=0; i<5; i++){
                let resultElement = document.createElement("pre")
                resultElement.innerHTML = JSON.stringify(res[i]);
                document.getElementById("newsList").appendChild(resultElement)
                resultArray.push(res[i]);
            }
        })
        
    }).catch(err => console.error(err));
    console.log(resultArray);
}

clearData = () => {
    console.clear()
    var node = document.getElementById("newsList")
    while(node.firstChild) {
        node.removeChild(node.firstChild)
    }
}


