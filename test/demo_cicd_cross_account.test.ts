import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as DemoCicdCrossAccount from '../lib/pipeline-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
  const stack = new DemoCicdCrossAccount.DemoCicdCrossAccountStack(app, 'MyTestStack', {
      testEnv: {account:'111'}
    });
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
