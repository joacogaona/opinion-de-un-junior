---
title: "Entrevistas técnicas: desarrollo web"
description: "Información sobre todas las entrevistas que me tomaron estos últimos meses."
date: "18 julio 2022"
words: 1313
---

## Entrevistas técnicas: desarrollo web

_(Información recolectada después de participar en más de 10 entrevistas técnicas)_

---

En general hay 4 tipos de entrevistas técnicas:

1. Charla técnica con preguntas específicas y opiniones de tecnologías.
2. Ejercicio para resolver en vivo con el entrevistador.
3. Prueba de una duración de 2 a 4 horas con ejercicios a resolver o preguntas de opción múltiple.
4. Desafío a resolver por tu cuenta con límite de tiempo entre 5 y 7 dias.

### 1. Charla técnica

Este es mi preferido, y es más que nada una charla con el entrevistador/a donde este puede hacer preguntas específicas del estilo:

**¿Para qué sirve el spread operator en javascript?**

A preguntas más generales cómo:

**¿Es javascript un lenguaje sincrónico o asincrónico? ¿Y cómo maneja el asincronismo?**

Para las preguntas específicas, lo que noté que más me ayuda a mí es, **practicar codeando**. De esta manera, el conocimiento lo voy adquiriendo simplemente por usar las tecnologías resolviendo problemas reales. Y en el caso de que me hagan una pregunta que no sepa la teoría, puedo dar un ejemplo práctico y asi demostrarle el entrevistador que lo he usado y entiendo de lo que habla.

Por otra parte, para las preguntas más generales, **si es necesario leer teoría para entender el porqué de las cosas**. Un ejemplo de pregunta más teórica seria:

**¿Por qué usamos React? ¿qué problema resuelve?**

Les dejo este link a un repositorio con todas las preguntas que me han hecho en entrevistas de este tipo: <a href="https://github.com/joacogaona/preguntas-tecnicas" target="_blank">preguntas de charlas técnicas.</a>

Por último, mi recomendación es que **está bien decir _"no sé"_ a algunas preguntas**. Nadie sabe todo, y a nadie le gusta trabajar con una persona que se ponga a inventar cada vez que no sabe algo. Lo que yo intento hacer en alguno de esos casos es, **decir que no lo sé e intentar deducir cual es la respuesta**, así también puedo mostrar cual es mi razonamiento lógico cuando me encuentro con un problema.

## 2. Ejercicio para resolver en vivo

En este caso, se plantea un ejercicio y tenés que **programar una solución mientras compartís pantalla**. Lo que se suele pedir es que vayas explicando tu razonamiento para resolver el problema.

En estos casos, creo que lo que más puede jugar en contra son los nervios, asi que yo me concentro primero en **encontrar una solución simple, que por ahí no sea la más eficiente, pero que resuelva el problema**, y después ver si se puede mejorar (y esto se lo comunico a la persona que me está entrevistando).

Además recomiendo que prueben <a href="https://codesandbox.io" target="_blank">CodeSandbox</a>. Te permite crear un entorno con un click y que sea fácil y rápido ponerte a resolver los ejercicios.

Ejemplos de ejercicios:

- **Crear una función que tome como argumento un string y retorne la letra que más veces aparece en el mismo.**
- **Centrar un div.**
- <a href="https://drive.google.com/file/d/131QJ9SLH_0ZSyJAItz_b9SLCNsaZdbdp/view?usp=sharing" target="_blank">Crear una función para validar Ids</a>

## 3. Pruebas

Otra opción son las **pruebas que duran entre 2 y 4 horas y vos decidis cuando realizarla**. Acá me tomaron a través de <a href="https://www.codility.com" target="_blank">Codility</a>, <a href="https://codesignal.com/developers/interview-practice/" target="_blank">CodeSignal</a> y <a href="https://www.hackerrank.com" target="_blank">Hackerrank</a>. Este último tiene planes gratuitos, donde te van dando ejercicios para que practiques y te puedas preparar para las pruebas. **Si practicás con estos ejercicios las pruebas te van a parecer fácil**. Y como ejemplo, a través de Codility me tomaron esto:

- **Crear dos inputs (username y password) con un boton de login en React.**

- En una api, **crear una función que reciba un pedido post con los datos de un usuario** y los guarde en un objeto en el archivo. Después **crear un get que reciba ciertos parámetros en req.query**, y con esos parámetros, buscar en el objeto de usuarios al usuario que cumpla con los mismos y lo retorne. **En ambos casos, prestar atención a los status code que se devuelven**.

- Un **ejercicio de algoritmos**. Tengo un array que representa la cara(1) o cruz(0) de una moneda, ¿cuál es la mínima cantidad de monedas que tengo que dar vuelta para tener un array intercalado?.

Ejemplos:

- [1,0,1,1] => doy vuelta la última moneda => [1,0,1,0] .
- [1,1,0,0] => tengo que dar vuelta mínimo 2 monedas para que quede intercalado => [1,0,1,0]

**(este último ejercicio no lo pude resolver)**

## 4. Desafíos complejos

Como última opción, tenemos los **desafíos que nos dan para resolver en varios días**. Acá puede que nos digan de hacer algo desde cero, o que nos den una base de código y que creemos una solución en base a eso.

Lo que se busca principalmente es **ver como estructuras el código y a que solución llegas**. Una vez que lo entregas, lo revisan y si está bien resuelto, te llaman para que **expliques cómo pensaste el problema y por qué lo resolviste de esa manera**. Yo diría que en este caso es válido pedir ayuda, o mirar vídeos, o lo que fuera para tener un mejor código, siempre y cuando vos entiendas ese código y seas capaz de explicarlo.

Para agregar, **me han tocado desafíos con tecnologías que nunca había usado como**: Graphql, Typescript, Nextjs, Python. Imagino que en estos casos quieren ver si podés **resolver un problema con una tecnología en la que no tenés experiencia**. Y también me han tocado desafíos con código desactualizado y complejo como base, para ver si entendía lo que estaba pasando y lo podía arreglar.

Este es un ejemplo de un desafió desde cero:

- **Crear una spreadsheet del estilo excel con React.**

Se tiene que poder escribir fórmulas y resolverlas (únicamente sumas y restas), y se tiene que poder referenciar valores de otras celdas para agregar a las fórmulas.

Esta es la solución que hice yo : <a href="https://github.com/joacogaona/spreadsheet" target="_blank">Mi solución</a>.

Me faltó agregar la funcionalidad para que las fórmulas queden guardadas. De esta manera, si una formula en una celda es por ejemplo, =A1+B2, y la celda A1 cambia, se debería actualizar el resultado de esa fórmula. Y también me falto agregar un Readme con más información, como puede ser agregar un diagrama de la app.

Otros ejemplos de ejercicios de este estilo más sencillos fueron:

- **Recibir de una API información de distintos productos y crear una vista para mostrar los productos.** (Había que usar grid y hacerlo responsive para móvil, tablet y escritorio. Era importante no usar valores absolutos de css en pixeles, sino usar rem o porcentajes. Y usar variables de css para atributos que se repetían a lo largo de la app.)

- **Refactorizar y optimizar una función de una api donde se utiliza: .then para manejar promesas, muchos loops y se devuelven status code erróneos.** (Acá había que pasar todo a async await en vez de .then, cuando era posible refactorizar loops por métodos más eficientes como filter, map y reduce, saber manejar promesas múltiples con Promise.all y entender que los status code eran erróneos, pero, no los podiamos cambiar porque podiamos generar un error para otras personas o equipos que estén consumiendo la API.)

Estos dos últimos ejercicios no puedo mostrar el código :(.

## Conclusión

En mi caso, **los nervios en las entrevistas siempre están**, pero si llego con práctica y bien preparado puedo estar un poco más tranquilo. Igualmente casi nunca me siento bien preparado XD, porque simplemente son muchos temas.

Por esto, intento sacarme el miedo de tener errores o que me vaya mal, y entender que es parte del aprendizaje. Y de hecho, **la manera en que más mejoré mis entrevistas es.... teniendo entrevistas**!

**Espero que te sirva y feliz búsqueda!!**

PD: Si lo que te cuesta es que te llamen a una primera entrevista, seguramente tengas que hacer algunos cambios en tu curriculum y linkedin. Te recomiendo ver <a href="https://www.youtube.com/watch?v=3aWk7q-sLlY&t=39s" target="_blank">este vídeo</a>, para tomar algunas ideas de ahí.
