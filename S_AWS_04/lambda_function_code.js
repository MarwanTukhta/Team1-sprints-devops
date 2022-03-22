const AWS = require("aws-sdk");
const S3 = new AWS.S3();
const sharp = require("sharp");

exports.handler = async (event) => {
  const { key } = event.Records[0].s3.object;

  console.log({ triggerObject: key });

  const uncompressedImage = await S3.getObject({
    Bucket: process.env.UNCOMPRESSED_BUCKET,
    Key: key,
  }).promise();

  const compressedImageBuffer = await sharp(uncompressedImage.Body)
    .resize({
      width: 200,
      height: 200,
      fit: "cover",
    })
    .toBuffer();

  await S3.putObject({
    Bucket: process.env.COMPRESSED_BUCKET,
    Key: key,
    Body: compressedImageBuffer,
    ContentType: "image",
  }).promise();

  console.log(`Compressing ${key} complete!`);
};
