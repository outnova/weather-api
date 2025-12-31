# Weather REST API

A simple **RESTful Weather API** built with **Node.js** and **Express**.
It consumes an external weather service, applies rate limiting, and uses **Redis** for caching responses to improve performance.

This project currently uses the **Visual Crossing Weather API** as an example, but you can easily replace it with any weather provider of your choice.

---

## 🚀 Requirements

Make sure you have the following installed:

* **Node.js** (v18 or higher recommended)
* **npm**
* **Docker** (for running Redis)

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/weather-api.git
cd weather-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Create the environment file**

Create a file named **`.env`** in the root of the project and add the following:

```env
API_KEY=your_api_key
PORT=3000
```

> ⚠️ Replace `your_api_key` with the API key from your weather provider.

---

## 🌐 External Weather API

By default, the project uses the **Visual Crossing Weather API**.

Example request used in `weatherService.js`:

```
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}/today?unitGroup=us&key=API_KEY&contentType=json
```

* `{city}` is dynamically replaced with the requested city name
* `API_KEY` is read from the `.env` file

👉 You are free to replace this API with **any other weather service**.
If you do so, make sure to update the request URL and required parameters inside `weatherService.js` accordingly.

---

## 🧠 Redis Setup (Docker)

This project uses **Redis** for caching weather data.

Run Redis using Docker:

```bash
docker run -d --name my-redis -p 6379:6379 redis
```

Make sure the container is running before starting the API.

---

## ▶️ Running the Project

Start the server with:

```bash
npm start
```

The API will be available at:

```
http://localhost:3000
```

---

## 🌦️ Example Usage

Request weather data by city name:

```text
http://localhost:3000/weather?city=London
```

The response will return the current weather information for the specified city.

---

## 📂 Project Structure

```text
src/
 ├── config/        # Redis configuration
 ├── controllers/  # Request handlers
 ├── middlewares/  # Rate limiter middleware
 ├── routes/       # API routes
 ├── services/     # External weather service logic
 └── app.js        # Express app configuration
server.js          # Application entry point
```

---

## 📌 Notes

* Redis must be running for caching to work properly.
* Rate limiting is enabled to prevent API abuse.
* Designed for learning purposes and small backend services.

---

# Weather API REST

Una **API REST sencilla del clima**, construida con **Node.js** y **Express**.
Consume un servicio externo de clima, aplica limitación de peticiones y utiliza **Redis** para cachear las respuestas.

Actualmente el proyecto usa la **API de Visual Crossing Weather** como ejemplo, pero puede adaptarse fácilmente a cualquier otro proveedor.

---

## 🚀 Requisitos

Asegúrate de tener instalado:

* **Node.js** (v18 o superior recomendado)
* **npm**
* **Docker** (para ejecutar Redis)

---

## 📦 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/your-username/weather-api.git
cd weather-api
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Crear el archivo de entorno**

Crea un archivo llamado **`.env`** en la raíz del proyecto y agrega:

```env
API_KEY=tu_api_key
PORT=3000
```

> ⚠️ Reemplaza `tu_api_key` por la clave del proveedor de clima que estés usando.

---

## 🌐 API Externa del Clima

Por defecto, el proyecto utiliza la **API de Visual Crossing Weather**.

Ejemplo de URL usada en `weatherService.js`:

```
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{ciudad}/today?unitGroup=us&key=API_KEY&contentType=json
```

* `{ciudad}` se reemplaza dinámicamente según la ciudad solicitada
* `API_KEY` se obtiene desde el archivo `.env`

👉 Puedes reemplazar esta API por **cualquier otro servicio de clima**.
Solo asegúrate de modificar la URL y los parámetros necesarios dentro de `weatherService.js`.

---

## 🧠 Configuración de Redis (Docker)

Este proyecto utiliza **Redis** para cachear los datos del clima.

Ejecuta Redis con Docker:

```bash
docker run -d --name my-redis -p 6379:6379 redis
```

Asegúrate de que el contenedor esté activo antes de iniciar la API.

---

## ▶️ Ejecución del Proyecto

Inicia el servidor con:

```bash
npm start
```

La API estará disponible en:

```
http://localhost:3000
```

---

## 🌦️ Ejemplo de Uso

Consultar el clima por nombre de ciudad:

```text
http://localhost:3000/weather?city=London
```

La respuesta devolverá la información actual del clima de la ciudad indicada.

---

## 📂 Estructura del Proyecto

```text
src/
 ├── config/        # Configuración de Redis
 ├── controllers/  # Controladores de la API
 ├── middlewares/  # Middleware de rate limiting
 ├── routes/       # Rutas de la API
 ├── services/     # Lógica del servicio de clima externo
 └── app.js        # Configuración de Express
server.js          # Punto de entrada de la aplicación
```

---

## 📌 Notas

* Redis debe estar activo para que el sistema de cache funcione correctamente.
* Se incluye limitación de peticiones para evitar abusos.
* Proyecto pensado para aprendizaje y APIs backend pequeñas.

https://roadmap.sh/projects/weather-api-wrapper-service