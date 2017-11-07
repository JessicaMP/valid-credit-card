# **TARJETA DE CRÉDITO**

## Introducción
Este programa te ayuda a ver si tu tarjeta de crédito es valida.

### Pseudocodigo


##### Algoritmo Tarjeta_de_credito_valida

      Definir array,arr,i,j,duplicate,sum,k,cardNumberReverse Como Entero
	  Definir cardNumber Como Caracter
	  Escribir 'Ingrese el número de su tarjeta:'
	  Leer input
	  Mientras (cardNumber==' ') Hacer
		Escribir 'Ingrese el número de su tarjeta sin espacios:'
		Leer input
		Para i<-0 Hasta Longitud(array)Hacer
			Leer cardNumberReverse = arr.reverse(arr.push(parseInt(array[i])))
		FinPara
		Para j <-0 Hasta Longitud(cardNumberReverse) Hacer
			Si  cardNumberReverse[j]%2 === 1
				Entonces duplicate = cardNumberReverse[j] * 2
		Asignamos cardNumberReverse[j] += parseInt(duplicate / 10) + duplicate % 10
		Fin Si Entonces
		FinPara
		Para k <-0 Hasta Longitud(cardNumberReverse) Hacer
		Asignamos sum = cardNumberReverse[k]
			Si  sum %10 === 0
				Entonces Mostramos 'Tarjeta valida'
			Si No
				Entonces 'Tarjeta Invalida'
			Fin Si Entonces
		Fin Para
	  Fin Algoritmo

##### Diagrama de flujo
<https://ibb.co/bUu2GG>

##### Ejemplo:
<https://ibb.co/cuNHiw>

web site : <file:///C:/Users/yo/Laboratoria/Productos%20Finales/Tarjeta_de%20_credito_valida/index.html>

E- mail : <jessica95.mp@gmail.com>
