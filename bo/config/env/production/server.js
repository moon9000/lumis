module.exports = ({ env }) => ({
    proxy: true,
    url: env('RENDER_URL')
  })