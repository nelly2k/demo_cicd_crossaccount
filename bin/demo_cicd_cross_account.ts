#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DemoCicdCrossAccountStack } from '../lib/pipeline-stack';

const app = new cdk.App();
new DemoCicdCrossAccountStack(app, 'DemoCicdCrossAccountStack', {
  env: { account: '562845778379', region: 'ap-soputheast-2' }
});
