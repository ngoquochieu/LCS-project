Đồ án nhóm : Luxury Clothing Store

CSDL : MongoDB

![image](https://user-images.githubusercontent.com/69243133/133722781-ee0fa414-996a-4706-8c7e-69a1bd351589.png)


user {

	_id : ObjectID,
	
	userphone : Stirng,
	
	password : String,
	
	repassword : String,
}

carts {

	_id : ObjectID,

	UserID : String,

	items : [String],
}

categories {

	name : String,
	
	items : [String],
}

items {

	_id : ObjectID,
	
	name : String,
	
	price : Double,
	
	img : String,
	
	description : String,
	
	detail: [
		{
			quantity : Integer,
			img_detail : [String],
			size : [String],
			coloer : String,
		},
	],
	
	status : Boolean,
}


![image](https://user-images.githubusercontent.com/69243133/133722825-9a2e90c9-8849-47f4-bf8a-5b7a0cefe579.png)


![image](https://user-images.githubusercontent.com/69243133/133722942-b27de4e9-b657-4559-b5b5-555aaf22ab53.png)


First commit :
{
	Set up Controllers, Views, Models, docs CSDL, 

	Multi CSS, JS file in hbs
}