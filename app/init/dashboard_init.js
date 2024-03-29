module.exports = {

	/* ---------- Charts ---------- */

	charts: function() {
		
		function randNum(){
			return ((Math.floor( Math.random()* (1+40-20) ) ) + 20)* 1200;
		}
		
		function randNum2(){
			return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 500;
		}
		
		function randNum3(){
			return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 300;
		}
		
		function randNum4(){
			return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 100;
		}
		
		/* ---------- Chart with points ---------- */
		if($("#stats-chart2").length)
		{	
			var pageviews = [[1, 5+randNum()], [2, 10+randNum()], [3, 15+randNum()], [4, 20+randNum()],[5, 25+randNum()],[6, 30+randNum()],[7, 35+randNum()],[8, 40+randNum()],[9, 45+randNum()],[10, 50+randNum()],[11, 55+randNum()],[12, 60+randNum()],[13, 65+randNum()],[14, 70+randNum()],[15, 75+randNum()],[16, 80+randNum()],[17, 85+randNum()],[18, 90+randNum()],[19, 85+randNum()],[20, 80+randNum()],[21, 75+randNum()],[22, 80+randNum()],[23, 75+randNum()],[24, 70+randNum()],[25, 65+randNum()],[26, 75+randNum()],[27,80+randNum()],[28, 85+randNum()],[29, 90+randNum()], [30, 95+randNum()]];
			var visits = [[1, randNum2()-10], [2, randNum2()-10], [3, randNum2()-10], [4, randNum2()],[5, randNum2()],[6, 4+randNum2()],[7, 5+randNum2()],[8, 6+randNum2()],[9, 6+randNum2()],[10, 8+randNum2()],[11, 9+randNum2()],[12, 10+randNum2()],[13,11+randNum2()],[14, 12+randNum2()],[15, 13+randNum2()],[16, 14+randNum2()],[17, 15+randNum2()],[18, 15+randNum2()],[19, 16+randNum2()],[20, 17+randNum2()],[21, 18+randNum2()],[22, 19+randNum2()],[23, 20+randNum2()],[24, 21+randNum2()],[25, 14+randNum2()],[26, 24+randNum2()],[27,25+randNum2()],[28, 26+randNum2()],[29, 27+randNum2()], [30, 31+randNum2()]];
			var visitors = [[1, 5+randNum3()], [2, 10+randNum3()], [3, 15+randNum3()], [4, 20+randNum3()],[5, 25+randNum3()],[6, 30+randNum3()],[7, 35+randNum3()],[8, 40+randNum3()],[9, 45+randNum3()],[10, 50+randNum3()],[11, 55+randNum3()],[12, 60+randNum3()],[13, 65+randNum3()],[14, 70+randNum3()],[15, 75+randNum3()],[16, 80+randNum3()],[17, 85+randNum3()],[18, 90+randNum3()],[19, 85+randNum3()],[20, 80+randNum3()],[21, 75+randNum3()],[22, 80+randNum3()],[23, 75+randNum3()],[24, 70+randNum3()],[25, 65+randNum3()],[26, 75+randNum3()],[27,80+randNum3()],[28, 85+randNum3()],[29, 90+randNum3()], [30, 95+randNum3()]];
			var newVisitors = [[1, randNum4()-10], [2, randNum4()-10], [3, randNum4()-10], [4, randNum4()],[5, randNum4()],[6, 4+randNum4()],[7, 5+randNum4()],[8, 6+randNum4()],[9, 6+randNum4()],[10, 8+randNum4()],[11, 9+randNum4()],[12, 10+randNum4()],[13,11+randNum4()],[14, 12+randNum4()],[15, 13+randNum4()],[16, 14+randNum4()],[17, 15+randNum4()],[18, 15+randNum4()],[19, 16+randNum4()],[20, 17+randNum4()],[21, 18+randNum4()],[22, 19+randNum4()],[23, 20+randNum4()],[24, 21+randNum4()],[25, 14+randNum4()],[26, 24+randNum4()],[27,25+randNum4()],[28, 26+randNum4()],[29, 27+randNum4()], [30, 31+randNum4()]];

			var plot = $.plot($("#stats-chart2"),
				   [ { data: visits, label: "Visits"},
					 { data: pageviews, label: "Pageviews"},
					 { data: visitors, label: "Visitors" }, 
					 { data: newVisitors, label: "New Visitors"} ], {
					   series: {
						   lines: { show: true,
									lineWidth: 2
								 },
						   points: { show: true, 
									 lineWidth: 2 
								 },
						   shadowSize: 0
					   },
					   grid: { hoverable: true, 
							   clickable: true, 
							   tickColor: "#f9f9f9",
							   borderWidth: 0
							 },
					 legend: {
							    show: false
							},	
					   colors: ["#bdea74", "#eae874", "#2FABE9", "#FA5833"],
						xaxis: {ticks:15, tickDecimals: 0},
						yaxis: {ticks:5, tickDecimals: 0},
					 });

			function showTooltip(x, y, contents) {
				$('<div id="tooltip">' + contents + '</div>').css( {
					position: 'absolute',
					display: 'none',
					top: y + 5,
					left: x + 5,
					border: '1px solid #fdd',
					padding: '2px',
					'background-color': '#dfeffc',
					opacity: 0.80
				}).appendTo("body").fadeIn(200);
			}

			var previousPoint = null;
			$("#stats-chart2").bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;

							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
								y = item.datapoint[1].toFixed(2);

							showTooltip(item.pageX, item.pageY,
										item.series.label + " of " + x + " = " + y);
						}
					}
					else {
						$("#tooltip").remove();
						previousPoint = null;
					}
			});
		
		}
		
		function randNumFB(){
			return ((Math.floor( Math.random()* (1+40-20) ) ) + 20);
		}
		
		/* ---------- Chart with points ---------- */
		if($("#facebookChart").length)
		{	
			var likes = [[1, 5+randNumFB()], [2, 10+randNumFB()], [3, 15+randNumFB()], [4, 20+randNumFB()],[5, 25+randNumFB()],[6, 30+randNumFB()],[7, 35+randNumFB()],[8, 40+randNumFB()],[9, 45+randNumFB()],[10, 50+randNumFB()],[11, 55+randNumFB()],[12, 60+randNumFB()],[13, 65+randNumFB()],[14, 70+randNumFB()],[15, 75+randNumFB()],[16, 80+randNumFB()],[17, 85+randNumFB()],[18, 90+randNumFB()],[19, 85+randNumFB()],[20, 80+randNumFB()],[21, 75+randNumFB()],[22, 80+randNumFB()],[23, 75+randNumFB()],[24, 70+randNumFB()],[25, 65+randNumFB()],[26, 75+randNumFB()],[27,80+randNumFB()],[28, 85+randNumFB()],[29, 90+randNumFB()], [30, 95+randNumFB()]];

			var plot = $.plot($("#facebookChart"),
				   [ { data: likes, label: "Fans"} ], {
					   series: {
						   lines: { show: true,
									lineWidth: 2,
									fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
								 },
						   points: { show: true, 
									 lineWidth: 2 
								 },
						   shadowSize: 0
					   },
					   grid: { hoverable: true, 
							   clickable: true, 
							   tickColor: "#f9f9f9",
							   borderWidth: 0
							 },
					   colors: ["#3B5998"],
						xaxis: {ticks:6, tickDecimals: 0},
						yaxis: {ticks:3, tickDecimals: 0},
					 });

			function showTooltip(x, y, contents) {
				$('<div id="tooltip">' + contents + '</div>').css( {
					position: 'absolute',
					display: 'none',
					top: y + 5,
					left: x + 5,
					border: '1px solid #fdd',
					padding: '2px',
					'background-color': '#dfeffc',
					opacity: 0.80
				}).appendTo("body").fadeIn(200);
			}

			var previousPoint = null;
			$("#facebookChart").bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;

							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
								y = item.datapoint[1].toFixed(2);

							showTooltip(item.pageX, item.pageY,
										item.series.label + " of " + x + " = " + y);
						}
					}
					else {
						$("#tooltip").remove();
						previousPoint = null;
					}
			});
		
		}
		
		function randNumTW(){
			return ((Math.floor( Math.random()* (1+40-20) ) ) + 20);
		}
		
		/* ---------- Chart with points ---------- */
		if($("#twitterChart").length)
		{	
			var followers = [[1, 5+randNumTW()], [2, 10+randNumTW()], [3, 15+randNumTW()], [4, 20+randNumTW()],[5, 25+randNumTW()],[6, 30+randNumTW()],[7, 35+randNumTW()],[8, 40+randNumTW()],[9, 45+randNumTW()],[10, 50+randNumTW()],[11, 55+randNumTW()],[12, 60+randNumTW()],[13, 65+randNumTW()],[14, 70+randNumTW()],[15, 75+randNumTW()],[16, 80+randNumTW()],[17, 85+randNumTW()],[18, 90+randNumTW()],[19, 85+randNumTW()],[20, 80+randNumTW()],[21, 75+randNumTW()],[22, 80+randNumTW()],[23, 75+randNumTW()],[24, 70+randNumTW()],[25, 65+randNumTW()],[26, 75+randNumTW()],[27,80+randNumTW()],[28, 85+randNumTW()],[29, 90+randNumTW()], [30, 95+randNumTW()]];

			var plot = $.plot($("#twitterChart"),
				   [ { data: followers, label: "Followers"} ], {
					   series: {
						   lines: { show: true,
									lineWidth: 2,
									fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
								 },
						   points: { show: true, 
									 lineWidth: 2 
								 },
						   shadowSize: 0
					   },
					   grid: { hoverable: true, 
							   clickable: true, 
							   tickColor: "#f9f9f9",
							   borderWidth: 0
							 },
					   colors: ["#1BB2E9"],
						xaxis: {ticks:6, tickDecimals: 0},
						yaxis: {ticks:3, tickDecimals: 0},
					 });

			function showTooltip(x, y, contents) {
				$('<div id="tooltip">' + contents + '</div>').css( {
					position: 'absolute',
					display: 'none',
					top: y + 5,
					left: x + 5,
					border: '1px solid #fdd',
					padding: '2px',
					'background-color': '#dfeffc',
					opacity: 0.80
				}).appendTo("body").fadeIn(200);
			}

			var previousPoint = null;
			$("#twitterChart").bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;

							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
								y = item.datapoint[1].toFixed(2);

							showTooltip(item.pageX, item.pageY,
										item.series.label + " of " + x + " = " + y);
						}
					}
					else {
						$("#tooltip").remove();
						previousPoint = null;
					}
			});
		
		}
		

		if($("#activeUsers").length) {
		    var d1 = [];
		    
		    for (var i = 0; i <= 160; i += 1) {
		        d1.push([i, parseInt(Math.random() * 123123)]);
			}	

		    var stack = 0, bars = true, lines = false, steps = false;

		    function plotWithOptions2() {
						
		        $.plot($("#activeUsers"), [ d1 ], {
		            series: {
		                bars: { show: bars, 
								fill: true, 
								barWidth: 0.1, 
								align: "center",
								lineWidth: 5,
								fillColor: { colors: [ { opacity: 1 }, { opacity: 0.5 } ] }
							},
		            },
					grid: { hoverable: true, 
							   clickable: true, 
							   tickColor: "#f6f6f6",
							   borderWidth: 0,
							},
					colors: ["#CBE968"],
					xaxis: {ticks:0, tickDecimals: 0, tickFormatter: function(v, a) {return v }},
					yaxis: {ticks:5, tickDecimals: 0, tickFormatter: function (v) { return v }},
		
		        });
		    }
		
		    plotWithOptions2();

		}
		
		/* ---------- Chart with points ---------- */
		if($("#stats-chart").length)
		{
			var visitors = [[1, randNum()-10], [2, randNum()-10], [3, randNum()-10], [4, randNum()],[5, randNum()],[6, 4+randNum()],[7, 5+randNum()],[8, 6+randNum()],[9, 6+randNum()],[10, 8+randNum()],[11, 9+randNum()],[12, 10+randNum()],[13,11+randNum()],[14, 12+randNum()],[15, 13+randNum()],[16, 14+randNum()],[17, 15+randNum()],[18, 15+randNum()],[19, 16+randNum()],[20, 17+randNum()],[21, 18+randNum()],[22, 19+randNum()],[23, 20+randNum()],[24, 21+randNum()],[25, 14+randNum()],[26, 24+randNum()],[27,25+randNum()],[28, 26+randNum()],[29, 27+randNum()], [30, 31+randNum()]];

			var plot = $.plot($("#stats-chart"),
				   [ { data: visitors, label: "visitors" } ], {
					   series: {
						   lines: { show: true,
									lineWidth: 3,
									fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
								 },
						   points: { show: true },
						   shadowSize: 2
					   },
					   grid: { hoverable: true, 
							   clickable: true, 
							   tickColor: "#eee",
							   borderWidth: 0,
							 },
					   colors: ["#b1d3d4"],
						xaxis: {ticks:11, tickDecimals: 0},
						yaxis: {ticks:11, tickDecimals: 0},
					 });

			function showTooltip(x, y, contents) {
				$('<div id="tooltip">' + contents + '</div>').css( {
					position: 'absolute',
					display: 'none',
					top: y + 5,
					left: x + 5,
					border: '1px solid #fdd',
					padding: '2px',
					'background-color': '#dfeffc',
					opacity: 0.80
				}).appendTo("body").fadeIn(200);
			}

			var previousPoint = null;
			$("#stats-chart").bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;

							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
								y = item.datapoint[1].toFixed(2);

							showTooltip(item.pageX, item.pageY,
										item.series.label + " of " + x + " = " + y);
						}
					}
					else {
						$("#tooltip").remove();
						previousPoint = null;
					}
			});
			


			$("#sincos").bind("plotclick", function (event, pos, item) {
				if (item) {
					$("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
					plot.highlight(item.series, item.datapoint);
				}
			});
		}
		
		
		
		/* ---------- Chart with points ---------- */
		if($("#sincos").length)
		{
			var sin = [], cos = [];

			for (var i = 0; i < 14; i += 0.5) {
				sin.push([i, Math.sin(i)/i]);
				cos.push([i, Math.cos(i)]);
			}

			var plot = $.plot($("#sincos"),
				   [ { data: sin, label: "sin(x)/x"}, { data: cos, label: "cos(x)" } ], {
					   series: {
						   lines: { show: true,
									lineWidth: 2,
								 },
						   points: { show: true },
						   shadowSize: 2
					   },
					   grid: { hoverable: true, 
							   clickable: true, 
							   tickColor: "#dddddd",
							   borderWidth: 0 
							 },
					   yaxis: { min: -1.2, max: 1.2 },
					   colors: ["#FA5833", "#2FABE9"]
					 });

			function showTooltip(x, y, contents) {
				$('<div id="tooltip">' + contents + '</div>').css( {
					position: 'absolute',
					display: 'none',
					top: y + 5,
					left: x + 5,
					border: '1px solid #fdd',
					padding: '2px',
					'background-color': '#dfeffc',
					opacity: 0.80
				}).appendTo("body").fadeIn(200);
			}

			var previousPoint = null;
			$("#sincos").bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;

							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
								y = item.datapoint[1].toFixed(2);

							showTooltip(item.pageX, item.pageY,
										item.series.label + " of " + x + " = " + y);
						}
					}
					else {
						$("#tooltip").remove();
						previousPoint = null;
					}
			});
			


			$("#sincos").bind("plotclick", function (event, pos, item) {
				if (item) {
					$("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
					plot.highlight(item.series, item.datapoint);
				}
			});
		}
		
		/* ---------- Flot chart ---------- */
		if($("#flotchart").length)
		{
			var d1 = [];
			for (var i = 0; i < Math.PI * 2; i += 0.25)
				d1.push([i, Math.sin(i)]);
			
			var d2 = [];
			for (var i = 0; i < Math.PI * 2; i += 0.25)
				d2.push([i, Math.cos(i)]);

			var d3 = [];
			for (var i = 0; i < Math.PI * 2; i += 0.1)
				d3.push([i, Math.tan(i)]);
			
			$.plot($("#flotchart"), [
				{ label: "sin(x)",  data: d1},
				{ label: "cos(x)",  data: d2},
				{ label: "tan(x)",  data: d3}
			], {
				series: {
					lines: { show: true },
					points: { show: true }
				},
				xaxis: {
					ticks: [0, [Math.PI/2, "\u03c0/2"], [Math.PI, "\u03c0"], [Math.PI * 3/2, "3\u03c0/2"], [Math.PI * 2, "2\u03c0"]]
				},
				yaxis: {
					ticks: 10,
					min: -2,
					max: 2
				},
				grid: {	tickColor: "#dddddd",
						borderWidth: 0 
				},
				colors: ["#FA5833", "#2FABE9", "#FABB3D"]
			});
		}
		
		/* ---------- Stack chart ---------- */
		if($("#stackchart").length)
		{
			var d1 = [];
			for (var i = 0; i <= 10; i += 1)
			d1.push([i, parseInt(Math.random() * 30)]);

			var d2 = [];
			for (var i = 0; i <= 10; i += 1)
				d2.push([i, parseInt(Math.random() * 30)]);

			var d3 = [];
			for (var i = 0; i <= 10; i += 1)
				d3.push([i, parseInt(Math.random() * 30)]);

			var stack = 0, bars = true, lines = false, steps = false;

			function plotWithOptions() {
				$.plot($("#stackchart"), [ d1, d2, d3 ], {
					series: {
						stack: stack,
						lines: { show: lines, fill: true, steps: steps },
						bars: { show: bars, barWidth: 0.6 },
					},
					colors: ["#FA5833", "#2FABE9", "#FABB3D"]
				});
			}

			plotWithOptions();

			$(".stackControls input").click(function (e) {
				e.preventDefault();
				stack = $(this).val() == "With stacking" ? true : null;
				plotWithOptions();
			});
			$(".graphControls input").click(function (e) {
				e.preventDefault();
				bars = $(this).val().indexOf("Bars") != -1;
				lines = $(this).val().indexOf("Lines") != -1;
				steps = $(this).val().indexOf("steps") != -1;
				plotWithOptions();
			});
		}
		
		/* ---------- Device chart ---------- */
		
		var data = [
		{ label: "Desktop",  data: 73},
		{ label: "Mobile",  data: 27}
		];
		
		/* ---------- Donut chart ---------- */
		if($("#deviceChart").length)
		{
			$.plot($("#deviceChart"), data,
			{
					series: {
							pie: {
									innerRadius: 0.6,
									show: true
							}
					},
					legend: {
						show: true
					},
					colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
			});
		}
		
		var data = [
		{ label: "iOS",  data: 20},
		{ label: "Android",  data: 7},
		{ label: "Linux",  data: 11},
		{ label: "Mac OSX",  data: 14},
		{ label: "Windows",  data: 48}
		];
		
		/* ---------- Donut chart ---------- */
		if($("#osChart").length)
		{
			$.plot($("#osChart"), data,
			{
					series: {
							pie: {
									innerRadius: 0.6,
									show: true
							}
					},
					legend: {
						show: true
					},
					colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
			});
		}

		/* ---------- Pie chart ---------- */
		var data = [
		{ label: "Internet Explorer",  data: 12},
		{ label: "Mobile",  data: 27},
		{ label: "Safari",  data: 85},
		{ label: "Opera",  data: 64},
		{ label: "Firefox",  data: 90},
		{ label: "Chrome",  data: 112}
		];
		
		if($("#piechart").length)
		{
			$.plot($("#piechart"), data,
			{
				series: {
						pie: {
								show: true
						}
				},
				grid: {
						hoverable: true,
						clickable: true
				},
				legend: {
					show: false
				},
				colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
			});
			
			function pieHover(event, pos, obj)
			{
				if (!obj)
						return;
				percent = parseFloat(obj.series.percent).toFixed(2);
				$("#hover").html('<span style="font-weight: bold; color: '+obj.series.color+'">'+obj.series.label+' ('+percent+'%)</span>');
			}
			$("#piechart").bind("plothover", pieHover);
		}
		
		/* ---------- Donut chart ---------- */
		if($("#donutchart").length)
		{
			$.plot($("#donutchart"), data,
			{
					series: {
							pie: {
									innerRadius: 0.5,
									show: true
							}
					},
					legend: {
						show: false
					},
					colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
			});
		}




		 // we use an inline data source in the example, usually data would
		// be fetched from a server
		var data = [], totalPoints = 300;
		function getRandomData() {
			if (data.length > 0)
				data = data.slice(1);

			// do a random walk
			while (data.length < totalPoints) {
				var prev = data.length > 0 ? data[data.length - 1] : 50;
				var y = prev + Math.random() * 10 - 5;
				if (y < 0)
					y = 0;
				if (y > 100)
					y = 100;
				data.push(y);
			}

			// zip the generated y values with the x values
			var res = [];
			for (var i = 0; i < data.length; ++i)
				res.push([i, data[i]])
			return res;
		}

		// setup control widget
		var updateInterval = 30;
		$("#updateInterval").val(updateInterval).change(function () {
			var v = $(this).val();
			if (v && !isNaN(+v)) {
				updateInterval = +v;
				if (updateInterval < 1)
					updateInterval = 1;
				if (updateInterval > 2000)
					updateInterval = 2000;
				$(this).val("" + updateInterval);
			}
		});

		/* ---------- Realtime chart ---------- */
		if($("#serverLoad").length)
		{	
			var options = {
				series: { shadowSize: 1 },
				lines: { show: true, lineWidth: 3, fill: true, fillColor: { colors: [ { opacity: 0.9 }, { opacity: 0.9 } ] }},
				yaxis: { min: 0, max: 100, tickFormatter: function (v) { return v + "%"; }},
				xaxis: { show: false },
				colors: ["#FA5833"],
				grid: {	tickColor: "#f9f9f9",
						borderWidth: 0, 
				},
			};
			var plot = $.plot($("#serverLoad"), [ getRandomData() ], options);
			function update() {
				plot.setData([ getRandomData() ]);
				// since the axes don't change, we don't need to call plot.setupGrid()
				plot.draw();
				
				setTimeout(update, updateInterval);
			}

			update();
		}
		
		if($("#realtimechart").length)
		{
			var options = {
				series: { shadowSize: 1 },
				lines: { fill: true, fillColor: { colors: [ { opacity: 1 }, { opacity: 0.1 } ] }},
				yaxis: { min: 0, max: 100 },
				xaxis: { show: false },
				colors: ["#F4A506"],
				grid: {	tickColor: "#dddddd",
						borderWidth: 0 
				},
			};
			var plot = $.plot($("#realtimechart"), [ getRandomData() ], options);
			function update() {
				plot.setData([ getRandomData() ]);
				// since the axes don't change, we don't need to call plot.setupGrid()
				plot.draw();
				
				setTimeout(update, updateInterval);
			}

			update();
		}
	}
}