migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("groxd16ksfflsc9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dpaaohlx",
    "name": "author",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "625t35klyv43sq1",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("groxd16ksfflsc9")

  // remove
  collection.schema.removeField("dpaaohlx")

  return dao.saveCollection(collection)
})
