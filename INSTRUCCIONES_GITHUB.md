# Cómo subir ZeroKey AI a GitHub

## Archivos incluidos

- `index.html` — aplicación completa.
- `README.md` — descripción pública del proyecto.
- `LICENSE` — licencia MIT.
- `SECURITY.md` — notas de seguridad.
- `.gitignore` — exclusiones básicas.

---

## 1. Crear repositorio

1. Entra en GitHub.
2. Pulsa **New repository**.
3. Nombre recomendado: `zerokey-ai`.
4. Visibilidad: **Public** si quieres usar GitHub Pages gratis.
5. No marques “Add README”, porque este proyecto ya lo incluye.

---

## 2. Subir archivos

### Desde el navegador

1. En el repositorio, pulsa **Add file → Upload files**.
2. Arrastra todos los archivos del proyecto.
3. Commit recomendado: `Initial release — ZeroKey AI`.

### Con Git

```bash
git init
git add .
git commit -m "Initial release — ZeroKey AI"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/zerokey-ai.git
git push -u origin main
```

---

## 3. Activar GitHub Pages

1. Ve a **Settings → Pages**.
2. En **Source**, elige **Deploy from a branch**.
3. Rama: `main`.
4. Carpeta: `/ (root)`.
5. Pulsa **Save**.

Tu URL será similar a:

```text
https://TU_USUARIO.github.io/zerokey-ai/
```

---

## 4. Comprobación final

Antes de compartir:

- Abre la app en móvil y escritorio.
- Prueba un prompt de texto sin claves.
- Prueba el cambio de tema.
- Prueba exportar sesión.
- Abre el modal de claves y confirma que puedes guardar y borrar una clave.
- No publiques claves reales en el repositorio.

---

## 5. Recomendación de publicación

Añade estos topics al repositorio:

```text
ai, llm, javascript, html, github-pages, local-first, open-source
```
