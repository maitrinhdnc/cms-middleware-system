migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("625t35klyv43sq1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ajxfydbt",
    "name": "phone",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("625t35klyv43sq1")

  // remove
  collection.schema.removeField("ajxfydbt")

  return dao.saveCollection(collection)
})
