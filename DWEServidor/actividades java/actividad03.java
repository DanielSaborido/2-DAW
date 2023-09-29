import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class actividad03 {
    /*Muestra los números múltiplos de 5 de 0 a 100 utilizando un bucle for. */
    public static void multiplosFor() {
        StringBuilder resultado = new StringBuilder("Números múltiplos de 5 de 0 a 100:\n");

        for (int numero = 0; numero <= 100; numero++) {
            if (numero % 5 == 0) {
                resultado.append(numero).append(", ");
            }
        }
        System.out.println(resultado);
    }

    /*Muestra los números múltiplos de 5 de 0 a 100 utilizando un bucle While. */
    public static void multiplosWhile() {
        System.out.println("Números múltiplos de 5 de 0 a 100:");

        int numero = 0;
        while (numero <= 100) {
            if (numero % 5 == 0) {
                System.out.println(numero);
            }
            numero++;
        }
    }

    /*Muestra los números múltiplos de 5 de 0 a 100 utilizando un bucle Do-While. */
    public static void multiplosDoWhile() {
        System.out.println("Números múltiplos de 5 de 0 a 100:");

        int numero = 0;
        do {
            if (numero % 5 == 0) {
                System.out.println(numero);
            }
            numero++;
        } while (numero <= 100);
    }

    /*Muestra los números del 320 al 160, contando de 20 en 20 hacia atrás utilizando un bucle for . */
    public static void conteoFor20() {
        System.out.println("Números del 320 al 160, contando de 20 en 20 hacia atrás:");

        for (int numero = 320; numero >= 160; numero -= 20) {
            System.out.println(numero);
        }
    }

    /*Muestra los números del 320 al 160, contando de 20 en 20 hacia atrás utilizando un bucle While . */
    public static void conteoWhile20() {
        System.out.println("Números del 320 al 160, contando de 20 en 20 hacia atrás con un bucle while:");

        int numero = 320;
        while (numero >= 160) {
            System.out.println(numero);
            numero -= 20;
        }
    }

    /*Muestra los números del 320 al 160, contando de 20 en 20 hacia atrás utilizando un bucle Do-While . */
    public static void conteoDoWhile20() {
        System.out.println("Números del 320 al 160, contando de 20 en 20 hacia atrás:");

        int numero = 320;
        do {
            System.out.println(numero);
            numero -= 20;
        } while (numero >= 160);
    }

    /*Realiza el control de acceso a una caja fuerte. La combinación será un número de 4 cifras. El
    programa nos pedirá la combinación para abrirla. Si no acertamos, se nos mostrará el mensaje
    “Lo siento, esa no es la combinación” y si acertamos se nos dirá “La caja fuerte se ha abierto
    satisfactoriamente”. Tendremos cuatro oportunidades para abrir la caja fuerte.*/
    public static void cajaFuerte() {
        System.out.println("Acceder a la caja fuerte:");

        int combinacion = 2003;
        int intento = 0;
        Scanner scanner = new Scanner(System.in);
        while (intento < 5) {
            System.out.print("Introduzca una combinacion: ");
            int intentoCombinacion = scanner.nextInt();
            if (intentoCombinacion == combinacion) {
                System.out.println("La caja fuerte se ha abierto satisfactoriamente");
                break;
            }else{
                System.out.println("Lo siento, esa no es la combinacion");
                intento++;
            }
        }
    }

    /*Muestra la tabla de multiplicar de un número introducido por teclado */
    public static void tablaMultiplicar(int numero) {
        for (int multiplo = 1; multiplo <= 10; multiplo++) {
            System.out.println(numero+" X "+multiplo+" = "+numero * multiplo);
        }
    }

    /*Realiza un programa que nos diga cuántos dígitos tiene un número introducido por teclado. */
    public static void digitosNumero(int numero) {
        if (numero < 0) {
            numero = -numero;
        }

        int contador = 0;
        do {
            numero = numero / 10;
            contador++;
        } while (numero > 0);

        System.out.println("El número tiene " + contador + " dígitos.");
    }

    /*Escribe un programa que calcule la media de un conjunto de números positivos introducidos por
    teclado. A priori, el programa no sabe cuántos números se introducirán. El usuario indicará que
    ha terminado de introducir los datos cuando meta un número negativo. */
    private static void mediaPositivos() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Introduzca un número positivo (para finalizar introduzca uno negativo): ");
        System.out.print("Introduzca un números: ");
        int numero = scanner.nextInt();
        int cumulo = 0;
        int conteo = 0;
        while (numero >= 0) {
            cumulo+= numero;
            conteo++;
            System.out.print("Introduzca un número positivo (para finalizar introduzca uno negativo): ");
            numero = scanner.nextInt();
        }
        System.out.println("La media de un número introducidos es: " + cumulo / conteo);
    }

    /*Escribe un programa que muestre en tres columnas, el cuadrado y el cubo de los 5 primeros
    números enteros a partir de uno que se introduce por teclado. */
    private static void cuadradoCubo(int numero) {
        System.out.println("Número\tCuadrado\tCubo");

        for (int i = numero; i < numero + 5; i++) {
            int cuadrado = i * i;
            int cubo = i * i * i;
            System.out.println(i + "\t" + cuadrado + "\t\t" + cubo);
        }
    }

    /*Escribe un programa que muestre los n primeros términos de la serie de Fibonacci. El primer término de la serie de Fibonacci es
    0, el segundo es 1 y el resto se calcula sumando los dos anteriores,
    por lo que tendríamos que los términos son 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144... El número n se
    debe introducir por teclado. */
    private static void serieFibonacci(int numero) {
        System.out.println("Serie de Fibonacci: ");

        int numero1 = 0;
        int numero2 = 1;
        StringBuilder resultado = new StringBuilder(numero1 + ", ");
        for (int i = 0; i < numero-1; i++) {
            resultado.append(numero2).append(", ");
            int numero3 = numero1 + numero2;
            numero1 = numero2;
            numero2 = numero3;
        }
        System.out.println("La cadena de la espiral hasta el numero introducido es: "+resultado);
    }

    /*Escribe un programa que lea una lista de diez números y determine cuántos son positivos, y cuántos son negativos. */
    public static void listaNumeros(List<Integer> numeros){
        StringBuilder positivos = new StringBuilder("Los numeros positivos de la lista son: ");
        StringBuilder negativos = new StringBuilder("Los numeros negativos de la lista son: ");
        for (int i : numeros) {
            if (i >= 0) {
                positivos.append(i).append(", ");
            } else {
                negativos.append(i).append(", ");
            }
        }
        System.out.println(positivos + "\n" + negativos);
    }

    /*Escribe un programa que pida una base y un exponente (entero positivo) y que calcule la potencia.*/
    public static void potencia(int base, int exponente){
        int conteo = 0;
        int resultado = 1;
        do{
            resultado *= base;
        }while (conteo < exponente);
        System.out.println(base + " exponenete "+ exponente + " = " + resultado);
    }

    /*Escribe un programa que dados dos números, uno real (base) y un entero positivo (exponente),
    saque por pantalla todas las potencias con base el numero dado y exponentes entre uno y el exponente introducido.
    No se deben utilizar funciones de exponenciación. Por ejemplo, si introducimos
    el 2 y el 5, se deberán mostrar 2 1 , 2 2 , 2 3 , 2 4 y 2 5 .*/
    public static void exponentes(int base, int exponente){
        StringBuilder resultado = new StringBuilder("La cadena de exponentes es: ");
        for (int i = 1; i < exponente; i++) {
            resultado.append(base).append(i).append(", ");
        }
        System.out.println(resultado);
    }

    /*Escribe un programa que diga si un número introducido por teclado es o no primo. Un número
    primo es aquel que sólo es divisible entre él mismo y la unidad.*/
    public static void confirmarPrimo(int numero){
        boolean esPrimo = true;

        for (int i = 2; i < numero; i++) {
            if (numero % i == 0) {
                esPrimo = false;
                System.out.println("El número no es primo");
                break;
            }
        }
        if (esPrimo) {
            System.out.println("El número es primo");
        }
    }

   /* Realiza un programa que sume los 100 números siguientes a un número entero y positivo introducido por teclado.
    Se debe comprobar que el dato introducido es correcto (que es un número positivo).*/
    public static void suma100(int numero){
        int resultado = numero;
        for (int i = 1; i < 100; i++) {
            resultado += (numero+i);
        }
        System.out.println("La sumatoria de los 100 numeros siguientes es: "+resultado);
    }

   /*Escribe un programa que obtenga los números enteros comprendidos entre dos números intro-
    ducidos por teclado y validados como distintos, el programa debe empezar por el menor de los
    enteros introducidos e ir incrementando de 7 en 7.*/
   public static void numerosComprendidos(int numero1, int numero2){
       if ((numero2 - numero1) % 7 != 0) {
            System.out.println("La diferencia entre ambos numeros no es un múltiplo de 7.");
       } else {
           StringBuilder resultado = new StringBuilder("Los numeros comprendidos entre "+numero1+" y "+numero2+" de 7 en 7 son: ");
           for (int i = numero1; i < numero2; i+=7) {
               resultado.append(i).append(", ");
           }
           System.out.println(resultado);
       }
   }

   /*Realiza un programa que pinte una pirámide por pantalla. La altura se debe pedir por teclado. El
    carácter con el que se pinta la pirámide también se debe pedir por teclado.*/
   public static void piramide(String caracter, int altura) {
       for (int i = 1; i <= altura; i++) {
           for (int j = 1; j <= altura - i; j++) {
               System.out.print(" ");
           }
           for (int k = 1; k <= 2 * i - 1; k++) {
               System.out.print(caracter);
           }
           System.out.println();
       }
   }

    /*Igual que el ejercicio anterior pero esta vez se debe pintar una pirámide hueca.*/
    public static void piramideHueca(String caracter, int altura) {
        for (int i = 1; i <= altura; i++) {
            for (int j = 1; j <= altura - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                if (k == 1 || k == 2 * i - 1){
                    System.out.print(caracter);
                } else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }

    /*Realiza un programa que vaya pidiendo números hasta que se introduzca un numero negativo y
    nos diga cuantos números se han introducido, la media de los impares y el mayor de los pares. El
    número negativo sólo se utiliza para indicar el final de la introducción de datos pero no se incluye
    en el cómputo.*/
    private static void datosPositivos() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Introduzca un número positivo (para finalizar introduzca uno negativo): ");
        System.out.print("Introduzca un números: ");
        int numero = scanner.nextInt();
        int cumuloImpar = 0;
        int mayorPar = 0;
        int conteo = 0;
        while (numero >= 0) {
            if (numero%2!=0){
                cumuloImpar+=numero;
                conteo++;
            } else if (numero % 2 == 0 && numero > mayorPar){
                mayorPar = numero;
            }
            System.out.print("Introduzca un número positivo (para finalizar introduzca uno negativo): ");
            numero = scanner.nextInt();
        }
        System.out.println("Se han introducidos: " + conteo + " números.");
        System.out.println("La media de los números impares introducidos es: " + cumuloImpar/conteo);
        System.out.println("El mayor número par es: " + mayorPar);
    }

    /*Muestra por pantalla todos los números primos entre 2 y 100, ambos incluidos*/
    public static void primos(){
        System.out.println("Números primos entre 2 y 100:");
        boolean esPrimo = true;
        StringBuilder resultado = new StringBuilder("Los números primos son:  ");

        for (int numero = 2; numero <= 100;numero++) {
            esPrimo = true;
            for (int i = 2; i < numero; i++) {
                if (numero % i == 0) {
                    esPrimo = false;
                    break;
                }
            }
            if (esPrimo) {
                resultado.append(numero).append(", ");
            }
        }
        System.out.println(resultado);
    }

    public static <Int> void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            int actividad = 1;
            while (actividad > 0){
                System.out.print("Seleccione la actividad a ejecutar: ");
                actividad = scanner.nextInt();
                int numero;
                switch(actividad){
                    case 0:
                        System.out.println("Dejando las actividades del pdf 03.");
                        break;
                    case 1:
                        multiplosFor();
                        break;
                    case 2:
                        multiplosWhile();
                        break;
                    case 3:
                        multiplosDoWhile();
                        break;
                    case 4:
                        conteoFor20();
                        break;
                    case 5:
                        conteoWhile20();
                        break;
                    case 6:
                        conteoDoWhile20();
                        break;
                    case 7:
                        cajaFuerte();
                        break;
                    case 8:
                        System.out.print("Introduzca un número entero: ");
                        numero = scanner.nextInt();
                        tablaMultiplicar(numero);
                        break;
                    case 9:
                        System.out.print("Introduzca un número entero: ");
                        numero = scanner.nextInt();
                        digitosNumero(numero);
                        break;
                    case 10:
                        mediaPositivos();
                        break;
                    case 11:
                        System.out.print("Introduce un número entero: ");
                        numero = scanner.nextInt();
                        cuadradoCubo(numero);
                        break;
                    case 12:
                        System.out.print("Introduce el límite para la espiral: ");
                        numero = scanner.nextInt();
                        serieFibonacci(numero);
                        break;
                    case 13:
                        int cantidadNumeros = 0;
                        List<Integer> numeros = new ArrayList<>();
                        while (cantidadNumeros < 10) {
                            System.out.print("Introduzca un numero para añadir a la lista: ");
                            numero = scanner.nextInt();
                            numeros.add(numero);
                            cantidadNumeros++;
                        }
                        listaNumeros(numeros);
                        break;
                    case 14:
                        System.out.print("Introduce un número entero: ");
                        numero = scanner.nextInt();
                        System.out.print("Introduce su exponente: ");
                        int exponente = scanner.nextInt();
                        potencia(numero, exponente);
                        break;
                    case 15:
                        System.out.print("Introduce un número entero: ");
                        numero = scanner.nextInt();
                        System.out.print("Introduce su exponente: ");
                        exponente = scanner.nextInt();
                        exponentes(numero, exponente);
                        break;
                    case 16:
                        System.out.print("Introduce un número entero: ");
                        numero = scanner.nextInt();
                        confirmarPrimo(numero);
                        break;
                    case 17:
                        System.out.print("Introduce un número entero: ");
                        numero = scanner.nextInt();
                        suma100(numero);
                        break;
                    case 18:
                        System.out.print("Introduce un número entero: ");
                        int numero1 = scanner.nextInt();
                        System.out.print("Introduce un número entero: ");
                        int numero2 = scanner.nextInt();
                        numerosComprendidos(numero1, numero2);
                        break;
                    case 19:
                        System.out.print("Ingrese el carácter para rellenar la pirámide: ");
                        String caracter = scanner.next();
                        System.out.print("Ingresa la altura de la piramide: ");
                        int altura = scanner.nextInt();
                        piramide(caracter,  altura);
                        break;
                    case 20:
                        System.out.print("Ingrese el carácter para rellenar la pirámide: ");
                        caracter = scanner.next();
                        System.out.print("Ingresa la altura de la piramide: ");
                        altura = scanner.nextInt();
                        piramideHueca(caracter,  altura);
                        break;
                    case 21:
                        datosPositivos();
                        break;
                    case 22:
                        primos();
                        break;
                }
            }
        }
    }
}
