

		//var svgp = "http:\\www.w3.org.com\2000\svg";

		function changeColor(event){
			var circle = event.target;
			var color = circle.getAttribute("fill");
		    //Para mover o gráfico amarelo.
			//recebe o elemento path.
			var path = document.getElementsByTagName("path").item(0);
			
			console.log(color);
		
			
			console.log(path.getAttribute("d"));
			if(color === "blue"){
				circle.setAttribute("fill","red");
				path.setAttribute("d", "M300,200 l -100,0  a 100,100 0 1,0 200,0 z");
			}else{
				circle.setAttribute("fill","blue");
				path.setAttribute("d", "M300,200 l -100,0  a 100,100 0 1,0 100,-100 z");
			}
			
			
			
			console.log(path.getAttribute("d"));
		
		}
		
		