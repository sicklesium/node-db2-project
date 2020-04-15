
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.integer('vin')
            .unique()
            .notNullable();
        tbl.text('make')
            .notNullable();
        tbl.text('model')
            .notNullable();
        tbl.integer('mileage')
            .notNullable();
        tbl.text('transmissionType')
        tbl.text('statusOfTitle')
    })
};

exports.down = function (knex) {
    return knex.scehma.dropTableIfExists('cars');
};
