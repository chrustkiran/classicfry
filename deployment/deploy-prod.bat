echo Building the project for Production...
call npm run build-ws
echo Deploying to S3 in Production...
aws s3 sync out/ s3://classic-fry-fe --delete
echo Deployment Completed in Production!
echo Creating invalidation
aws cloudfront create-invalidation --distribution-id ENKATC5NY1KW3 --paths "/*"
pause