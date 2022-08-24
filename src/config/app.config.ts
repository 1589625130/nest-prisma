export default () => ({
  app: {
    name: 'study',
    isDev: process.env.NODE_DEV === 'dev',
  },
});
