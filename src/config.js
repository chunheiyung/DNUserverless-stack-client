const dev = {
  STRIPE_KEY: "pk_test_51IYFewHvgXSjDKbbQQS5qDpjw7drEjrcQoUdn1Hvq1RtfvFnCrYm3RYqFyJWvwjlITtDJNHwalpbSSY7jSbzinqX00oXXOuldm",
  s3: {
    REGION: "us-east-2",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-npgfr6qojd0e"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ihiiaeygg9.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_j8l1HFoNg",
    APP_CLIENT_ID: "11nssj84aqv7eij1bbb3398g1n",
    IDENTITY_POOL_ID: "us-east-2:671adba5-df68-4351-85ae-3b4d1ca00265"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51IYFewHvgXSjDKbbQQS5qDpjw7drEjrcQoUdn1Hvq1RtfvFnCrYm3RYqFyJWvwjlITtDJNHwalpbSSY7jSbzinqX00oXXOuldm",
  s3: {
    REGION: "us-east-2",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1geln55muxw48"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ir6sgg94tb.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_R149TpEqW",
    APP_CLIENT_ID: "3ofa64julk6qcabs167bsjocg8",
    IDENTITY_POOL_ID: "us-east-2:1c86fef0-aea4-4920-8a55-1a5f33a46398"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;