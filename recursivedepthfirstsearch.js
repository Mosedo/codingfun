class Node{
	constructor(data){
		this.data=data;
		this.neighbors=[];
		this.searched=false;
		this.parent=null;
	}
	depthfirstsearch(thegraph,node){
		let edges=node.neighbors;
		let edge=[];
		console.log(node.data)
		for(let i=0;i<edges.length;i++){
				let pointer=edges[i];
				let edgenode=thegraph[pointer];
				if (!edgenode.searched) {
					edge.push(edgenode);
				}

		}

		if (node.parent==null && edge.length == 0) {
			return false;
		}

		
		if (edge.length > 0) {
			let selected=edge[Math.floor(Math.random()*edge.length)];
			selected.searched=true;
			selected.parent=node;
			return this.depthfirstsearch(thegraph,selected);
		}else{
			return this.depthfirstsearch(thegraph,node.parent);
		}
	}
}


class Graph{
	constructor(){
		this.graph={};
		this.nodes=[];
		this.start=null;
		this.end=null;
	}

	creategraph(data,neighborpointer){
		let n=new Node(data);
		n.neighbors=neighborpointer;
		this.graph[data]=n;
		this.nodes.push(n);
	}

	randomize(array){
		return Math.floor(Math.random()*array.length);
	}

	startnode(data){
		this.start=this.graph[data];
		return this.start;
	}

	endnode(data){
		this.end=this.graph[data];
		return this.end;
	}

	depthfirstsearch(){
		let start=this.startnode("A");
		start.searched=true;
		this.start.depthfirstsearch(this.graph,start);
	}



	


}

let g=new Graph();
g.creategraph("A",["B","C"]);
g.creategraph("B",["F","A"]);
g.creategraph("C",["A","D","E"]);
g.creategraph("D",["C"]);
g.creategraph("E",["C","F","G"]);
g.creategraph("F",["B","E","Z"]);
g.creategraph("G",["E","H"]);
g.creategraph("H",["G","K","W"]);
g.creategraph("K",["H"]);
g.creategraph("W",["H"]);
g.creategraph("Z",["F","M"]);
g.creategraph("M",["Z"]);
g.depthfirstsearch();

