interface Airplane{
    numberOfEngines: number,
    isJet: boolean,
    maxHeight: number,
    capacity: number,
}
 const boeing777: Airplane = {
    numberOfEngines: 4,
    isJet: true,
    maxHeight: 12000,
    capacity: 300,
}
const airbus320: Airplane = {
    numberOfEngines: 2,
    isJet: true,
    maxHeight: 12000,
    capacity: 200,
}
interface BusinessJet extends Airplane {
    flyinghigher: boolean,
    }
const gulfstream: BusinessJet = {
         numberOfEngines: 2,
        isJet: true,
        maxHeight: 15000,
        capacity: 15,
       flyinghigher: true,
    }