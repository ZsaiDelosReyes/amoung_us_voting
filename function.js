var  score={
	p1 : 0,
	p2 : 0,
	p3 : 0,
	p4 : 0,
	p5 : 0,
	p6 : 0,
	p7 : 0,
	p8 : 0,
	p9 : 0,
	p10 : 0,
}	
$(document).ready(
	function(){

		 
		$("div>#p1").click(
			function(){

				score.p1++;


				$("#p1vote").html(score.p1);
			}
		);

		$("div>#p2").click(
			function(){

				score.p2++;
				

				$("#p2vote").html(score.p2);
			}
		);

		$("div>#p3").click(
			function(){
				score.p3++;
				$("#p3vote").html(score.p3);
			}
		);

		$("div>#p4").click(
			function(){
				score.p4++;
				$("#p4vote").html(score.p4);
			}
		);

		$("div>#p5").click(
			function(){
				score.p5++;
				$("#p5vote").html(score.p5);
			}
		);

		$("div>#p6").click(
			function(){
				score.p6++;
				$("#p6vote").html(score.p6);
			}
		);


		$("div>#p7").click(
			function(){
				score.p7++;
				$("#p7vote").html(score.p7);
			}
		);

		$("div>#p8").click(
			function(){
				score.p8++;
				$("#p8vote").html(score.p8);
			}
		);


		$("div>#p9").click(
			function(){
				score.p9++;
				$("#p9vote").html(score.p9);
			}
		);

		$("div>#p10").click(
			function(){
				score.p10++;
				$("#p10vote").html(score.p10);
			}
		);
}
)

