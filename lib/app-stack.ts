import * as cdk from '@aws-cdk/core';
import { Tags } from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';

export interface ApplicationStackProps extends cdk.StackProps {
    readonly stageName: string;
}
  
export class DemoAppStack extends cdk.Stack{
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new lambda.Function(this, 'demoApp.function', {
            functionName: 'HelloLambda',
            code: lambda.Code.fromAsset(path.resolve(__dirname, 'myLambdaApp')),
            handler: 'index.handler',
            runtime: lambda.Runtime.NODEJS_12_X
        })

        Tags.of(this).add('purpose', 'demo');
        Tags.of(this).add('app', 'cicd_cross_account');
    }
}