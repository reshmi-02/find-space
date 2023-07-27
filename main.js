var a=prompt("Enter the password");

document.write("Given Password = "+a+"<br><br>");

var b=[];

for (i=0; i<a.length;i++){
	if (a[i]==" "){
		console.log(b.push(a[i]));
	}
}

if (b==" "){
		document.write("Password didnot accept space  Please Enter correct password")
	}
else if (b!=" "){
		document.write("Password is correct");
	}