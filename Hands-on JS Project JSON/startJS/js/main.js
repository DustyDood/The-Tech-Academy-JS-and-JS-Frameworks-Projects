// JavaScript Document
var hotelInfo;
var details;
var xhr = new XMLHttpRequest();

xhr.open("GET", 'data.json', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() {
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        display(0);
    }
}

function display(x) {
    console.log(x);
    document.getElementById('roomName').innerHTML = hotelInfo[x].name;
    document.getElementById('desc').innerHTML = hotelInfo[x].description;
    document.getElementById('photo').src = hotelInfo[x].photo;

    //Room Prices
    document.getElementById('weekday').innerHTML = hotelInfo[x].cost.weekday;
    document.getElementById('weekend').innerHTML = hotelInfo[x].cost.weekend;

    //Amenities
    details = ""
    //ignored their for loop to make a forEach loop instead
    hotelInfo[x].details.forEach( i=> {
        console.log(i);
        details += "<p>" + i +"</p>";
    });
    document.getElementById('details').innerHTML = details;

}

/*
xhr.onload = function () {
    if (xhr.status === 200) {
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);

        for (i=0; i < myStuff.presidents.length; i++) {
            console.log(myStuff.presidents[i].first);
            console.log(myStuff.presidents[i].last);
            console.log(myStuff.presidents[i].served);

            console.log(myStuff.vicepresidents[i].first);
            console.log(myStuff.vicepresidents[i].last);
        }

        var myString = "";
        for(i=0; i < myStuff.presidents.length; i++) {
            var x = i+1;
            myString += "<br>President " + x + " was ";
            myString += myStuff.presidents[i].first + " " + myStuff.presidents[i].last + ". ";

            myString += "He served from " + myStuff.presidents[i].served + " with ";
            myString += myStuff.vicepresidents[i].first + " " + myStuff.vicepresidents[i].last + ". ";

        }
        document.getElementById('message').innerHTML = myString;

        console.log(myStuff.presidents[1].last)
    }
}

xhr.send();
*/

// var theData1 = '{"first":"Paul", "last":"Cheney","city":"Salem"}';
// var myObj = JSON.parse(theData1);
// console.log(myObj);

// document.getElementById("message").innerHTML = myObj.last;

// var theData2 = '{"Jane": {"age":"29", "degree": {"AAS":"VMI", "BA":"UVA"}}, "Jim": {"age":"49", "degree":"MA"}}';
// var myObj = JSON.parse(theData2);
// console.log(myObj);

// document.getElementById("message").innerHTML = myObj.Jane.degree.BA;

