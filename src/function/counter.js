const AWS = require('aws-sdk');

const SOURCE_EVENT_NAME = 'INSERT';
const SOURCE_ATTR_NAME = 'roomID';

const TARGET_TABLE_NAME = 'RoomTable';
const TARGET_PRIMARY_KEY = 'id';
const TARGET_ATTR_NAME = 'commentTotalCount';

const DDB = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = async function (event, context) {
  if (!Array.isArray(event.Records)) {
    return;
  }

  const insertedRecords = event.Records.filter(
    (record) => record.eventName === SOURCE_EVENT_NAME
  );

  if (insertedRecords.length === 0) {
    return;
  }

  const [record] = insertedRecords;
  const primaryKey = record.dynamodb.NewImage[SOURCE_ATTR_NAME];
  const increment = insertedRecords.length;
  const params = {
    TableName: TARGET_TABLE_NAME,
    Key: { [TARGET_PRIMARY_KEY]: primaryKey },
    UpdateExpression: `SET ${TARGET_ATTR_NAME} = ${TARGET_ATTR_NAME} + :count`,
    ExpressionAttributeValues: { ':count': { N: increment.toString() } },
  };

  // console.log(
  //   `[${record.eventID}] Increase Table ${TARGET_TABLE_NAME} #${primaryKey.S} ${TARGET_ATTR_NAME} by ${increment}`
  // );
  await DDB.updateItem(params).promise();

  context.done(null, 'Successfully processed DynamoDB record'); // SUCCESS with message
};
