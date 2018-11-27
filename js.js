console.log(`Should I pick a laptop?`)
let laptop = {
    _color: 'silver',
    _brand: 'apple',
    _price: 800,
    _speed: 'decent',
    set price(newprice) {
        if (typeof newprice != 'number') {
            console.log(`Be real`)
        } else if (newprice >= 1500) {
            console.log(`Too expensive`)
        } else {
            console.log('Buyable')
            this._price = newprice;
        }
    },
    get price() {
        return this._price
    }
}
laptop.price = 2000
console.log(`I will ${laptop._price} for this laptop`)
let option1 = Object.values(laptop)
option1.forEach(i => {
    console.log(`My laptop: ${i}`)
});
console.log('\n')
console.log(`Or should I buy this desktop?`)
let desktop = {
    _color: 'black',
    _brand: 'HP',
    _price: 1000,
    _speed: 'Fast',
    set price(newprice) {
        if (typeof newprice != 'number') {
            console.log(`Be real`)
        } else if (newprice <= 1000) {
            console.log(`You can't get a good gaming PC with ${this.price}`)
        } else {
            console.log('Buyable')
            this._price = newprice;
        }
    },
    get price() {
        return this._price;
    }
}
desktop.price = 2000
console.log(`I will pay ${desktop._price} for this desktop`)

let option2 = Object.values(desktop)
option2.forEach(i => {
    console.log(`Gaming PC with ${i}`)
})