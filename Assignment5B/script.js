//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http:var y = //facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

// Modified below
var x = document.getElementsByClassName("dropDownTextArea");
for (var i=0; i<x.length; i++) {
    x[i].style.display = 'none';
}

document.getElementById("down1").onclick = function() {
    toggleButton(0);
};

document.getElementById("down2").onclick = function() {
    toggleButton(1);
};

document.getElementById("down3").onclick = function() {
    toggleButton(2);
};

function toggleButton(i) {
    var x = document.getElementsByClassName("dropDownTextArea");
    if (x[i].style.display === "none") {
        x[i].style.display = "table-row";
    } else {
        x[i].style.display = "none";
    }
        var x = document.getElementById("check1");
}

var bottomBtn = document.getElementById("button");
bottomBtn.disabled = true;

var mytable = document.getElementById('myTable'); 
var checkboxes = mytable.getElementsByTagName('input');

if(checkboxes[0].type == 'checkbox') {
    checkboxes[0].onclick = function() {
        checkBoxTragger(0,this.checked);
    };
}
if(checkboxes[1].type == 'checkbox') {
     checkboxes[1].onclick = function() {
          checkBoxTragger(1,this.checked);
     };
}
if(checkboxes[2].type == 'checkbox') {
    checkboxes[2].onclick = function() {
         checkBoxTragger(2,this.checked);
    };
}

function checkBoxTragger(i,status) {
    if(status) {
        bottomBtn.disabled = false;
        bottomBtn.style.backgroundColor = 'orange';
        bottomBtn.style.borderColor = 'orange';
        bottomBtn.style.cursor = 'auto';
        document.getElementById('row'+i).style.backgroundColor = '#FAFA96';
    }
    else {
        bottomBtn.style.backgroundColor = '#808080';
        bottomBtn.style.borderColor = '#808080';
        bottomBtn.style.cursor = 'not-allowed';
        document.getElementById('row'+i).style.backgroundColor = 'transparent';
    }
}