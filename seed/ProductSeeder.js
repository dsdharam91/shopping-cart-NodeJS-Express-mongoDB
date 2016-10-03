/**
 * Created by Bonnie on 28/09/16.
 */
var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://www.kimmelorchard.org/img/icon_apple_gala.png',
        title: 'Apple',
        description: 'Awesome!',
        price: 2.99
    }),
    new Product({
        imagePath: 'http://www.greatgrubclub.com/domains/greatgrubclub.com/local/media/images/medium/4_1_1_kiwi.jpg',
        title: 'Kiwifruit',
        description: 'Sweet!',
        price: 3.99
    }),
    new Product({
        imagePath: 'https://carolynncarreno.files.wordpress.com/2009/02/09_08_58-fruit-pineapple_web.jpg',
        title: 'Pineapple',
        description: 'Sour!',
        price: 5.99
    }),

    new Product({
        imagePath: 'http://orig11.deviantart.net/2b08/f/2012/030/6/b/cool_banana_by_kawiko-d4o5ftz.png',
        title: 'Banana',
        description: 'Yellow!',
        price: 1.99
    }),
    new Product({
        imagePath: 'http://www.bonappetit.com/wp-content/uploads/2007/11/ttar_watermelon_01_v_launch.jpg',
        title: 'Watermelon',
        description: 'Big!',
        price: 6.99
    })

];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function (err, result) {
        done ++;
        if (done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
