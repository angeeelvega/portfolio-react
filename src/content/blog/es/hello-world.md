---
title: 'Hola mundo'
description: 'Un primer post de ejemplo — y el test de regresión tipográfica del blog.'
pubDate: 2026-09-01
tags: ['meta']
translationKey: 'hello-world'
---

Esto es un placeholder. Reemplazalo por algo que realmente quieras decir, pero
mantené la estructura: este post funciona además como test visual de todos los
elementos que el blog puede renderizar.

## Por qué escribir acá

Las notas envejecen mejor que los hilos. Un post que podés linkear seis meses
después vale más que la misma idea repartida en respuestas sueltas.

### Código

Los bloques con fence se resaltan con Shiki usando dos temas, que se alternan
con la misma clase `.dark` que el resto del sitio — así siguen el toggle de tema
y no la configuración del sistema operativo.

```ts
export function readingMinutes(markdown: string): number {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
```

El `code` en línea tiene que apoyarse en la superficie muted sin romper el ritmo
de la línea.

### Listas y citas

- Los bullets se quedan en el color muted del texto.
- Los ítems anidados conservan su indentación.
- Los ítems largos cortan contra la misma medida que el cuerpo del texto.

> Una cita toma prestado el token de borde, así que se mantiene consistente en
> ambos temas sin un segundo set de reglas de color.

### Tablas

El contenido ancho hace scroll dentro de su propio contenedor en vez de empujar
la página hacia los lados.

| Token                | Claro      | Oscuro       |
| -------------------- | ---------- | ------------ |
| `--background`       | blanco     | casi negro   |
| `--muted-foreground` | gris medio | gris claro   |
| `--brand`            | azul       | azul elevado |

Y un [link en línea](https://astro.build) toma el único color de acento.
