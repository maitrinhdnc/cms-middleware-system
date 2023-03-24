migrate((db) => {
  const collection = new Collection({
    "id": "625t35klyv43sq1",
    "created": "2023-03-15 09:00:05.361Z",
    "updated": "2023-03-15 09:00:05.361Z",
    "name": "author",
    "type": "base",
    "system": false,
    "schema": [
      {
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
  const collection = dao.findCollectionByNameOrId("625t35klyv43sq1");

  return dao.deleteCollection(collection);
})
