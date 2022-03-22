# Notion API

Notion's API comes with an SDK that exists in the lowest-level of abstraction in this directory `./notionAPI/notionAPI.js`

The necessary pieces to make a Web API call to Notion have been divided up into parts so that we can create new calls easily in the future as we start to make new projects.

Here's the rundown:

Each call has two required params, represented as object property key/value pairs:
- **Client Token**: Currently stored in environment variables of this app (as of 3-17-2022).  You can create a new client in the app online or see the current clients.  Each client must be granted access to what part of the workspace they can access
- **Database ID**: Also viewable online.  Make sure that your client has been given permission to get data from the DB that you want to fetch from.

Each call can also take three optional params, represented as object property key/value pairs:
- **sortsArray**: It is highly recommended that you sort your data by the primary key of the database in ascending order.  There are plenty more advanced options beyond that.

- **filterObject**: Pick and choose how you like!

- **isRaw**: Notion sends back a very dense JSON object that is not intuitive to traverse.  There is rarely a time to see it in its raw form, but if you would like to see it raw, make this value true (default is `false`)

## Creating a Call

With the previous description in mind, this directory is put together ina  modular way so that you can easily create your own calls and assemble them how you see fit.

1. Pick your client and database id (stored together in the file `./notionAPI/tokensAndIds.js` because they make good combos).  If you are creating a new client or database, please add their respective token and id to this file and document so that others can use them and see your preffered pairing.

2. Pick a sort, filter, or both from the `./notionAPI/queries.js` file.  You are welcome to make new ones and add them to the collection. 

3. Put it all together into one object literal and pass it into `queryNotionDatabase`.  (You can also choose to add the `isRaw: true` if you need to see the raw JSON results)


```
const exampleParamsObject = {
    clientToken: ***,
    databaseID: ***,
    sortsArray: [{ *** }],
    filterObject: { *** },
    isRaw: (default `false`)
}
```