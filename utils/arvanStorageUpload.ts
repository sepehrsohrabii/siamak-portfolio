const {
   S3Client,
   CompleteMultipartUploadCommand,
   CreateMultipartUploadCommand,
   UploadPartCommand,
} = require('@aws-sdk/client-s3');
const path = require('path');
const fs = require('fs');

// Create an S3 client service object
const s3 = new S3Client({
   region: 'default',
   endpoint: process.env.ARVAN_STORAGE_DOMAIN,
   credentials: {
      accessKeyId: process.env.ARVAN_STORAGE_ACCESS_KEY,
      secretAccessKey: process.env.ARVAN_STORAGE_SECRET_KEY,
   },
});

const arvanUploadFile = async (file) => {
   // File
   // Configure the file stream and obtain the upload parameters
   const fileStream = fs.createReadStream(file);
   fileStream.on('error', function (err) {
      console.log('File Error', err);
   });
   uploadParams.Key = path.basename(file);
   // call S3 to upload file to specified bucket
   uploadParams.Body = fileStream;

   try {
      const data = await s3.send(new PutObjectCommand(uploadParams));
      console.log('Success', data);
   } catch (err) {
      console.log('Error', err);
   }
};
