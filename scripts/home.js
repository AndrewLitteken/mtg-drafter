Label.prototype = new Item();
Button.prototype = new Item();
Div.prototype = new Item();
Textbox.prototype = new Item();

var rooms = new Set();  

function page_load() {
	lblRoom = newLabel("", "lblRoom", "");
	btnNewRoom = newButton("Create New Room", "btnNewRoom", "", lblRoom, create_new_room);
	txtRoomInput = newTextbox("txtRoomInput", "");
	btnJoinRoom = newButton("Join Room", "btnJoinRoom", "", txtRoomInput, join_room);
	divOptions = newDiv("divOptions", "", [btnNewRoom, btnJoinRoom, txtRoomInput, lblRoom]);
	divOptions.addToDocument();

	function create_new_room(e) {
		var rndNumber = Math.floor(Math.random() * 900000) + 100000;
		if(rooms.has(rndNumber)) {
			create_new_room(e);
		} else {
			rooms.add(rndNumber); 
			e.setText(rndNumber); 
		};

	}; 

	function join_room(e) {
		console.log(e.getValue());
		if(rooms.has(parseInt(e.getValue()))) {
			console.log("TRUE");
		} else {
			console.log("FALSE");
		}; 
	};
}; 

page_load(); 


