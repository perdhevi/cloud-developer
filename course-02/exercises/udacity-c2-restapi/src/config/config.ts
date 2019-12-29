import { internalconfig } from './internal';
export const config = {
  "dev": {
    "username": internalconfig.dev.username,
    "password": internalconfig.dev.password,
    "database": internalconfig.dev.database,
    "host": internalconfig.dev.host,
    "dialect": internalconfig.dev.dialect,
    "aws_region": internalconfig.dev.aws_region,
    "aws_profile": internalconfig.dev.aws_profile,
    "aws_media_bucket": internalconfig.dev.aws_media_bucket
  },
  "prod": {
    "username": internalconfig.prod.username,
    "password": internalconfig.prod.password,
    "database": internalconfig.prod.database,
    "host": internalconfig.prod.host,
    "dialect": internalconfig.prod.dialect
  }
}
