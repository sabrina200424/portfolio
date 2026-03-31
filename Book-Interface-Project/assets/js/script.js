
let myChart=null; 


async function ShowResults(){

    "use strict";


    let BookTitle = document.getElementById("BookTitle").value; 
    let AuthorName = document.getElementById("AuthorName").value; 
    let GeneralSubject = document.getElementById("GeneralSubject").value; 



    // document.getElementById("BookTitleError").innerHTML = "";
    // document.getElementById("AuthorNameError").innerHTML = ""; 
    // document.getElementById("GeneralSubjectError").innerHTML = ""; 


    // let errorflag = false; 
    let textCount = 0; 

    if(BookTitle == "" && AuthorName == "" && GeneralSubject== ""){
        alert("Please input one of the following boxes."); 
        errorflag = true; 
    } 


    if(BookTitle !== "")
    {

        textCount++;
        
        
          let myurl = "https://openlibrary.org/search.json?title=" + BookTitle
          let msg1Object = await fetch(myurl); 

          if (msg1Object.status >= 200 && msg1Object.status <= 299) {
            const msg1JSONText = await msg1Object.text(); 
            const msg1 = JSON.parse(msg1JSONText);

            let author_name = msg1.docs[0].author_name[0]; 
            let title = msg1.docs[0].title; 
            let first_publish_year = msg1.docs[0].first_publish_year; 
           // let cover_i = msg1.docs[0].cover_i; 
            let cover_edition_key = msg1.docs[1].cover_edition_key; 

            let CoverImage = "https://covers.openlibrary.org/a/olid/" + cover_edition_key + ".jpg"

            let authorlist = "";
            for (let i = 0; i < msg1.docs[0].author_name.length; i++) {
                authorlist += msg1.docs[0].author_name[i] + "<br>";
            }
            document.getElementById("Author").innerHTML =  authorlist;
            document.getElementById("Title").innerHTML = "Book Title: " + title; 
            document.getElementById("PublishedYear").innerHTML = "First Published Year: " + first_publish_year; 
            document.getElementById("BookCover").innerHTML = CoverImage; 

            return

          }
        

            

    }     
    

    if(AuthorName !== "")
    {
        textCount++; 

        let myurl = "https://openlibrary.org/search.json?author=" + AuthorName + "&sort=new"
        let msg1Object = await fetch(myurl); 

        if (msg1Object.status >= 200 && msg1Object.status <= 299) {
            const msg1JSONText = await msg1Object.text(); 
            const msg1 = JSON.parse(msg1JSONText);

            let author_name = msg1.docs[0].author_name[0]; 
            let title = msg1.docs[0].title; 
            let first_publish_year = msg1.docs[0].first_publish_year;

            let authorlist = "";
            for (let i = 0; i < msg1.docs[0].author_name.length; i++) {
                authorlist += msg1.docs[0].author_name[i] + "<br>";
            }
            document.getElementById("Author").innerHTML = "Author's Name: " + authorlist;
            document.getElementById("Title").innerHTML = "Book Title: " + title; 
            document.getElementById("PublishedYear").innerHTML = "First Published Year: " + first_publish_year; 
           

            return

        }
        
    }

    
    if(GeneralSubject !== "")
    {
        textCount++; 

        let myurl = "https://openlibrary.org/search.json?subject=" + GeneralSubject
        let msg1Object = await fetch(myurl);

        if (msg1Object.status >= 200 && msg1Object.status <= 299) {
            const msg1JSONText = await msg1Object.text(); 
            const msg1 = JSON.parse(msg1JSONText);

            let author_name = msg1.docs[0].author_name[0]; 
            let title = msg1.docs[0].title; 
            let first_publish_year = msg1.docs[0].first_publish_year;

            let authorlist = "";
            for (let i = 0; i < msg1.docs[0].author_name.length; i++) {
                authorlist += msg1.docs[0].author_name[i] + "<br>";
            }
            document.getElementById("Author").innerHTML = "Author name: " + authorlist;
            document.getElementById("Title").innerHTML = "Book Title: " + title; 
            document.getElementById("PublishedYear").innerHTML = "First Published Year: " + first_publish_year; 
           

            return

        }
    }

    if(textCount > 1)
    {
        alert("Please enter information in only one box"); 
        return;
    }


   



}




 //  if(BookTitle !== null && AuthorName !== null){
    //     alert("Please input only one of the boxes.");
    //     errorflag = true;
    // }
 



























function ClearForm() {

    document.getElementById("BookTitle").value = ""; 
    document.getElementById("AuthorName").value = ""; 
    document.getElementById("GeneralSubject").value = ""; 


    // if (myChart !== null){
    //     myChart.destroy(); 
    //     myChart = null; 
    // } 

    document.getElementById("Author").value =  "";
    document.getElementById("Title").value = ""; 
    document.getElementById("PublishedYear").value = ""; 
    document.getElementById("BookCover").value = ""; 


}


