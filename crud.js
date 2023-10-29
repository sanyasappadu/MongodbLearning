const { MongoClient } = require('mongodb');

async function main() {
    const url = "mongodb+srv://sunny:sunny@cluster0.icu9qvc.mongodb.net/"
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        // await listDatabases(client);
        // await createListing(client, {
        //     name: 'iphone15',
        //     year: 2023,
        //     price: 80000,
        //     bestFor: "alrounder",
        //     rating: 5
        // })
        // await createMuiltipleListings(client, [
        //     {
        //         name: 'SONY',
        //         year: 2001,
        //         price: 99000,
        //         bestFor: "HOME AND OFFICE",
        //         rating: 5
        //     },
        //     {
        //         name: 'PANASONIC',
        //         year: 2009,
        //         price: 10000,
        //         bestFor: "HOME AND SHOPS",
        //         rating: 3
        //     },
        //     {
        //         name: 'TCL',
        //         year: 2008,
        //         price: 12000,
        //         bestFor: "OFFICE AND SHOPS",
        //         rating: 4
        //     }
        // ]);
        // await findOneListingByName(client, "LG");
        // await findListingswithYearPriceRating(client, {name:{$eq:"LG"},bestFor:{$eq:"HOME"}});
        // await updateListingByName(client, "SAMSUNG", {rating:9})
        // await upsetfun(client, "bpl", { name: "bpl", price: 57800, rating: 4 })
        // await updateAllListing(ToHaveThePropartyType(client);
        // await deleteListingByName(client,"SAMSUNG")
        await deleteManyItems(client,4)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        await client.close();
    }
}
main().catch(console.error)
// async function createListing(client, newListing) {
//     const result = await client.db("test2").collection("users2").insertOne(newListing);
//     console.log(`new listing created with the following id: ${result.insertedId}`);
// }
// async function createMuiltipleListings(client, newListings) {
//     const result = await client.db("brands").collection("tvs").insertMany(newListings);
//     console.log(`${result.insertedCount} new listings created with the following id(s):`);
//     console.log(result.insertedIds);
// }

async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("brands").collection("tvs").findOne({ name: nameOfListing });
    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}'`);
        console.log(result);
    } else {
        console.log(`No listings found with thw name '${nameOfListing}'`)
    }
}
async function updateListingByName(client, nameOFListing, updateedListing) {
    const result = await client.db("brands").collection("tvs").updateOne({ name: nameOFListing }, { $set: updateedListing });
    console.log(`${result} document(s) matched the quary`);

}
async function upsetfun(client, nameOFListing, updateedListing) {
    const result = await client.db("brands").collection("tvs").updateOne({ name: nameOFListing }, { $set: updateedListing }, { upsert: true });
    console.log(`${result.matchedCount} document(s) matched the query criteria`);
    if (result.upsertedCount > 0) {
        console.log(`One document was inserted with the id ${result.upsertedId}`);
    } else {
        console.log(`${result.modifiedCount} document(s) was/were updated`)
    }
}
async function updateAllListingToHaveThePropartyType(client) {
    const result = await client.db("brands").collection("tvs").updateMany({ propartyType:{$exists:false}}, { $set:{propartyType:"unknown"} });
    console.log(`${result.matchedCount} document(s) matched the quary`);
    console.log(`${result.modifiedCount} document(s) was/were updated`);


}
async function deleteListingByName(client, nameOfListing){
    const result = await client.db("brands").collection("tvs").deleteOne({name:nameOfListing})
    console.log(`${result.deletedCount} documents was deleted`)
}
async function deleteManyItems(client, rating){
    const result= await client.db("brands").collection("tvs").deleteMany({"rating":{$lt:rating}})
    console.log(`${result.deletedCount} documents was deleted`)
}
// async function findListingswithYearPriceRating(client, filter) {
//     const result = client.db("brands").collection("tvs").find(filter);
//     if (result) {
//         console.log(`find result :`)
//         console.log(result);
//     } else {
//         console.log('sorry')
//     }
// }
// async function listDatabases(client) {
//     const adminDb = client.db('admin')
//     const databasesList = await adminDb.admin().listDatabases();
//     console.log('Databases:');
//     databasesList.databases.forEach(db => {
//         console.log(`-${db.name}`)
//     })
// }





// {"_id":{"$oid":"650c852b53e94be42386421b"},"name":"PANASONIC","year":{"$numberInt":"2009"},"price":{"$numberInt":"10000"},"bestFor":"HOME AND SHOPS","rating":{"$numberInt":"3"},"propartyType":"unknown"}
// {"_id":{"$oid":"650c852b53e94be42386421a"},"name":"SONY","year":{"$numberInt":"2001"},"price":{"$numberInt":"99000"},"bestFor":"HOME AND OFFICE","rating":{"$numberInt":"5"},"propartyType":"unknown"}
// {"_id":{"$oid":"650c826ddb0e19ff61eb24c6"},"name":"VU","year":{"$numberInt":"2005"},"price":{"$numberInt":"9000"},"bestFor":"HOME","rating":{"$numberInt":"3"},"propartyType":"unknown"}
// {"_id":{"$oid":"650c826ddb0e19ff61eb24c4"},"name":"LG","year":{"$numberInt":"2003"},"price":{"$numberInt":"18000"},"bestFor":"HOME","rating":{"$numberInt":"9"},"propartyType":"unknown"}