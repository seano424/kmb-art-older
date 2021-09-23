module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/paintings',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}
