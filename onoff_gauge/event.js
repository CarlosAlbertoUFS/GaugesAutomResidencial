

		var svgp = "http:\\www.w3.org.com\2000\svg";
		var circle;
		var color;

		function changeColor(event){
			circle = event.target;
			color = circle.getAttribute("fill");
			console.log(color);
			
			if(color === "blue"){
				circle.setAttribute("fill","red");
				
			}else{
				circle.setAttribute("fill","blue");
			
			}
			
		
		}