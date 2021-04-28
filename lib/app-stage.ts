import { Construct, Stage, StageProps } from '@aws-cdk/core';
import { DemoAppStack } from '../lib/app-stack';

export interface AppStageProps extends StageProps{
    stageName: string
}

export class AppStage extends Stage {
  constructor(scope: Construct, id: string, props: AppStageProps) {
    super(scope, id, props);

    new DemoAppStack(this, 'DemoApplication', { stageName: props.stageName });
  }
}