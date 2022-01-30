'use strict'

let a = +prompt("first: ")
    let b = +prompt("second: ")

    // let a = 2
    // let b = 3

    function cubeSum(n1, n2){
        let sum = 0
        if(n1 === n2){
            alert('Sum = 0')
            return
        }else {
            // for( let i = (n1 < n2 ? n1 : n2) + 1 ; i <= (n1 > n2 ? n1 : n2); i++ ){
            //     sum += Math.pow(i, 3)
            // }
            for( let i = Math.min(n1, n2) + 1 ; i <= Math.max(n1, n2); i++ ){
                sum += Math.pow(i, 3)
            }
        }
        alert(sum)
    }
    cubeSum(a,b)