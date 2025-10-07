# Sitio Web Zaidy Di Franco

Sitio web profesional para coaching, terapia transpersonal y acompañamiento del alma.

## 🎯 Características Implementadas

### ✅ Páginas Creadas
- **index.html** - Página principal con hero section, servicios y CTAs
- **servicios.html** - Detalle completo de servicios personales y corporativos
- **medios.html** - Videos, podcasts y apariciones en medios
- **blog.html** - Listado de artículos con sidebar y categorías
- **tienda.html** - Productos (libro y cursos online)
- **contacto.html** - Formulario de contacto completo
- **privacidad.html** - Política de privacidad completa

### 🎁 Modal de Bienvenida con Handbook Gratis
- ✅ Popup automático después de 3 segundos en la página principal
- ✅ Formulario de suscripción con nombre y email
- ✅ Validación de campos y email
- ✅ Checkbox de aceptación de política de privacidad
- ✅ Se muestra solo una vez (usa localStorage)
- ✅ Mensajes de éxito personalizados
- ✅ Preparado para integración con servicio de email

**Nota**: Para automatizar el envío del handbook por email, necesitas:
1. Integrar con un servicio como **Mailchimp**, **ConvertKit**, **SendGrid** o **EmailJS**
2. El código para el envío está preparado en `script.js` línea 284-286
3. Reemplaza la línea 343 con la URL real de descarga del handbook PDF

### 🔍 SEO Optimizado

Todas las páginas incluyen:
- ✅ Meta tags completos (title, description, keywords)
- ✅ Open Graph tags para redes sociales (Facebook, Twitter)
- ✅ Schema.org structured data (JSON-LD)
- ✅ Canonical URLs
- ✅ Meta robots
- ✅ Títulos descriptivos y únicos
- ✅ Descripciones optimizadas para búsqueda

**Páginas optimizadas:**
- ✅ index.html
- ✅ privacidad.html
- ⚠️ servicios.html, medios.html, blog.html, tienda.html, contacto.html (agregar meta tags similares)

### 🔒 Privacidad y Legal
- ✅ Página de Política de Privacidad completa y profesional
- ✅ Enlaces a política de privacidad en footer
- ✅ Checkbox de aceptación en formularios
- ✅ Cumplimiento con prácticas de protección de datos

### 📱 Diseño Responsive
- ✅ Completamente adaptable a móvil, tablet y desktop
- ✅ Menú hamburguesa en móviles
- ✅ Grids y layouts flexibles
- ✅ Imágenes y fuentes optimizadas

### ✨ Características Técnicas
- ✅ Animaciones suaves y transiciones
- ✅ Validación de formularios
- ✅ Navegación activa automática
- ✅ Scroll suave
- ✅ Efectos hover
- ✅ Modales funcionales
- ✅ Intersection Observer para animaciones

## 📂 Estructura de Archivos

```
Zaidy/
├── index.html          # Página principal
├── servicios.html      # Servicios
├── medios.html         # Medios y apariciones
├── blog.html           # Blog
├── tienda.html         # Tienda
├── contacto.html       # Contacto
├── privacidad.html     # Política de privacidad
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### 1. Visualizar el sitio localmente
Simplemente abre `index.html` en tu navegador.

### 2. Integrar el envío automático del Handbook

Para automatizar el envío del handbook por email:

**Opción A: EmailJS (Más fácil, sin backend)**
```javascript
// En script.js, línea 284-286
// Reemplaza con:
emailjs.send("tu_service_id", "tu_template_id", {
    to_email: email,
    to_name: nombre,
    handbook_link: "URL_DE_TU_HANDBOOK.pdf"
}).then(() => {
    showHandbookSuccess(nombre);
});
```

**Opción B: Mailchimp**
```javascript
// Usar API de Mailchimp para agregar suscriptor
fetch('https://us1.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: {
            FNAME: nombre
        }
    })
});
```

**Opción C: Backend personalizado**
```javascript
// Enviar a tu servidor
fetch('/api/subscribe-handbook', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ nombre, email })
});
```

### 3. Configurar el archivo del Handbook

1. Crea una carpeta `/downloads` en tu directorio
2. Sube tu archivo `handbook.pdf`
3. En `script.js` línea 343, descomenta y actualiza:
```javascript
window.location.href = '/downloads/handbook.pdf';
```

### 4. Personalizar SEO

Actualiza las siguientes variables en cada página según corresponda:
- URLs en canonical links y Open Graph
- Imágenes de Open Graph (og:image)
- Handles de redes sociales en Schema.org
- Keywords específicas de cada página

### 5. Conectar redes sociales

Actualiza los enlaces de redes sociales en el footer de cada página:
- Facebook
- Instagram
- LinkedIn
- YouTube (en contacto.html)

## 🎨 Personalización de Colores

Los colores están definidos en `styles.css` como variables CSS:

```css
:root {
    --primary-color: #29828c;    /* Color principal (teal) */
    --primary-dark: #1f6670;     /* Teal oscuro */
    --primary-light: #3fa1ad;    /* Teal claro */
    --accent-color: #e8a87c;     /* Color acento (durazno) */
    --text-dark: #2c3e50;        /* Texto oscuro */
    --text-light: #5a6c7d;       /* Texto claro */
    --bg-light: #f8f9fa;         /* Fondo claro */
}
```

## 📧 Servicios de Email Recomendados

1. **EmailJS** (https://www.emailjs.com/) - Gratis hasta 200 emails/mes
2. **SendGrid** (https://sendgrid.com/) - Gratis hasta 100 emails/día
3. **Mailchimp** (https://mailchimp.com/) - Gratis hasta 500 contactos
4. **ConvertKit** (https://convertkit.com/) - Gratis hasta 300 suscriptores
5. **Brevo/Sendinblue** (https://www.brevo.com/) - Gratis hasta 300 emails/día

## 🔧 Para Optimizar SEO Aún Más

1. **Google Search Console**
   - Registra tu sitio
   - Envía tu sitemap
   - Monitorea rendimiento

2. **Google Analytics**
   - Agrega código de seguimiento
   - Monitorea tráfico

3. **Meta Tags Faltantes**
   Agrega a las páginas restantes (servicios, medios, blog, tienda, contacto):
   ```html
   <!-- SEO Meta Tags -->
   <title>Título específico - Zaidy Di Franco</title>
   <meta name="description" content="Descripción única de 150-160 caracteres">
   <meta name="keywords" content="keywords, relevantes, separadas, por, comas">
   <!-- Open Graph / Schema.org similar a index.html -->
   ```

4. **Imágenes**
   - Optimiza tamaño y peso
   - Agrega alt text descriptivos
   - Usa formatos modernos (WebP)

5. **Performance**
   - Minifica CSS y JS
   - Comprime imágenes
   - Usa CDN si es posible

## ✅ Checklist Antes de Publicar

- [ ] Actualizar URLs de canonical y Open Graph con tu dominio real
- [ ] Conectar servicio de email para el handbook
- [ ] Subir archivo handbook.pdf
- [ ] Actualizar enlaces de redes sociales
- [ ] Agregar meta tags SEO a páginas faltantes
- [ ] Optimizar imágenes
- [ ] Probar formularios
- [ ] Probar modal de handbook
- [ ] Probar responsive en diferentes dispositivos
- [ ] Configurar Google Analytics
- [ ] Configurar Google Search Console
- [ ] Revisar política de privacidad según tu país/región

## 🌐 Publicar el Sitio

### Opciones de Hosting Gratuito:
1. **Netlify** - Recomendado, fácil deploy
2. **Vercel** - Excelente para sitios estáticos
3. **GitHub Pages** - Gratis con repositorio público
4. **Cloudflare Pages** - Rápido y seguro

### Deploy en Netlify (Recomendado):
1. Crea cuenta en https://www.netlify.com
2. Arrastra la carpeta completa a Netlify
3. Tu sitio estará en línea en segundos
4. Netlify te dará un dominio gratuito (.netlify.app)
5. Opcional: Conecta tu dominio personalizado

## 📞 Soporte

Si necesitas ayuda adicional, revisa la documentación o contacta al desarrollador.

---

**Desarrollado con** ❤️ **para Zaidy Di Franco**
