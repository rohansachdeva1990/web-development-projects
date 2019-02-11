var comments = {};
comments.data = ["Good one", "Wow", "Lame...." ];

function print(arr){
	arr.forEach(function(el){
		console.log(el);
	});
}

print(comments.data);

// Defining member function
comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	});
};


comments.print();