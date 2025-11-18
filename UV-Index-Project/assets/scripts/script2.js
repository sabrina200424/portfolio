
let myChart=null; 

async function ShowResults(){

    "use strict";


    // let apiKey =
    let ZipCode = document.getElementById("ZipCode").value; 
    let chosenDate = document.getElementById("chosenDate").value; 
    

    let originalDate = new Date(chosenDate); 
    
    let afterFive = new Date(originalDate); 
    afterFive.setDate(originalDate.getDate() + 5); 

    let beforeFive = new Date(originalDate); 
    beforeFive.setDate(originalDate.getDate() - 5); 


    document.getElementById("ZipCodeError").innerHTML = ""; 
    document.getElementById("chosenDateError").innerHTML = ""; 


    let errorflag= false; 



    if(chosenDate == ""){
        document.getElementById("chosenDateError").innerHTML = "Date is Required"; 
        errorflag = true; 
    }

    if(ZipCode == ""){
        document.getElementById("ZipCodeError").innerHTML = "Zip Code is Required"; 
        errorflag = true; 
    }

    let myurl = "https://geocoding-api.open-meteo.com/v1/search?name=" + ZipCode + "&count=1&language=en&format=json"
    let msg1Object = await fetch(myurl);


        if (msg1Object.status >= 200 && msg1Object.status <= 299) {
            const msg1JSONText = await msg1Object.text();
            const msg1 = JSON.parse(msg1JSONText);

            // add another async function here 

            let myurlx = "https://geocoding-api.open-meteo.com/v1/search?name=" + ZipCode + "&count=1&language=en&format=json"
            let myurl2 = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=uv_index_max"
            let msg2Object = await fetch(myurl2);


            if (msg2Object.status >= 200 && msg2Object.status <= 299) {
                const msg2JSONText = await msg2Object.text();
                const msg2 = JSON.parse(msg2JSONText);






            let stockdate = [];
            let stockvalue = [];
            let numdays = msg1.results.length;

            // let numdays = msg2.daily.length; 

            if (numdays > 0) {
                for (let i = 0; i < numdays; i++) {
                    stockvalue[i] = msg1.results[i].c;
                    let tempdate = new Date(msg1.results[i].t);
                    stockdate[i] = tempdate.toLocaleDateString();
                }
            }

       if (myChart !== null){
           myChart.destroy();
       }

       
    var ctx = document.getElementById("chartjs-0");
     myChart = new Chart(ctx, {
        "type":"line",
        "data": {
            "labels": stockdate,
            "datasets":[{
                label: "UV Index in " + ZipCode,
                "data": stockvalue,
                borderColor: "green", 
                fill: false
        }]
    },
    "options":{ 
        responsive: false,
        maintainAspectRatio: true,
    }
    });
    }
        else {
            alert("Stock Not Found - Status: " + msg1Object.status)
            return;
        }      

    }


 }

