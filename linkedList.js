/*
Example for the linked list data structure
*/

function Node(data, next){
	this.data = data;
	this.next = next;
	//The next pointer points to the next item in the linked list.
	//The very last node in the linked list will always point to undefined,
	//null, or back to the very beginning of the list (in the case of a 
	//circularly linked list)
};

Node.prototype = {
	setData: function(d){
		this.data = d;
	},
	setNext: function(n){
		this.next = n;
	},
	getData: function(){
		return this.data;
	},
	getNext: function(){
		return this.next;
	}
};

function LinkedList(){
	//This is the most necessary part of a linked list.
	//The head points to the very beginning of the linked list
	//and all traversal of the linked list begins from the head.
	this.head = undefined;
};

LinkedList.prototype = {
	insert: function(data){
		this.head = new Node(data, this.head);
	},

	remove: function(data){
		//In order to remove an item we have to find it in the list
		//and "disect" it out. You:
		/*
			1. Find the item you want to remove lets call it R
			2. Connect the item before R to the item after R
		*/
		var curr = this.head;
		var removedData;
		
		//Special case if the head holds the data that i want
		if(curr.data === data){
			this.head = curr.next;
			removedData = curr.data;
			delete curr;
		}

		while(curr && curr.next){
			if(curr.next.data === data){
				//We found the item we want to remove
				//and curr represents the item behind it
				var itemToRemove = curr.next;
				curr.next = itemToRemove.next;
				removedData = itemToRemove.data;
				delete itemToRemove;
			}
			curr = curr.next;
		}
		return removedData;
	},

	print: function(){
		var curr = this.head;

		//This is really the standard way of traversing a linked
		//list. Since the very last next pointer will point to 
		//some null value, you can increment through the list
		//until you see null.
		while(curr){
			console.log(curr.data);
			curr = curr.getNext();
		}
	}
};

var myLL = new LinkedList();
