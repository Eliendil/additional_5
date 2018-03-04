module.exports = function check(str, bracketsConfig) {
	
	function memberOfBracketsConfig (bracketPair, index, array) {
		let bracket = this;
		if(bracketPair[0] == bracket || bracketPair[1] == bracket) {
			return bracketPair;
		}
	}
	
	let bracketsStack = new Array();
	for(let i=0; i < str.length; i++) {
		let currentBraket = str[i];
		let bracketPair = bracketsConfig.find(memberOfBracketsConfig, currentBraket);
		
		// handle open bracket
		if(currentBraket == bracketPair[0]) {
			
			/* 
			 * Check if open close brakets has same symbole
			 * and handle it.
			 */
			if(currentBraket == bracketPair[1]
				&& bracketsStack[bracketsStack.length - 1] == bracketPair[0]) {
				
				bracketsStack.pop();
				continue;					
			}
			bracketsStack.push(currentBraket);
			
		// handle close bracket
		} else if(currentBraket == bracketPair[1]) {
			if(bracketsStack.pop() != bracketPair[0]) {
				return false;
			} 
		}
	}
	return bracketsStack.length == 0;
}
