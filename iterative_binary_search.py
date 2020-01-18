array=[1,2,3,4,5]
target=12

def binary_search_iterative(array,key):
	left=0
	right=len(array)-1
	while left <= right:
		middle=int((left+right)/2)
		if key==array[middle]:
			return True
		else:
			if key < array[middle]:
				right=middle-1
			else:
				left=middle+1
	return False

print(binary_search_iterative(array,target))