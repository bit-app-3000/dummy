import { BUILD, isProd, SVC_HOST, VERSION } from './env.js'

const def = {
  protocol: 'http',
  host: SVC_HOST,
  port: 30000,
  VERSION,
  BUILD,
  isProd
}

const srv = {
  backlog: 511,
  exclusive: false,
  readableAll: false,
  writableAll: false,
  ipv6Only: false
}

const ui = {

  lang: 'en',
  color: 'white',

  favicon: '/img/favicon.svg',
  style: '/assets/index.css',
  app: '/assets/index.js',

  noScript: 'This site requires JavaScript. I will only be visible if you have it disabled.'

}

const setSvc = opts => {
  switch (opts.kind) {
    case 'UI':
      return Object.assign({}, def, ui, opts)
    case 'SRV':
      return Object.assign({}, def, srv, opts)
  }
}

export const SVC = {
  dummy: setSvc({
    kind: 'UI',
    name: 'dummy',
    title: 'dummy',
    lang: 'uk',
    port: 20020,
    canonical: 'https://dummy-3xu.pages.dev',
    description: 'DUMMY',
    color: '#5B8B7A',
    background: '#1C1B22'
  })
}
