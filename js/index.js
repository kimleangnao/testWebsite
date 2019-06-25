(function(){
	//get all the sign to animate
	let fa1 = document.querySelector('#fa1');
	let fa2 = document.querySelector('#fa2');
	let fa3 = document.querySelector('#fa3');
	let fa4 = document.querySelector('#fa4');

	//get all the signs from all pictures
	let s1 = document.querySelector('#fa1');
	let s2 = document.querySelector('#fa2');
	let s3 = document.querySelector('#fa3');
	let s4 = document.querySelector('#fa4');

	//get all the serviceDetail information
	//let cdt = document.querySelector('.cdt');
	//let clp1 = document.querySelector('.cP1');
	//let clp2 = document.querySelector('.cP2');
	//let clp3 = document.querySelector('.cP3');
	//let clp4 = document.querySelector('.cP4');
	//get id of detail to display
	//let cd = document.getElementById('cd');
	/*
	let current;
	let bp1 = document.getElementById('bp1');
	//let arrowup = document.querySelector('#arrowup');
	arrowup.addEventListener('click', function(){
		cd.style.display = 'none'
		fa1.style.display = 'none'
		fa2.style.display = 'none'
		fa3.style.display = 'none'
		fa4.style.display = 'none'
	});
	//add Event click
	bp1.addEventListener('click', function(){
		if (current){
			current.style.display = 'none'
			cd.style.display = 'block'
			fa1.style.display = 'block'
			current = fa1;
		}else {
			cd.style.display = 'block'
			fa1.style.display = 'block'
			current = fa1;
		}
		cdt.innerHTML = "Service's name 1"
	});

	let bp2 = document.getElementById('bp2');
	//add Event click
	bp2.addEventListener('click', function(){
		if (current){
			current.style.display = 'none'
			cd.style.display = 'block'
			fa2.style.display = 'block'
			current = fa2;
		}else {
			cd.style.display = 'block'
			fa2.style.display = 'block'
			current = fa2;
		}
		cdt.innerHTML = "Service's name 2"
	});
	let bp3 = document.getElementById('bp3');
	//add Event click
	bp3.addEventListener('click', function(){
		if (current){
			current.style.display = 'none'
			cd.style.display = 'block'
			fa3.style.display = 'block'
			current = fa3;
		}else {
			cd.style.display = 'block'
			fa3.style.display = 'block'
			current = fa3;
		}	
		cdt.innerHTML = "Service's name 3"		
	})

	let bp4 = document.getElementById('bp4');
	//add Event click
	bp4.addEventListener('click', function(){
		if (current){
			current.style.display = 'none'
			cd.style.display = 'block'
			fa4.style.display = 'block'
			current = fa4;
		}else {
			cd.style.display = 'block'
			fa4.style.display = 'block'
			current = fa4;
		}	
		cdt.innerHTML = "Service's name 4"	
	})
	*/

	//certified part
	let certBox1 = document.querySelector('.certBox1');
	let certBox2 = document.querySelector('.certBox2');
	let certBox3 = document.querySelector('.certBox3');
	let certBox4 = document.querySelector('.certBox4');

	let cbi1 = document.querySelector('.cbi1');
	let cbi2 = document.querySelector('.cbi2');
	let cbi3 = document.querySelector('.cbi3');
	let cbi4 = document.querySelector('.cbi4');	



	certBox1.addEventListener('click', function(){
		certBox1.style.width = '30%';
		certBox1.style.height = '60%';
		certBox1.style.paddingTop = '5em';
		cbi1.style.fontSize = '2em';

		certBox2.style.width = '20%';
		certBox2.style.height = '40%';
		certBox2.style.paddingTop = '8em';
		cbi2.style.fontSize = '1em';

		certBox3.style.width = '20%';
		certBox3.style.height = '40%';
		certBox3.style.paddingTop = '8em';
		cbi3.style.fontSize = '1em';

		certBox4.style.width = '20%';
		certBox4.style.height = '40%';
		certBox4.style.paddingTop = '8em';
		cbi4.style.fontSize = '1em';
	});

	certBox2.addEventListener('click', function(){
		certBox1.style.width = '20%';
		certBox1.style.height = '40%';
		certBox1.style.paddingTop = '8em';
		cbi1.style.fontSize = '1em';

		certBox2.style.width = '30%';
		certBox2.style.height = '60%';
		certBox2.style.paddingTop = '5em';
		cbi2.style.fontSize = '2em';

		certBox3.style.width = '20%';
		certBox3.style.height = '40%';
		certBox3.style.paddingTop = '8em';
		cbi3.style.fontSize = '1em';

		certBox4.style.width = '20%';
		certBox4.style.height = '40%';
		certBox4.style.paddingTop = '8em';
		cbi4.style.fontSize = '1em';
	});

	certBox3.addEventListener('click', function(){
		certBox1.style.width = '20%';
		certBox1.style.height = '40%';
		certBox1.style.paddingTop = '8em';
		cbi1.style.fontSize = '1em';

		certBox2.style.width = '20%';
		certBox2.style.height = '40%';
		certBox2.style.paddingTop = '8em';
		cbi2.style.fontSize = '1em';

		certBox3.style.width = '30%';
		certBox3.style.height = '60%';
		certBox3.style.paddingTop = '5em';
		cbi3.style.fontSize = '2em';

		certBox4.style.width = '20%';
		certBox4.style.height = '40%';
		certBox4.style.paddingTop = '8em';
		cbi4.style.fontSize = '1em';
	});

	certBox4.addEventListener('click', function(){
		certBox1.style.width = '20%';
		certBox1.style.height = '40%';
		certBox1.style.paddingTop = '8em';
		cbi1.style.fontSize = '1em';

		certBox2.style.width = '20%';
		certBox2.style.height = '40%';
		certBox2.style.paddingTop = '8em';
		cbi2.style.fontSize = '1em';

		certBox3.style.width = '20%';
		certBox3.style.height = '40%';
		certBox3.style.paddingTop = '8em';
		cbi3.style.fontSize = '1em';

		certBox4.style.width = '30%';
		certBox4.style.height = '60%';
		certBox4.style.paddingTop = '5em';
		cbi4.style.fontSize = '2em';
	});




	//Taking care of the service detail



})();