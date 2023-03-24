migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("625t35klyv43sq1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zlls1yhg",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("625t35klyv43sq1")

  // remove
  collection.schema.removeField("zlls1yhg")

  return dao.saveCollection(collection)
})
