# parcial1-Web

## Author: Paula Daza Díaz - p.dazad - 202111276

---

# AutoAlpes

Descripción corta o resumen del proyecto.

## Pasos para Ejecutar el Proyecto

A continuación, se detallan los pasos para ejecutar este proyecto en el entorno local.

### 1. Clonar el Repositorio

```
git clone <https://github.com/pdazad/parcial1-Web>
cd parcial1-Web
```

### 2. Instalar las Dependencias

Asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu sistema. Luego, ejecuta:

```
npm install
```

### 3. Iniciar la Aplicación

Una vez que todas las dependencias estén instaladas y las configuraciones sean correctas, puedes iniciar la aplicación con el siguiente comando:

```
npm start
```

La aplicación se ejecutará en [http://localhost:3000](http://localhost:3000) en el navegador web predeterminado.

## Componentes y Elementos Utilizados

- [React](https://reactjs.org/): Una biblioteca de JavaScript para construir interfaces de usuario.
- [React Bootstrap](https://react-bootstrap.github.io/): Un conjunto de componentes de interfaz de usuario de Bootstrap para React.
- [React Router DOM](https://reactrouter.com/web/guides/quick-start): Biblioteca para la navegación y el enrutamiento en aplicaciones React.
- [React Intl](https://formatjs.io/docs/react-intl/): Librería para internacionalización y localización en aplicaciones React.

## Decisiones y Proceso de Desarrollo

### Componente Login

El componente Login se creó para gestionar la autenticación de los usuarios. A continuación, se describen algunos detalles clave:

- **Validación de Formulario:** Se implementó una validación de formulario para verificar la dirección de correo electrónico y la contraseña. Se utilizan estados locales para gestionar el formulario y mostrar mensajes de error.

- **Manejo de Estado:** Los estados locales se utilizan para almacenar datos del formulario y mensajes de error. Cuando el usuario envía el formulario, se verifica si los datos son válidos antes de continuar.

- **Internacionalización:** Se implementó la internacionalización (i18n) para admitir varios idiomas. Los mensajes de error y los textos del formulario se traducen según el idioma seleccionado.

### Componente Home

El componente Home muestra una lista de elementos (en este caso, detalles de automóviles) y permite al usuario seleccionar un elemento para ver más detalles. Aquí tienes algunos detalles clave:

- **Carga de Datos:** Los detalles de los automóviles se cargan desde un archivo JSON externo y se almacenan en el estado local utilizando `useState` de React.

- **Interacción del Usuario:** Los usuarios pueden hacer clic en un automóvil para seleccionarlo. El automóvil seleccionado se resalta visualmente.

- **Enrutamiento:** Se utiliza React Router DOM para manejar el enrutamiento. Cuando un automóvil se selecciona, la aplicación navega a una página de detalles de automóviles individual.

### Componente CarDetail

El componente CarDetail muestra información detallada sobre un automóvil seleccionado. Aquí tienes algunos detalles clave:

- **Obtención de Datos:** Utiliza `useLocation` para obtener los datos del automóvil seleccionado de la ubicación de la ruta.

- **Edición de Detalles:** Permite al usuario editar detalles del automóvil como fabricante, modelo, año, etc., si tiene el rol adecuado.

- **Internacionalización:** Los textos se traducen según el idioma seleccionado. Sin embargo, el precio se muestra en dólares o pesos colombianos según el idioma, lo que requiere un proceso especial de formateo.

---
