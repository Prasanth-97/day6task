class uberprice {
    constructor(distanceinkm, waitingperiod, rateperkm, passengercount, extracharge) {
        this.distanceinkm = distanceinkm;
        this.waitingperiod = waitingperiod;
        this.rateperkm = rateperkm;
        this.passengercount = passengercount;
        this.extracharge = extracharge;


        if (waitingperiod == null || waitingperiod == 0) {
            this.waitingperiod == 0;
        }
        if (waitingperiod < 10) {
            this.waitingperiod = 20

        } else if (waitingperiod > 10) {
            this.waitingperiod = 50
        };
        if (passengercount <= 3 || passengercount == null) {
            this.extracharge = 0;
        } else if (passengercount > 3) {
            this.extracharge = (passengercount - 3) * 50;
        };

    }
    getrideprice() {
        let fare = (this.distanceinkm * this.rateperkm) +  this.waitingperiod + this.extracharge;
        return fare;
    }
    getridedetails() {
        return (`the distance is ${this.distanceinkm}KM and the rate per km is ${this.rateperkm} rupees
     and the waiting period is ${this.waitingperiod} minutes`)
    }
};

let prices1 = new uberprice(5, 3, 40, 6);
let prices2 = new uberprice(9, 8, 40, 2);
console.log(prices1.getrideprice());
console.log(prices2.getridedetails());
console.log(prices2.getrideprice());
console.log(prices1.getridedetails());