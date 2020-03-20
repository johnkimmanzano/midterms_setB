
    
    function result(){
        var grade1 = parseInt(document.getElementsByTagName('input')[1].value);
        var grade2 = parseInt(document.getElementsByTagName('input')[2].value);
        var grade3 = parseInt(document.getElementsByTagName('input')[3].value); 
        var grade4 = parseInt(document.getElementsByTagName('input')[4].value);
        var grade5 = parseInt(document.getElementsByTagName('input')[5].value);
    

        if (grade1 >=90 && grade1 <=100) {
        document.getElementsByTagName('td')[2].textContent = "Excellent";
        document.getElementsByTagName('td')[2].style.color = "black";
        }else if (grade1 >=80 && grade1 <=89){
            document.getElementsByTagName('td')[2].textContent = "Good";
            document.getElementsByTagName('td')[2].style.color = "black";
            grade1 = 1;
        }else if (grade1 >=70 && grade1 <=79){
            document.getElementsByTagName('td')[2].textContent = "Average";
            document.getElementsByTagName('td')[2].style.color = "black";
            grade1 = 1;
        }else if (grade1 >=60 && grade1 <=69){
            document.getElementsByTagName('td')[2].textContent = "Poor";
            document.getElementsByTagName('td')[2].style.color = "black";
            grade1 = 1;
        }else if (grade1 >=0 && grade1 <=59){
            document.getElementsByTagName('td')[2].textContent = "Fail";
            document.getElementsByTagName('td')[2].style.color = "red";
            grade1 = 0;
        }else{
            document.getElementsByTagName('td')[2].textContent = "Undefined Grade";
            document.getElementsByTagName('td')[2].style.color = "red";
           
        }
        
        if (grade2 >=90 && grade2 <=100){
            document.getElementsByTagName('td')[5].textContent = "Excellent";
            document.getElementsByTagName('td')[5].style.color = "black";
        }else if (grade2 >=80 && grade2 <=89){
            document.getElementsByTagName('td')[5].textContent = "Good";
            document.getElementsByTagName('td')[5].style.color = "black";
            grade2 = 1;
        }else if (grade2 >=70 && grade2 <=79){
            document.getElementsByTagName('td')[5].textContent = "Average";
            document.getElementsByTagName('td')[5].style.color = "black";
            grade2 = 1;
        }else if (grade2 >=60 && grade2 <=69){
            document.getElementsByTagName('td')[5].textContent = "Poor";
            document.getElementsByTagName('td')[5].style.color = "black";
            grade2 = 1;
        }else if (grade2 >=0 && grade2 <=59){
            document.getElementsByTagName('td')[5].textContent = "Fail";
            document.getElementsByTagName('td')[5].style.color = "red";
            grade2 = 0;
        }else{
            document.getElementsByTagName('td')[5].textContent = "Undefined Grade";
            document.getElementsByTagName('td')[5].style.color = "red";
           
        }

        if (grade3 >=90 && grade3 <=100){
            document.getElementsByTagName('td')[8].textContent = "Excellent";
            document.getElementsByTagName('td')[8].style.color = "black";
        }else if (grade3 >=80 && grade3 <=89){
            document.getElementsByTagName('td')[8].textContent = "Good";
            document.getElementsByTagName('td')[8].style.color = "black";
            grade3 = 1;
        }else if (grade3 >=70 && grade3 <=79){
            document.getElementsByTagName('td')[8].textContent = "Average";
            document.getElementsByTagName('td')[8].style.color = "black";
            grade3 = 1;
        }else if (grade3 >=60 && grade3 <=69){
            document.getElementsByTagName('td')[8].textContent = "Poor";
            document.getElementsByTagName('td')[8].style.color = "black";
            grade3 = 1;
        }else if (grade3 >=0 && grade3 <=59){
            document.getElementsByTagName('td')[8].textContent = "Fail";
            document.getElementsByTagName('td')[8].style.color = "red";
            grade3 = 0;
        }else{
            document.getElementsByTagName('td')[8].textContent = "Undefined Grade";
            document.getElementsByTagName('td')[8].style.color = "red";
            
        }

        if (grade4 >=90 && grade4 <=100){
            document.getElementsByTagName('td')[11].textContent = "Excellent";
            document.getElementsByTagName('td')[11].style.color = "black";
        }else if (grade4 >=80 && grade4 <=89){
            document.getElementsByTagName('td')[11].textContent = "Good";
            document.getElementsByTagName('td')[11].style.color = "black";
            grade4 = 1;
        }else if (grade4 >=70 && grade4 <=79){
            document.getElementsByTagName('td')[11].textContent = "Average";
            document.getElementsByTagName('td')[11].style.color = "black";
            grade4 = 1;
        }else if (grade4 >=60 && grade4 <=69){
            document.getElementsByTagName('td')[11].textContent = "Poor";
            document.getElementsByTagName('td')[11].style.color = "black";
            grade4 = 1;
        }else if (grade4 >=0 && grade4 <=59){
            document.getElementsByTagName('td')[11].textContent = "Fail";
            document.getElementsByTagName('td')[11].style.color = "red";
            grade4 = 0;
        }else{
            document.getElementsByTagName('td')[11].textContent = "Undefined Grade";
            document.getElementsByTagName('td')[11].style.color = "red";
            
        }

        if (grade5 >=90 && grade5 <=100){
            document.getElementsByTagName('td')[14].textContent = "Excellent";
            document.getElementsByTagName('td')[14].style.color = "black";
        }else if (grade5 >=80 && grade5 <=89){
            document.getElementsByTagName('td')[14].textContent = "Good";
            document.getElementsByTagName('td')[14].style.color = "black";
            grade5 = 1;
        }else if (grade5 >=70 && grade5 <=79){
            document.getElementsByTagName('td')[14].textContent = "Average";
            document.getElementsByTagName('td')[14].style.color = "black";
            grade5 = 1;
        }else if (grade5 >=60 && grade5 <=69){
            document.getElementsByTagName('td')[14].textContent = "Poor";
            document.getElementsByTagName('td')[14].style.color = "black";
            grade5 = 1;
        }else if (grade5 >=0 && grade5 <=59){
            document.getElementsByTagName('td')[14].textContent = "Fail ";
            document.getElementsByTagName('td')[14].style.color = "red";
            grade5 = 0;
        }else{
            document.getElementsByTagName('td')[14].textContent = "Undefined Grade";
            document.getElementsByTagName('td')[14].style.color = "red";
            
        }

        var rank = document.querySelector("#rank");
        var score = grade1 + grade2 + grade3 + grade4 + grade5;
        if (score == 500){
            rank.textContent = "Student Rank: Top Student";
            rank.style.color = "black";
        }else if(score >=270 && score <500){
            rank.textContent = "Student Rank: Second Honorable Student";
            rank.style.color = "black";
        }else if (score >= 1 && score <= 203 ){
            rank.textContent = "Student Rank: None";
            rank.style.color = "black";
        }
        else{
            rank.textContent = "Student Rank: Repeater ";
            rank.style.color = "red";
        }
 }