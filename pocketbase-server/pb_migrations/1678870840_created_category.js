migrate((db) => {
  const collection = new Collection({
    "id": "21dxwhneq47v0ie",
    "created": "2023-03-15 09:00:40.892Z",
    "updated": "2023-03-15 09:00:40.892Z",
    "name": "category",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("21dxwhneq47v0ie");

  return dao.deleteCollection(collection);
})
