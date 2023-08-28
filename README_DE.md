# Mini Verschlüsselungs-Tool

Wir schreiben einen Server, der Texte verschlüsseln und entschlüsseln kann.
Benutze zum Testen **Postman**

## Routes

- `POST /encrypt`
- `POST /decrypt`

## Encrypt

`POST /encrypt`  
Die encrypt Route bekommt einen lesbaren Text und verschlüsselt diesen.
Input:

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
Die decrypt Route bekommt einen verschlüsselten Text Text und gibt den lesbaren Text zurück.
Input:

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

Die Funktionen zum Verschlüsseln und Entschlüsseln finden Sie hier.
