import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 productdetails={
  id_123:{id:123,
  name:`LG 1.5 Ton  3 Star DUAL Inverter Split AC (Copper ,AI Convertable 6-in-1 Cooling, 2 Way Swing, HD Filter with Anti-Virus Protection, Faster Cooling & Energy Saving,2024 Model, TS-Q18JNXE3, White)`,
  store:'LG',
  price:43990,
  reviews:2579,
  deliveringplace:'Bengaluru',
  pincode:560108,add:'5 in 1 Convertable ACs with AI Pro',
  discountableprice:75000,
  warrenty:1,
  availability:'Unavailable',
  brand:'LG',
  color:'white',
  itemweight:100,
  material:'Aluminium,Copper',
  SpecialFeature:' Oscillating air vanes for dissipation of cold air',
  About:' Split AC with inverter compressor: Variable speed compressor which adjusts power depending on heat load. AI 6-in1 Convertible feature with 6 cooling modes allows for flexible temperature control by operating in different tonnages by adjusting cooling capacity (40% to 110%) to match different needs basis room size or occupancy, enhancing energy efficiency and providing personalized comfort with minimal effort (T&C Apply- *Maximum Cooling Capacity may vary from model to model between 110% to 116%.) • Capacity: 1 Ton. Suitable for Small Sized Rooms (110 to 120 sq. ft.) | 425/989 (In/Out) CFM Air Circulation, Cooling Capacity 3470 W & Ambient Temperature: 52 degree Celsius with 4 way air swing • Energy Rating: 4 Star - High energy efficiency | Annual Energy Consumption: 571.99 Units | ISEER Value: 4.7 (Please Refer Energy Label on Product Page or Contact Brand for More Details) •  Manufacturer Warranty: 1 Year on product, 5 Years on PCB and 10 Years on Compressor with Gas Charging (T&C Apply) • Condenser Coil: Copper With Ocean Black Protection prevents From Rust & Corrosion; Increase Durability ; Uninterrupted Cooling • Key Features: Dual Inverter Compressor, AI Convertible 6-in-1 Cooling, VIRAAT Mode, HD Filter with Anti-Virus Protection, ADC Sensor, Cools at 52⁰ C, Stabilizer free operation within 120V-290V voltage range , Magic Display for temperature, Noise Level: IDU - 21 (db) & ODU – 51 (db) • Special Features: Gold Fin+ - Increase durability, Ocean black protection, Ez Clean Filter, Low gas detection, 100% Copper Condensor, 6 Fan Speed steps; Hi grooved Copper; Smart Diagnosis System, Comfort Air, Monsoon Comfort/Fresh Dry, Auto Clean, Mute, On/ Off Timer, Sleep Mode, Auto Restart (Memory), On/Off Indicator, Dehumidifier'}
 }
  constructor() { }

  sendata(_p0: string):any{
    return this.productdetails
    
  }
 returnData(id: number): any {
  return this.productdetails.id_123
}

private cartItems: any[] = [];


getCartItems() {
  return this.cartItems;
}
buynowdata(data:any){
  const buydata=data;
  localStorage.setItem('buynowdata',JSON.stringify(buydata))

}
// details(id:string){
//   return null
// }


 }


