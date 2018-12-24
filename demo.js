var user= prompt("Please enter your name!")
var yrs= prompt("Please enter your age!")
alert("Hello! "+user)
// var result=confirm("Do you really want to continue?");
// if(result==true){
// 	alert("Okay, as you wish!")
// }
// else{
// 	alert("Aww! Too bad. Well don't quit now that you've come so far!")
// }

function person(name,age) {
	this.name= name;
	this.age = age;
	this.yob = bornYear;
}

function bornYear() {
	return 2018 - this.age;
}

var p = new person(user,yrs);
document.write("So you were born in "+p.yob()+",huh!")