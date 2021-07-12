 
	function clearScreen (node) {
		for (var i = 0; i < node.childNodes.length; i++) {
			try{var child = node.childNodes[i];
			//clearScreen(child);
			if(child.style.visibility==""){child.style.visibility="hidden"}}
			catch{}
		}
	}

	function rstAnime (elmID) {
		var parentElm=document.getElementById(elmID).parentElement
		var bkUp=document.getElementById(elmID)
		parentElm.removeChild(bkUp)
		parentElm.appendChild(bkUp)
	}

