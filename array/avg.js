

function lowAvg(nums){
    let len = nums.length;
    let avg = [];
    nums = nums.sort((a,b) => a - b);
    // console.log(nums);
    for(let i =0, j =len-1; i < j; i++,j--){
        let avgCal = (nums[i] + nums[j])/2;
        avg.push(avgCal);
    }
    console.log(avg);
    let ans = Math.min(...avg);
    Math.min()
    console.log('ans', ans);
    return ans;
}
// let nums = [7,8,3,4,15,13,4,1];
let nums = [1,9,8,3,10,5];
lowAvg(nums);