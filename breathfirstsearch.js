
//Creating the City which is the vertext or Node object for the graph
class City{
	constructor(town,adjacent){
		this.town=town;
		//neighbors of this node
		this.adjacent=adjacent;
		//setting searched status of this node to false
		this.searched=false
		//initilizing the parent which will be usefull in drawing out our travel path
		this.parent=null
	}
}


//Creating the graph
class Graph{
	constructor(){
		this.nodes=[];
		this.graph={};
		this.start=null
		this.end=null
	}

	//adding the towns which are the vertices of the graph
	addTowns(data,adj){
		let n=new City(data,adj);
		this.nodes.push(n);
		this.graph[data]=n;//the graph
	}


	//defining the start city for traversal
	startcity(city){
		this.start=this.graph[city];
		return this.start;
	}


	//defining the end city for traversal
	endcity(city){
		this.end=this.graph[city];
		return this.end;
	}


	//traversing the graph with breath first search

	searchroute(){
		//starting point
		let start=this.startcity("Muhoroni");
		//ending point
		let end=this.endcity("Naivasha");

		let queue=[];
		//mark the first city/vertex/node as visited and push it into the queue
		start.searched=true;
		queue.push(start);

		//iterate for as long as the queue is not empty
		while(queue.length > 0){
			//retrieve the first value in the queue and name it as currentcity--> this happens with every iteration
			let currentcity=queue.shift();

			//retrieve its edges/neighbors
			let neighbors=currentcity.adjacent;

			//looping through the neighbors adjacency list
			for(let i=0;i<neighbors.length;i++){
				let pointer=neighbors[i];
				let edgenodes=this.graph[pointer];
				//select only nodes/cities that have not been searched
				if (!edgenodes.searched) {
					//mark them as searched
					edgenodes.searched=true;
					//make the currentcity their parent node
					edgenodes.parent=currentcity;
					//push them into the queue
					queue.push(edgenodes);
				}
			}

		}





	}
		

}

graphdata=new Graph();
graphdata.addTowns("Kisumu",["Ahero","Meru","Kericho"]);
graphdata.addTowns("Ahero",["Kisumu","Muhoroni"]);
graphdata.addTowns("Muhoroni",["Ahero","Kisii","Kericho"]);
graphdata.addTowns("Kisii",["Muhoroni","Gilgil"]);
graphdata.addTowns("Gilgil",["Kisii","Naivasha"]);
graphdata.addTowns("Kericho",["Muhoroni","Kisumu","Nakuru"]);
graphdata.addTowns("Naivasha",["Gilgil","Nakuru","Nairobi"]);
graphdata.addTowns("Nakuru",["Kericho","Naivasha"]);
graphdata.addTowns("Meru",["Kisumu","Embu","Nairobi"]);
graphdata.addTowns("Nairobi",["Naivasha","Embu","Meru"]);
graphdata.addTowns("Embu",["Meru","Nairobi"]);
graphdata.searchroute();