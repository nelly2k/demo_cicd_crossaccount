import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as DemoCicdCrossAccount from '../lib/demo_cicd_cross_account-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DemoCicdCrossAccount.DemoCicdCrossAccountStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
