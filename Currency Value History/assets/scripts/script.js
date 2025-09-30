/* hCLLtUWPlxfyMPT83fNod6BpTh1EdGe_ */

async function ShowResults(){

    "use strict"; 

    let apiKey = "hCLLtUWPlxfyMPT83fNod6BpTh1EdGe_" ; 
    let basecurrency = document.getElementById("BaseCurrency").value;
    let convertcurrency = document.getElementById("ConvertToCurrency").value; 
    let fromDate = document.getElementById("FromDate").value; 
    let toDate = document.getElementById("ToDate").value; 


    document.getElementById("FromDateError").innerHTML = ""; 
    document.getElementById("ToDateError").innerHTML = ""; 
    document.getElementById("ConvertToCurrencyError").innerHTML = ""; 
    document.getElementById("BaseCurrencyError").innerHTML = ""; 




    
    let errorflag= false; 


    if(fromDate == ""){
        document.getElementById("FromDateError").innerHTML = "From Date is Required"; 
        errorflag = true; 
    }


    if(toDate == ""){
        document.getElementById("ToDateError").innerHTML = "To Date is Required"; 
        errorflag = true; 
    }


    if(basecurrency == ""){
        document.getElementById("BaseCurrencyError").innerHTML = "Base Currency is Required"; 
        errorflag = true; 
    }


    if(convertcurrency == ""){
        document.getElementById("ConvertToCurrencyError").innerHTML = "Convert Currency is Required"; 
        errorflag = true; 
    }





    

    let myurl = "https://api.polygon.io/v2/aggs/ticker/C:" + basecurrency + convertcurrency +"/range/1/day/" + fromDate + "/" + toDate + "?adjusted=true&sort=asc&limit=120&apiKey=" + apiKey
    let msg1Object = await fetch(myurl);


        if (msg1Object.status >= 200 && msg1Object.status <= 299) {
            const msg1JSONText = await msg1Object.text();
            const msg1 = JSON.parse(msg1JSONText);

            let stockdate = [];
            let stockvalue = [];
            let numdays = msg1.results.length;

            if (numdays > 0) {
                for (let i = 0; i < numdays; i++) {
                    stockvalue[i] = msg1.results[i].c;
                    let tempdate = new Date(msg1.results[i].t);
                    stockdate[i] = tempdate.toLocaleDateString();
                }
            }
    var ctx = document.getElementById("chartjs-0");
    var myChart = new Chart(ctx, {
        "type":"line",
        "data": {
            "labels": stockdate,
            "datasets":[{
                label: basecurrency + " to " + convertcurrency,
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

function clearform() {
    document.getElementById("BaseCurrency").value = ""; 
    document.getElementById("ConvertToCurrency").value = ""; 
    document.getElementById("FromDate").innerHTML = ""; 
    document.getElementById("ToDate").innerHTML = ""; 
}


    



