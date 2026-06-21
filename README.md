<div align="center">

# ⚡ ZeroKey AI

### Orquestador multi-IA gratuito, local-first, con bóveda cifrada y listo para GitHub Pages

Usa un proveedor sin clave para empezar y añade claves gratuitas opcionales para ampliar capacidad.

![Single File](https://img.shields.io/badge/App-Single%20HTML-orange.svg)
![Encrypted Vault](https://img.shields.io/badge/Keys-WebCrypto%20Vault-green.svg)
![E2E Ready](https://img.shields.io/badge/Tests-Playwright-blue.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

</div>

---

## Qué es

**ZeroKey AI** es una app web estática para probar varios proveedores de IA desde el navegador:

- Pollinations AI como proveedor inicial sin clave.
- Groq, Gemini, Mistral, Cohere, OpenRouter y HuggingFace como proveedores opcionales.
- Selector por tipo de tarea: texto, escritura, código, análisis e imagen.
- Bóveda local cifrada con WebCrypto para claves API.
- Historial local con IndexedDB y fallback controlado.
- Tema oscuro/claro.
- Exportación de sesión a `.txt`.
- Sin backend propio, sin login, sin analítica y sin servidor.

---

## Privacidad realista

La app no tiene backend propio y no incluye analítica ni telemetría. Aun así, para generar respuestas, **el prompt se envía directamente desde tu navegador al proveedor seleccionado**. No debe venderse como una app 100% offline ni 100% privada, porque los proveedores externos procesan las solicitudes.

Las claves opcionales se guardan en una **bóveda local cifrada**:

- Cifrado: AES-GCM 256.
- Derivación de clave: PBKDF2-SHA256.
- Contraseña local: no se guarda en ningún sitio.
- Al desbloquear, las claves quedan solo en memoria durante la sesión.
- Si pierdes la contraseña, tendrás que volver a pegar tus claves.

Recomendaciones:

- No pegues secretos, datos médicos, contraseñas ni información sensible.
- Usa claves con límites y revócalas desde el panel del proveedor si compartes el ordenador.
- Publica el proyecto en HTTPS, por ejemplo con GitHub Pages. La bóveda cifrada requiere WebCrypto disponible.

---

## Uso rápido

### Local

Abre `index.html` directamente para probar la app. Para usar la bóveda cifrada con máxima compatibilidad, sirve el proyecto en `localhost`:

```bash
npm install
npm run serve
```

Después abre:

```text
http://127.0.0.1:4173/index.html
```

### GitHub Pages

1. Crea un repositorio público.
2. Sube los archivos del proyecto.
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

## Seguridad aplicada

- Renderizado seguro de mensajes para bloquear XSS en prompts, respuestas e historial.
- Bóveda local cifrada para claves API; ya no se guardan claves nuevas en claro con `localStorage`.
- Migración automática de claves antiguas: al guardar con contraseña, se cifran y se eliminan las copias legacy.
- CSP básica para limitar scripts, imágenes, conexiones, frames y formularios.
- `rel="noopener noreferrer"` en enlaces externos.
- `referrer=no-referrer`.
- Timeout de red para evitar bloqueos indefinidos.
- Cola local de reintento si falla la conexión o se agotan cuotas.
- Imágenes HuggingFace persistentes como `data:image/*` en el historial, no como `blob:` temporal.
- Interfaz móvil con selector de modo visible.

---

## Tests

### Verificación estática

```bash
npm install
npm run check
```

Comprueba:

- Sintaxis del JavaScript embebido.
- Presencia de CSP.
- Presencia de la bóveda WebCrypto.
- Ausencia de guardado de claves en claro con `localStorage.setItem(KEY_PFX...)`.
- Sanitización de imágenes persistentes.

### Tests E2E

```bash
npx playwright install
npm run test:e2e
```

Incluye pruebas para:

- UI principal.
- Móvil Chrome.
- Móvil Safari simulado.
- Bóveda cifrada.
- Bloqueo de XSS básico.

---

## Estructura

```text
zerokey-ai/
├── index.html
├── README.md
├── INSTRUCCIONES_GITHUB.md
├── SECURITY.md
├── AUDITORIA_FINAL.md
├── package.json
├── playwright.config.js
├── tests/
│   ├── static/check-html.js
│   └── e2e/zerokey.spec.js
├── LICENSE
└── .gitignore
```

---

## Límites conocidos

- Sin backend: no hay usuarios, sincronización cloud, permisos, facturación ni colaboración.
- Los proveedores externos pueden cambiar cuotas, modelos, disponibilidad o CORS.
- La privacidad depende también de las políticas del proveedor elegido.
- Para un producto comercial sensible, lo ideal sería añadir backend propio, cuentas, gestión segura de claves por servidor y auditoría profesional externa.

---

## Licencia

MIT.
