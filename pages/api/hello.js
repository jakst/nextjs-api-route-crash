import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req, res) {
  proxy.web(req, res, {
    target: 'http://nowhere:1234',
  })
}
