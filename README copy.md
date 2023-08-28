# Mini encryption tool

We are writing a server that can encrypt and decrypt texts.
Use **Postman** to test

## routes

- `POST /encrypt`
- `POST /decrypt`

## Encrypt

`POST /encrypt`
The encrypt route gets a readable text and encrypts it.
input:

```
{
     "message": "Hello World"
}
```

Output:

```
{
     "cypher": "U2FsdGVkX1/80gFd5Xf3N8TQ0Gi3XZgfb2Q=",
}
```

## Decrypt

`POST /encrypt`
The decrypt route gets an encrypted text and returns the readable text.
input:

```
{
     "cypher": "U2FsdGVkX1/80gFd5Xf3N8TQ0Gi3XZgfb2Q=",
}
```

Output:

```
{
     "message": "Hello World"
}
```

You can find the functions for encrypting and decrypting [here](./src/encryption.js).
