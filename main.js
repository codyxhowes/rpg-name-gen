
//for male first name//
function GetMaleValue()
{
    var myarray= new Array("Delorin","Weston","Grul","Oregar","Loremar","Garrick","Braeden","Krahl","Raygar","Barret","Aremore","Fyn");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("character-first-name").innerHTML=random;
}

//for female first name//
function GetFemaleValue()
{
    var myarray= new Array("Teralyn","Krella","Xenith","Raelia","Korina","Ellen","Vella", "Lidia","Varesa","Eliza","Marcelin","Jesia");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("character-first-name").innerHTML=random;
}

//for last name//
function GetLastValue()
{
    var myarray= new Array("Vangrave","Moonshadow","Arrin","Farplain","Theolus","Grenn","Rainsong","Hathbrok","Graves","Doregan","Fen","Embermoore");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("character-last-name").innerHTML=random;
}