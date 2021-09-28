//Ejercicio de códificación

//Calcular el imc (indice de masa corporal) de Edwin y Nathy, el imc es el peso entre la altura al cuadrado, luego comparar si el IMC de Nathy es superior a la de Edwin
//Solución


 var pesoEdwin=72;
 var alturaEdwin=1.72;

 var pesoNathy=89;
 var alturaNathy=1.75;


imcEdwin = pesoEdwin/alturaEdwin
imcEdwin = imcEdwin*imcEdwin
console.log(imcEdwin);

imcNathy = pesoNathy/alturaNathy
imcNathy = imcNathy*imcNathy
console.log(imcNathy);

imcMayor = imcNathy > imcEdwin
console.log("¿El imc de nathy es superior al de Edwin? " + imcMayor);
