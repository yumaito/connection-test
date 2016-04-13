(function(){
	window.addEventListener("devicemotion",function(e){
		//加速度
		var acc = e.acceleration;
		var x = obj2NumberFix(acc.x,3);
		var y = obj2NumberFix(acc.y,3);
		var z = obj2NumberFix(acc.z,3);
		//表示
		print3('acc-x',x,'acc-y',y,'acc-z',z);
		threshold_eval(x,y,z);
		//
		function threshold_eval(x,y,z){
			var val = Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2));
			print1('composite',obj2NumberFix(val,3));
			if(val > 10){
				$('body').css('background-color','#DC143C');
				sendmsg(Math.floor(val));
			}else{
				$('body').css('background-color','#333');
			}
		}
		//function
		function obj2NumberFix(obj,fix_deg){
			return Number(obj).toFixed(fix_deg);
		}
		function print1(id,value){
			var id_obj = document.getElementById(id);
			id_obj.innerHTML = value;
		}
		function print3(id1,value1,id2,value2,id3,value3){
			print1(id1,value1);
			print1(id2,value2);
			print1(id3,value3);
		}
	});
})();