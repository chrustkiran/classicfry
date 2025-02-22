echo Deploying to S3...
aws s3 sync out/ s3://classic-fry-fe --delete
echo Deployment Completed!
echo Creating invalidation
aws cloudfront create-invalidation --distribution-id ENKATC5NY1KW3 --paths "/*"
pause