
	(function(){
		var college_list = ['UC Berkeley', 'UCLA', 'Cal Poly SLO', 'University of Washington', 'Carnegie Mellon', 'MIT', 'Harvard', 'Stanford', 'Purdue'];
		var actions = ['double major in computer science and neuroscience', 'become an alcoholic', 'live a sad, sedentary life in a computer lab', 'triple major in jazz performance, philosophy, and mechanical engineering', 'live my college years being shellshocked by pretty girls', 'live the life my parents always wanted me to live', 'accrue impressive debt', 'try not to get eaten alive by the economy', 'become the biggest frat star I could never be', 'attempt to acquire females'];
		var final_action = ['be happy that I never got in anyway', 'consider writing to the admissions office and pray they revoke my admission status', 'want to swallow an iPhone 4s', 'contemplate a life of prostitution', 'consider the management track at the local McDonalds', 'just give up and become a business major', 'just give up and become a liberal arts major', 'think about sleeping with every professor I have this quarter', 'feel compelled to guillotine myself with the new MacBook', 'want to sell my soul to my tutor', 'think about outsourcing my classes to the Asian kid next to me'];

		function pick(arr) {
			return arr[parseInt((Math.random() * arr.length))];
		}

		window.onload = function() {
			var randomClass1, randomClass2, randomClass3;
			
			randomClass1 = pick(college_list);
			randomClass3 = pick(final_action);
			//avoid overlap
			while (randomClass1 === (randomClass2 = pick(college_list))){}
			get_action = pick(actions);

			$('#class1').html(randomClass1);
			$('#class2').html(get_action);
			$('#class3').html(randomClass3);
		}
	})()