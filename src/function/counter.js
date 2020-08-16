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

  console.log(JSON.stringify(event.Records, null, 2));

  for (let i = 0; i < event.Records.length; ++i) {
    const record = event.Records[i];
    if (record.eventName !== SOURCE_EVENT_NAME) {
      break;
    }

    const primaryKey = record.dynamodb.NewImage[SOURCE_ATTR_NAME];
    const increment = 1;
    const params = {
      TableName: TARGET_TABLE_NAME,
      Key: { [TARGET_PRIMARY_KEY]: primaryKey },
      UpdateExpression: `SET ${TARGET_ATTR_NAME} = ${TARGET_ATTR_NAME} + :count`,
      ExpressionAttributeValues: { ':count': { N: increment.toString() } },
    };

    console.log(
      `[${record.eventID}] Increase Room #${primaryKey.S} ${TARGET_ATTR_NAME} by ${increment}`
    );
    await DDB.updateItem(params).promise();
  }

  context.done(null, 'Successfully processed DynamoDB record'); // SUCCESS with message
};
