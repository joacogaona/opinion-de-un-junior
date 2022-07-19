---
title: "Entrevistas desarrollador web"
date: "18 julio 2022"
---

## Entrevistas técnicas desarrollo web

En general hay 4 tipos de entrevistas técnicas:

- Charla técnica con preguntas especificas y opiniones de tecnologías.
- Ejercicio para resolver en vivo con el entrevistador.
- Pruebas de una duración de 2 a 4 horas con ejercicios a resolver o preguntas de opción múltiple.
- Desafío a resolver por tu cuenta con limite de tiempo entre 5 y 7 dias.

### Charla técnica

Este es mi preferido y es más que nada una charla con el entrevistador donde este puede hacer preguntas específicas del estilo, ¿para qué sirve el spread operator en jacascript? a preguntas más generales cómo, ¿es javascript un lenguaje sincrónico o asincrónico? ¿Y cómo maneja el asincronismo?. Para las preguntas específicas lo que noté que más me ayuda a mí es, practicar codeando. De esta manera el conocimiento lo voy adquiriendo simplemente por usar las tecnologías resolviendo problemas reales y así puede que una pregunta no sepa la teoría pero puedo remitirme a alguna vez donde lo utilicé o dar un ejemplo práctico y asi demostrarle el entrevistador que lo he usado.

Por otra parte, para las preguntas más generales si es necesario leer teoría (o ver vídeos explicativos) e intentar entender el porqué de las cosas. Ejemplo: ¿por qué usamos React?¿qué problema resuelve?. Les dejo este link a un repositorio con todas las preguntas que me han hecho en entrevistas de este tipo:

[Preguntas de charlas técnicas](https://github.com/joacogaona/preguntas-tecnicas)

Por último, mi recomendación acá es que, está bien decir no sé a algunas preguntas, nadie sabe todo y a nadie le gusta trabajar con una persona que se ponga a inventar cada vez que no sabe algo. Lo que yo intento hacer en alguno de esos casos es, decir que no lo sé e intentar deducir cual es la respuesta, así también muestro un poco de cual es mi razonamiento lógico cuando me encuentro con un problema.

## Ejercicio para resolver en vivo

Se plantea un ejercicio y tenes que codear una solución mientras compartis pantalla. Lo que se suele pedir es que vayas explicando tu razonamiento para resolver el problema. En estos casos creo que lo que más puede jugar en contra son los nervios, asi que yo me concentro primero en encontrar una solución simple que por ahí no sea la mejor pero que resuelva el problema, y después ver si se puede mejorar (y esto se lo comunico a la persona entrevistando).

Además recomiendo que prueben [CodeSandbox](https://codesandbox.io). Te permite crear un entorno con un click y que sea fácil y rápido ponerte a resolver los ejercicios. E

Ejemplos:

- Crear una función que tome como argumento un string y retorne la letra que más aparece
- Centrar un div
- [Crear una función para validar Ids](https://drive.google.com/file/d/131QJ9SLH_0ZSyJAItz_b9SLCNsaZdbdp/view?usp=sharing)

## Pruebas

Otra opción son las pruebas que duran entre 2 y 4 horas y vos decidis cuando realizarla. Acá me tomaron a través de [Hackerrank](https://www.hackerrank.com), que tiene planes gratuitos donde te van dando ejercicios para que te vayas preparando para las pruebas (si practicas con estos ejercicios que te dan ellos, la prueba te va a parecer fácil), y a través de Codility que me tomaron esto:

- Crear dos inputs (username y password) con un boton de login en React
- En una api crear una función que reciba un pedido post los datos de un usuario y los guarde en un objeto en el archivo. Después crear un get que reciba ciertos parámetros en req.query y con esos parametros busque en el objeto de usuarios al usuario que cumple con los mismos y lo retorne. En ambos casos prestar atención a los status code que se devuelven.
- Un ejercicio de algoritmos. Tengo un array que representa la cara(1) o cruz(0) de una moneda, cuál es la mínima cantidad de monedas que tengo que dar vuelta para tener un array intercalado. Ejemplos: - [1,0,1,1] => doy vuelta la última moneda => [1,0,1,0] . - [1,1,0,0] => tengo que dar vuelta minimo 2 monedas para que quede asi => [1,0,1,0]

(este último ejercicio no lo pude resolver )

## Desafíos complejos

Como última opción tenemos los desafíos que nos dan para resolver en varios días. Acá puede que nos digan de hacer algo desde cero, o que nos den una base de código y que creemos una solución en base a eso. Lo que se busca principalmente es ver como estructuras el código y a que solución llegas. Una vez que lo entregas lo revisan, y si está bien resuelto, te llaman para que expliques como pensaste el problema y porque lo resolviste de esa manera. Yo diría que en este caso es válido pedir ayuda o mirar vídeos o lo que fuera para tener un mejor código, siempre y cuando vos entiendas ese código y seas capaz de explicarlo.

En este caso me han tocado desafios con tecnologías que nunca había usado como Graphql, Typescript, Nextjs, Python, imagino que acá también quieren ver si podes resolver algo que no conocías antes. Y también me han tocado desafíos con código desactualizado y complejo como base, para ver si entendía lo que estaba pasando y lo podía arreglar.

Este es un ejemplo de un desafió desde cero:

- Crear una spreadsheet del estilo excel con React.

Se tiene que poder escribir formulas y resolverlas (únicamente sumas y restas) y se tiene que poder referenciar valores de otras celdas para agregar a las fórmulas.

Esta es la solución que hice yo : [Mi solución](https://github.com/joacogaona/spreadsheet). Me faltó agregar la funcionalidad para que las fórmulas queden guardadas entonces si una formula en una celda es por ejemplo =A1+B2 y la celda A1 cambia, de deberían actualizar el resultado de esa fórmula. Y también me falto agregar un Readme con más información, como puede ser un diagrama de la app.

## Conclusión

En mi caso, los nervios en las entrevistas siempre están, pero si llego con práctica y bien preparado puedo estar un poco más tranquilo. Igualmente casi nunca me siento bien preparado XD, porque simplemente son muchos temas. Por esto intento sacarme el miedo de tener errores o que me vaya mal, y entender que es parte del aprendizaje. Y de hecho, de la manera que más mejoré mis entrevistas es.... teniendo entrevistas!

Espero que te sirva y feliz búsqueda!!

PD: Si lo que te cuesta es que te llamen a una primera entrevista, seguramente tengas que hacer algunos cambios en tu curriculum y linkedin. Te recomiendo ver [este vídeo](https://www.youtube.com/watch?v=3aWk7q-sLlY&t=39s) , para tomar algunas ideas de ahí.
