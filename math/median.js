var minOperationsToMakeMedianK = function(nums, k) {
    nums = nums.sort((a,b) =>  a - b);
    let len = nums.length;
    let mid = Math.floor(len/2);
    let cnt = Math.abs(k - nums[mid]);
    nums[mid] = k;

    for(let i = mid+1; i < len; i++){
        if(nums[i] < k){
            // temp = k - nums[i];
            cnt += (k - nums[i]);
            // nums[i] = nums[i] + temp;
        }
    }

    for(let i = 0; i < mid; i++){
        if(nums[i] > k){
            // temp = nums[i] - k;
            cnt += (nums[i] - k);
            // nums[i] = nums[i] + temp;
        }
    }
    console.log(cnt)
    return cnt;
};

minOperationsToMakeMedianK([7,62,90,68,88], 62);