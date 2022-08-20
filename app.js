// Just copy and paste the below code. HAPPY CODING 
function twoArrays(k, A, B) {
    // Write your code here
    let result = 'YES'
    A = A.sort((a,b)=> a-b)
    B = B.sort((a,b)=>b-a)
    A.map((data, index)=>{
        if(A[index]+B[index] < k){
            result ='NO'
        }
    })
    return result
}
