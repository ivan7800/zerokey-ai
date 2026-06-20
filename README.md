<div align="center">

# ⚡ ZeroKey AI

### Orquestador multi-IA gratuito, local-first y listo para GitHub Pages

Usa un proveedor sin clave para empezar y añade claves gratuitas opcionales para ampliar capacidad.

![Single File](https://img.shields.io/badge/Single%20File-HTML-orange.svg)
![No Backend](https://img.shields.io/badge/Backend-None-green.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

</div>

---

## Qué es

**ZeroKey AI** es una app web en un único `index.html` para probar varios proveedores de IA desde el navegador:

- Pollinations AI como proveedor inicial sin clave.
- Groq, Gemini, Mistral, Cohere, OpenRouter y HuggingFace como proveedores opcionales.
- Selector por tipo de tarea: texto, escritura, código, análisis e imagen.
- Historial local con IndexedDB.
- Tema oscuro/claro.
- Exportación de sesión a `.txt`.
- Sin backend propio, sin login y sin servidor.

---

## Privacidad realista

La app no tiene backend propio y no incluye analítica ni telemetría. Aun así, para generar respuestas, **el prompt se envía directamente desde tu navegador al proveedor seleccionado**. Las claves opcionales se guardan en `localStorage` del navegador.

Recomendaciones:

- No pegues secretos, datos médicos, contraseñas ni información sensible.
- Usa claves con límites y revócalas desde el panel del proveedor si compartes el ordenador.
- Publica el proyecto en HTTPS, por ejemplo con GitHub Pages.

---

## Uso rápido

### Local

Descarga el repositorio y abre `index.html` en el navegador.

### GitHub Pages

1. Crea un repositorio público.
2. Sube `index.html`, `README.md`, `LICENSE` y `INSTRUCCIONES_GITHUB.md`.
3. Ve a **Settings → Pages**.
4. Selecciona **Deploy from a branch → main / root**.
5. Abre la URL generada por GitHub Pages.

---

## Proveedores

| Proveedor | Clave | Uso principal |
|---|---:|---|
| Pollinations | No | Texto e imágenes de arranque |
| Groq | Sí | Texto rápido, código, escritura |
| Gemini | Sí | Análisis y razonamiento |
| Mistral | Sí | Texto y código |
| Cohere | Sí | Texto y análisis |
| OpenRouter | Sí | Modelos gratuitos variados |
| HuggingFace | Sí | Imágenes FLUX |

---

## Seguridad aplicada en esta versión

- Renderizado seguro de mensajes para bloquear XSS en prompts, respuestas e historial.
- CSP básica para limitar scripts, imágenes y conexiones.
- `rel="noopener noreferrer"` en enlaces externos.
- Timeout de red para evitar bloqueos indefinidos.
- Cola local de reintento si falla la conexión o se agotan cuotas.
- Claves editables y borrables desde el modal.
- Interfaz móvil con selector de modo visible.

---

## Estructura

```text
zerokey-ai/
├── index.html
├── README.md
├── INSTRUCCIONES_GITHUB.md
├── SECURITY.md
├── LICENSE
└── .gitignore
```

---

## Límites conocidos

- Las claves se guardan en `localStorage`, no cifradas. Es aceptable para una app local-first sin backend, pero no para entornos corporativos sensibles.
- Los proveedores externos pueden cambiar cuotas, modelos o CORS.
- Las imágenes generadas como `blob:` pueden no persistir tras recargar la sesión.
- No sustituye a un SaaS completo con usuarios, backend, facturación, permisos y sincronización.

---

## Licencia

MIT.
