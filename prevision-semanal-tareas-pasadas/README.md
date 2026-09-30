# Previsión Semanal → Tareas Pasadas

Script de Apps Script que mueve tareas completadas de una hoja "Previsión semanal" a otra hoja "Tareas pasadas", registrando la fecha de finalización.

## Qué hace

- Se activa automáticamente al editar (trigger `onEdit`)
- Detecta cuando la columna E de "Previsión semanal" se marca como "Hecho"
- Copia la fila a "Tareas pasadas" con la fecha actual en la columna A
- Elimina la fila de la hoja original

## Uso

1. Tu Google Sheet debe tener dos hojas: "Previsión semanal" y "Tareas pasadas"
2. Abre el Editor de Apps Script y pega el contenido de `script.gs`
3. Cada vez que marques una tarea como "Hecho" en la columna E, se moverá automáticamente
