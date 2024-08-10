function mergeSort(arr) {
    if (arr.length < 2) {
        return { sortedArray: arr, invCount: 0 };
    }

    const mid = Math.floor(arr.length / 2);
    const leftResult = mergeSort(arr.slice(0, mid));
    const rightResult = mergeSort(arr.slice(mid));

    const mergeResult = mergeAndCount(leftResult.sortedArray, rightResult.sortedArray);
    const totalInvCount = leftResult.invCount + rightResult.invCount + mergeResult.invCount;

    return { sortedArray: mergeResult.sortedArray, invCount: totalInvCount };
}

function mergeAndCount(leftArr, rightArr) {
    let i = 0, j = 0, k = 0;
    const leftLen = leftArr.length;
    const rightLen = rightArr.length;
    const sortedArray = [];
    let invCount = 0;

    while (i < leftLen && j < rightLen) {
        if (leftArr[i] <= rightArr[j]) {
            sortedArray[k++] = leftArr[i++];
        } else {
            sortedArray[k++] = rightArr[j++];
            invCount += (leftLen - i);  // Count inversions
        }
    }

    while (i < leftLen) {
        sortedArray[k++] = leftArr[i++];
    }

    while (j < rightLen) {
        sortedArray[k++] = rightArr[j++];
    }

    return { sortedArray, invCount };
}

// Example usage:
let arr = [2, 4, 1, 3, 5];
let result = mergeSort(arr);
console.log(`Number of inversions are ${result.invCount}`);  // Output: Number of inversions are 3
