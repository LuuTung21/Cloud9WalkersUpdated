const horses = [
    {
        id: 1,
        image: "https://cloud9walkers.com/Diva082318a.jpg",
        name: "Diva",
        price: "$8500",
        description: "5-yr-old blue roan Tennessee Walking Horse mare with excellent bloodlines, sweet disposition, beautiful conformation, the whole world ahead of her. She meets you in the pasture to put her head in the halter, loves people, performs a fun racking gait but will slow down and trail walk, also canter. We have camped with her in TN, KY, TX. She is a spirited, fun ride that takes things in stride, not out looking for scary things. Crosses water, climbs hills, and we are using her to pony the youngsters, as well. She's not lazy and not the horse for someone looking for a mellow horse that you have to kick three times to make go. Pick up the reins, she moves off. Not hard to stop, flexes, moves off leg pressure, sidepasses, pivots, forehand turns. She's always going to be the flashiest horse in the crowd. "
    },
    {
        id: 2,
        image: "https://cloud9walkers.com/Yoder022220b.jpg",
        name: "Yoder",
        price: "$8750",
        description: "Super people oriented, affectionate, sweetheart, gentle 14.2H gaited mule gelding, 7 years old, most people would feel comfortable on him. Will cross obstacles, we have camped with him KY, TN, MS, TX, WY and MT, and he hauls great, ges along with geldings or mares. On our Montana trip, I hauled him in the same compartment with my stallion, tied right next to him and they got along great. He loves to b groomed, fed treats, have his face scratched, ears scratched, and doesn't mind you picking up his feet. Nice easy walk, sweet smooth gait, and a fabulous rocking Quarter Horse type lope."
    },
    {
        id: 3,
        image: "https://cloud9walkers.com/Zip052514a.jpg",
        name: "Zip",
        price: "$6500",
        description: "An extremely lit up 15H 12-yr-old black & white Spotted Saddle Horse gelding with a cute, flashy way of going. He performs a beautiful racking gait, and will also slip into a slow, easy little canter, as well. Zip sits up in the bridle and always looks good under saddle. We have hauled him on many camping trips and even shown him in horse shows, too. We have ridden him in Tennessee, Kentucky, Georgia, South Carolina, Mississippi and Texas. He is trained to stand tied for hours, picket lines, loads, unloads, clips, bathes, ponies from another horse or a 4-wheeler, will pony another horse, does obstacles on the obstacle course, and has been ridden down the side of a busy highway. This kind of horse almost never comes up for sale, but his owner has purchased an RV and now traveling the nation, visiting grandchildren, so he is for sale. Fun horse to ride!"
    },
    {
        id: 4,
        image: "https://cloud9walkers.com/JW071119g.JPG",
        name: "JW",
        price: "$2750",
        description: "Beautifully marked, head full of sense, big boned, wide chest, big rump, one nice Tennessee Walking Horse colt! He is Jackpot's 'uncle', born out of Jackpot's granddam, Kitty. This is going to be one sane, gentle, family-type horse that will be rugged enough for the biggest man, and gentle enough for the youngsters in the family. His markings are so flashy and beautiful, and I particularly love his big bone structure. He will have a beautiful smooth gait with a slow, rocking chair canter. JW already knows how to pick up his feet for hoof cleaning, load in a trailer, walk over obstacles on the obstacle course, be ponied by another horse, be ponied by a 4-wheeler, stand tied while tractors haul round bales by and move dirt, and he has had several baths in his life. He has grown up with cattle, goats, a pig, other horses in a natural environment, crossing creeks and traveling through muddy areas at will. I have hauled him to the vet when I take other horses, just to give him the experience. He is weaned and ready for his new home, and his price includes TWHBEA registration, vaccinations, and negative coggins."
    },
    {
        id: 5,
        image: "https://cloud9walkers.com/Sadie101219a.jpg",
        name: "Sadie",
        price: "$3500",
        description: "Beautiful big-boned, stocky, sweet, four-beat-gaited buckskin tobiano Tennessee Walking Horse mare with excellent bloodlines and natural sure-footed athletic ability. This filly's parents are all proven on the trail and some even in the show ring. No sloppy pacing in her background and you can see in the videos on this page how natural and easy she gaits. Sadie will make a lifetime kind of horse for a family. We have raised her sire, her dam, her grandparents and even great grandparents. She comes with vaccinations, TWHBEA registration, lots of training, including trailer loading, tying, hoof trims, obstacles, exposure to highway traffic, 4-wheelers, tractors, dogs, goats, cattle, and ponying training."
    },
    {
        id: 6,
        image: "https://cloud9walkers.com/Tomahawk021918b.JPG",
        name: "Tomahawk",
        price: "$15,000",
        description: "Smooth, smooth, smooth! Beautiful sorrel roan tobiano spotted saddle horse gelding with the most awesome, perfect four beat gliding gait. He will shake his head and walk like a Walking Horse, and he will rise up in the bridle and float along in a single foot racking gait, as well. Then, there's that nice, easy athletic fairy tale rocking chair canter. Nice, nice horse with his whole life ahead of him! This is a really fun to horse to ride, because he has a very pleasant spirit and he's sure footed, which makes him very dependable in the mountains. Side passes, pivots, forehand turns, has won many pleasure championships in the show ring, including National level, does obstacles, proven on the trails in Kentucky, Tennessee, Texas, at the lake, at the Gulf of Mexico, just a lifetime, bucket list kind of horse."
    },
    {
        id: 7,
        image: "https://www.cloud9walkers.com/JLo092216zb.jpg",
        name: "J-LO",
        price: "$12,500",
        description: "There is absolutely no way to take a bad photo of this classy, stunningly beautiful mare. Everything she does is just gorgeous, whether it's coming in from the pasture in the morning to be haltered and led to breakfast, sailing down the trails through the forest, cantering in the surf at the ocean, high steeping in the shallows at the lake, swimming in the deep, mothering her beautiful filly, or strutiting around an arena carrying our American flag. J-Lo is delightfully spirited and fun to ride, whether english or western. She has excellent bloodlines and has proven herself on the trails, in the show ring and as a wonderful producer and loving mother. She gets along well with others in the pasture, whether geldings or mares or a stallion. Loads, bathes, sidepasses, pviots, forehand turns, canters, racks, does obstacles, knows cattle, dogs, chickens, turkeys, pigs, goats, tractors, 4-wheelers. This mare is just about the prettiest horse anywhere we go, with so much natural presence and pride. A fairy tale beautiful, nice bucket list kind of horse."
    },
    {
        id: 8,
        image: "https://cloud9walkers.com/Sophie122015az.jpg",
        name: "Sophie",
        price: "$9500",
        description: "Classy, Drop Dead Gorgeous Black & White Spotted Tennessee Walking Horse with top bloodlines. Perfect age (7 years old), great size (15.2H). We raised her! We trained her, and we've hauled her across the nation, camping in Texas, Colorado, Montana, Kentucky, Tennessee, Alabama, etc., ridden her in parades, won in horse shows with her, and won at obstacle competitions with her. She has a fabulous head shaking Tennessee Walk, and will also sit up in the bridle and perform a thrilling racking gait. Her canter is the dreamiest rocking chair canter you've ever ridden. She side passes, pivots, forehand turns, backs, and most anyone would feel comforable riding her. She has miles and miles on her odometer yet is a relatively young horse (7 years old) with a lifetime to offer a family or person. We bred her to our stallion and she had a gorgeous filly, which we knew would be spotted because she is homozygous for tobiano, and we look forward to raising and developing her filly (Salsa) to be a great horse like her gorgeous mama!"
    },
    {
        id: 9,
        image: "https://cloud9walkers.com/Elvis031514z.jpg",
        name: "Alen's Painted Desert",
        price: "$15,000",
        description: "Classy, Drop Dead Gorgeous Black & White Spotted Tennessee Walking Horse with top bloodlines. Perfect age (7 years old), great size (15.2H). We raised her! We trained her, and we've hauled her across the nation, camping in Texas, Colorado, Montana, Kentucky, Tennessee, Alabama, etc., ridden her in parades, won in horse shows with her, and won at obstacle competitions with her. She has a fabulous head shaking Tennessee Walk, and will also sit up in the bridle and perform a thrilling racking gait. Her canter is the dreamiest rocking chair canter you've ever ridden. She side passes, pivots, forehand turns, backs, and most anyone would feel comforable riding her. She has miles and miles on her odometer yet is a relatively young horse (7 years old) with a lifetime to offer a family or person. We bred her to our stallion and she had a gorgeous filly, which we knew would be spotted because she is homozygous for tobiano, and we look forward to raising and developing her filly (Salsa) to be a great horse like her gorgeous mama!"
    },
    {
        id: 10,
        image: "https://cloud9walkers.com/JJ110818d.jpg",
        name: "JJ",
        price: "$8500",
        description: "Perfect age, trained so nicely, over 16H tall -- He looks like a draft horse but is gaited and really smooth with a long, silky white mane and tail. He performs a smooth four-beat rack, a nice slow lope. Will get up and go if you ask, but mellow is okay, too. He backs, side passes, pivots, forehand turns, loads, bathes, and is an awesome pony horse for helping us train young colts. You can open and close gates from his back, and he will cross creeks, water obstacles, swim in the lake or ocean, and we have taken in him local parades, as well."
    }
];

class Container {
    constructor() {
        this.imageContent = document.querySelector(".image img");
        this.nameContent = document.querySelector(".name");
        this.priceContent = document.querySelector(".price");
        this.descriptionContent = document.querySelector(".description");


        this.displayHorse = this.displayHorse.bind(this);

        this.displayHorse();

    }
    displayHorse() {
        const urlParams = new URLSearchParams(window.location.search);
        const horseId = urlParams.get("id");

        const horse = horses.find((horse) => horse.id == horseId);

        this.imageContent.src = horse.image;
        this.imageContent.alt = horse.name;
        this.nameContent.textContent = horse.name;
        this.priceContent.textContent = horse.price;
        this.descriptionContent.textContent = horse.description;
    }
}

const mainContainer = new Container();