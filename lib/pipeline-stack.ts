import * as cdk from '@aws-cdk/core';
import { Tags } from '@aws-cdk/core';
import { Repo } from './repo';

export class DemoCicdCrossAccountStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Repo(this, 'repo.construct');

    Tags.of(this).add('purpose', 'demo');
    Tags.of(this).add('app', 'cicd_cross_account');
  }
}
