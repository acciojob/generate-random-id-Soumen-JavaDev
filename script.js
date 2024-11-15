function makeid(l) {
  // write your code here
	let ans=""
	let list="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789"
	for(let i=0;i<l;i++){
		ans +=list.charAt(Math.floor(Math.random()*list.length))
	}
	return ans;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
