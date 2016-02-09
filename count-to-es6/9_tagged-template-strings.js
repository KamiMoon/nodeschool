console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
    

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&apos;");
}   

function html(...args) {
	var htmlArray = args[0];

	//console.log(htmlArray.length);
	var values = args.slice(1);

	//console.log(values.length);
	var result = '';

	for (var i = 0; i < htmlArray.length; i++) {
		result += htmlArray[i];

		if(i < values.length){
			result += escapeHtml(values[i]);
		}
		
	}

	return result;
}