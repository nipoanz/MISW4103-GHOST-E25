# MISW4103 - Pruebas Grupo 25

## Integrantes
| Nombre | email |
| --------- | --------- |
| Anderson Rodriguez | ja.rodriguezc12@uniandes.edu.co |
| Nicolás Potier | n.potier@uniandes.edu.co |
| Felipe Valencia | jf.valencia23@uniandes.edu.co |
| Camilo Lesmes | c.lesmesl@uniandes.edu.co |

## Funcionalidades
1. Post creación
2. Pagina creación
3. Members creación
4. General settings editar
5. Tag Creación

## Escenarios
| ID | Descripción | Funcionalidad |
| ----- | ----------- | ----------- |
| 01 |  Crear un nuevo post con solo titulo y descripción  | Posts creación |
| 02 |  Crear un nuevo post con solo titulo  | Posts creación |
| 03 |  Crear un nuevo post con titulo y descripción y tag | Posts creación |
| 04 |  Validar si deja crear un post sin Autor | Posts creación |
| 05 |  Creación página pero sin publicarla | Pagina creación |
| 06 |  Creación página y publicarla | Pagina creación |
| 07 |  Borrado de página recién creada   | Pagina creación |
| 08 |  Creación página y cancelar su creación | Pagina creación |
| 09 |  Creación de Usuario con solo correo y nombre | Members creación |
| 10 |  Creación de usuario sin correo y nombre | Members creación |
| 11 |  Creación de usuario con  correo Invalido  y nombre | Members creación |
| 12 |  Creación de usuario con correo y nombre y cancelar su creación | Members creación | 
| 13 |  Cambiar el site title con otro nombre | General settings editar |
| 14 |  Validar edición de title vació | General settings editar |
| 15 |  Cambiar la descripción con otra | General settings editar |
| 16 |  Dejar la descripción vacía | General settings editar |
| 17 |  Creación de tag con titulo y color | Tag Creación |
| 18 |  Creación de tag sin color | Tag Creación |
| 19 |  Creación de tag sin titulo | Tag Creación |
| 20 |  Creación de tag con título y color forzando dos veces el botón crear | Tag Creación |


## Configuración del Entorno
### Kraken
Para configurar el entorno de pruebas para Kraken, haz clic [aquí](./kraken/README.md).
### Playwright
Para configurar el entorno de pruebas para Playwright, haz clic [aquí](./playwright/README.md).
