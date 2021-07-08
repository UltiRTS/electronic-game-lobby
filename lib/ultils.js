 
	function clearScreen (node) {
		for (var i = 0; i < node.childNodes.length; i++) {
			try{var child = node.childNodes[i];
			//clearScreen(child);
			if(child.style.visibility==""){child.style.visibility="hidden"}}
			catch{}
		}
	}

	function restoreScreen (node) {
		for (var i = 0; i < node.childNodes.length; i++) {
			try{
			var child = node.childNodes[i];
			//clearScreen(child);
			if(child.style.visibility=="hidden"){child.style.visibility=""}
			}
			catch{}
		}
	}

