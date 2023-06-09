const t = [1,2,3,4,5,4,3,2,1,0]
for(const i in t){
    console.log(i, t[i])
}

const t2 = t.map(value => '<li>' + value ** 2 + '</li>')
const [first,second,third,fourth] = t2
console.log(first)
console.log(second)
console.log(third)
console.log(fourth)