{

// problem 1
function stringFormate(textString:string, isUpper?: boolean) {
   if(isUpper === true || isUpper === undefined){
    return textString.toUpperCase()
   }
   else if(isUpper === false){
    return textString.toLowerCase()
   }
}



// problem 2
const mobiles = [
    {title: 'samsung s22', rating: 5.0},
    {title: 'samsung s23', rating: 4.5},
    {title: 'samsung s24', rating: 3.5}
]

function filterByRating(mobiles : {title: string;rating: number}[]): {title: string;rating: number}[] {
  return  mobiles.filter(mb => mb.rating >= 4)
   
}


// problem 3
// function concatenateArrays<T>(...arrays: T[][]): T[]{
//   const newArray = [...arrays]
// }


// problem 4
class Vehicle {
  private make: string;
   private year: number

   constructor(make: string, year: number){
        this.make = make;
        this.year = year
   }

   getInfo(){
    console.log(`Make: ${this.make}, Year: ${this.year}`)
   }
}

class Car extends Vehicle {
    private model: string;
    
    constructor(make: string, year: number,model: string){
        super(make,year);
        this.model = model
    }

    getModel(){
        console.log(`Model:${this.model}`)
    }
}


// problem 5

function processValue(value: string | number): number{
    if(typeof value === 'string'){
        return value.length
    }
    else if(typeof value === 'number'){
        return value*2
    }
   
    return 0
 
}

// problem 6
interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length > 0){
        const prod = products.reduce((m,c) => m.price < c.price ? c : m)
        return prod
    }else{
        return null
    }
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
    { name: "Bag", price: 100 }
  ];




  // problem 7
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend"
    }
    return "Weekday"
  }


  // problem 8
  async function squareAsync(n: number): Promise<number>{
    return new Promise((res,rej)=> {
        setTimeout(()=>{
            if(n > 0){
               res(n*n)
            }
            else if(n < 0){
                rej(new Error("Negative number not allowed"))
            }
        },1000)
    })
  }

}