# electroTrips

electroTrips es una aplicación web progresiva (PWA) dirigida a usuarios de coches eléctricos, especialmente propietarios de Tesla. La aplicación permite a los usuarios encontrar hoteles y restaurantes con supercargadores o cargadores para vehículos eléctricos.

## Funcionalidades

- Búsqueda de hoteles y restaurantes con cargadores para vehículos eléctricos
- Sistema de comentarios y valoraciones para hoteles y restaurantes
- Perfil de usuario para gestionar comentarios y aportaciones
- Panel de administración para aprobar nuevos hoteles y restaurantes

## Tecnologías utilizadas

- Frontend: Angular con componentes standalone y Server-Side Rendering (SSR)
- Backend: Nest.js (no incluido en este repositorio)
- Base de Datos: Se recomienda usar MongoDB o PostgreSQL (configuración no incluida)

## Requisitos previos

- Node.js (versión 14 o superior)
- Angular CLI (versión 18 o superior)

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/electro-trips.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd electro-trips
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución

Para ejecutar la aplicación en modo de desarrollo:

```
npm start
```

La aplicación estará disponible en `http://localhost:4200`.

## Construcción

Para construir la aplicación para producción:

```
npm run build
```

Los archivos de la aplicación se generarán en el directorio `dist/`.

## Despliegue

Para desplegar la aplicación, sigue estos pasos:

1. Construye la aplicación para producción:
   ```
   npm run build
   ```

2. Despliega los archivos generados en el directorio `dist/` a tu servidor web preferido.

3. Asegúrate de que tu servidor web esté configurado para servir una aplicación de una sola página (SPA).

## Estructura del proyecto

- `src/app/components/`: Contiene los componentes de la aplicación
- `src/app/services/`: Contiene los servicios para manejar la lógica de negocio y las llamadas a la API
- `src/assets/`: Contiene archivos estáticos como imágenes e iconos
- `src/environments/`: Contiene archivos de configuración para diferentes entornos

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Haz tus cambios y commitea (`git commit -am 'Añade nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un nuevo Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.