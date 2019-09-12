var modal = document.getElementById("myModal");
var btn = document.getElementById("Btn1");

btn.onclick = function() {
  modal.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$("#cancel").click(function() {
$(".modal-content").hide();
});

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("Btn2");

btn2.onclick = function() {
  modal2.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
$("#cancel").click(function() {
$(".modal-content").hide();
});

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("Btn3");

btn3.onclick = function() {
  modal3.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal.style.display = "none";
  }
}
$("#cancel").click(function() {
$(".modal3-content").hide();
});

var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("Btn4");

btn4.onclick = function() {
  modal4.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}
$("#cancel").click(function() {
$(".modal4-content").hide();
});

var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("Btn5");

btn5.onclick = function() {
  modal5.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}
$("#cancel").click(function() {
$(".modal5-content").hide();
});

var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("Btn6");

btn6.onclick = function() {
  modal6.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}
$("#cancel").click(function() {
$(".modal6-content").hide();
});

var modal7 = document.getElementById("myModal7");
var btn7 = document.getElementById("Btn7");

btn7.onclick = function() {
  modal7.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}
$("#cancel").click(function() {
$(".modal7-content").hide();
});

var modal8 = document.getElementById("myModal8");
var btn8 = document.getElementById("Btn8");

btn8.onclick = function() {
  modal8.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
}
$("#cancel").click(function() {
$(".modal8-content").hide();
});

var modal9 = document.getElementById("myModal9");
var btn9 = document.getElementById("Btn9");

btn9.onclick = function() {
  modal9.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
}
$("#cancel").click(function() {
$(".modal9-content").hide();
});

var modal10 = document.getElementById("myModal10");
var btn10 = document.getElementById("Btn10");

btn10.onclick = function() {
  modal10.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
}
$("#cancel").click(function() {
$(".modal10-content").hide();
});



function sort(){
  var input = document.getElementById("input").value;
  var str_items = input.split(",");
  var items = [];
  for (var count = 0; count < str_items.length; count++) {
    items.push(parseInt(str_items[count]));
  }
  var sortedArray = quickSort(items, 0, items.length - 1);
  var sort_str = sortedArray.join(",");
  document.getElementById("output").innerHTML = sort_str;
}
var items = [];
var size = 5; //Maximum Array size
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort

function subset() {
  var input = document.getElementById("input2").value;
  document.getElementById("output2").innerHTML = input.sub_String();
}

String.prototype.sub_String = function() {
  var subset = [];
  for (var m = 0; m < this.length; m++) {
    for (var n = m+1; n<this.length+1; n++) {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
}

function largest() {
  var input = document.getElementById("input3").value;
  var str_items = input.split(",");
  var items = [];
  for (var count = 0; count < str_items.length; count++) {
    items.push(parseInt(str_items[count]));
  } 
  var largest = 0;
  for ( var iterator = 0; iterator <= largest; iterator++ ) {
    if (items[iterator] > largest) {
      largest = items[iterator];
    }
  }
  document.getElementById("output3").innerHTML = largest;
}

function sum() {
  var input = document.getElementById("input4").value;
  var sum = 0;
  for (var x = 0; x < input; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
      sum += x;
    }
  }
  document.getElementById("output4").innerHTML = sum;
}

function string_starts()
{
 var char =document.getElementById("input5").value; 
  if (char.length < 4)
  {
   document.getElementById("output5").innerHTML= false;
  }
  front =char.substring(0, 4);
  if (front == 'Java') 
  {
    document.getElementById("output5").innerHTML= true;
  }
   else 
   {
    document.getElementById("output5").innerHTML= false;
  }
  }
  
  function range() {
  var start = document.getElementById('input61').value;
  var end = document.getElementById('input62').value;
  var ans = [];
  for(var i = parseInt(start) + 1; i < end; i++) {
    ans.push(i);
  }
  document.getElementById("answer6").innerHTML = ans;
}

function vowel_count() {
  var input = document.getElementById("input9").value;
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  for(var x = 0; x < input.length ; x++) {
    if (vowel_list.indexOf(input[x]) !== -1) {
      vcount += 1;
    }
  
  }
  document.getElementById("output9").innerHTML = vcount;
}

function Char_Counts() {
  var input = document.getElementById("input10").value;
  var uchars = {};

  input.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
  
  document.getElementById("output10").innerHTML = showProps(uchars);
}

function showProps(obj) {
  return Object.entries(obj).map(([key, value]) => [key +" - " + value  + " "])
    
}

function range() {
  document.getElementById("answer6").innerHTML = '';
  var start = document.getElementById('input61').value;
  var end = document.getElementById('input62').value;
  var ans = [];
  for(var i = parseInt(start) + 1; i < end; i++) {
    ans.push(i);
  }
  document.getElementById("answer6").innerHTML = ans;
}

//------------------Common in both arrays
function findCommonElement() {       
  document.getElementById("answer7").innerHTML = '';
  var str1 = document.getElementById('input71').value;
  var str2 = document.getElementById('input72').value;

  var arr1 = str1.split(",");
  var arr2 = str2.split(",");

  var origArr1 = [], origArr2 = [], commonElements = [];

  for( var i = 0; i < arr1.length; i++) {
    origArr1.push(parseInt(arr1[i]));
  }

  for( var j = 0; j < arr2.length; j++) {
    origArr2.push(parseInt(arr2[j]));
  }

  for(let k = 0; k < origArr1.length; k++) {  
    for(let l = 0; l < origArr2.length; l++) {      
      if(origArr1[k] === origArr2[l]) {           
        commonElements.push(origArr1[k]); 
      } 
    } 
  }

  document.getElementById("answer7").innerHTML = commonElements;
};

