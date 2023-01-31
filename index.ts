import * as AWS from 'aws-sdk';

const sqs = new AWS.SQS({
    region: 'eu-central-1',
});
  
const params = {
    QueueUrl: 'QUEUE_URL',
    MessageBody: 'Your message body'
};

sqs.sendMessage(params, (err: any, data: any) => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Success', data.MessageId);
    }
});
