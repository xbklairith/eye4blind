const NodeCouchDb = require('node-couchdb');
const couch = new NodeCouchDb();
var logger = require('./log')
var exports = module.exports = {};


exports.readDB = function() {
    couch.listDatabases().then(
        dbs => {
            dbs.map(function(x) {
                logger.info(`couchdb has ${x}`);
            });
        },
        err => {});
}



