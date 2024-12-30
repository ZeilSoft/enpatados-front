# Frontend Enpatados

Este proyecto es un front para un e-commerce para la venta de medias y lentes de sol, con posible expansion a mas productos. Permite a los usuarios poder explorar productos, agregar al carrito, realizar compras y gestionar pedidos.

### Tecnologias utilizadas

<ol>
<li>React con vire</li>
<li>TypeScript</li>
<li>Zustand</li>
<li>Shadnc</li>
<li>Formik</li>
<li>yup</li>
<li>Axios</li>
<li>Tanstack query</li>
</ol>

**Entre otras...**

---

## Instalación y utilización

#### 1. Clonar el repositorio

```
git clone https://github.com/ZeilSoft/enpatados-front.git

```

#### 2. Instalar dependencias

```
npm install

```

#### 3. Configurar .env

**Explicación mas abajo**

```

#### 4. Iniciar el servidor

```
npm run dev

```

---

## Configuración de variables de entorno

### Variables de Entorno

| Variable               | Descripción                                                                 |
| ---------------------- | --------------------------------------------------------------------------- |
| `VITE_API_URL`         | Url del back (http://localhost:3000/) IMPORTANTE TERMINAR CON BARRA AL FINAL|
| `VITE_PHONE_NUMBER`    | Numero de telefono donde se enviaran los whatsapp de los pedidos.           |