export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME,// internalconfig.dev.username,
    "password": process.env.POSTGRES_PASSWORD, //internalconfig.dev.password,
    "database": process.env.POSTGRES_DB, //internalconfig.dev.database,
    "host": process.env.POSTGRES_HOST,//internalconfig.dev.host,
    "dialect": process.env.POSTGRES_DIALECT,//internalconfig.dev.dialect,
    "aws_region": process.env.POSTGRES_AWS_REGION,//internalconfig.dev.aws_region,
    "aws_profile": process.env.AWS_PROFILE,//internalconfig.dev.aws_profile,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET//internalconfig.dev.aws_media_bucket
  },
  "prod": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_HOST,
    "dialect": process.env.POSTGRES_DIALECT
  }
}
