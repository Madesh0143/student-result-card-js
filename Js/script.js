login_status = false;
function clickFunction() {  
// GET ELEMENT ID 
    S__name.innerHTML =  F__name.value;
    S__rollno.innerHTML = F__rollno.value;


    Tamil = Number(F__tamil.value)
    English = Number(F__english.value)
    Maths = Number(F__maths.value)
    Science = Number(F__science.value)
    Social = Number(F__social.value)


    T__mark.innerHTML = Tamil;
    E__mark.innerHTML = English;
    M__mark.innerHTML = Maths;
    S__mark.innerHTML = Science;
    SO__mark.innerHTML = Social;

    TotalMarks = Tamil + English + Maths + Science + Social;
    total__mark.innerHTML = TotalMarks;

    if (TotalMarks >= 450) {
        grade.innerHTML = "You Get 'A+' Grade ";
    } else if (TotalMarks >= 420) {
        grade.innerHTML = "You Get 'A' Grade ";
    } else if (TotalMarks >= 400) {
        grade.innerHTML = "You Get 'B+' Grade ";
    } else if (TotalMarks >= 350) {
        grade.innerHTML = "You Get 'B' Grade ";
    } else if (TotalMarks >= 300) {
        grade.innerHTML = "You Get 'C' Grade ";
    } else if (TotalMarks >= 200) {
        grade.innerHTML = "You Get 'D' Grade ";
    } else {
        grade.innerHTML = "You Get 'F' Grade ";
    }
//LOGIN STATUS CONDITIONS
    if (login_status) {
        alert('your result has been Created');
    } else {
        alert('Please Login First');
        username = prompt("Enter the username: ");
        if (username === "Madesh") {
            pwd = prompt("Enter your passowrd");
            if (pwd === "Madesh143") {
                login_status = true;
            } else {
                alert('invalid password...!');
            }
        } else {
            alert('invalid username...!');
        }
    }

}