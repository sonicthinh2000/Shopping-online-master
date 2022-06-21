'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [{
                name: "Apple iPhone 13",
                price: 23490000,
                imagepath: "../img/products/1.jpg",
                thumbnailpath: '../img/products/1.jpg',
                categoryId: 1,
                brandId: 1,
                availability: true,
                sumary: "Apple iPhone 13 Pink 256GB",
                description: `
                RAM 4 GB
                Screen size 6.1 inch
                OLED screen technology
                Resolution 2532 x 1170 Pixels
                Standard Super Retina XDR . display
                Screen Color 16 Million
                60 Hz . refresh rate
                Ceramic Coated Glass Material
                Multi-touch Capacitive touch type
                Aspect Ratio 19.5:9
                Apple GPU 5-core GPU
                256 GB internal memory
                Stored Contacts Depends on memory
                External memory card No`,
                overallReview: 5,
                reviewCount: 2
            },
            {
                name: "Masstel Tab 10A",
                price: 2989000,
                imagepath: "../img/products/2.jpg",
                thumbnailpath: '../img/products/2.jpg',
                categoryId: 1,
                brandId: 2,
                availability: true,
                sumary: "Tablet Masstel Tab Blue 10A 3GB/32GB",
                description: `
                Masstel Tab 10A 3GB/32GB Tablet - Genuine Product
                Package includes: Machine with battery, charger, USB Type-C cable, warranty card, leather case, manual, box.    
                Sharp screen, top entertainment
                - The device owns a 10.1-inch screen, 16:10 ratio optimal for all learning or entertainment activities, with a resolution of 1280 x 800 pixels with 16.7 million colors, IPS technology for accurate colors, brightness. High contrast and good contrast so you can freely study, work or watch movies.
                5 MP selfie camera
                - The highlight that Masstel Tab 10A brings is the selfie camera of the device with a resolution of up to 2 MP to help you always have beautiful selfie photos regardless of day or night.
                - The main camera of the device has a resolution of 5MP, helping you to save beautiful moments.
                Smoothly play the most popular games
                - Masstel Tab 10A has been upgraded to MediaTek MT8765WA processor, for stable processing speed, smooth running of all popular applications you need on a cheap tablet.`,
                overallReview: 4.5,
                reviewCount: 2
            },
            {
                name: "Laptop Lenovo 100e Gen 2 N4020",
                price: 5890000,
                imagepath: "../img/products/3.jpg",
                thumbnailpath: '../img/products/3.jpg',
                categoryId: 1,
                brandId: 3,
                availability: false,
                sumary: "Laptop Lenovo 100e Gen 2 N4020/4GB/64GB eMMC/Intel UHD Graphics 600/11.6'HD/Win 10 Pro",
                description: `
                Lenovo 100e Gen 2 is a compact, durable, very cheap laptop, built to suit students' online learning activities.
                With a screen of only 11.6 inches, the Lenovo 100e Gen 2 is extremely compact when the size is only equivalent to a book. Students can put laptops in their school bags or backpacks easily. 
                The weight of the machine is also very impressive with a weight of 1.21kg, very light to move.
                Lenovo 100e Gen 2 comes pre-installed with the copyrighted Windows 10 operating system, with optimal configuration for learning activities. 
                Intel Celeron N4020 processor with 2 cores and 2 threads runs well for office applications, online learning. The laptop is also available with 4GB of DDR4 RAM and 64GB of eMMC internal memory, enough for school activities.`,
                overallReview: 4.5,
                reviewCount: 2
            },
            {
                name: "iMac M1",
                price: 35900000,
                imagepath: "../img/products/4.jpg",
                thumbnailpath: '../img/products/4.jpg',
                categoryId: 1,
                brandId: 4,
                availability: true,
                sumary: "iMac blue wifi 6 (24-inch, M1)",
                description: `
                24-inch Retina 4.5K display (2) with P3 wide color gamut and 500 nit . brightness
                Apple M1 chip delivers powerful performance with 8-core CPU and 7- or 8-core GPU
                Impressively thin 11.5mm design with vibrant colors
                1080p FaceTime HD camera with M1 ISP for impressive video quality
                Triple array of studio-grade microphones for crystal-clear calls and recordings
                Six-speaker sound system for an impressively powerful and high-quality sound experience
                Super-fast SSD storage up to 512GB
                Two Thunderbolt/USB ports and up to two USB ports
                Super-fast Wi-Fi 6 and Bluetooth 5.0 wireless technology
                Perfect color matching between Magic Mouse and Magic Keyboard or Magic Keyboard and Touch ID
                macOS has an impressive design, is easy to use, and blends seamlessly with iPhone
                Available in blue, green, pink, silver, yellow, orange and purple`,
                overallReview: 4.5,
                reviewCount: 2
            },
            {
                name: "Audio Bluetooth Microlab M108-BT",
                price: 665000,
                imagepath: "../img/products/5.jpg",
                thumbnailpath: '../img/products/5.jpg',
                categoryId: 1,
                brandId: 5,
                availability: true,
                sumary: "Audio Bluetooth Microlab 11W 70dB 50Hz M108-BT",
                description: `
                Microlab M108-BT Bluetooth Speaker - Genuine Product is designed with a beautiful and luxurious monolithic design. With a size that is not too large, you can easily place it in many different locations at work or at home.
                The product has a 2.1 speaker system to help you enjoy completely different sounds than a laptop. In addition to enjoying music, you can play games, watch with the best sound.`,
                overallReview: 4.5,
                reviewCount: 2
            },
            {
                name: "Webcam Logitech C920 Pro",
                price: 2180000,
                imagepath: '../img/products/6.jpg',
                thumbnailpath: '../img/products/6.jpg',
                categoryId: 1,
                brandId: 6,
                availability: false,
                sumary: "Webcam Logitech C920 Pro Full HD 1080p 30FPS - double micro",
                description: `
                Webcam Logitech C920 (HD) is no different from phones with high-resolution cameras. With images up to 8.0MP resolution, you can take high-quality selfies or full HD movies.
                The Logitech C920 features a 360-degree swivel design that makes it easy to position the cameras at multiple angles. At the same time, you can fold the device easily when you take it with you and use it.
                You can use the C920 as an 8.0MP camera to capture great moments with family and friends. You can also record movies in Full HD 1080p resolution. With fullHD resolution, you will have realistic images when using.`,
                overallReview: 4,
                reviewCount: 2
            },
            {
                name: "Computer Monitor Dell E2420H",
                price: 4285000,
                imagepath: '../img/products/7.jpg',
                thumbnailpath: '../img/products/7.jpg',
                categoryId: 1,
                brandId: 7,
                availability: false,
                sumary: "Computer Monitor Dell E2420H 23.8 inch/ Full HD/ 60 Hz/ 8 ms",
                description: `
                Display color 16.7 million colors
                Dell brand
                Made in the US brand
                Connections 1 x DisplayPort 1.2 , 1 x VGA/D-sub
                Brightness 250cd/m2
                Contrast 1,000:1
                Viewing Angle 178°(H)/178°(V)
                Accessories included
                Power Cable, Display Port Cable
                Model E2420H
                Full HD display
                Made in China
                Weight 7
                Response time 8 ms
                16:9" aspect ratio`,
                overallReview: 4,
                reviewCount: 2
            },

            {
                name: "Men Stay Simplicity - Acne Relief Skincare TriO",
                price: 570000,
                imagepath: '../img/products/8.jpg',
                thumbnailpath: '../img/products/8.jpg',
                categoryId: 2,
                brandId: 8,
                availability: true,
                sumary: "Men's acne skin care set Men Stay Simplicity - Acne Relief Skincare TriO",
                description: `
                CLEAN greasy, reduce acne with 10 MINUTES a day with the set of 3 Men Stay Simplicity Acne Relief Trio products
                Just follow 3 simple and quick steps, you will immediately have healthy skin, reduce acne, clean and confident.
                Skin Type: For oily & acne-prone skin
                Uses:
                Brighten skin, moisturize day and night
                Oil control, reduce dry skin
                Soothes irritated acne skin and reduces the risk of acne coming back
                How to use:
                1. Please wash your face with Cleanser and pat dry
                2. Then the serum is applied to the acne spots
                3. Apply moisturizer evenly on face and neck. Handsome after 3 minutes. Use twice daily morning and evening.`,
                overallReview: 4.5,
                reviewCount: 2
            },
            {
                name: "LaMeiLa 13-piece makeup set",
                price: 328000,
                imagepath: '../img/products/9.jpg',
                thumbnailpath: '../img/products/9.jpg',
                categoryId: 2,
                brandId: 9,
                availability: true,
                sumary: "LaMeiLa 13-Piece Makeup Set BB Cream+Powder Powder+Eyeshadow+Brow Pencil+Eyeliner+Mascara+Twin-Contour Pen+Matte Lipstick+Blush Blush+eyelash curler+Brow Trimmer+Brush Set Makeup + Concealer full set makeup",
                description: `
                LaMeiLa 13-piece professional makeup set
                Make-up setImages full from a to z for you to easily complete the makeup steps
                BB cream moisturizing and concealer
                Contour and highlighter pens
                Natural color oil-control pressed powder
                Mascara long and curled
                Eyeliner marker
                Eyebrow pencil
                Lameila eyeshadow palette 16 trendy colors
                Lameila two-color blush
                Super smooth moisturizing lipstick
                Concealer
                Makeup brush 5 pieces
                Curler Eyelashes
                Eyebrow trimmer`,
                overallReview: 4,
                reviewCount: 1
            },
            {
                name: "ENERGY BEAUTY BAR ENERGY MASSAGE MACHINE - B0008",
                price: 55000,
                imagepath: '../img/products/10.jpg',
                thumbnailpath: '../img/products/10.jpg',
                categoryId: 2,
                brandId: 10,
                availability: false,
                sumary: "energy beauty bar energy massage machine - B0008",
                description: `
                Energy Beauty Bar facial massage machine with the function of promoting facial blood circulation and metabolism to help improve natural sodium phenomena, such as flabby skin, fine lines, wrinkles, puffiness under the eyes due to age
                - Popular in Japanese, Korean and European markets
                - Gold plated and crafted in bronze
                - Anti-aging, anti-wrinkle
                Function:
                1. Promotes effective absorption of Maquillage and sweeps away keratin secretions
                2. Accelerate aging and strengthen immunity.
                3. Promote facial blood circulation and metabolism should slack and improve the natural sodium phenomenon, such as flabby skin, wrinkles, splashes, puffiness under the eyes and grafts under the chin due to age.`,
                overallReview: 4,
                reviewCount: 2
            },
            {
                name: "Man's Bath And Body Works Noir",
                price: 279000,
                imagepath: '../img/products/11.jpg',
                thumbnailpath: '../img/products/11.jpg',
                categoryId: 2,
                brandId: 11,
                availability: true,
                sumary: "Bath And Body Works Noir Men's Shower Gel 295ml",
                description: `
                Scent: The sweetness of vanilla adds the mystery of musk smoke to create a seductive and attractive personality for men. There is a bit of wild, rudimentary smell of musk smoke and black cardamom that makes people pay attention at first contact, then will immediately be attracted by the masculine and dusty nature very fishy. counted in the 2nd and 3rd floor fragrances of this scent.
                Using:
                Wet body skin and hair.
                Dispense an appropriate amount of the product into the palm of your hand or bath sponge.
                Lather & spread evenly all over your body and hair for the product to be absorbed into the skin.
                Then, rinse with clean water and dry with a towel.`,
                overallReview: 3,
                reviewCount: 3
            },
            {
                name: "3 Pack 10ml Travel Glass Roller Bottles Tubes Containers",
                price: 235000,
                imagepath: '../img/products/12.jpg',
                thumbnailpath: '../img/products/12.jpg',
                categoryId: 2,
                brandId: 12,
                availability: false,
                sumary: "3 Pack 10ml Travel Glass Roller Bottles Tubes Containers for Oils Deodorants",
                description: `
                Package Includes:
                18 Pieces Empty Roll on Bottles
                Note:
                Pls allow slight size error and color difference due to manual measurement and different monitors. Thanks.`,
                overallReview: 0,
                reviewCount: 0
            },
            {
                name: "Dana Classic Fragrances Chantilly Eau De Toilette Spray 1.0 Fl",
                price: 1012000,
                imagepath: '../img/products/13.jpg',
                thumbnailpath: '../img/products/13.jpg',
                categoryId: 2,
                brandId: 13,
                availability: false,
                sumary: "Dana Classic Fragrances Chantilly Eau De Toilette Spray 1.0 Fl",
                description: `
                This fragrance is 100% original.
                Chantilly is a refined fragrance and is recommended for evening use. Fragrance Family: Oriental`,
                overallReview: 0,
                reviewCount: 0
            },
            {
                name: "Drypers Drypantz Baby Diapers",
                price: 177000,
                imagepath: '../img/products/14.jpg',
                thumbnailpath: '../img/products/14.jpg',
                categoryId: 3,
                brandId: 14,
                availability: true,
                sumary: "Drypers Drypantz baby diapers L 48 pieces (9 - 14kg)",
                description: `
                Drypantz Drypers L48 Baby Diapers (48 Pieces) is a product born based on the love of parents, who always want their baby to have a lot of health, freedom to operate and develop themselves, without worrying about their buttocks. pretty dirty, wet.
                Inter-locking Fibers (Inter-locking Fibers)
                Soft surface for baby's delicate skin. Keep your baby comfortable and playful.
                The core is super absorbent and enhances absorption and quickly disperses liquid into the absorbent core below, while preventing reflux to keep baby's skin dry and clean.
                The bottom membrane is 100% breathable to help escape steam, keeping your baby cool and dry and minimizing diaper rash.
                Fashionable fit design for maximum freedom of movement.`,
                overallReview: 4,
                reviewCount: 2
            },
            {
                name: "Nutricare Gastro milk powder",
                price: 479000,
                imagepath: '../img/products/15.jpg',
                thumbnailpath: '../img/products/15.jpg',
                categoryId: 3,
                brandId: 15,
                availability: true,
                sumary: "Nutricare Gastro milk powder nutritional medicine for people with gastritis, digestive disorders (900g)",
                description: `
                Nutricare Gastro milk powder is a medical nutritional product for people with gastritis, digestive disorders with nutrients Pylopass and Turmeric curcumin to help protect the stomach comprehensively.
                Currently in the world, 1 in 10 people have stomach disease with the following symptoms: Abdominal pain in the epigastrium; pain when fasting or after eating; belching, heartburn, bloating; nausea, vomiting, reflux.
                Pioneering in research, Nutricare Gastro is a specialized product for people with digestive problems, breakthroughs with Pylopass & Turmeric Curcumin to help reduce stomach and duodenal ulcers.`,
                overallReview: 5,
                reviewCount: 1
            },
            {
                name: "Basketball Suit Tops Shorts for Kids",
                price: 189000,
                imagepath: '../img/products/16.jpg',
                thumbnailpath: '../img/products/16.jpg',
                categoryId: 3,
                brandId: 16,
                availability: true,
                sumary: "English Letters Printing Basketball Suit Tops Shorts for Kids Boys Girls Sports Wear",
                description: `
                Product type: clothes
                Applicable gender: neutral/male or female
                Color: white, yellow, purple
                Size: 95(3XS),length,45cm(17.7inch),Bust,70cm(27.5inch),Pants length,30cm(11.8inch),Age,2-3Y
                105(2XS),length,47cm(18.5inch),Bust,73cm(28.7inch),Pants length,32cm(12.6inch),Age,3-4Y
                115(XS),length,50cm(19.7inch),Bust,76cm(29.9inch),Pants length,34cm(13.4inch),Age,5-6Y
                125(S),length,53cm(20.8inch),Bust,80cm(31.5inch),Pants length,36cm(14.2inch),Age,7-8Y
                135(M),length,56cm(22inch),Bust,84cm(33.1inch),Pants length,37cm(14.6inch),Age,9-10Y
                145(L),length,59cm(23.2inch),Bust,88cm(34.6inch),Pants length,39cm(15.3inch),Age,11-12Y
                155(XL),length,62cm(24.4inch),Bust,92cm(36.2inch),Pants length,42cm(16.5inch),Age,13-14Y
                Fabric composition: polyester fiber (dacron)
                Packing list:
                1 x Sports tops+1 x Shorts`,
                overallReview: 5,
                reviewCount: 3
            },
            {
                name: "Grasp Wooden Puzzle Toy Alphabet Digit Learning",
                price: 130000,
                imagepath: '../img/products/17.jpg',
                thumbnailpath: '../img/products/17.jpg',
                categoryId: 3,
                brandId: 17,
                availability: true,
                sumary: "Kid Early Educational Toys Hand Grasp Wooden Puzzle Toy Alphabet Digit Learning Wood Jigsaw Toy",
                description: `
                Product category: wood jigsaw toy
                Wooden block type: building block
                Paint material: water-based environmental protection paint
                Net weight of building blocks: 0.4KG
                Material: wood
                The number of blocks (pieces): 0-38 tablets (slices)
                Specification: 30x22.2cm
                Packaging: plastic sealing
                Include:
                1 x wood jigsaw toy`,
                overallReview: 3,
                reviewCount: 3
            },
            {
                name: "Cetaphil Baby Body Wash & Shampoo",
                price: 155000,
                imagepath: '../img/products/18.jpg',
                thumbnailpath: '../img/products/18.jpg',
                categoryId: 3,
                brandId: 18,
                availability: true,
                sumary: "Cetaphil Baby Body Wash & Shampoo 2 in 1 230ml",
                description: `
                Cetaphil Baby 2 In 1 Body Wash (230ml) with natural ingredients, especially Organic Calendula extracted from organic chrysanthemums, does not cause irritation, suitable for baby's sensitive skin.
                The nutrients that penetrate into the skin will provide moisture without drying the skin, make the scalp healthy and hair soft, and leave the baby's skin feeling smooth and soft, along with antibacterial properties that have an anti-inflammatory effect. bacteria attack the baby's skin.
                Has good antibacterial properties, against the symptoms of redness, heat rash, itching and diaper rash. Non-irritating with mild fragrance and gentle foaming, non-irritating for all skin types, including baby's sensitive skin.`,
                overallReview: 3,
                reviewCount: 3
            },
            {
                name: "Young Toys - Mini Tobot Vulcan",
                price: 337000,
                imagepath: '../img/products/19.jpg',
                thumbnailpath: '../img/products/19.jpg',
                categoryId: 3,
                brandId: 19,
                availability: false,
                sumary: "Young Toys - Mini Tobot Vulcan",
                description: `
                Young Toys - Mini Tobot Vulcan is a miniature of Tobot Vung's version that has been tweaked to make the perfect transformation into a robot as easy as possible. With this size, it is suitable for playing and carrying outside, even for small children.
                With different assembly details for children to freely assemble. The model set with bright red vividly creates more inspiration for young children to play. The model can be left in the box and stored neatly or displayed in the corner of the room.
                This Tobot model will be an interesting gift for children, training them ingenuity and using their thinking ability thoroughly. Through the process of playing and role-playing, your baby will make the most of his rich imagination.
                Models with assembly details are all made from high-quality ABS and PP plastic, undergo a strict production process, absolutely do not contain harmful chemical ingredients, ensuring safety for children.`,
                overallReview: 0,
                reviewCount: 0
            },
            {
                name: "Coca-Cola Beverage",
                price: 55000,
                imagepath: '../img/products/20.jpg',
                thumbnailpath: '../img/products/20.jpg',
                categoryId: 4,
                brandId: 20,
                availability: true,
                sumary: "Lot of 6 Cans of Coca-Cola Beverage Original Original 320mlx6",
                description: `
                Coca-Cola brand
                Origin of Vietnamese brand
                Capacity 320ml/can
                Size 18x12x15cm
                Note
                Product packaging may change from batch to batch
                Made in Viet Nam
                Weight 2kg
                Packing Specifications Lot`,
                overallReview: 3,
                reviewCount: 4
            },
            {
                name: "Baltisky Nevod canned",
                price: 48000,
                imagepath: '../img/products/21.jpg',
                thumbnailpath: '../img/products/21.jpg',
                categoryId: 4,
                brandId: 21,
                availability: false,
                sumary: "Baltisky Nevod canned",
                description: `
                Tuna is made from the meat of fresh tuna fish caught from the delicious Baltic Sea, preserving the nutritional content of the fish.
                Fat, omega 3, vitamin B12, vitamin B6, magnesium, selenium, phosphorus, DHA, protein... these are all essential and good nutritional ingredients for human health.
                Uses: Tuna contains fat, omega 3, vitamin B12, vitamin B6, DHA, protein... these are all essential and good nutritional ingredients for human health.`,
                overallReview: 2,
                reviewCount: 1
            },
            {
                name: "Insulation wooden pads",
                price: 9400,
                imagepath: '../img/products/22.jpg',
                thumbnailpath: '../img/products/22.jpg',
                categoryId: 4,
                brandId: 22,
                availability: true,
                sumary: "Insulation wooden pads for dining tables, kitchens",
                description: `
                OEM brand
                Origin of Vietnamese brand
                Made in Viet Nam
                15cm . diameter`,
                overallReview: 3,
                reviewCount: 1
            },
            {
                name: "20PCS Laundry Effervescent Tablets Washing Machine",
                price: 173000,
                imagepath: '../img/products/23.jpg',
                thumbnailpath: '../img/products/23.jpg',
                categoryId: 4,
                brandId: 23,
                availability: false,
                sumary: "20PCS Laundry Effervescent Tablets Washing Machine Effervescent Tablets Cleaner Laundry Deep Cleaning Remove Odor",
                description: `
                OEM brand
                Made in China brand
                Made in China
                Dimensions 12×10×5`,
                overallReview: 4,
                reviewCount: 3
            },
            {
                name: "Halloween clown neck",
                price: 183700,
                imagepath: '../img/products/24.jpg',
                thumbnailpath: '../img/products/24.jpg',
                categoryId: 4,
                brandId: 24,
                availability: false,
                sumary: "Halloween clown neck, pet accessories, holiday decorations",
                description: `
                Halloween is coming, why does the host not buy me a gift, I also want to spend Halloween with the host, I hope I also have Halloween clothes ~our design,thank you!
                Size:
                XS: Chest: 28-32cm, Back Length: 18-22cm
                S: Chest: 36-40cm, Back Length: 23-27cm
                M: Ches: 40-44cm, Back Length: 28-32cm
                L: Chest: 44-48cm, Back Length: 33-37cm
                XL: Chest:52-56cm, Back Length: 38-42cm`,
                overallReview: 3,
                reviewCount: 1
            },
            {
                name: "King's pet dog and cat's food",
                price: 38000,
                imagepath: '../img/products/25.jpg',
                thumbnailpath: '../img/products/25.jpg',
                categoryId: 4,
                brandId: 25,
                availability: true,
                sumary: "King's Pet Chicken Mix Pate 380g can of cat food",
                description: `
                Brand King's Pet
                Origin of Vietnamese brand
                Capacity 500ml
                1 year shelf life
                Made in Viet Nam`,
                overallReview: 4,
                reviewCount: 4
            },
            {
                name: "Green mango - 1kg",
                price: 40000,
                imagepath: '../img/products/26.jpg',
                thumbnailpath: '../img/products/26.jpg',
                categoryId: 4,
                brandId: 26,
                availability: false,
                sumary: "Green mango - 1kg",
                description: `
                Brand: OEM
                Made in Viet Nam
                For fresh produce, the actual weight may vary by about 10%.
                Store in the refrigerator. Can be processed into many rich and diverse dishes.`,
                overallReview: 3,
                reviewCount: 1
            },
            {
                name: "Versatile shelf Vando",
                price: 920000,
                imagepath: '../img/products/27.jpg',
                thumbnailpath: '../img/products/27.jpg',
                categoryId: 5,
                brandId: 27,
                availability: true,
                sumary: "Multi-function shelf for microwave oven stainless steel 304 white anti-rust, heavy duty kitchen shelf VANDO convenient shelves",
                description: `
                Brand: VANDO
                Origin of Vietnamese brand
                Material, substance
                High quality 304 stainless steel, anti-rust
                Storage instructions
                A dry, well-balanced place
                User manual
                Arrange the microwave, oven, kitchen and bathroom items neatly
                Original Stainless Steel Shelves Model
                Size Various sizes: 3 tiers, 4 tiers, 5 tiers
                Made in Viet Nam
                Weight 7-10kg`,
                overallReview: 4,
                reviewCount: 2
            },
            {
                name: "KSEIBI Kit",
                price: 250000,
                imagepath: '../img/products/28.jpg',
                thumbnailpath: '../img/products/28.jpg',
                categoryId: 5,
                brandId: 28,
                availability: false,
                sumary: "KSEIBI 145065 Kit includes 26 High Quality Steel Detail Tools",
                description: `
                Brand name KSEIBI
                User manual
                Making the repair and installation, etc. of equipment and machines easy, fast and convenient.
                Model KSEIBI 145065
                Dimensions 32 x 23 x 8 cm
                Note Provide genuine, high-quality products. Make sure the product quality matches the description. 100% real pictures
                Made in China
                Weight 1.6 Kg
                Packing
                Packed by Pure Plastic box`,
                overallReview: 0,
                reviewCount: 0
            },
            {
                name: "Cotton Korea Bed Sheet And Pillowcase Set ADU79",
                price: 117000,
                imagepath: '../img/products/29.jpg',
                thumbnailpath: '../img/products/29.jpg',
                categoryId: 5,
                brandId: 29,
                availability: true,
                sumary: "Korea ADU79 Cotton Bed Sheet And Pillowcase Set Full Size Mattress 1m4, 1m6, 1m8 Excluding Blanket",
                description: `
                OEM brand
                Origin of Vietnamese brand
                Capacity 500ml
                Made in Viet Nam`,
                overallReview: 4.5,
                reviewCount: 2
            },
            {
                name: "11Pcs Wall Hanging Photo Frame Set Family Picture",
                price: 529000,
                imagepath: '../img/products/30.jpg',
                thumbnailpath: '../img/products/30.jpg',
                categoryId: 5,
                brandId: 30,
                availability: true,
                sumary: "11Pcs Wall Hanging Photo Frame Set Family Picture Display Modern Art Home Decor For Hallway Bedroom Living Room Wall Decoration",
                description: `
                OEM brand
                Made in China brand
                Made in China
                Size 8pcs A Size: 5'' -- 8.8 x 12.8cm 3pcs B Size: 7'' -- 12.8 x 17.8cm`,
                overallReview: 3,
                reviewCount: 4
            },
            {
                name: "Deli pastel spring notebook",
                price: 33000,
                imagepath: '../img/products/31.jpg',
                thumbnailpath: '../img/products/31.jpg',
                categoryId: 5,
                brandId: 31,
                availability: true,
                sumary: "Deli pastel spring notebook - 80-page horizontal lined paper A5/B5 size",
                description: `
                Brand Deli
                Made in China
                Page number 80
                Made in China brand`,
                overallReview: 3,
                reviewCount: 5
            },
            {
                name: "Guitar Acoustic HT Music",
                price: 1450000,
                imagepath: '../img/products/32.jpg',
                thumbnailpath: '../img/products/32.jpg',
                categoryId: 5,
                brandId: 32,
                availability: true,
                sumary: "Guitar Acoustic HT Music Black size 40",
                description: `
                OEM brand
                Origin of Vietnamese brand
                Made in Viet Nam
                Weight 1kg`,
                overallReview: 5,
                reviewCount: 2
            },
            {
                name: "Laundry Basket Clothes Hamper",
                price: 139000,
                imagepath: '../img/products/33.jpg',
                thumbnailpath: '../img/products/33.jpg',
                categoryId: 5,
                brandId: 33,
                availability: false,
                sumary: "Household Laundry Hamper Laundry Basket Clothes Hamper for Storage Clothes",
                description: `
                Made in China brand
                Made in China
                OEM brand`,
                overallReview: 3,
                reviewCount: 1
            },
            {
                name: "V-neck Plus Size Top Shirt",
                price: 283000,
                imagepath: '../img/products/34.jpg',
                thumbnailpath: '../img/products/34.jpg',
                categoryId: 6,
                brandId: 34,
                availability: true,
                sumary: "2021 Women Vintage Three Quarter Lace V-neck Plus Size Top Shirt Blouse Top Femme Women's Clothing",
                description: `
                OEM brand
                Made in China brand
                Made in China`,
                overallReview: 5,
                reviewCount: 2
            },
            {
                name: "Men's Clothing Sets Sweatshirts Jogger Pants",
                price: 109000,
                imagepath: '../img/products/35.jpg',
                thumbnailpath: '../img/products/35.jpg',
                categoryId: 6,
                brandId: 35,
                availability: true,
                sumary: "Men's Clothing Set Sweatshirt Jogger Bo Bear Sports Style Fashion Zenkonu",
                description: `
                Made in Viet Nam
                Origin of Vietnamese brand
                OEM brand`,
                overallReview: 5,
                reviewCount: 3
            },
            {
                name: "Men's kaki jacket",
                price: 285000,
                imagepath: '../img/products/36.jpg',
                thumbnailpath: '../img/products/36.jpg',
                categoryId: 6,
                brandId: 36,
                availability: true,
                sumary: "Men's khaki jacket with many pockets, high quality khaki quality, no ruffled color, Ulzzang jacket style",
                description: `
                khaki material
                Made in Viet Nam
                Origin of Vietnamese brand
                OEM brand`,
                overallReview: 4,
                reviewCount: 2
            },
            {
                name: "sweater in ST06",
                price: 110000,
                imagepath: '../img/products/37.jpg',
                thumbnailpath: '../img/products/37.jpg',
                categoryId: 6,
                brandId: 37,
                availability: true,
                sumary: "sweater in ST06",
                description: `
                Made in Viet Nam
                Origin of Vietnamese brand
                OEM brand`,
                overallReview: 5,
                reviewCount: 1
            },
            {
                name: "Cela Dress",
                price: 139000,
                imagepath: '../img/products/38.jpg',
                thumbnailpath: '../img/products/38.jpg',
                categoryId: 6,
                brandId: 38,
                availability: true,
                sumary: "Women's short sleeve Cela Dress fashion XIXO - DAM0047",
                description: `
                Chất liệu	Thun
                Xuất xứ	Việt Nam
                Xuất xứ thương hiệu	Việt Nam
                Thương hiệu	XIXO`,
                overallReview: 4,
                reviewCount: 2
            },
            {
                name: "Domba Shoes Black",
                price: 799000,
                imagepath: '../img/products/39.jpg',
                thumbnailpath: '../img/products/39.jpg',
                categoryId: 6,
                brandId: 39,
                availability: true,
                sumary: "Domba Shoes Black",
                description: `
                Made in China
                Synthetic leather material
                Model H-9111
                Origin of Korean brand
                Brand DOMBA`,
                overallReview: 5,
                reviewCount: 2
            },
            {
                name: "Men's short",
                price: 31000,
                imagepath: '../img/products/40.jpg',
                thumbnailpath: '../img/products/40.jpg',
                categoryId: 6,
                brandId: 40,
                availability: true,
                sumary: "Men's Shorts, Shorts, Sports Good Quality Fabric Cool Summer",
                description: `
                Made in China
                Made in China brand
                OEM brand`,
                overallReview: 3,
                reviewCount: 4
            },
            {
                name: "Men's shoes running shoes",
                price: 159000,
                imagepath: '../img/products/41.jpg',
                thumbnailpath: '../img/products/41.jpg',
                categoryId: 7,
                brandId: 41,
                availability: true,
                sumary: "Men's running shoes durable fashion PETTINO- PZS03",
                description: `
                Brand Pettino
                Origin of Vietnamese brand
                Model PZS03`,
                overallReview: 3,
                reviewCount: 2
            },
            {
                name: "Women's sports shoes",
                price: 129000,
                imagepath: '../img/products/42.jpg',
                thumbnailpath: '../img/products/42.jpg',
                categoryId: 7,
                brandId: 42,
                availability: true,
                sumary: "Women's sports shoes, women's lace-up sneakers V202",
                description: `
                Origin of Vietnamese brand
                OEM brand`,
                overallReview: 4,
                reviewCount: 2
            },
            {
                name: "Roller Road Drift Skates",
                price: 394000,
                imagepath: '../img/products/43.jpg',
                thumbnailpath: '../img/products/43.jpg',
                categoryId: 7,
                brandId: 43,
                availability: true,
                sumary: "Roller Road Drift Skates Plate Outdoor Split Skateboard",
                description: `
                OEM brand
                Made in China brand
                Made in China`,
                overallReview: 3,
                reviewCount: 1
            },
            {
                name: "Adidas Fitness Yoga Mat",
                price: 738000,
                imagepath: '../img/products/44.jpg',
                thumbnailpath: '../img/products/44.jpg',
                categoryId: 7,
                brandId: 44,
                availability: true,
                sumary: "Adidas Fitness Yoga Mat 7mm ADMT-11014",
                description: `
                Easy to sanitize and clean
                Ideal for ground exercise and gym training
                Lightweight design, tightly rolled for transport and storage
                Ribbed bottom helps grip the floor and reduces movement
                Carpet size: 173 cm x 61 cm x 0.7 cm
                Color : Black (ADMT-11014GR) ; Green (ADMT-11014BL) ; Red (ADMT-11014RD)`,
                overallReview: 4,
                reviewCount: 1
            },
            {
                name: "Training boxing gloves",
                price: 624000,
                imagepath: '../img/products/45.jpg',
                thumbnailpath: '../img/products/45.jpg',
                categoryId: 7,
                brandId: 45,
                availability: true,
                sumary: "Genuine Livepro training boxing gloves SPARRING GLOVES",
                description: `
                Brand: LivePro
                Origin of Vietnamese brand
                Capacity 500ml
                PU leather material
                Made in Viet Nam`,
                overallReview: 3,
                reviewCount: 4
            },
            {
                name: "Diving Propeller WHALE",
                price: 362000,
                imagepath: '../img/products/46.jpg',
                thumbnailpath: '../img/products/46.jpg',
                categoryId: 7,
                brandId: 46,
                availability: false,
                sumary: "Diving Propeller WHALE",
                description: `
                Size reference: XS/M: 4-8 (US) 36-41 (EU) 22-25 (JP); ML/XL: 9-13 (US) 42-47 (EU) 26-29 (JP)
                Sturdy side rails to channel the water pre-bent design for a natural kick
                Soft foot pocket with easy-to-adjust strap
                Soft short blade and elastomer foot pocket able to be put on quickly and easily
                Accommodates 4-5 consecutive sizes and can be worn over thin footwear
                Perfect for snorkeling or swimming`,
                overallReview: 0,
                reviewCount: 0
            },
            {
                name: "Bag of sports accessories football",
                price: 67000,
                imagepath: '../img/products/47.jpg',
                thumbnailpath: '../img/products/47.jpg',
                categoryId: 7,
                brandId: 47,
                availability: true,
                sumary: "Bag of sports accessories football 2022",
                description: `
                Brand: Wika
                Origin of Vietnamese brand
                Capacity 500ml
                Made in Viet Nam`,
                overallReview: 3,
                reviewCount: 4
            }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('Products', data, {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};