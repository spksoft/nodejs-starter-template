export default {
  graylogErrorStack: (process.env.GRAYLOG_ERROR_STACK === 'true'),
  responseErrorStack: (process.env.RESPONSE_ERROR_STACK === 'true'),
  nodeENV: process.env.NODE_ENV,
  baseURI: process.env.BASE_URI,
  projectName: process.env.PROJECT_NAME,
  port: process.env.PORT
}
