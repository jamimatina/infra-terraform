declare namespace Terraform {
  export interface TerraformConfig {
    backend: {
      s3: S3Backend
      dynamodb: DynamoDBBackend
    }
  }

  export interface S3Backend {
    bucket: string
    key: string
    region: string
    encrypt: boolean
    dynamodb_table: string
  }

  export interface DynamoDBBackend {
    bucket: string
    key: string
    region: string
    encrypt: boolean
    dynamodb_table: string
  }
}

declare namespace Aws {
  export interface S3 {
    AccessKey: string
    SecretKey: string
    Region: string
  }

  export interface DynamoDB {
    Table: string
  }
}

declare namespace AwsConfig {
  export interface Environment {
    variables: {
      AWS_ACCESS_KEY_ID: string
      AWS_SECRET_ACCESS_KEY: string
      AWS_REGION: string
      AWS_DYNAMODB_TABLE: string
    }
  }

  export interface Backend {
    s3: {
      bucket: string
      key: string
      region: string
      encrypt: boolean
      dynamodb_table: string
    }
    dynamodb: {
      table: string
    }
  }
}