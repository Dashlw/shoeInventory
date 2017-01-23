var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {

    var peeps = [

        knex('peeps').insert([{
            id: 1,
            name: 'Astro',
            email: 'astro.nomical@aol.com',
            password: bcrypt.hashSync('password', 10)
        }, {
            id: 2,
            name: 'Biggs',
            email: 'biggs.smalls@yaho.com',
            password: bcrypt.hashSync('password', 10)
        }])
    ]

    return knex.raw('DELETE FROM peeps; ALTER SEQUENCE peeps_id_seq RESTART WITH 3;')
        .then(function() {
            return Promise.all(peeps);
        })
};
