# Extensión de Chrome para eliminar los anuncios de Instagram

Creado utilizando Javascript

## Descripción

La extensión inyecta un script en el sitio web de Instagram para eliminar los posts patrocinados

### Características

- Elimina los posts patrocinados manipulando el DOM
- Utiliza la API de Mutation Observer para poder escuchar cambios en el DOM y poder eliminar anuncios dinámicos renderizados producto del infinite scroll
- Elimina los nodos HTML hijos del nodo del anuncio para evitar la detección del ad-blocker por parte de Instagram
