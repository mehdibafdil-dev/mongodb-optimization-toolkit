module.exports = {
    mongodb: {
      maxPoolSize: 100,
      minPoolSize: 10,
      logLevel: 'info',
      writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 5000
      }
    },
    monitoring: {
      enabled: true,
      slowQueryThreshold: 100
    }
  };