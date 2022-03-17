# Notion API

Notion's API comes with an SDK that exists in the lowest-level of abstraction in this directory `./notionAPI/notionAPI.js`

Each call has two required properties:
- **Client Token**: Currently stored in environment variables of this app (as of 3-17-2022).  You can create a new client in the app online or see the current clients.  Each client must be granted access to what part of the workspace they can access
- **Database ID**: Also viewable online.  Make sure that your client has been given permission to get data from the DB that you want to fetch from.

Each call can also take three optional properties:
- **sortsArray**: It is highly recommended that you sort your data by the primary key of the database in ascending order.  There are plenty more advanced options beyond that.

- **filterObject**: Pick and choose how you like!

- **prettyData**: Notion sends back a very dense JSON object that is not intuitive to traverse.  There is rarely a time to see it in its raw form, but if you would like to see it raw, make this value false (default is `true`)

## Creating a Call

With the previous description in mind, this directory is put together ina  modular way so that you can easily create your own calls and assemble them how you see fit.

1. Pick your client and database id (stored together in the file `./notionAPI/tokensAndIds.js`) because they make good combos.  If you are creating a new client or database, please add their respective token and id to this file and document so that others can use them and see your preffered pairing.

2. Pick a sort, filter, or both from the `./notionAPI/queries.js` file.  You are welcome to make new ones and add them to the collection.  Note that there are usually good combos, so if you make a combo please make that into an object as well.

3. Put it all together using 



{
    clientToken: ***,
    databaseID: ***,
    sortsArray: [{ *** }],
    filterObject: { *** },
    prettyData: (default `true`)
}