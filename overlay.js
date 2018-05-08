
	
			/* Open when someone clicks on the span element */
		function openNav() {
		    document.getElementById("myNav").style.width = "100%";
		}

		/* Close when someone clicks on the "x" symbol inside the overlay */
		function closeNav() {
		    document.getElementById("myNav").style.width = "0%";
		}


			/*this is for the second clickable image*/
		function openNav1() {
			document.getElementById("myNav1").style.width="100%";
		}

			/*closes the overlay */
		function closeNav1() {
		    document.getElementById("myNav").style.width = "0%";
		}


			function openNav2() {
		document.getElementById("myNav2").style.width="100%";

		}
			function closeNav2() {
		document.getElementById("myNav2").style.width="100%";
		}


			function openNav3() {
		document.getElementById("myNav3").style.width="100%"
			}



		/*closes the first overlay and opens the next one*/
		function next() {
			 document.getElementById("myNav").style.width = "0%";
			 document.getElementById("myNav1").style.width="100%";
		}

		function next1() {
			document.getElementById("myNav1").style.width="0%";
			document.getElementById("myNav2").style.width="100%";
		}

		function next2() {
			document.getElementById("myNav2").style.width="0%";
			document.getElementById("myNav3").style.width="100%";
		}

		function next3() {
			document.getElementById("myNav3").style.width="0%";
			document.getElementById("myNav").style.width="100%";
		}




		/*closes the current overlay and opens the previous one */

		function prev() {
			document.getElementById("myNav").style.width = "0%";
			document.getElementById("myNav3").style.width = "100%";
		}



		function prev1() {
			document.getElementById("myNav1").style.width = "0%";
			document.getElementById("myNav").style.width = "100%";
		}


		function prev2() {
			document.getElementById("myNav2").style.width = "0%";
			document.getElementById("myNav1").style.width = "100%";
		}

		function prev3() {
			document.getElementById("myNav3").style.width="0%";
			document.getElementById("myNav2").style.width="100%";
		}