
let myChart=null; 


async function ShowResults(){

    "use strict";


    let BookTitle = document.getElementById("BookTitle").value; 
    let AuthorName = document.getElementById("AuthorName").value; 
    let GeneralSubject = document.getElementById("GeneralSubject").value; 



    // document.getElementById("BookTitleError").innerHTML = "";
    // document.getElementById("AuthorNameError").innerHTML = ""; 
    // document.getElementById("GeneralSubjectError").innerHTML = ""; 


    let errorflag = false; 
    let textCount = 0; 

    if(BookTitle == "" && AuthorName == "" && GeneralSubject== ""){
        alert("Please input one of the following boxes."); 
        errorflag = true; 
    } 


    if(BookTitle !== null)
    {
        textCount++; 
    }

    if(AuthorName !== null)
    {
        textCount++; 
    }

    if(GeneralSubject !== null)
    {
        textCount++; 
    }

    if(textCount > 1)
    {
        alert("Please enter information in only one box"); 
    }


    //  if(BookTitle !== null && AuthorName !== null){
    //     alert("Please input only one of the boxes.");
    //     errorflag = true;
    // }
 

    





}




























function ClearForm() {

    document.getElementById("BookTitle").value = ""; 
    document.getElementById("AuthorName").value = ""; 
    document.getElementById("GeneralSubject").value = ""; 


    if (myChart !== null){
        myChart.destroy(); 
        myChart = null; 
    } 


}


