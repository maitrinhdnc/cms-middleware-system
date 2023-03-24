migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("groxd16ksfflsc9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xbc6cwfm",
    "name": "category",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "21dxwhneq47v0ie",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("groxd16ksfflsc9")

  // remove
  collection.schema.removeField("xbc6cwfm")

  return dao.saveCollection(collection)
})
