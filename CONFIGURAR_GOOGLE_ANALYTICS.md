# 📊 CONFIGURACIÓN DE GOOGLE ANALYTICS

## 🚀 PASOS PARA ACTIVAR GOOGLE ANALYTICS:

### 1. **Crear cuenta en Google Analytics:**
   - Ve a: https://analytics.google.com/
   - Inicia sesión con tu cuenta de Google
   - Haz clic en "Empezar a medir"
   - Crea una cuenta para tu negocio

### 2. **Configurar propiedad:**
   - Nombre de propiedad: "MM Bienestar & Emprendimiento"
   - Zona horaria: "(GMT-05:00) América/Lima"
   - Moneda: Sol peruano (PEN)

### 3. **Configurar flujo de datos web:**
   - URL del sitio web: https://miriam-mautino.vercel.app
   - Nombre del flujo: "Sitio Web Principal"
   - Copia el **ID de medición** (formato: G-XXXXXXXXXX)

### 4. **Actualizar el código:**
   - Abre: `src/components/GoogleAnalytics.tsx`
   - En la línea 5, reemplaza: `const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';`
   - Pega tu ID real de Google Analytics

### 5. **Ejemplo de configuración:**
```typescript
// ✅ CORRECTO - Reemplaza con tu ID real
const GA_MEASUREMENT_ID = 'G-ABC123DEF456';

// ❌ INCORRECTO - No dejes el placeholder
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
```

### 6. **Después de configurar:**
   - Haz git add, commit y push
   - Los datos aparecerán en Google Analytics en 24-48 horas

## 📈 EVENTOS QUE SE RASTREAN AUTOMÁTICAMENTE:

- ✅ **Visitas a páginas** (automático)
- ✅ **Clicks en WhatsApp** (botones de contacto)
- ✅ **Envío de formularios** (registros)
- ✅ **Visualización de productos** (páginas individuales)

## 🎯 MÉTRICAS IMPORTANTES A REVISAR:

1. **Audiencia:** ¿Cuántas personas visitan tu sitio?
2. **Páginas populares:** ¿Qué productos interesan más?
3. **Dispositivos:** ¿Móvil o computadora?
4. **Ubicación:** ¿De qué distritos de Lima vienen?
5. **Conversiones:** ¿Cuántos hacen clic en WhatsApp?

## 🔧 COMANDOS PARA SUBIR CAMBIOS:

```bash
git add .
git commit -m "feat: Agregar Google Analytics y mejorar SEO"
git push origin main
```

¡Una vez configurado tendrás datos profesionales de tu sitio web! 📊✨
