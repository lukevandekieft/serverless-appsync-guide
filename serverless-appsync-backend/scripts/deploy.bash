#! /bin/bash

# Author: Serverless Guru

stage=$1

if [[ -z $stage ]];
then
    stage="test"
fi

echo "**** Deploying to $stage ****"

SLS_DEBUG=*

# Deploy additionalstacks first
sls deploy additionalstacks --stage $stage -v

# Deploy main stack last
sls deploy --stage $stage -v
