getjson = () => {
    // var request = new XMLHttpRequest()
    // const proxyurl = "https://cors-anywhere.herokuapp.com/"
    // const url = "https://time.com"
    // request.open('GET',proxyurl+url,true)
    // request.onload = function() {
    //     var data = JSON.parse(this.response)
    //     data.foreach((news) => {
    //         console.log(data)
    //     })
    // }
    // request.send()
    // const proxyurl = "https://cors-anywhere.herokuapp.com/"
    // const url = "https://time.com"
    const url = "https://time.com"
    fetch(url,{
        method : "GET",
        mode : "no-cors"
    }) 
    .then((res) => {
        res.text().then((r)=>console.log(r))
        // res.json()
    });
    // .then((out) => {
    //     console.log('Output: ',out);
    // }).catch(err => console.error(err));
    
    

}

