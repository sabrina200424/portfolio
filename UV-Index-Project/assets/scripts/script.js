
let myChart=null; 

async function ShowResults(){

    "use strict";


    // let apiKey =
    let ZipCode = document.getElementById("ZipCode").value; 
    let chosenDate = document.getElementById("chosenDate").value; 
     
    document.getElementById("ZipCodeError").innerHTML = ""; 
    document.getElementById("chosenDateError").innerHTML = ""; 


    let errorflag = false; 



    if(chosenDate == ""){
        document.getElementById("chosenDateError").innerHTML = "Date is Required"; 
        errorflag = true; 
    }

    if(ZipCode == ""){
        document.getElementById("ZipCodeError").innerHTML = "Zip Code is Required"; 
        errorflag = true; 
    }


    let originalDate = new Date(chosenDate); 
   // originalDate.toISOString().split('T')[0]
   let s = originalDate.toISOString().split('T')[0]
    
    let afterFive = new Date(originalDate); 
    afterFive.setDate(originalDate.getDate() + 5); 

    let lastDate = afterFive.toISOString().split('T')[0]

    //afterFive.toISOString().split('T')[0]

    let beforeFive = new Date(originalDate); 
    beforeFive.setDate(originalDate.getDate() - 5);
    
    let initialDate = beforeFive.toISOString().split('T')[0]

   // beforeFive.toISOString().split('T')[0]



  

    let myurl = "https://geocoding-api.open-meteo.com/v1/search?name=" + ZipCode + "&count=1&language=en&format=json"
    let msg1Object = await fetch(myurl);


        if (msg1Object.status >= 200 && msg1Object.status <= 299) {
            const msg1JSONText = await msg1Object.text();
            const msg1 = JSON.parse(msg1JSONText);


            let latitude = msg1.results[0].latitude; 
            let longitude = msg1.results[0].longitude; 
          //  let myurlx = "https://geocoding-api.open-meteo.com/v1/search?name=" + ZipCode + "&count=1&language=en&format=json"
            let myurl2 = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&hourly=uv_index&start_date=" + initialDate + "&end_date=" + lastDate
            let msg2Object = await fetch(myurl2);


            if (msg2Object.status >= 200 && msg2Object.status <= 299) {
                const msg2JSONText = await msg2Object.text();
                const msg2 = JSON.parse(msg2JSONText);


           




            let hours = [];
            let amount = [];

            let numdays = msg2.hourly.time.length;

            

                for(let i = 0; i < numdays; i++ ){
                    hours[i] = msg2.hourly.time[i]
                    amount[i] = msg2.hourly.uv_index[i];
                }

       if (myChart !== null){
           myChart.destroy();
       }

       
    var ctx = document.getElementById("chartjs-0");
     myChart = new Chart(ctx, {
        "type":"line",
        "data": {
            "labels": hours,
            "datasets":[{
                label: "UV Index in " + ZipCode,
                "data": amount,
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
            alert(" UV Data Not Found - Status: " + msg1Object.status)
            return;
        }      

    }


 }

 function clearform() {

    document.getElementById("ZipCode").value = ""; 
    document.getElementById("chosenDate").value = ""; 


    if(myChart !== null){
        myChart.destroy();
        mychart = null; 
    }


 }
