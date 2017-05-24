//Radar for Rice program skill
window.onload = function(){
	var canvas = document.getElementById("skillRadar");
	var ctx = canvas.getContext("2d");
	
	var data = {
		"Algorithm": 90,
		"Data Structrue": 85,
		"C++": 80,
		"C#": 70,
		"Python": 65,
		"HTML5": 80,
		"CSS": 60,
		"JavaScript": 80,
		"Linux": 70,
		"Node.js": 65,
		"PHP": 75,
		"Emacs": 75,
		"Other": 60
	};
	var len = Object.values(data).length;
	var maxValue = 150, interVal = 30;
	for(obj in data){
		data[obj] *= 1.5;
	}
	draw(ctx, len, interVal, maxValue, data);
}

function draw(ctx, n, interVal, maxValue, data) {
	var mx = 200, my = 200;
	var theta = 360/n;
	var count = maxValue / interVal;
	for(var i=1; i<=count; i++){
		ctx.beginPath();
 		for(var j=0; j<=n; j++){
    		var alpha = j * theta * Math.PI / 180;
    		ctx.lineTo(mx + (interVal*i) * Math.sin(alpha), my + (interVal*i) * Math.cos(alpha));
   		}
   		ctx.strokeStyle = "snow";
    	ctx.stroke();
    	ctx.closePath();
	}
	ctx.fillStyle = "deepskyblue";
	ctx.beginPath();
	var i = 0;
	for(obj in data){
		var alpha = i * theta * Math.PI / 180;
		var x = mx + data[obj] * Math.sin(alpha), y = my + data[obj] * Math.cos(alpha);
		ctx.lineTo(x, y);
		i++;
	}
	ctx.fill();
	ctx.closePath();
	for(obj in data){
		ctx.fillStyle = "#FFF";
		var alpha = i * theta * Math.PI / 180;
		var x = mx + maxValue * Math.sin(alpha), y = my + maxValue * Math.cos(alpha);
		if(obj.length <= 3) ctx.fillText(obj, x + Math.sin(alpha)*(Math.sin(alpha)<0?30:5), y + Math.cos(alpha)*(Math.cos(alpha)<0?5:10), 45);
		else if(obj=="Algorithm") ctx.fillText(obj, x + Math.sin(alpha) - 15, y + Math.cos(alpha)*(Math.cos(alpha)<0?5:10), 45);
		else ctx.fillText(obj, x + Math.sin(alpha)*(Math.sin(alpha)<0?51:5), y + Math.cos(alpha)*(Math.cos(alpha)<0?5:10), 45);
		i++;
	}
	for(var i=0; i<n; i++){
		var alpha = i * theta * Math.PI / 180;
		var x = mx + maxValue * Math.sin(alpha), y = my + maxValue * Math.cos(alpha);
		ctx.beginPath();
		ctx.moveTo(mx, my);
		ctx.lineTo(x, y);
		ctx.strokeStyle = "dimgray";
		ctx.stroke();
		ctx.closePath();
	}
}