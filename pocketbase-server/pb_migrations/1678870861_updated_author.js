migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("625t35klyv43sq1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ldpejthh",
    "name": "name",
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
  const collection = dao.findCollectionByNameOrId("625t35klyv43sq1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ldpejthh",
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
