import * as cdk from '@aws-cdk/core';
import { Tags } from '@aws-cdk/core';
import { EnvProps } from './EnvProps';
import { Pipe } from './pipe';

export class DemoCicdCrossAccountStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: EnvProps) {
    super(scope, id, props);

    new Pipe(this, 'deployment.piepline', props);

    Tags.of(this).add('purpose', 'demo');
    Tags.of(this).add('app', 'cicd_cross_account');
  }
}
