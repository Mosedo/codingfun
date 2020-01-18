array=[1,2,3,4,5]
target=12


def binary_search_recursive(array,key,left,right):
	if left > right:
		return False
	else:
		#defining the middle of the list
		mid=int((left+right)/2)
		#if the middle value is our target,return True, our recursion base case
		if key==array[mid]:
			return True
		elif key < array[mid]:
			#else we call the function recursively towards the left if the key is less than the middle
			return binary_search_recursive(array,key,left,mid-1)
		elif key > array[mid]:
			#call the function recursively to the right if the key is greater than the middle
			return binary_search_recursive(array,key,mid+1,right)


print(binary_search_recursive(array,target,0,len(array)-1))
