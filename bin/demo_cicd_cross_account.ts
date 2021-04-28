#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DemoCicdCrossAccountStack } from '../lib/pipeline-stack';

const testEnv = { account: '991589444784', region: 'ap-southeast-2' };
const rootEnv = { account: '562845778379', region: 'ap-southeast-2' };

const app = new cdk.App();
new DemoCicdCrossAccountStack(app, 'DemoCicdCrossAccountStack', {
  env: rootEnv,
  testEnv: testEnv
});
