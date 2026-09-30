function getDocTitle(url) {
  try {
    // Abre el documento de Google Docs usando la URL
    var doc = DocumentApp.openByUrl(url);
    // Retorna el nombre del documento
    return doc.getName();
  } catch (e) {
    // Maneja cualquier error que pueda ocurrir
    return "Error al obtener el nombre del documento: " + e.toString();
  }
}
