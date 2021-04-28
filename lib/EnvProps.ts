import * as cdk from '@aws-cdk/core';


export interface EnvProps extends cdk.StackProps {
  testEnv: cdk.Environment;
}
