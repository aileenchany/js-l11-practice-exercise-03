const notRegistered = document.querySelector(".not-registered"); //access the <ul>

const getRegistrationData = async function() {
    const request = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json");
    const data = await request.json();
    //console.log(data);
    displayContactList(data); //calls the function that loops thru the data

};

///pass data thru a loop & if it meets the condition, it proceeds to add the student name in a list shown to the user. 
//The teacher needs to circle back on students that are not registered yet.
const displayContactList = function(data) { 
    for (const student of data) {
        if (student.registered === "no") {   
            let studentList = document.createElement("li"); //create an <li>
            studentList.innerHTML = student.name; //store a name inside the <li>
            notRegistered.append(studentList); //save <li> inside <ul>
        }
    }; 
};

getRegistrationData(); //calls the function that fetches data