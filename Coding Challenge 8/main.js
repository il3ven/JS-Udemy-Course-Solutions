class Park {
    constructor(name, numberOfTrees, birthYear, parkArea) {
        this.name = name;
        this.numberOfTrees = numberOfTrees;
        this.birthYear = birthYear;
        this.parkArea = parkArea;
    }

    getTreeDensity() {
        return (this.numberOfTrees/this.parkArea);;
    }
}

class Street {
    constructor(name, length) {
        this.name = name;
        this.length = length;

        if(length == undefined) {
            this.size = "Normal";
        }
        else {
            if(0 < length && length < 100) {
                this.size = "Tiny";
            }
            else if(100 <= length && length <=500) {
                this.size = "Small"
            }
            else if(500 < length && length < 800) {
                this.size = "Normal"
            }
            else if(800<= length && length <1200) {
                this.size = "Big"
            }
            else {
                this.size = "Huge"
            }
        }
    }
}

function avgAgeOfParks(park) {
    var avg = 0;

    park.forEach(element => {
        avg += element.birthYear;
    });
    
    return avg/park.length;
}


var park = new Array(3);

park[0] = new Park("Children's Park", 100, 1997, 0.25);
park[1] = new Park("Tikona Park", 200, 1985, 0.4);
park[2] = new Park("Ericsson Park", 50, 2000, 0.1);


var street = new Array(2);

street[0] = new Street("NH 48", 800);
street[1] = new Street("NH 12", 400);

console.log(street[1].size);

