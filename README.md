Reproduction of complete server crash when proxying in API route.

To reproduce:

1. `yarn install && yarn build && yarn start`
2. Visit http://localhost:3000
3. Click the `Crash me` button

The Next.js server crashes completely with the below error.

```
/my-project/node_modules/http-proxy/lib/http-proxy/index.js:120
    throw err;
    ^

Error: getaddrinfo ENOTFOUND nowhere
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:71:26) {
  errno: -3008,
  code: 'ENOTFOUND',
  syscall: 'getaddrinfo',
  hostname: 'nowhere'
}
error Command failed with exit code 1.
```
