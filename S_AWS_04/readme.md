1. Create 2 folders in the S3 bucket (Upload_img, compressed_img), then create an alert when upload image to folder (Upload_img) trigger lambda function to compress a file and add the compressed file to (Compressed_img)
![s3](https://user-images.githubusercontent.com/56633651/159516443-56f5aaf2-35cc-4d3c-83b9-4d9dc4e009a6.jpg)
check the lambda code at file `lambda_function_code.js`



2. Create Cloudformation template for task of day2
check `cloudformation.yaml` file
