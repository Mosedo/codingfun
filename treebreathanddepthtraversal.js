
//creating a node for our tree
class Node{
	constructor(data){
		this.data=data;
		this.right=null;
		this.left=null;
		this.searched=false;
		this.parent=null;
	}

	insert(data){
		if (data < this.data) {
			if (this.left == null) {
				this.left=new Node(data);
			}else{
				this.left.insert(data);
			}
		}else{
			if (this.right == null) {
				this.right=new Node(data);
			}else{
				this.right.insert(data);
			}
		}
	}

	printnodes(){
		if (this.right != null) {
			this.right.printnodes();
		}
		console.log(this.data);
		if (this.left != null) {
			this.left.printnodes();
		}
	}

	searchtarget(data,treeroot){
		if (treeroot==null) {
			return "The end";
		}

		//searching for a specific value commented
		/*if (treeroot.data==data) {
			return true;
		}*/

		//traversing the entire tree with depth first search recursively
		else{

			if (treeroot.parent==null && treeroot.left==null && treeroot.right==null) {
				return false;
			}else{
				let neighbors=[];
				console.log(treeroot.data);
				if (treeroot.right != null && treeroot.right.searched == false) {
					neighbors.push(treeroot.right);
				}
				if (treeroot.left != null && treeroot.left.searched==false) {
					neighbors.push(treeroot.left);
				}
				if (neighbors.length == 0) {
					return this.searchtarget(data,treeroot.parent);
				}else{
					let selected=neighbors[Math.floor(Math.random()*neighbors.length)];
					if (selected.searched==true) {
						return this.searchtarget(data,treeroot.parent);
					}else{
						selected.searched=true;
						selected.parent=treeroot;
						return this.searchtarget(data,selected);
					}
				}
			}

		}
	}


}

//creating the tree object
class Tree{
	constructor(){
		this.root=null;
	}

	insert(data){
		if (this.root==null) {
			this.root=new Node(data);
		}else{
			this.root.insert(data);
		}
	}

	printnodes(){
		if (this.root == null) {
			console.log("This tree is empty......");
		}else{
			this.root.printnodes();
		}
	}

	returnroot(){
		return this.root;
	}

	startnode(){
		return this.root;
	}

	depthfirstsearch(data){
		if (this.root == null) {
			console.log("This tree is empty......");
		}else{
			return this.root.searchtarget(data,this.root);
		}
	}


	

	breathfirstsearch(){

		if (this.root==null) {
			console.log("This tree cannot be traversed because it's empty");
		}else{
			let start=this.startnode();
			let queue=[];
			start.searched=true;
			queue.push(start);

			while(queue.length > 0){
				let current=queue.shift();
				//let children=[current.right,current.left];
				console.log(current.data);
				if (current.left != null) {
					if (current.left.searched==false) {
						current.left.searched=true;
						current.left.parent=current;
						queue.push(current.left);
					}
				}

				if (current.right != null) {
					if (current.right.searched==false) {
						current.right.searched=true;
						current.right.parent=current;
						queue.push(current.right);
					}	
				}
		
			}

		}

	}

}


let tree=new Tree();
tree.insert(100);
tree.insert(200);
tree.insert(50);
tree.insert(300);
tree.insert(150);
tree.insert(40);
tree.insert(90);
tree.insert(80);

console.log(tree.depthfirstsearch(300));
//tree.breathfirstsearch();