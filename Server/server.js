import express from 'express';
import cors from 'cors';

const server = express();

server.listen(4400, function(){
    console.log('server is successfully running on port 4400')
});

server.use(cors());

let productsJson = [
    {
      image: "../assets/board_birds.jpg",
      title: "Women's Saloman Wonder Snowboard",
      description: "One of Salomon's most versatile boards, the Wonder is designed for maximum performance and playfulness on all terrains, in all conditions. An advanced directional twin shape is built for switch riding, with lengthened contact points for soft snow performance that won't affect handling on groomers.",
      price: "$629.99",
      stock: "10 available"
    },
    {
      image: "../assets/board_burton.jpg",
      title: "Women’s Burton Feelgood Camber Snowboard",
      description: "Backed by Kelly Clark, the women’s Burton Feelgood Snowboard has been the defining force in women’s snowboarding for two decades. The Feelgood boasts a unique shape, matched with positively powerful pop for Ferrari-like handing.",
      price: "$739.99",
      stock: "5 available"
    },
    {
      image: "../assets/board_teal.jpg",
      title: "Women’s Saloman Rumble Fish Snowboard",
      description: "A women’s specific quiver killer blending our most popular powder and freestyle creations. Rock Out Camber delivers versatility in all conditions freestyle, while the directional twin shape provides added buoyancy in deep snow. ABC Wrapper design substitutes traditional materials for bamboo, fusing sustainability and innovation for a lively board.",
      price: "$549.99",
      stock: "3 available"
    }
  
]

server.get('/', (req, res) => {
    res.send(productsJson);
})