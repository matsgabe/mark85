const { MongoClient} = require('mongodb')

const mongoUri = 'mongodb+srv://matsgabe:W3b.silva@cluster0.p7mmln3.mongodb.net/markdb?appName=Cluster0'

const client = new MongoClient(mongoUri)

async function connect() {
    client.connect()
    return client.db('markdb')
}

async function disconnect() {
    await client.disconnect()
}

module.exports = { connect, disconnect }