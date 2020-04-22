function data(form) {

	function isNaI(value){ 
	  if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
	      return false;
	  } else { 
	      return true;
	  } 
	}
	
	function gcd(a,b) {
	    if (a < 0) a = -a;
	    if (b < 0) b = -b;
	    if (b > a) {var temp = a; a = b; b = temp;}
	    while (true) {
	        a %= b;
	        if (a == 0) return b;
	        b %= a;
	        if (b == 0) return a;
	    }
	}

	var base = form.base.value;
	var iter = form.iterations.value;
	var num = form.number.value;
	
	console.log("Base: " + base + " Iter: " + iter + " Num: " + num);
	
	number(base,iter,num)
	
	function number(check,check1,check2) {
		if (isNaI(check)) {
			document.getElementById("output").innerHTML = "m is not a number";
			document.getElementById("base").innerHTML = base;
			document.getElementById("num").innerHTML = num;
		}
		else if (isNaI(check1)) {
			document.getElementById("output").innerHTML = "n is not a number";
			document.getElementById("base").innerHTML = base;
			document.getElementById("num").innerHTML = num;
		}
		else if (isNaI(check2)) {
			document.getElementById("output").innerHTML = "a is not a number";
			document.getElementById("base").innerHTML = base;
			document.getElementById("num").innerHTML = num;
		}
		else etall(base,iter,num);
	}
	
	function etall(check,check1,check2) {
		if (0>check1) {
			document.getElementById("output").innerHTML = "n < 0";
			document.getElementById("base").innerHTML = base;
			document.getElementById("num").innerHTML = num;
		}
		else if (check2==0) {
			document.getElementById("output").innerHTML = "a = 0";
			document.getElementById("base").innerHTML = base;
			document.getElementById("num").innerHTML = num;
		}
		else if (0>check2) {
			document.getElementById("output").innerHTML = "a < 0";
			document.getElementById("base").innerHTML = base;
			document.getElementById("num").innerHTML = num;
		}
//		else if (check2>check) {
//			alert("Bad40")
//		}
		else if (gcd(base,num) != 1) {
			document.getElementById("output").innerHTML = "GCD != 1, no inverse";
			document.getElementById("base").innerHTML = base;
			document.getElementById("num").innerHTML = num;
		}
		else calc(base,iter,num);
	}
	
	function calc(m,n,a) {
		var inve = m/a;
		var i = 1;
				
		while (isNaI(inve) == true) {

			if (i == n) {
				document.getElementById("output").innerHTML = "n timed out";
				document.getElementById("base").innerHTML = base;
				document.getElementById("num").innerHTML = num;
				return false;
			}
		
			inve = ((m*i)+1)/a
			i++
			
			console.log(inve);
		}
		
		document.getElementById("output").innerHTML = inve; 
		document.getElementById("base").innerHTML = base;
		document.getElementById("num").innerHTML = num;
	}
	return false;
}