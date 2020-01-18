array=[1,2,3,4,5]
target=12


def binary_search_recursive(array,key,left,right):
	if left > right:
		return False
	else:
		mid=int((left+right)/2)
		if key==array[mid]:
			return True
		elif key < array[mid]:
			return binary_search_recursive(array,key,left,mid-1)
		elif key > array[mid]:
			return binary_search_recursive(array,key,mid+1,right)


print(binary_search_recursive(array,target,0,len(array)-1))