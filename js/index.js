console.log('Start' + new Date().getTime());

const url =
    'https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json';

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        // Typical action to be performed when the document is ready:
//       // document.getElementById("app").innerHTML = xhttp.responseText;
//       console.log('DATA:'+ new Date().getTime());
//     }
// };
// xhttp.open("GET", url, true);
// xhttp.send();

// console.log('End'+ new Date().getTime());

const XhrPromise = new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            // document.getElementById("app").innerHTML = xhttp.responseText;
            console.log('DATA:' + new Date().getTime());

            resolve(xhttp.responseText);
        }else{
            console.log('Error:' + new Date().getTime());
            //let error = new Error('Error'+this.status +"#"+this.statusText);
            reject(error);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();


});

// promise
XhrPromise.then((data) => {
    console.log(data);
}).catch((error) => {  
    console.log(error);
});

// async await

async function getData() {
    try {
        let data = await XhrPromise;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


getData();


console.log('End' + new Date().getTime());