import { CfnOutput, Construct } from '@aws-cdk/core';
import * as codecommit from '@aws-cdk/aws-codecommit';

export class Repo extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id);
        var repository = new codecommit.Repository(this, 'demo.repo', {
            repositoryName: 'demo01-repository',
            description: 'demo01. Cross account CI/CD pipeline with CDK'
        });

        new CfnOutput(this, 'repo_url_http.output', {
            value: repository.repositoryCloneUrlHttp,
            description: "Demo repository http url"
        });
    }
}