/* hCLLtUWPlxfyMPT83fNod6BpTh1EdGe_ */

async function ShowResults(){

    let myURL1 = "https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/2025-01-09/2025-02-10?adjusted=true&sort=asc&limit=120&apiKey=hCLLtUWPlxfyMPT83fNod6BpTh1EdGe_"
    let msg1Object = await fetch(myURL1);
        /* Check the status */
        if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
            let msg1JSONText = await msg1Object.text();
            // Parse the JSON string into an object
            let msg1 = JSON.parse(msg1JSONText);

            /* Your code to process the result goes here - 
               display the returned message */
            let stockdate = [];
            let stockvalue = [];
            let numdays = msg1.results.length;
            if (numdays > 0) {
                for (let i = 0; i < numdays; i++) {
                    /* stock close value */
                    stockvalue[i] = msg1.results[i].c;
                    /* date is in Unix milleseconds - create a temporary date variable */
                    var tempdate = new Date(msg1.results[i].t);
                    /* extract the date string from the value */
                    stockdate[i] = tempdate.toLocaleDateString();
                }
            }
    var ctx = document.getElementById("chartjs-0");
    var myChart = new Chart(ctx, {
        "type":"line",
        "data": {
            "labels": stockdate,
            "datasets":[{
                "data": stockvalue,
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