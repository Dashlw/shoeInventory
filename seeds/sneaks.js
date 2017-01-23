exports.seed = function(knex, Promise) {

    var sneaks = [

        knex('sneaks').insert([{
            sneaker_name: 'Air Force Ones',
            img_url: 'http://news.hiphopearly.com/wp-content/uploads/2015/02/air_force_1_mid_bred.jpg',
            peeps_id: 1
        }, {
            sneaker_name: 'Yeezy',
            img_url: 'https://www.sneakerfreaker.com/wp-content/uploads/2016/10/SNS-YEEZY-AUCTION-2.jpg',
            peeps_id: 1
        }, {
            sneaker_name: 'Jordans',
            img_url: 'http://images.footlocker.com/pi/23581001/zoom/jordan-horizon-mens',
            peeps_id: 2
        }, {
            sneaker_name: 'Nike Air',
            img_url: 'http://defpen.com/wp-content//2014/11/nike-air-max-2015-1.jpg',
            peeps_id: 2
        }, {
            sneaker_name: 'Chucks',
            img_url: 'http://s3.amazonaws.com/rapgenius/Converse-Chuck-Taylor-All-Star-Low-Top-Black--White_p6yx7_640__scale_width.jpg',
            peeps_id: 1
        }])
    ]

    return knex.raw('DELETE FROM sneaks; ALTER SEQUENCE sneaks_id_seq RESTART WITH 6;')
        .then(function() {
            return Promise.all(sneaks);
        })
};
