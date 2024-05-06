/*let matn = "quyosh sharqdan chiqib garbga botadi."*/
/*document.write(matn.slice(-14))*/
/*let son = 7*/
/*let matnSon = '8'*/
/*console.log(typeof son.toString())*/
/*console.log(typeof parseInt(matnSon ))*/
/*let list = [];*/
/*list.push('atham');*/
/*list.push('16 yoshda');*/
/*list.push('islom');*/
/*list.push('20 yoshda');*/
/*list.push('shaxzoda');*/
/*list.push('18 yoshda');*/
/*console.log(list.length)*/
/*console.log(list)*/
/*console.log(list.pop())*/
/*console.log(list)*/
/*console.log(list.pop())*/
/*console.log(list)*/
/*console.log(list.pop())*/
/*console.log(list)*/
/*let list = []*/
/*list.unshift('atham');*/
/*list.unshift('16 yohda');*/
/*list.unshift('Islom');*/
/*list.unshift('20 yohda');*/
/*list.unshift('shaxzoda');*/
/*list.unshift('18 yohda');*/
/*console.log(list.length)*/
/*console.log(list)*/
/*let list = ['islom','umid','Jahongir','Jasur']*/
/*console.log(list.sort())*/
/*let sonlar = [567,16,2610,945,11,2030,2,47]*/
/*let trtibsonlar = sonlar.sort(function (a, b){return a-b;})*/
/*console.log(trtibsonlar.reverse())*/


/*let belgilar = "qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM"

function parolBer() {
    let i = 0;
    let parol = ''
    while (i < 6 ) {
        let son = parseInt(Math.random() * belgilar.length)
        parol += belgilar[son];
        i++
    }
    document.querySelector("input").value = parol
}*/

document.querySelector('.tugma').addEventListener('click',function () {
    let ekran = document.querySelector('.ekran')
    console.log(typeof parseInt(ekran.value))
    ekran.value = parseInt(ekran.value) + 1;
})
document.querySelector('.nolga').addEventListener('click',function () {
    document.querySelector('.ekran').value = 0;
    
})










