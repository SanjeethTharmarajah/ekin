const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Shirts' },
    { name: 'Pants' },
    { name: 'Shoes' },
    { name: 'Kids' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Solo Swoosh (S)',
      category: categories[0]._id,
      description:
        'Premium Essentials T-Shirt has a loose fit for a carefree, comfortable look. Its heavyweight organic cotton fabric feels thick and soft. This product is made from at least 75% organic cotton fibres.',
      image: 'smallshirt.jpg',
      price: 55.99,
      quantity: 100
    },
    {
      name: 'Rise 365 (L)',
      category: categories[0]._id,
      description:
         'This super-soft tee features longer sleeves and dropped shoulders. Combined with a minimal Jumpman woven chest patch, you are lookin n-i-c-e.',
      image: 'largeshirt.jpg',
      price: 69.99,
      quantity: 50
    },
    {
      name: 'Flight Essentials (XL)',
      description:
         'The sweat-wicking Ready Top keeps you fresh for all your fitness activities. Its cut with a relaxed fit with quick-drying, breathable fabric to help you stay cool when your workout heats up. Plus, it has angled sleeves for better movement, whether you are lifting at the gym or stretching outside.',
      image: 'extralargeshirt.jpg',
      category: categories[0]._id,
      price: 79.99,
      quantity: 100
    },
    {
      name: 'Club Fleece (S)',
      category: categories[1]._id,
      description:
        'Ready for cooler weather, the Nike Sportswear Tech Fleece Joggers feature an updated fit perfect for everyday wear. Roomy through the thigh, this tapered design narrows at the knee to give you a comfortable feel without losing the clean, tailored look you love. Tall ribbed cuffs complete the jogger look while a zipped pocket on the right leg provides secure small-item storage and elevates the look.',
      image: 'smallpants.jpg',
      price: 150.99,
      quantity: 50
    },
    {
      name: 'Tech Fleece (L)',
      category: categories[1]._id,
      description:
        'A wardrobe staple, the Nike Sportswear Club Fleece Joggers combine a classic look with the soft comfort of fleece for an elevated, everyday look that you can wear every day.',
      image: 'largepants.jpg',
      price: 159.99,
      quantity: 100
    },
    {
      name: 'Air Max (XL)',
      category: categories[1]._id,
      description:
        'When your daily outings call for preparation, these well-equipped Nike Club cargo trousers give you more pockets to securely stow the extras. We made these from a soft-yet-durable cotton Ripstop fabric in a roomy fit for casual, care-free comfort.',
      image: 'extralargepants.jpg',
      price: 169.99,
      quantity: 50
    },
    {
      name: 'Pegasus Shield (Size:11)',
      category: categories[2]._id,
      description: 'Your workhorse with wings returns to help you push through the rain. A water-repellent finish helps keep you dry while a cosy fleece-like feel on the inside helps keep your feet warm for nasty-weather runs. Rugged traction and 2 Zoom Air units provide grip and soft cushioning, so you can power through the elements.',
      image: '11.jpg',
      price: 229.99,
      quantity: 100
    },
    {
      name: 'Pegasus Trail 4 (Size:12)',
      category: categories[2]._id,
      description:
        'Pegasus Trail 4 GORE-TEX is your running companion for those days when the weather turns. Its waterproof GORE-TEX layer helps keep your feet dry, and less rubber in the outsole creates a smooth transition from road to trail without breaking stride.',
      image: '12.jpg',
      price: 239.99,
      quantity: 100
    },
    {
      name: 'InfinityRN 4 GORE-TEX  (Size:13)',
      category: categories[2]._id,
      description:
        'Nasty weather does not need to put an end to your run. Revel in the elements with these shoes designed to help you push through every puddle, pit stop, pothole and personal record. A water-repellent finish helps keep you dry while tyre-like traction and a full-length Air unit provide grip and soft cushioning to help keep you running when conditions get slick.',
      image: '13.jpg',
      price: 252.99,
      quantity: 50
    },
    {
      name: 'Dri-FIT Academy23',
      category: categories[3]._id,
      description:
        'Turn cooler days into comfy ones with this football drill top. Made for more than just the pitch, this lightweight top keeps you warm without feeling too hot so you can stay in the game.',
      image: 'kid1.jpg',
      price: 112.99,
      quantity: 50
    },
    {
      name: 'ACG Repel',
      description:
        'Going outside? ACG has your go-to top to jump-start any adventure. Wear it as your only layer or first layer under your hoodie and jacket for day hikes, camping and just getting outdoors. The fabric is smooth and stretchy with a slim fit, plus the fabric repels water to help you stay dry.',
      image: 'kid2.jpg',
      category: categories[3]._id,
      price: 129.99,
      quantity: 100
    },
    {
      name: 'Therma-FIT Academy',
      category: categories[3]._id,
      description:
        'Cold weather does not stand a chance against this defence. Insulation at the chest pairs with Nike Therma-FIT technology for added warmth to help stop you from turning into an ice lolly while on the pitch.',
      image: 'kid3.jpg',
      price: 139.99,
      quantity: 50
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Sanjeeth',
    lastName: 'Tharma',
    email: 'sanjeeththarma@gmail.com',
    password: '123456',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Eric',
    lastName: 'Smith',
    email: 'esmith@testmail.com',
    password: '123456'
  });

  console.log('users seeded');

  process.exit();
});
