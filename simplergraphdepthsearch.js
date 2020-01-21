graph={
	"A":["B","C"],
	"B":["A","E"],
	"C":["A","D"],
	"D":["C","F"],
	"E":["B","F"],
	"F":["D","E"]
}
let visited=[];
let stack=[];
let start="A";
visited.push(start);
stack.push(start);

while(stack.length > 0){
	let current=stack[stack.length-1];
	let edge=[];
	console.log(current);
	let edges=graph[current];
	for(let i=0;i<edges.length;i++){
		if (!visited.includes(edges[i])) {
			edge.push(edges[i]);
		}
	}
	
	if (edge.length > 0) {
		let selected=edge[Math.floor(Math.random()*edge.length)];
		visited.push(selected);
		stack.push(selected);
	}else{
		stack.pop();
	}

}