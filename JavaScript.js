function validate() {
    var userid = document.getElementById('uid').value;
    var psswd = document.getElementById('psswd').value;
    var name = document.getElementById('name').value;
    var addr = document.getElementById('addr').value;
    var zip = document.getElementById('zip').value;
    var country = document.getElementById('country');
    var select = country.options[country.selectedIndex].value;
    var email = document.getElementById('email').value;
    var genders = document.getElementsByName("sex");

    var div_userid = document.getElementById("Uerr");
    var div_psswd = document.getElementById("Perr");
    var div_name = document.getElementById("nerr");
    var div_addr = document.getElementById("aerr");
    var div_zip = document.getElementById("zerr");
    var div_country = document.getElementById("cerr");
    var div_email = document.getElementById("Eerr");
    var div_gender = document.getElementById("gerr");





    //userid
    //function uservalidate()
    //   {
    if (userid == null || userid == "") {
        div_userid.innerHTML = "Enter UserID";
        return false;
    }
    else if (userid.length < 5 || userid.length > 8) {
        div_userid.innerHTML = "Enter minimum of 5 and maximum of 8 character";
        document.getElementById("psswd").focus();
        return false;
    }
    else {
        div_userid.innerHTML = " ";
    }
    //        uservalidate();
    //        passvalidate();
    //        namevalidate();
    //        addrvalidate();
    //        zipvalidate();
    //        countryvalidate();
    //        emailvalidate();
    //        gendervalidate()
    //}

    //function passvalidate()
    //{
    //password
    if (psswd == null || psswd == "") {
        div_psswd.innerHTML = "Enter password";
        return false;
    }
    else if (psswd.length < 7 || psswd.length > 12) {
        div_psswd.innerHTML = "Enter minimum of 7 and maximum of 12 character";
        document.getElementById("psswd").focus();
        return false;
    }
    else {
        div_psswd.innerHTML = "";
    }
    //   }

    //name
    //function namevalidate()
    //{
    if (name == null || name == "") {
        div_name.innerHTML = "Enter your name";
        return false;
    }
    if (!name.match(/^[a-zA-Z\s]+$/)) {
        div_name.innerHTML = "Alphabets Only";
        document.getElementById("name").focus();
        return false;
    }
    else {
        div_name.innerHTML = "";
    }
    /*     }*/

    //address
    //function addrvalidate()
    //{
    if (addr == null || addr == "") {
        div_addr.innerHTML = "Enter your address";
        return false;
    }
    if (!addr.match(/^[0-9a-zA-Z\s]+$/)) {
        div_addr.innerHTML = "Alphahumeric Characters only";
        document.getElementById("addr").focus();
        return false;
    }
    else {
        div_addr.innerHTML = "";
    }
    //}

    //country
    //function countryvalidate()
    //{
    if (select == 0) {
        div_country.innerHTML = "Select your country";
        return false;
    }
    else {
        div_country.innerHTML = "";
    }
    //}

    //zip
    //function zipvalidate()
    //{
    if (zip == null || zip == "") {
        div_zip.innerHTML = "Enter the Zip Code";
        return false;
    }
    if (!zip.match(/^[0-9a-zA-Z\s]+$/)) {
        div_zip.innerHTML = "Alphahumeric Characters only";
        document.getElementById("zip").focus();
        return false;
    }
    else {
        div_zip.innerHTML = "";
    }
    //}

    //email
    /* function emailvalidate() {*/
    if (email == null || email == "") {
        div_email.innerHTML = "Enter Email-ID";
        return false;
    }
    if (!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
        div_email.innerHTML = "enter a valid Email-id";
        document.getElementById("email").focus();
        return false;
    }
    else {
        div_email.innerHTML = "";
    }
    //}

    //gender
    /* function gendervalidate() {*/
    if (genders[0].checked == true || genders[1].checked == true) {
        div_gender.innerHTML = "";
        return true;
    } else {
        div_gender.innerHTML = "Select Your Gender";
        return false;
    }
}

        //}