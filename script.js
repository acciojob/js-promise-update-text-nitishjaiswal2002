//your JS code heHre. If required.
function delayedHello() {
	return new promise ((resolve,reject) =>{
		setTimeout(() =>{
			resolve('Hello, world!');
		},1000);
	});
}

async function updateOutput(){
	const outputElement =document.getElementById('output');
	 try{
		 const message =await delayedHello();
		 outputElement.textContent = message;
	 }
	catch(error){
		outputElement.textContent ='Error occurred: '+ error;
	}
}
updateOutput();