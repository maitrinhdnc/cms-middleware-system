migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("21dxwhneq47v0ie")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t9m4ftee",
    "name": "type",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("21dxwhneq47v0ie")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t9m4ftee",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
