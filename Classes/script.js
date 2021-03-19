// Farm Homework

class Farm{
    constructor(name,type,productivity,size){
        this.name=name;
        this.type=type;
        this.productivity=productivity;
        this.size=size;

        this.produceFood=false;

        this.isBigger=false;

        this.isOwner=false;
    }
    set(typesOf){
        if(typesOf !=="domestical" && typesOf !=="nondomesical" && typesOf !=="mamals" && typesOf !=="nonmamals" && typesOf !=="human" && typesOf !=="worker")
        console.log("There is no such animal on this farm")
        else this._type=typesOf;
    }
    get(){
        return this._type
    }

    farmLife(animalsClass){
        if(animalsClass instanceof Farm){
            if(this.type==="domestical" && this.type ==="mamals" && this.type ==="nonmamals" ){
                console.log(`The animal ${this.name} lives on this farm`)
                return
            }
            else if(this.size >= animalsClass.size){
                this.isBigger=true;
                console.log(`The animal ${this.name} is bigger than ${animalsClass.name} , and ${animalsClass.name} is going to run away`)
                return
            }
            else(this.type ==="nondomesical")
                console.log(`The animal ${this.name} is a predator looking for food  or its the worker`)
                return
                
            

        }
    }

    produce(produceFood){
        if(produceFood instanceof Farm){
            if(this.type ==="mamals" && this.type === "nonmamals"){
                console.log(`The animal ${this.name} are covered with hairs`)
            }
            else if(this.productivity > produceFood.productivity){
                this.produceFood=true;
                console.log(`The animal ${this.name} is producing more than ${produceFood.name}`)
            }
        }
    }

    owner(ownerFarm){
        if(ownerFarm instanceof Farm){
            if(this.type === "worker"){
                console.log(`This ${this.name} is working here and he is a good worker`)
                return
            }
            if (this.type ==="human"){
                console.log(`This ${this.name} is the owner`)
                return;
            }
            
            
        }
    }


}


let cow= new Farm("Cow","domestical",2,5)
let bear = new Farm("Bear","nondomesical",3,10)
bear.farmLife(cow);

let sheep= new Farm("Sheep","mamals",2,5)
let goat = new Farm("Goat","nonmamals",5,3)

goat.produce(sheep);

let human= new Farm("Vasko","worker")
let human2 = new Farm("John","human")

human.owner(human2);
human2.owner(human)

class Person extends Farm{
    constructor(name,type,productivity,size,newperson){
        super(name,type,productivity,size)
        this.newperson=newperson;
        
    }
}
let personOwner= new Person("Pero","driver");

human.owner(personOwner);
human2.owner(personOwner)





