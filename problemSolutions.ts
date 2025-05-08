{


function formatString(input: string, toUpper?: boolean): string {
   if(toUpper === true || toUpper === undefined){
    return input.toUpperCase()
   }
   else if(toUpper === false){
    return input.toLowerCase()
   }
   return ""
}




function filterByRating(mobiles : {title: string;rating: number}[]): {title: string;rating: number}[] {
  return  mobiles.filter(mb => mb.rating >= 4)
   
}


function concatenateArrays<T>(...arrays: T[][]): T[]{
    return ([] as T[]).concat(...arrays)
}

class Vehicle {
  private make: string;
   private year: number

   constructor(make: string, year: number){
        this.make = make;
        this.year = year
   }

   getInfo(){
    return `Make: ${this.make}, Year: ${this.year}`
   }
}

class Car extends Vehicle {
    private model: string;
    
    constructor(make: string, year: number,model: string){
        super(make,year);
        this.model = model
    }

    getModel(){
       return `Model:${this.model}`
    }
}


function processValue(value: string | number): number{
    if(typeof value === 'string'){
        return value.length
    }
    else if(typeof value === 'number'){
        return value*2
    }
   
    return 0
 
}


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



  async function squareAsync(n: number): Promise<number>{
    return new Promise((res,rej)=> {
        setTimeout(()=>{
            if(n > 0){
               res(n*n)
            }
           
        },1000)
        if(n < 0){
            rej(new Error("Negative number not allowed"))
        }
    })
  }

}