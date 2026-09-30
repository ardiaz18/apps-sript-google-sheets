# Get Doc Title

Función personalizada de Google Sheets que devuelve el título de un documento de Google Docs a partir de su URL.

## Qué hace

- Recibe una URL de Google Docs como parámetro
- Abre el documento con `DocumentApp.openByUrl()`
- Devuelve el nombre del documento en la celda

## Uso

1. Abre el Editor de Apps Script desde tu Google Sheet (Extensiones → Apps Script)
2. Pega el contenido de `script.gs`
3. En cualquier celda usa: `=getDocTitle("https://docs.google.com/document/d/...")`
