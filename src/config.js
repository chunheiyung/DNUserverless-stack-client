const config = {
  STRIPE_KEY: "pk_test_51IYFewHvgXSjDKbbQQS5qDpjw7drEjrcQoUdn1Hvq1RtfvFnCrYm3RYqFyJWvwjlITtDJNHwalpbSSY7jSbzinqX00oXXOuldm",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "cy-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ir6sgg94tb.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_y5gwZmcFw",
    APP_CLIENT_ID: "7t54sed9dp97nq7sc06o78975v",
    IDENTITY_POOL_ID: "us-east-2:c327b68b-6245-4c08-a0d8-823a8eb9dfb5",
  },
};

export default config;