function onEdit(e) {
  if (!e) {
    Logger.log('El evento está indefinido.');
    return;
  }
  
  var ss = e.source;
  var s = ss.getActiveSheet();
  var r = e.range;
  
  // Asegúrate de que estamos mirando la hoja "Previsión semanal" y la columna E
  if (s.getName() === "Previsión semanal" && r.getColumn() === 5 && r.getValue() === "Hecho") {
    var row = r.getRow();
    var numColumns = s.getLastColumn();
    var targetSheet = ss.getSheetByName("Tareas pasadas");
    
    // Inserta una nueva fila en la posición 2 en la hoja "Tareas pasadas"
    targetSheet.insertRowBefore(2);
    
    var rowData = s.getRange(row, 2, 1, numColumns - 1).getValues(); // Obtiene los datos de la fila excepto la columna A
    
    // Configura la fecha actual en formato DD/MM/YYYY en la columna A de la hoja "Tareas pasadas"
    var today = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "dd/MM/yyyy");
    targetSheet.getRange(2, 1).setValue(today); // Establece la fecha en la columna A
    targetSheet.getRange(2, 2, 1, numColumns - 1).setValues(rowData); // Traslada los datos restantes a la fila 2

    s.deleteRow(row); // Elimina la fila de la hoja original
  }
}
// Depuración del script
function onEdit(e) {
  Logger.log('Evento disparado');
  if (!e) {
    Logger.log('El evento está indefinido.');
    return;
  }
  
  var ss = e.source;
  var s = ss.getActiveSheet();
  var r = e.range;
  Logger.log('Hoja actual: ' + s.getName());
  Logger.log('Columna editada: ' + r.getColumn());
  
  if (s.getName() === "Previsión semanal" && r.getColumn() === 5) {
    Logger.log('Valor en la celda: ' + r.getValue());
    if (r.getValue() === "Hecho") {
      var row = r.getRow();
      var numColumns = s.getLastColumn();
      var targetSheet = ss.getSheetByName("Tareas pasadas");
      if (!targetSheet) {
        Logger.log('Hoja "Tareas pasadas" no encontrada');
        return;
      }

      targetSheet.insertRowBefore(2);
      
      var rowData = s.getRange(row, 2, 1, numColumns - 1).getValues();
      var today = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "dd/MM/yyyy");
      targetSheet.getRange(2, 1).setValue(today);
      targetSheet.getRange(2, 2, 1, numColumns - 1).setValues(rowData);

      s.deleteRow(row);
      Logger.log('Fila trasladada y eliminada correctamente');
    }
  }
}
