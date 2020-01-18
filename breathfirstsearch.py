class Node(object):
	def __init__(self,value,edges):
		self.value=value
		self.edges=edges
		self.searched=False
		self.parent=None

class Graph(object):
	def __init__(self):
		self.nodes=[]
		self.graph={}
		self.start=None
		self.end=None
	def addNode(self,data,adjlist):
		self.n=Node(data,adjlist)
		self.nodes.append(self.n)
		self.graph[data]=self.n
	def show(self):
		return self.graph
	def setstart(self,data):
		self.start=self.graph[data]
		return self.start

	def setend(self,data):
		self.end=self.graph[data]
		return self.end
	def searchpath(self):
		start=self.setstart("A")
		end=self.setend("C")

		queue=[]
		start.searched=True
		queue.append(start)

		while len(queue) > 0:
			current=queue.pop(0)
			if current==end:
				print("Found node ",current.value)
			edges=current.edges
			for i in range(len(edges)):
				pointers=edges[i]
				edgenodes=self.graph[pointers]
				if edgenodes.searched == False:
					edgenodes.searched=True
					edgenodes.parent=current
					queue.append(edgenodes)

		path=[]
		path.append(end)
		next=end.parent
		while next != None:
			path.append(next)
			next=next.parent
		# for v in path:
		# 	print(v.value)
			

graphdata=Graph()
graphdata.addNode("A",["B","D"])
graphdata.addNode("B",["A","C","D"])
graphdata.addNode("C",["B","D"])
graphdata.addNode("D",["A","C","B"])
graphdata.searchpath()

		