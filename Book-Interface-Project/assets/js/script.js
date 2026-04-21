
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


    if(BookTitle !== "")
    {

        textCount++;
        
        
          let myurl = "https://openlibrary.org/search.json?title=" + BookTitle
          let msg1Object = await fetch(myurl); 

          if (msg1Object.status >= 200 && msg1Object.status <= 299) {
            const msg1JSONText = await msg1Object.text(); 
            const msg1 = JSON.parse(msg1JSONText);

            let author_name_one = msg1.docs[0].author_name[0]; 
            let author_name_two = msg1.docs[1].author_name[0];
            let author_name_three = msg1.docs[2].author_name[0];
            let title = msg1.docs[0].title; 
            let titletwo = msg1.docs[1].title;
            let titlethree = msg1.docs[2].title;
            let first_publish_year = msg1.docs[0].first_publish_year;
            let first_publish_year_two = msg1.docs[1].first_publish_year;
            let first_publish_year_three = msg1.docs[2].first_publish_year;
            let cover_edition_key = msg1.docs[0].cover_edition_key;
            let cover_edition_key_two = msg1.docs[1].cover_edition_key; 
            let cover_edition_key_three = msg1.docs[2].cover_edition_key;
            
            let key = msg1.docs[0].key;
            let key_two = msg1.docs[1].key;
            let key_three = msg1.docs[2].key;

            let CoverImage = "https://covers.openlibrary.org/b/olid/" + cover_edition_key + "-L.jpg"
            let CoverImageTwo = "https://covers.openlibrary.org/b/olid/" + cover_edition_key_two + "-L.jpg"
            let CoverImageThree = "https://covers.openlibrary.org/b/olid/" + cover_edition_key_three + "-L.jpg"
            
            document.getElementById("Author").innerHTML =  "Author One: " + author_name_one;
            document.getElementById("AuthorTwo").innerHTML = "Author Two: " + author_name_two;
            document.getElementById("AuthorThree").innerHTML = "Author Three: " + author_name_three;
            document.getElementById("Title").innerHTML = "Book Title: " + title; 
            document.getElementById("TitleTwo").innerHTML = "Second Book Title: " + titletwo;
            document.getElementById("TitleThree").innerHTML = "Third Book Title: " + titlethree;
            document.getElementById("PublishedYear").innerHTML = "First Published Year: " + first_publish_year; 
            document.getElementById("PublishedYearTwo").innerHTML = "First Published Year: " + first_publish_year_two;
            document.getElementById("PublishedYearThree").innerHTML = "First Published Year: " + first_publish_year_three;
            document.getElementById("RetrievedImage").src = CoverImage;
            document.getElementById("RetrievedImageTwo").src = CoverImageTwo;
            document.getElementById("RetrievedImageThree").src = CoverImageThree;

            let information = "https://openlibrary.org" + key + ".json"
            let msg2Object = await fetch(information); 

            let information_two = "https://openlibrary.org" + key_two + ".json"
            let msg3Object = await fetch(information_two);

            let information_three = "https://openlibrary.org" + key_three + ".json"
            let msg4Object = await fetch(information_three);

         
            const msg2JSONText = await msg2Object.text(); 
            const msg2 = JSON.parse(msg2JSONText);
            
            const msg3JSONText = await msg3Object.text();
            const msg3 = JSON.parse(msg3JSONText);

            const msg4JSONText = await msg4Object.text();
            const msg4 = JSON.parse(msg4JSONText); 

            let summary = msg2.description; 
            let summary_two = msg3.description;
            let summary_three = msg4.description; 
            
            document.getElementById("Summary").innerHTML = "Summary: " + summary;
            document.getElementById("SummaryTwo").innerHTML = "Summary: " + summary_two;
            document.getElementById("SummaryThree").innerHTML = "Summary: " + summary_three;
            
          
            
           // let cover_i = msg1.docs[0].cover_i; 
            

            // let authorlist = "";
            // for (let i = 0; i < msg1.docs[0].author_name.length; i++) {
            //     authorlist += msg1.docs[0].author_name[i] + "<br>";
            // }


             
              

          }
        
        
        else if (msg1Object.status == 400){


         alert("Server error"); 
         return
        
           }


        else {

            if (msg1Object.status == 404){
                alert("The data you are looking for does not exist.")
                return
            }
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

            let author_name_one = msg1.docs[0].author_name[0];
            let author_name_two = msg1.docs[1].author_name[0];
            let author_name_three = msg1.docs[2].author_name[0]; 
            let title = msg1.docs[0].title; 
            let first_publish_year = msg1.docs[0].first_publish_year;
            let author_image = msg1.docs[0].author_key;

            let AuthorImage = "https://covers.openlibrary.org/a/olid/" + author_image + "-M.jpg"
            // let authorlist = "";
            // for (let i = 0; i < msg1.docs[0].author_name.length; i++) {
            //     authorlist += msg1.docs[0].author_name[i] + "<br>";
            // }



            document.getElementById("Author").innerHTML = "First Author's Name: " + author_name_one;
            document.getElementById("AuthorTwo").innerHTML = "Second Author's Name: " + author_name_two;
            document.getElementById("AuthorThree").innerHTML = "Third Author's Name: " + author_name_three; 
            document.getElementById("Title").innerHTML = "Book Title: " + title; 
            document.getElementById("PublishedYear").innerHTML = "First Published Year: " + first_publish_year; 
            document.getElementById("RetrievedImage").src = AuthorImage;
           

            

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

            let author_name_one = msg1.docs[0].author_name[0];
            let author_name_two = msg1.docs[1].author_name[0];
            let author_name_three = msg1.docs[2].author_name[0]; 
            let title = msg1.docs[0].title;
            let titletwo = msg1.docs[1].title;  
            let first_publish_year = msg1.docs[0].first_publish_year;
            let first_publish_year_two = msg1.docs[1].first_publish_year;

            let cover_edition_key = msg1.docs[0].cover_edition_key;
            let cover_edition_key_two = msg1.docs[1].cover_edition_key; 

            let CoverImage = "https://covers.openlibrary.org/b/olid/" + cover_edition_key + "-L.jpg"
            let CoverImageTwo = "https://covers.openlibrary.org/b/olid/" + cover_edition_key_two + "-L.jpg"

            // let authorlist = "";
            // for (let i = 0; i < msg1.docs[0].author_name.length; i++) {
            //     authorlist += msg1.docs[0].author_name[i] + "<br>";
            // }
            document.getElementById("Author").innerHTML = "First author's name: " + author_name_one;
            document.getElementById("AuthorTwo").innerHTML = "Second author's name: " + author_name_two;
            document.getElementById("AuthorThree").innerHTML = "Third author's name: " + author_name_three;
            document.getElementById("Title").innerHTML = "Book Title: " + title;
            document.getElementById("TitleTwo").innerHTML = "Second Book Title: " + titletwo;
            document.getElementById("PublishedYear").innerHTML = "First Published Year: " + first_publish_year;
            document.getElementById("PublishedYearTwo").innerHTML = "First Published Year: " + first_publish_year_two;
            document.getElementById("RetrievedImage").src = CoverImage;
            document.getElementById("RetrievedImageTwo").src = CoverImageTwo;

            

        }
    }

    if(textCount > 1)
    {
        document.getElementById("BookTitle").value = ""; 
        document.getElementById("AuthorName").value = ""; 
        document.getElementById("GeneralSubject").value = ""; 
        document.getElementById("Author").innerHTML = ""; 
        document.getElementById("AuthorTwo").innerHTML = ""; 
        document.getElementById("AuthorThree").innerHTML = ""; 
        document.getElementById("Title").innerHTML = "";
        document.getElementById("TitleTwo").innerHTML = "";
        document.getElementById("TitleThree").innerHTML = "";
        document.getElementById("PublishedYear").innerHTML = ""; 
        document.getElementById("PublishedYearTwo").innerHTML = ""; 
        document.getElementById("PublishedYearThree").innerHTML = "";
        document.getElementById("RetrievedImage").src = "";
        document.getElementById("RetrievedImageTwo").src = ""; 
        document.getElementById("RetrievedImageThree").src = ""; 
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

    document.getElementById("Author").innerHTML =  "";
    document.getElementById("AuthorTwo").innerHTML = "";
    document.getElementById("AuthorThree").innerHTML = "";
    document.getElementById("Title").innerHTML = ""; 
    document.getElementById("TitleTwo").innerHTML = ""; 
    document.getElementById("TitleThree").innerHTML = ""; 
    document.getElementById("PublishedYear").innerHTML = ""; 
    document.getElementById("PublishedYearTwo").innerHTML = "";
    document.getElementById("PublishedYearThree").innerHTML = "";
    document.getElementById("Summary").innerHTML = ""; 
    document.getElementById("SummaryTwo").innerHTML = ""; 
    document.getElementById("SummaryThree").innerHTML = "";


    if (document.getElementById("RetrievedImage").src != ""){
        document.getElementById("RetrievedImage").src = "";
    }

    if (document.getElementById("RetrievedImageTwo").src != ""){
        document.getElementById("RetrievedImageTwo").src = ""; 
    }

    if (document.getElementById("RetrievedImageThree").src != ""){
        document.getElementById("RetrievedImageThree").src = ""; 
    }

}


