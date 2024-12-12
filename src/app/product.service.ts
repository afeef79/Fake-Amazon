import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 productdetailss={
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
 
    
  flatobj: any = {};
  productdetails = [
    { id: 100000, item: 'AcLG1.5', name: 'LG 1.5 Ton 3 Star DUAL Inverter Split AC(Copper ,AI Convertable 6-in-1 Cooling, 2 Way Swing, HD Filter with Anti-Virus Protection, Faster Cooling & Energy Saving,2024 Model, TS-Q18JNXE3, White)', store: 'LG', price: 43990, reviews: 2579, deliveringplace: 'Bengaluru', pincode: 560108, add: '5 in 1 Convertable ACs with AI Pro', discountableprice: 75000, warrenty: 1, availability: 'Unavailable', brand: 'LG', color: 'white', itemweight: 100, material: 'Aluminium,Copper', SpecialFeature: ' Oscillating air vanes for dissipation of cold air', About: '• Split AC with inverter compressor: Variable speed compressor which adjusts power depending on heat load. AI 6-in1 Convertible feature with 6 cooling modes allows for flexible temperature control by operating in different tonnages by adjusting cooling capacity (40% to 110%) to match different needs basis room size or occupancy, enhancing energy efficiency and providing personalized comfort with minimal effort (T&C Apply- *Maximum Cooling Capacity may vary from model to model between 110% to 116%.) • Capacity: 1 Ton. Suitable for Small Sized Rooms (110 to 120 sq. ft.) | 425/989 (In/Out) CFM Air Circulation, Cooling Capacity 3470 W & Ambient Temperature: 52 degree Celsius with 4 way air swing • Energy Rating: 4 Star - High energy efficiency | Annual Energy Consumption: 571.99 Units | ISEER Value: 4.7 (Please Refer Energy Label on Product Page or Contact Brand for More Details) •  Manufacturer Warranty: 1 Year on product, 5 Years on PCB and 10 Years on Compressor with Gas Charging (T&C Apply) • Condenser Coil: Copper With Ocean Black Protection prevents From Rust & Corrosion; Increase Durability ; Uninterrupted Cooling • Key Features: Dual Inverter Compressor, AI Convertible 6-in-1 Cooling, VIRAAT Mode, HD Filter with Anti-Virus Protection, ADC Sensor, Cools at 52⁰ C, Stabilizer free operation within 120V-290V voltage range , Magic Display for temperature, Noise Level: IDU - 21 (db) & ODU – 51 (db) • Special Features: Gold Fin+ - Increase durability, Ocean black protection, Ez Clean Filter, Low gas detection, 100% Copper Condensor, 6 Fan Speed steps; Hi grooved Copper; Smart Diagnosis System, Comfort Air, Monsoon Comfort/Fresh Dry, Auto Clean, Mute, On/ Off Timer, Sleep Mode, Auto Restart (Memory), On/Off Indicator, Dehumidifier' },
    { id: 100001, item: 'AcLG', name: 'LG 1 Ton 4 Star DUAL Inverter Split AC (Copper, AI Convertible 6-in-1 Cooling, 4 Way Swing, HD Filter with Anti-Virus Protection, Faster Cooling & Energy Saving, 2024 Model, TS-Q13JNYE, White)', store: 'LG', price: 35790, reviews: 2518, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Godrej 1.5 Ton 5 star, 5 Years Comprehensive Warrenty', discountableprice: 54900, warrenty: 1, availability: 'available', brand: 'LG', color: 'white', itemweight: 110, material: 'Aluminium,Copper', SpecialFeature: ' Oscillating air vanes for dissipation of cold air', About: '• Split AC with inverter compressor: Variable speed compressor which adjusts power depending on heat load. AI 6-in1 Convertible feature with 6 cooling modes allows for flexible temperature control by operating in different tonnages by adjusting cooling capacity (40% to 110%) to match different needs basis room size or occupancy, enhancing energy efficiency and providing personalized comfort with minimal effort (T&C Apply- *Maximum Cooling Capacity may vary from model to model between 110% to 116%.) • Capacity: 1 Ton. Suitable for Small Sized Rooms (110 to 120 sq. ft.) | 425/989 (In/Out) CFM Air Circulation, Cooling Capacity 3470 W & Ambient Temperature: 52 degree Celsius with 4 way air swing • Energy Rating: 4 Star - High energy efficiency | Annual Energy Consumption: 571.99 Units | ISEER Value: 4.7 (Please Refer Energy Label on Product Page or Contact Brand for More Details) •  Manufacturer Warranty: 1 Year on product, 5 Years on PCB and 10 Years on Compressor with Gas Charging (T&C Apply) • Condenser Coil: Copper With Ocean Black Protection prevents From Rust & Corrosion; Increase Durability ; Uninterrupted Cooling • Key Features: Dual Inverter Compressor, AI Convertible 6-in-1 Cooling, VIRAAT Mode, HD Filter with Anti-Virus Protection, ADC Sensor, Cools at 52⁰ C, Stabilizer free operation within 120V-290V voltage range , Magic Display for temperature, Noise Level: IDU - 21 (db) & ODU – 51 (db) • Special Features: Gold Fin+ - Increase durability, Ocean black protection, Ez Clean Filter, Low gas detection, 100% Copper Condensor, 6 Fan Speed steps; Hi grooved Copper; Smart Diagnosis System, Comfort Air, Monsoon Comfort/Fresh Dry, Auto Clean, Mute, On/ Off Timer, Sleep Mode, Auto Restart (Memory), On/Off Indicator, Dehumidifier' },
    { id: 100002, item: 'AcPanasonic', name: 'Panasonic 1.5 Ton 3 Star Wi-Fi Inverter Smart Split AC (Copper Condenser, 7 in 1 Convertible with True AI Mode, PM 0.1 Air Purification Filter, CS/CU-SU18ZKYWT, 2024 Model, White)', store: 'panasonic', price: 35990, reviews: 3688, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Godrej 1.4 Ton 5 star, 5 Years Comprehensive Warrenty', discountableprice: 49900, warrenty: 1, availability: 'Unavailable', brand: 'Panasonic', color: 'white', itemweight: 120, material: 'Aluminium', SpecialFeature: ' Oscillating air vanes for dissipation of cold air', About: '•7 in 1 Convertible Modes with True AI Mode (converti7): True AI mode smartly detects the rooms temperature forecast the cooling capacity and change the fan speed to provide optimal cooling through inbuilt sensors and artificial intelligence. Save energy with adjustment of cooling performance by selecting modes ranging from 40% to 90%, Full capacity and High capacity) • Capacity: 1.5 Ton - Suitable for medium sized rooms (121-170 sq ft). Energy Star Rating: 3 Star | Annual Power Consumption: 1002.31 kWh | ISEER: 3.90. The star rating is as per new BEE guidelines.501 (Indoor) CFM Air Circulation & Ambient Temperature: 16 to 52 degree Celsius • Energy Rating: 4 Star - High energy efficiency | Annual Energy Consumption: 571.99 Units | ISEER Value: 4.7 (Please Refer Energy Label on Product Page or Contact Brand for More Details) •  Manufacturer Warranty: 1 Year on product, 5 Years on PCB and 10 Years on Compressor with Gas Charging (T&C Apply) • Condenser Coil: Copper With Ocean Black Protection prevents From Rust & Corrosion; Increase Durability ; Uninterrupted Cooling • Key Features: Dual Inverter Compressor, AI Convertible 6-in-1 Cooling, VIRAAT Mode, HD Filter with Anti-Virus Protection, ADC Sensor, Cools at 52⁰ C, Stabilizer free operation within 120V-290V voltage range , Magic Display for temperature, Noise Level: IDU - 21 (db) & ODU – 51 (db) • Special Features: Gold Fin+ - Increase durability, Ocean black protection, Ez Clean Filter, Low gas detection, 100% Copper Condensor, 6 Fan Speed steps; Hi grooved Copper; Smart Diagnosis System, Comfort Air, Monsoon Comfort/Fresh Dry, Auto Clean, Mute, On/ Off Timer, Sleep Mode, Auto Restart (Memory), On/Off Indicator, Dehumidifier' },
    { id: 100003, item: 'AcDaikin', name: 'Daikin 1.5 Ton 3 Star Inverter Split AC (Copper, PM 2.5 Filter, Triple Display, Dew Clean Technology, Coanda Airflow, 2024 Model, MTKL50U, White)', store: 'Daikin', price: 36990, reviews: 3685, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Godrej 1.4 Ton 5 star, 5 Years Comprehensive Warrenty', discountableprice: 49900, warrenty: 1, availability: 'available', brand: 'Daikin', color: 'white', itemweight: 130, material: 'Aluminium,Copper', SpecialFeature: 'High Ambient Operation upto 52C,3D Airflow,Dew Clean', About: '• split ac with inverter swing compressor and hepta sense: dew clean technology; triple display; pm 2.5 filter to ensure healthy air • capacity 1.5 ton: suitable for small sized rooms (111 to 150 sq.ft); 572 cfm with an air throw of 16 meters • 3 star: energy efficiency •  warranty: 1 years on product, 5 years on pcb, 10 years on compressor • Condenser Coil: Copper With Ocean Black Protection prevents From Rust & Corrosion; Increase Durability ; Uninterrupted Cooling • Key Features: Dual Inverter Compressor, AI Convertible 6-in-1 Cooling, VIRAAT Mode, HD Filter with Anti-Virus Protection, ADC Sensor, Cools at 52⁰ C, Stabilizer free operation within 120V-290V voltage range , Magic Display for temperature, Noise Level: IDU - 21 (db) & ODU – 51 (db) • Special Features: Gold Fin+ - Increase durability, Ocean black protection, Ez Clean Filter, Low gas detection, 100% Copper Condensor, 6 Fan Speed steps; Hi grooved Copper; Smart Diagnosis System, Comfort Air, Monsoon Comfort/Fresh Dry, Auto Clean, Mute, On/ Off Timer, Sleep Mode, Auto Restart (Memory), On/Off Indicator, Dehumidifier' },

    { id: 100004, item: 'fan', name: 'Bajaj Frore Neo 400 MM Oscillating Pedestal Fan for Home|Aerodynamically Balanced Blades| 100% CopperMotor| HighAir Delivery|3-Speed Control| Rust Free|2-Yr Warranty Red', store: 'Bajaj', price: 2409, reviews: 283, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Orpat BLDC Cieling fan Moneysaver Genz 28W With Remote', discountableprice: 3699, warrenty: '6 months', availability: 'available', brand: 'Bajaj', color: 'red', itemweight: 4, material: 'Aluminium', SpecialFeature: ' Oscillating', About: '• TYPE: Pedestal Fan; SERIES: Bajaj Frore Neo; SWEEP: 400mm, HIGH SPEED: 1350 RPM, AIR DELIVERY: 65CMM, POWER: 55 W; COLOUR: Scarlet Red • WARRANTY: Product Warranty By Bajaj Electricals Limited- 2 years. Terms & Conditions Applied • 100% COPPER MOTOR & STRONG BASE: The fan comes with 100% Copper Motor for longer life & consistent Performance & have Sturdy and Strong Base for Better Stability of the Product • OVERLOAD PROTECTOR: Bajaj Frore Neo Pedestal Fan is equipped with Built in Thermal Overload Protector to Protects Motor from Voltage Surge • SPEED CONTROL & RUST FREE BODY: Fan is provided with 3 Speed Regulation for convenient operations. The Rust Free Body of the Pedestal Fan ensure enhanced longevity •CONSUMER SUPPORT - Reach out to Bajaj Consumer Care for any warranty issues/service. Free home service available under product warranty period. T & C Applied' },
    { id: 100005, item: 'earbuds', name: 'Redmi Buds 4 Active - Bass Black, 12mm Drivers(Premium Sound Quality), Up to 30 Hours Battery Life, Google Fast Pair, IPX4, Bluetooth 5.3, ENC, Up to 60ms Low Latency Mode, App Support', store: 'Redmi', price: 1399, reviews: 28541, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Boult Audio z40 True Wireless', discountableprice: 4999, warrenty: 1, availability: 'available', brand: 'Redmi', color: 'Black', itemweight: 400, material: 'plastic, metal, silicone', SpecialFeature: 'True wireless', About: '• Rise, Never Fall. • Drivers: The powerful 12mm Bass Pro drivers, designed to deliver an immersive audio experience with deep, rich bass and crisp, clear highs • Battery: Unleash the freedom of extended usage with upto an astounding 30 hours of battery life. Our innovative technology ensures that you can enjoy uninterrupted music, podcasts, and calls throughout the day, without worrying about running out of power. • ENC: Enjoy crystal-clear conversations even in noisy environments, as the powerful mic captures your voice with remarkable clarity while Environmental Noise Cancellation (ENC) actively reduces background noise for an uninterrupted and immersive calling experience. Stay connected and communicate effortlessly with our premium audio solution. • Google Fast Pair: In one tap, the Redmi Buds 4 Active enables quick, effortless Bluetooth pairing with your Android* devices. You can even check to see where you last placed it. • Fast Charging: Designed to keep up with your active lifestyle, our Redmi Buds 4 Active offers rapid charging capabilities that get you upto 90 minutes of playback time in just 10 minutes.' },
    { id: 100006, item: 'Floor Mat', name: 'PRIMESKY Bathroom Floor Mat Water Absorbing Mat For Quick Dry Rubber Backed Anti-Slip Rectangular Shape Floor Mat Non Slip Mat For Home Kitchen (40 X 60 Cm) (2)', store: 'PRIMESKY', price: 449, reviews: 1170, deliveringplace: 'Bengaluru', pincode: 560108, add: 'super soft anti slip bath mats my luxe home', discountableprice: 1799, warrenty: '3 months', availability: 'available', brand: 'PRIMESKY', color: 'Gray', itemweight: '440 grams', material: 'Rubber', SpecialFeature: ' Weave Type Flat Woven', About: '• COMFORT AND CARE IN MIND - Our bathmats are luxury mats that have been made with your comfort and care in mind. They are extremely soft and have a plush feel to them; they are also quite absorbent and will keep your feet toasty and snugly dry. This bathroom mats enticing designs will give your bathroom a fresh look. Bathmats are the ideal combination of comfort and design for refreshing your bathroom • Capacity: 1 Ton. Suitable for Small Sized Rooms (110 to 120 sq. ft.) | 425/989 (In/Out) CFM Air Circulation, Cooling Capacity 3470 W & Ambient Temperature: 52 degree Celsius with 4 way air swing • MACHINE WASHABLE - This bathroom mat is machine washable, which makes it even more convenient. Simply toss this washable bathroom mat into your washing machine on a mild cycle and hang to dry or let it air dry. Wash in a machine with cold water and a light detergent. Neither chlorine nor bleach should be used. •  Performance - The mats anti-skid latex backing keeps it in place even when wet. When utilised for children/kids or elderly, the durable non-slip backing will not fade and will provide piece of mind.' },
    { id: 100007, item: 'helmet', name: 'Vega Crux ISI Certified Flip-Up Helmet for Men and Women with Clear Visor(Black, Size:M)', store: 'Vega', price: 1163, reviews: 51545, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Vega Crux Dx Black Helmet', discountableprice: 1550, warrenty: 1, availability: 'available', brand: 'Vega', color: 'Black', itemweight: '1.49 kg', material: 'Acrylonitrile Butadiene Styrene (ABS)', SpecialFeature: 'Off-road', About: '• The Helmet size would be: Extra Small (54 cm), Small (56 cm), Medium (57 cm), and Large (58 cm), ensuring a perfect fit for different head sizes. • Material: The helmet has a High Impact ABS material shell, offering durability and protection. Certification: It is ISI Certified, confirming it meets safety standards. • Weight: Weighs 1100 grams, slightly heavier but still comfortable. Lining: Features a removable, washable, and odor-resistant lining, helping to keep the helmet fresh for longer between cleanings. •  Buckle: Comes with a metallic quick-release silent buckle for easy fastening and removal. Visor: The visor is scratch-resistant and UV-resistant, made from optical polycarbonate, and includes a quick-release mechanism for smooth and easy visor changes.' },

    { id: 100008, item: 'Bed sheet', name: 'Layers Savona Cotton Micro Poly TC Double Reversible Comforter (Red Coral)', store: 'Layers', price: 2499, reviews: 25, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Premium Comfortable from solimo', discountableprice: 3999, warrenty: 1, availability: 'available', brand: 'Layers', color: 'Red & Coral', itemweight: '2.74L x 2.28W Meters', material: 'Cotton', SpecialFeature: ' Skin Friendly, Lightweight, Breathable', About: '• Package Includes: 1 Double Comforter | Comforter: 2.74 m x 2.28 m •Thread Count: MICRO POLY TC, Fits perfectly on a Regular sized Double Bed • Material: Cotton. Natural and guilt free cotton make these bedsheets safe & comfortable for every season. Cotton is skin friendly, light weight and breathable, adding value to your sleep experience. Its moisture absorbent property and easy to maintain attribute, make it more desirable. • Our textiles are engineered to create the most balanced construction of fabric which makes our Comforters breathable, moisture absorbent, light weight, cool and crisp in their feel. These 100 % cotton bedsheets and comforters are made using skin friendly dyes safe for everyday use. The breathable fabric makes is a perfect sleep option. • Easy to Wash: Our Comforters are machine washable (40 degrees), easy to maintain & color fast. However use of mild detergent is advisable. Avoiding hard brushing will improve product life.' },
    { id: 100009, item: 'Home Decor', name: 'Street27 Polyvinyl Chloride 3Pcs Astronaut Action Figurine Home Decor Astronaut Statue Study Office Desk Decor Showpiece Gift Decoration Accessories Outer Space Pvc Sculpture(Golden)', store: 'Street27', price: 397, reviews: 1139, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Define Art pedestal Statue Base for Figurine  idol& showpiece', discountableprice: 1599, warrenty: '6 months', availability: 'available', brand: 'street27', color: 'Multicolor', itemweight: '450g', material: 'Polyvinyl Chloride', SpecialFeature: 'Can be displaying at bookshelf, fireplace', About: '• 3 Pieces Astronaut Statue Figurine Ornament Space Man Sculpture Decoration Crafts Arts •Astronaut design is adorable and attractive as a gift for children, kids, friends, sons, daughters • Made of environmental PVC material, non-toxic, tasteless, safe and healthy and solid for using • Suitable for cake topper, interior home office decor, living room, bedroom, space theme decorating •Can be displaying at bookshelf, fireplace mantel, TV cabinet, windowsill, desktop, coffee table, shelf and more' },
    { id: 100010, item: 'Wardrobe Organizer For Clothes', name: 'HomeStrap Set Of 6 Non-Woven Printed Saree Cover/Cloth Storage/Wardrobe Organizer For Clothes With Transparent Window(Grey)(Shark Tank Featured),45 Cm,22 Cm', store: 'Homestrap', price: 341, reviews: 14772, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Kuber Industries Saree Storage', discountableprice: 75000, warrenty: 1, availability: 'Unavailable', brand: 'HomeStrap', color: 'Grey', itemweight: '1KG', material: 'Polypropylene', SpecialFeature: ' Lightweight, Stackable', About: '•MADE IN INDIA | Printed Saree Cover to organize your cluttered wardrobe. •Material: Heavy quality Non-Woven fabric to prevent your favorite Silk/Cotton Sarees from Dust, Moisture, and Moths. • Easily stacked one on top of the other, magically creating more space in your wardrobe, Avoid Creases in clothes • Dimension: Length(17.5 Inches), Width (13 Inches), Height (8.5 Inches) | Length( 45 CMs), Width ( 33.5 CMs), Height (22 CMs). • Comes with 2 Premium zippers with a Transparent Front window Keeping the clothes inside visible and easy to access.' },
    { id: 100011, item: 'Decorative LED String Light', name: 'Quace 12 Meter Decorative 42 Warm White LED String Light Plug for Indoor & Outdoor Decorations,String Lights for DIY, Party, Home Decor, Christmas, Diwali', store: 'Quace', price: 79, reviews: 2418, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Litehom LED Net Mesh String Lights,9.8Ft X 6.6Ft, 192 LEDs', discountableprice: 1999, warrenty: 2, availability: 'available', brand: 'Quace', color: 'Warm white', itemweight: '100g', material: 'Metal,Copper', SpecialFeature: 'String', About: '• These lights can be bent skilfully to decorate and achieve a nice effect, but please be careful not to scrape the insulation off or cut the wires. • Warning: If the customer wants to connect multiple lights through a connector then the voltage of the connector must to be 220-240 volts, or else it would lead to a short circuit' },

    { id: 100012, item: 'Spin Mop', name: 'Spotzero by Milton Prime Stainless Steel Wringer Spin Mop with Big Wheel, Puller Handle, Bucket Floor Cleaning and Mopping System 360° Flexible,2 Microfiber Refills, Big Size, Aqua Green', store: 'Spotzero By Milton Store', price: 1399, reviews: 92412, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Amazon Brand- Presto! Elite spin mope', discountableprice: 2158, warrenty: 1, availability: 'Unavailable', brand: 'Milton', color: '	Aqua Green', itemweight: '2.4kg', material: '	Plastic', SpecialFeature: 'Spin Mop', About: '• Package Contents: 1- Piece Prime spin mop set comes with 1 steel wringer mop bucket with 2 pcs big wheels; 1 stainless steel mop rod; 2 high quality microfiber mop refill; 1 Liquid Soap Dispenser •STURDY MOP WITH STEEL WRINGER FOR FLOOR CLEANING: A perfect blend of style and comfort, this popular cleaning tool comes with stainless steel wringer, big wheels, and a puller handle to help you clean every area in the house effortlessly. • BIG WHEELS AND PULLER HANDLE: Comes with 2pcs big wheels and puller to easily carry the bucket around the house. Makes home cleaning effortless and easy. •  360-DEGREE ROTATING SPIN MOP HANDLE: Light-weight and adjustable stainless-steel mop handle reaches corner of the house - like under the table, below the bed, very easily. • WATER OUTLET PLUG: The outlet carries out easy drainage of dirty water from the bucket without using your hands. • MICROFIBER POWER PERFORMANCE FOR FLOOR CLEANING WITH MAGIC MOP】: Microfiber material with its unique feature of deep cleaning helps lift and trap fine dust / dirt particles. Microfiber mop head is machine-washable and reusable. •LIQUID DISPENSER: Add cleaning solution to the water through specially designed liquid dispenser and leave your floors spick-and-span with a tinge of fragrance.' },
    { id: 100013, item: 'Bathroom Accessories-Stainless', name: 'Hindware Bathroom Accessories-Stainless Steel 304 Grade Folding Towel Rack for Bathroom', store: 'Hindware', price: 1722, reviews: 132, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Arena stainless steel folding', discountableprice: 3499, warrenty: 1.5, availability: 'Unavailable', brand: 'Hindware', color: 'Chrome', itemweight: '1.5 Kilograms', material: 'Stainless Steel', SpecialFeature: 'Polished', About: '•Premium Stainless Steel Construction: The Hindware Bathroom Accessories Folding Towel Rack is crafted from high-quality 304-grade stainless steel, ensuring not only a sleek and modern appearance but also durability and resistance to corrosion in the bathroom environment. • Space-Saving Folding Design: Featuring a practical folding mechanism, this towel rack optimizes space utilization. When not in use, simply fold it away to create more room in your bathroom. This design is especially convenient for bathrooms with limited space. •Versatile Towel Storage: With multiple bars, this rack provides ample space for hanging and drying towels. The thoughtful design allows you to neatly organize towels of various sizes, keeping your bathroom tidy and well-ordered. • Sleek and Modern Aesthetic: The contemporary design of the stainless steel towel rack adds a touch of elegance to your bathroom decor. The polished finish not only enhances its visual appeal but also makes it easy to clean and maintain, ensuring long-lasting beauty. • Easy Installation and Stability: The Hindware Folding Towel Rack comes with straightforward installation instructions, making it easy to set up. The sturdy construction ensures stability when towels are hung, providing a reliable and convenient storage solution for your bathroom.' },
    { id: 100014, item: 'Hammer', name: 'Buildskill Steel Shaft Hammer 8 Oz - Forged Steel Head for Superior Strength & Durability - Carpenter Tools for Wood Work, Home and Professional, 2 in 1 Combination Claw & Flat Head, 400gm (Pack of 1)', store: 'BUILDSKILL', price: 208, reviews: 1045, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Homdum 13 inch Multipurpose', discountableprice: 648, warrenty: 1, availability: 'available', brand: 'BUILDSKILL', color: 'silver', itemweight: '1.5kg', material: 'Carbon Steel', SpecialFeature: ' Lightweight Yet Strong', About: '•Lightweight Yet Strong - Dont let its weight fool you! This tool retains a robust strength despite its lightweight handle. Its versatility makes it a must-have addition to your kit of hardware tools and wood working tools •Convenience is Key - Our Steel Shaft Hammer comes with a 2-in-1 claw and flat head, making it an all-purpose tool. Truly a fitting addition to your home tools collection or ideal for those in the industrial tools sector • Ergonomic Comfort - The tools handle is ergonomically designed, making continuous use easy and efficient. Its a small hammer that packs a punch, suitable for both home improvements and professional construction tools • Work Friendly Design - Perfect for all tasks, from small home fixes to major construction jobs. Melding comfort with functionality, this hammer is a standout among carpentry tools for wood work. Truly a versatile tool for home and beyond' },
    { id: 100015, item: ' Power Strip', name: 'GM 3060 E-Book 4 + 1 Power Strip Red & White Color 250 Volts with Master Switch, Indicator, Safety Shutter & 4 International sockets, Extension Cord for Home Appliances', store: 'GM', price: 499, reviews: 617898, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Anchor by panasonic 4 way 6A international socket', discountableprice: 1226, warrenty: 1, availability: 'Unavailable', brand: 'GM', color: 'Mulitcolor', itemweight: '120g', material: 'Plastic', SpecialFeature: 'Verstile International sockets ', About: '• Verstile International sockets (with child safety shutter) The safety shutter keeps children safe & also prevents dust from getting into unsend sockets overtime. • 2 Meter Heavy duty cord A special nylon velcro cable tie has been provided on the long power cord for convenience during operation and storage. • Supply Indicator The Spike guard has an LED Supply indicator embedded in the ergonomic design that indicates power status if On/Off. •Novel & Distinctive design Combination of advanced mould design, unique exquisite workmanship & our commitment to perfection have rendered the product its excellent quality. • Safety shutdown technology It has Thermal overload trip to power off your system, which saves all connected devices in the event of a severe over current or when the surge protection is disable. You can press red button to return to safe function mode. Ergonomic design- Adequate space has been provided between the sockets for accommodating plugs of different designs. Suitable for household, office, computer and its Peripherals, DVD, T.V' },

    { id: 100016, item: ' Earphone', name: 'OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life (Jazz Green)', store: 'OnePlus', price: 1499, reviews: 179889, deliveringplace: 'Bengaluru', pincode: 560108, add: '60H Playtime with zen ENC Mic, 10mm Bass Drivers', discountableprice: 4999, warrenty: 1, availability: 'available', brand: 'Oneplus', color: 'Green', itemweight: '250grame', material: 'Metal,Plastic', SpecialFeature: 'Sound Isolation', About: '•A quick 10-minute charge delivers up to 20 hours of immersive audio playback; The flagship-level battery life delivers up to 30 hours of non-stop music on a single charge • A large 12.4 mm bass driver delivers uncompromisingly deep bass for powerful beats. Experience incredibly rich audio detail at every frequency with the titanium coating dome. Codec: Supports AAC and SBC •Anti-distortion audio technology ensures your audio playtime stays silky-smooth. Thanks to the larger sound cavity and industry-leading algorithms, notes remain distortion-free • Water and sweat-resistant, the IP55-rated internals and design ensure your OnePlus Bullets Wireless Z2 stay all-weather ready • Condenser Coil: Copper With Ocean Black Protection prevents From Rust & Corrosion; Increase Durability ; Uninterrupted Cooling ' },
    { id: 100017, item: 'Type C Cable ', name: 'Ambrane Unbreakable 3A Fast Charging 1.5m Braided Type C Cable for Smartphones, Tablets & other Type C devices, 480Mbps Data Sync, Quick Charge 3.0 (RCT15A, Black)', store: 'Ambrane', price: 179, reviews: 69174, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Wayona USB C to USB C 65W Fast charging', discountableprice: 1099, warrenty: 1, availability: 'available', brand: 'Ambrane', color: 'Black', itemweight: '50grame', material: 'Copper', SpecialFeature: 'Braided, Data Transfer, Tangle Free, Waterproof, Fast Charging', About: '• 3A Fast Charging - Delivers 3A fast charging and 480 Mbps data transfer speed. • Quick Charge 2.0/ 3.0 - Supports Quick Charge (QC) 2.0/3.0 to deliver rapid charging speed. • Wide Compatibility - It is compatible with all Type-C enabled devices including Android smartphones, tablets and PC peripherals. • Unbreakable - Made of special braided outer with rugged interior bindings, it is an ultra-durable cable that won’t be affected by daily rough usage. • Ideal Length - It has an ideal length of 1.5 meters which is super convenient to use. • Made in India - This product is Made in India at the Ambrane’s manufacturing facility in Haryana. • Special Features: Gold Fin+ - Increase durability, Ocean black protection, Ez Clean Filter, Low gas detection, 100% Copper Condensor, 6 Fan Speed steps; Hi grooved Copper; Smart Diagnosis System, Comfort Air, Monsoon Comfort/Fresh Dry, Auto Clean, Mute, On/ Off Timer, Sleep Mode, Auto Restart (Memory), On/Off Indicator, Dehumidifier' },
    { id: 100018, item: 'Back Cover', name: 'Spigen Ultra Hybrid Back Cover Case Compatible with Galaxy S23 Ultra (TPU + Poly Carbonate | Zero One)', store: 'Spigen', price: 1614, reviews: 6629, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Dailyobjects Polycarbonate  Beam', discountableprice: 2500, warrenty: 1, availability: 'available', brand: 'Spigen', color: 'Zero one', itemweight: '100grame', material: 'Polycarbonate, Thermoplastic', SpecialFeature: '  Licensed under Samsung', About: '• [Compatibility] Spigen Genuine Case Compatible with Galaxy S23 Ultra •[Licensed Product] Licensed under Samsung Mobile Accessory Partnership Program • [Material] Hybrid structure of PC (Poly Carbonate) and TPU • [Modern Design] Sophisticated design that perfectly uses the advantage of the scratch-resistant PC plate and the flexible TPU • [Protection] Edge protection through air cushion technology' },
    { id: 100019, item: ' Power Bankt', name: 'Ambrane 10000mAh Slim Power Bank, 20W Fast Charging, Dual Output, Type C PD (Input & Output), Quick Charge, Li-Polymer, Multi-Layer Protection for iPhone, Anrdoid & Other Devices (Stylo 10K, Blue)', store: 'Ambrane', price: 799, reviews: 17346, deliveringplace: 'Bengaluru', pincode: 560108, add: 'Amazone Basics 10000 mah Lithium Battery', discountableprice: 2799, warrenty: 1, availability: 'available', brand: 'Ambrane', color: 'blue', itemweight: '700grame', material: 'Aluminium,Copper', SpecialFeature: 'Fast Charging, LED Indicator Lights, Short Circuit Protection, Over Charging Protection, Slim', About: '• 20W Fast Charging Output– Powerful 20 Watts PD and QC output for boosted charging speed, so that you always stay ahead in the league. It carries an extensive capacity to charge your mobile 50% in as quickly as 30 minutes on average •Power-packed 10000mAh- Lithium Polymer 10000mAh capacity allows you to efficiently charge your devices multiple times. Suitable for Smartphones, tablets, Earbuds and other electronic devices. • Quick Charge 3.0 & Power Delivery Technology - 20W Fast Charging Input – The powerbank itself can get charged in 4 to 5 hours as it has Power Delivery Technology which supports 20W fast charging input via Type C port. • Input: 20W Type C - Charge Multiple Devices – With 1 USB port and 1 Type C port for output, it can charge 2 devices at the same time. • Sleek and Stylish- Supremely modish and handy design makes it a style statement while its compact body makes it extremely travel-friendly at the same time.' },
  ]
  product={
    top:[{
      id:1,
      name:"id-15",
      price:29999,
      titel:'home interior '

    },
    {
      id:2,
      name:"id-16",
      price:19999,
      titel:'Figurines '

    },
    {
      id:3,
      name:"id-17",
      price:1999,
      titel:'Home storage '

    },{
      id:4,
      name:"id-18",
      price:5999,
      titel:'Lighting solutions'

    },
    ],
    first:[{
      id:5,
      name:"id-19",
      price:29999,
      titel:'Hp Wired'

    },
    {
      id:6,
      name:"id-20",
      price:19999,
      titel:'ZEBRONICS '

    },
    {
      id:7,
      name:"id-21",
      price:1999,
      titel:'boAt'

    },{
      id:8,
      name:"id-22",
      price:5999,
      titel:'boAt'

    },
    ],
    second:[{
      id:9,
      name:"id-23",
      price:29999,
      titel:'Samsung'

    },
    {
      id:10,
      name:"id-24",
      price:19999,
      titel:'Redmi'

    },
    {
      id:11,
      name:"id-25",
      price:1999,
      titel:'OnePlusNor'

    },{
      id:12,
      name:"id-26",
      price:5999,
      titel:'iQOOZ9'

    },
  ],
  third:[{
      id:13,
      name:"id-27",
      price:29999,
      titel:'Bedsheets'
    },
    {
      id:14,
      name:"id-28",
      price:2599,
      titel:'Curtains'
    },
    {
      id:15,
      name:"id-29",
      price:1599 ,
      titel:'Bedsheets'
    },{
      id:16,
      name:"id-30",
      price:2599,
      titel:'Curtains'
    },],
    fifth:[{
      id:13,
      name:"id-39",
      price:29999,
      titel:'Bedsheets'
    },
    {
      id:14,
      name:"id-40",
      price:2599,
    },
    {
      id:15,
      name:"id-41",
      price:1599 ,
      titel:'Bedsheets'
    },{
      id:16,
      name:"id-42",
      price:2599,
      titel:'Curtains'
    },
    ],
    sixth:[{
      id:13,
      name:"id-36",
      price:29999,
      titel:'ArtX Paper Madhubani Art Paintings with Frame for Home Decor, Wall Painting for Living Room, Multicolor, Natural Wood Color Frames, Set of 4'
    },
    ], 
    sevnth:[{
      id:13,
      name:"id-37",
      price:29999,
      titel:'The Castle Decor Golden Deer Wall Painting for Living Room, Bedroom, Hotels - Big Size Wooden Framed 27x48 Stunning Wall Art for Home Decoration, Perfect Wall Decor for Living Rooms and Bedrooms.'
    },
    ],
    eith:[{
      id:13,
      name:"id-38",
      price:29999,
      titel:'kotart Premium Digital Madhubani Art Paintings with Frame for Home Decor - Framed Painting for Living Room Bedroom Office Room Decor - Painting for Wall Decoration - Pack of 6 (10X13, A)'
    },
    ]
  }
  constructor() { }

  sendata(_p0: string):any{
    return this.productdetails
  }
  grtproduct(){
    return this.product
  }


  details(id:string){
    return null
  }

  getdata() {
    for (let i = 0; i < this.productdetails.length; i++) {
      const item = this.productdetails[i];
      this.flatobj[`id_${item.id}`] = item;
    }
    return this.flatobj;
  }

 returnData(id: any) {
  return this.productdetailss.id_123
}

private cartItems: any[] = [];


getCartItems() {
  return this.cartItems;
}
buynowdata(data:any){
  const buydata=data;
  localStorage.setItem('buynowdata',JSON.stringify(buydata))

}
productdetailsss(id:any){
return null
}
// details(id:string){
//   return null
// }


 }


