
	(function(){
		var college_list = ['UC Berkeley', 'UCLA', 'UT Austin', 'UPenn', 'Cal Poly SLO', 'University of Washington', 'Carnegie Mellon', 'MIT', 'Harvard', 'Stanford', 'Purdue', 'Cal Poly Pomona--lmfao who am I kidding', 'Yale', 'Compton Community College', 'UC Santa Barbara', 'UC San Diego', 'Caltech', 'Georgia Tech', 'Columbia'];
		var actions = ['double major in computer science and neuroscience', 'become an alcoholic', 'live a sad, sedentary life in a computer lab', 'triple major in jazz performance, philosophy, and mechanical engineering', 'live my college years being shellshocked by pretty girls', 'let my parents live vicariously through me', 'accrue impressive debt', 'try not to get eaten alive by the economy', 'become the biggest frat star I never was',  'try to not be so awkward', 'build the next facebook and drop out', 'find my soulmate', 'trash my liver', 'smoke copious amounts of weed', 'earn every single major', 'triple major in spanish, literature, and zoology in three years', 'earn my Bachelors and my Masters in neuroscience in two years'];
		var final_action = ['wish that I was never born','be happy that I never got in anyway', 'consider writing to the admissions office and pray they revoke my admission status', 'want to swallow an iPhone 4s', 'contemplate a life of prostitution', 'consider the management track at the local McDonalds', 'just give up and become a business major', 'just give up and become a liberal arts major', 'seriously consider sleeping with every professor I have this quarter', 'feel compelled to guillotine myself with the new MacBook', 'want to sell my soul to my tutor', 'think about outsourcing my classes to the Asian kid next to me', 'want to swipe left on myself on tinder', 'consider it necessary to divide myself by zero', 'consider switching back to yahoo as my default search engine'];

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