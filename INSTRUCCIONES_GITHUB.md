# 📋 Cómo subir Nexus AI a GitHub — Paso a paso

## Qué vas a subir

Solo necesitas **2 archivos**:
- `index.html` — la app completa
- `README.md` — descripción del proyecto

---

## PASO 1 — Crea una cuenta en GitHub (si no tienes)

1. Ve a [github.com](https://github.com)
2. Haz clic en **Sign up**
3. Elige un nombre de usuario (será parte de tu URL)
4. Verifica tu email

---

## PASO 2 — Crea el repositorio

1. Una vez dentro de GitHub, haz clic en el **+** (arriba a la derecha) → **New repository**
2. Rellena:
   - **Repository name**: `nexus-ai`
   - **Description**: `Free multi-model AI orchestrator — use Groq, Gemini, Mistral and more at zero cost`
   - **Public** ✓ (para que sea accesible en GitHub Pages)
   - **Add a README file**: NO (ya tenemos el nuestro)
3. Clic en **Create repository**

---

## PASO 3 — Sube los archivos

### Opción A — Desde el navegador (más fácil, sin instalar nada)

1. En tu repositorio recién creado, haz clic en **uploading an existing file**
2. Arrastra los dos archivos (`index.html` y `README.md`) a la zona de drop
3. En el campo **Commit changes** escribe: `Initial release — Nexus AI v1.0`
4. Clic en **Commit changes**

### Opción B — Con Git (si tienes Git instalado)

```bash
# En la carpeta donde tienes los archivos:
git init
git add index.html README.md
git commit -m "Initial release — Nexus AI v1.0"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/nexus-ai.git
git push -u origin main
```

---

## PASO 4 — Activa GitHub Pages (para tener URL pública gratis)

1. En tu repositorio, ve a **Settings** (pestaña superior)
2. En el menú izquierdo, haz clic en **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. En **Branch**, selecciona **main** y carpeta **/ (root)**
5. Haz clic en **Save**
6. Espera 2-3 minutos
7. Tu app estará disponible en:
   ```
   https://TU_USUARIO.github.io/nexus-ai
   ```

---

## PASO 5 — Añade el link a tu README

1. Vuelve a tu repositorio en GitHub
2. Haz clic en el lápiz ✏️ de `README.md`
3. Cambia `https://your-username.github.io/nexus-ai` por tu URL real
4. Cambia `your-username` por tu nombre de usuario de GitHub
5. Haz clic en **Commit changes**

---

## PASO 6 — Personaliza (opcional pero recomendado)

### Añadir descripción y URL al repositorio
1. En la página principal de tu repo, haz clic en el engranaje ⚙️ junto a "About"
2. Añade:
   - **Description**: `Free multi-model AI orchestrator`
   - **Website**: tu URL de GitHub Pages
   - **Topics**: `ai`, `llm`, `groq`, `gemini`, `free`, `no-cost`, `llama`

### Añadir una licencia
1. Haz clic en **Add file → Create new file**
2. Nombre: `LICENSE`
3. Haz clic en **Choose a license template**
4. Selecciona **MIT License**
5. Rellena tu nombre y clic en **Review and submit**

---

## Cómo actualizar la app en el futuro

Cuando hagas cambios en `index.html`:

### Desde el navegador:
1. Ve a tu repo → haz clic en `index.html`
2. Haz clic en el lápiz ✏️
3. Pega el contenido nuevo
4. Commit changes

### Con Git:
```bash
git add index.html
git commit -m "Descripción del cambio"
git push
```

GitHub Pages se actualiza automáticamente en 1-2 minutos.

---

## Estructura final del repositorio

```
nexus-ai/
├── index.html      ← La app completa (único archivo necesario)
├── README.md       ← Descripción del proyecto
└── LICENSE         ← Licencia MIT (opcional)
```

---

## ¿Problemas?

- **La app no carga en GitHub Pages**: espera 5 minutos y recarga. La primera vez tarda.
- **Aparece el README en vez de la app**: asegúrate de que el archivo se llama exactamente `index.html` (minúsculas).
- **Error 404**: verifica que Pages está activado en Settings → Pages.

---

## Comparte tu proyecto

Una vez publicado, comparte el enlace:
- **Reddit**: r/ChatGPT, r/artificial, r/selfhosted
- **Twitter/X**: con hashtags `#AI #FreeAI #OpenSource`
- **ProductHunt**: lanza el proyecto
- **HackerNews**: post en Show HN

---

¡Listo! Tu app estará online y accesible para cualquiera en el mundo. 🎉
