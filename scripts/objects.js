function Item() {
	this.item = null;
	this.addToDocument = function() {
		document.body.appendChild(this.item);
	};
}

function Label () {
	this.createLabel = function(text, id, cl) {
		this.item = document.createElement("p");
		this.item.id = id;
		this.item.innerHTML = text;
		this.item.class = cl; 
	};
	this.setText = function(text) {
		this.item.innerHTML = text;
	};	
}

function Button() {
	this.createButton = function(text, id, cl) {
		this.item = document.createElement("button");
		this.item.id = id;
		this.item.innerHTML = text;
		this.item.class = cl; 
	};

	this.addClickEventHandler = function(handler, args) {
		this.item.addEventListener('click', function() { handler(args); });
	};
}

function Div() {
	this.createDiv = function(id, cl) {
		this.item = document.createElement("div"); 
		this.item.id = id;
		this.item.class = cl; 
	};
	this.addElement = function(ele) {
		this.item.appendChild(ele.item); 
	};
}; 

function Textbox() {
	this.createTextBox = function(id, cl) {
		this.item = document.createElement("input");
		this.item.type = "text";
		this.item.id = id;
		this.item.class = cl; 
	};
	this.getValue = function() {
		return this.item.value; 
	};
};

function newLabel(text, id, cl) {
	t_label = new Label();
	t_label.createLabel(text, id, cl);
	return t_label;
}

function newDiv(id, cl, elements) {
	t_div = new Div();
	t_div.createDiv(id, cl); 
	for (i = 0; i < elements.length; i++) {
		t_div.addElement(elements[i]); 
	}
	return t_div;
}

function newButton(text, id, cl, val, handler_f) {
	t_but = new Button();
	t_but.createButton(text, id, cl);
	t_but.addClickEventHandler(handler_f, val); 
	return t_but; 
}

function newTextbox(id, cl) {
	t_txtbox = new Textbox();
	t_txtbox.createTextBox(id, cl);
	return t_txtbox; 
}

function newImage(src, id) {
	t_img = new Image();
	t_img.createImage(src, id);
	return t_img;
}