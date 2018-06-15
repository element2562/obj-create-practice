const advisor = Object.create(null, {
    company: {
        enumerable: true,
        writable: true,
        value: "IHOB"
    },
    specialty: {
        enumerable: true,
        writable: true,
        value: "Not Pancakes anymore lol"
    },
    name: {
        enumerable: true,
        value: "John Smith"
    },
    portfolio: {
        value: {stocks: []},
        writable: true
    },
    purchase: {
        value: function (symbool, quaantity, priice){
              let purchaseAmt = Object.create(null, {
                  symbol: {value: symbool},
                  quantity: {value: quaantity},
                  price: {value: priice},
                  type: {value: "bought"}
              })
            
            
           this.portfolio.stocks.push(purchaseAmt)
           
        }
    },
    sell: {
        value: function(symbool, quaantity, priice){
                let sellAmt = {
                    symbol: symbool,
                    quantity: quaantity,
                    price: priice,
                    type: "sold"
                };
                this.portfolio.stocks.push(sellAmt);
        }
    },
    worth: {
        value: function(){
            let soldStocks = []
            let boughtStocks = [];
            
            this.portfolio.stocks.forEach(item => {
                if(item.type === "sold"){
                    soldStocks.push(item.price);
                } else {
                    boughtStocks.push(item.price);
                }
            })
           let soldValue = soldStocks.reduce(function(currentValue, nextValue){return currentValue + nextValue})
           let boughtValue = boughtStocks.reduce(function(currentValue, nextValue){return currentValue + nextValue})
           let netWorth = soldValue - boughtValue;
           console.log(netWorth);
           
        console.log(soldStocks);
        console.log(boughtStocks);
        
        
        }
        
        
    },
})


advisor.purchase("IDK", 24, 500)
advisor.purchase("GOOGL", 12, 300)
advisor.sell("APPL", 340, 3000)
advisor.worth();
console.log(advisor["portfolio"]);
let body = document.querySelector("body");
for(key in advisor){
let section = document.createElement("section");
section.textContent = `${key}: ${advisor[key]}`;
body.appendChild(section);
}
let fragment = document.createDocumentFragment();
for(x in advisor.portfolio){
    advisor.portfolio.stocks.forEach(item => {
    let section2 = document.createElement("section");
    console.log(item);
    
    section2.textContent = `${item.symbol} ${item.quantity} ${item.price}`
    fragment.appendChild(section2)
    
    })
    body.appendChild(fragment)
}

console.log(advisor.portfolio)