# MISW4103 - Pruebas Grupo 25

## Integrantes

| Nombre             | email                           |
|--------------------|---------------------------------|
| Anderson Rodriguez | ja.rodriguezc12@uniandes.edu.co |
| Nicolás Potier     | n.potier@uniandes.edu.co        |
| Felipe Valencia    | jf.valencia23@uniandes.edu.co   |
| Camilo Lesmes      | c.lesmesl@uniandes.edu.co       |

## Funcionalidades

1. Post creación
2. Pagina creación
3. Members creación
4. General settings editar
5. Tag Creación

## Escenarios

| ID | Descripción                                                          | Funcionalidad           |
|----|----------------------------------------------------------------------|-------------------------|
| 01 | Crear un nuevo post con solo titulo y descripción                    | Posts creación          |
| 02 | Crear un nuevo post con solo titulo                                  | Posts creación          |
| 03 | Crear un nuevo post con titulo y descripción y tag                   | Posts creación          |
| 04 | Validar si deja crear un post sin Autor                              | Posts creación          |
| 05 | Creación página pero sin publicarla                                  | Pagina creación         |
| 06 | Creación página y publicarla                                         | Pagina creación         |
| 07 | Borrado de página recién creada                                      | Pagina creación         |
| 08 | Creación página y cancelar su creación                               | Pagina creación         |
| 09 | Creación de Usuario con solo correo y nombre                         | Members creación        |
| 10 | Creación de usuario sin correo y nombre                              | Members creación        |
| 11 | Creación de usuario con  correo Invalido  y nombre                   | Members creación        |
| 12 | Creación de usuario con correo y nombre y cancelar su creación       | Members creación        | 
| 13 | Cambiar el site title con otro nombre                                | General settings editar |
| 14 | Validar edición de title vació                                       | General settings editar |
| 15 | Cambiar la descripción con otra                                      | General settings editar |
| 16 | Dejar la descripción vacía                                           | General settings editar |
| 17 | Creación de tag con titulo y color                                   | Tag Creación            |
| 18 | Creación de tag sin color                                            | Tag Creación            |
| 19 | Creación de tag sin titulo                                           | Tag Creación            |
| 20 | Creación de tag con título y color forzando dos veces el botón crear | Tag Creación            |

    
# Ejecución de pruebas

## Kraken y Playwright ejecución EC2

* Leer los siguientes pasos: [README-EC2.md](README-EC2.md)

## Playwright ejecución Local

* Pasos para la version de ghost-4-38.9: [readme-ejecucion-local.md](playwright-ghost-4-38.0/readme-ejecucion-local.md)
* Pasos para la version de ghost-4-48.9: [readme-ejecucion-local.md](playwright-ghost-4-48.9/readme-ejecucion-local.md)

## Kraken ejecución Local

* Pasos para la version de ghost-4-38.9: [README.md](kraken-ghost-4-38.0/README.md)
* Pasos para la version de ghost-4-48.9: [README.md](kraken-ghost-4-48.9/README.md)

> **_NOTA:_**  De acuerdo a la ejecución de kraken, se encontró un comportamiento no esperado en Windows, esto es mientras se corren todas las pruebas e2e, aplica para las dos versiones de ghost implementadas en este proyecto, sucede que cuando se tienen varios features de kraken, estas no se pueden ejecutar de corrido ya que salta una excepción desconocida, por lo que en el equipo optamos por la ejecución de un feature que nos permite correr de buena manera todos los features, por lo tanto, al estar ubicado en cualquiera de las dos carpetas de **`kraken-ghost-4-38.0`** o **`kraken-ghost-4-48.9`** detalle el archivo **pacjage.json** el cual tiene una serie de scripts que permitirán ejecutar las pruebas e2e por funcionalidad 
    * npm run feature:members
    * npm run feature:pages
    * npm run feature:posts
    * npm run feature:settings
    * npm run feature:tags

> La ejecución de cada uno de las pruebas ha sido verificada, si la prueba falla, por favor vuelvalo a intentar, a veces se generan errores a causa de los recursos de la maquina

## Escenarios seleccionados para regresión visual

| ID | Descripción                                                          | Funcionalidad           | Herramienta             |
|----|----------------------------------------------------------------------|-------------------------|-------------------------|
| 01 | Creación de Usuario con solo correo y nombre - Karma                 | Members creación        | Resemeble y Backstop    |
| 01 | Creación de Usuario con solo correo y nombre - Playwright            | Members creación        | Resemeble y Backstop    |
| 02 | Creación página y publicarla - Karma                                 | Pagina creación         | Resemeble y Backstop    |
| 02 | Creación página y publicarla - Playwright                            | Pagina creación         | Resemeble y Backstop    |
| 03 | Crear un nuevo post con solo titulo y descripción - Karma            | Posts creación          | Resemeble y Backstop    | 
| 03 | Crear un nuevo post con solo titulo y descripción                    | Posts creación          | Resemeble y Backstop    | 
| 04 | Cambiar el site title con otro nombre - Karma                        | General settings editar | Resemeble y Backstop    | 
| 04 | Cambiar el site title con otro nombre - Playwright                   | General settings editar | Resemeble y Backstop    | 
| 05 | Creación de tag con titulo y color - Karma                           | Tag Creación            | Resemeble y Backstop    | 
| 05 | Creación de tag con titulo y color - Playwright                      | Tag Creación            | Resemeble y Backstop    | 

  > **_NOTA:_**  Se seleccionan los 10 escenarios en lso cuales se probaron con la herramienta de Karma y playwrigt para hacer las pruebas de regresión y así mismo se implementan con Backstop y Resemble, lo cual hace que se realicen 20 pruebas de VRT, por lo que se dividen de a 10 por cada herramienta


# Reportes

En esta entrega el equipo quiso realizar la creación de dos reportes para poder implementar de una manera mas amplia las herramientas propuestas en la semana, las cuales son  `Resemble` & `Backstop`, en el que cada una tiene su propia carpeta para la realización y/o ejecución de pruebas de VRT y reportes, los cuales son analizados en la wiki de este proyecto.

## Resemble Report

Proyecto de NextJS para visualizar el reporte de las pruebas de regresión visual de la herramienta usando ResembleJS para la aplicación GHOST en ambas versiones previamente seleccionadas(4.38.0 y 4.48.9) de Kraken y Playwright.

* Leer la respectiva documentación: [README.md](resemble-report/README.md)
* El reporte generado de **Resemble** se encuentra en la carpeta **`resemble-report`**  en la raiz de este proyecto
* Puede ver el reporte generado en el siguiente link: [REPORTE - RESEMBLE](https://misw-4103-ghost-e25.vercel.app/)

## Bakstop Report

Proyecto de Html que visualiza el reporte de pruebas de regresión visual (VRT) implementando la herramienta BackStop para la aplicación GHOST en ambas versiones previamente seleccionadas(4.38.0 y 4.48.9) de Kraken y Playwright.

* Leer la respectiva documentación: [README.md](backstop-report/README.md)
* El reporte generado de **BackStop** se encuentra en la carpeta **`backstop-report`**  en la raiz de este proyecto
* Puede verel reporte generado en el siguiente [REPORTE - BACKSTOP](https://misw-4103-ghost-e25-delta.vercel.app/)


## Link al Video del procedimiento realizado


[![Explicación Trabajo](https://markdown-videos-api.jorgenkh.no/url?url=https%3A%2F%2Fyoutu.be%2F26bvlJpSvio)](https://youtu.be/26bvlJpSvio)

 - En el anterior video se hace la explicación de el procedimiento realizado para la toma de capturas de pantalla en las dos herramientas `Kraken` & `Playwright`, así mismo se explica de manera breve las decisiones tomadas para la realización y contrucción de los reportes ubicados en las carpetasde `resemble-report` & `backstrop-report`, además de que la explicación de su construcción de cada reporte está dentro de las carpetas con el nombre de cada herramienta y los resusltados obtenidos en la herramienta, estos a su vez se pueden encontrar en la wiki del proyecto.

