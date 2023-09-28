import java.util.Scanner;

public class actividad03 {
    /*Muestra los números múltiplos de 5 de 0 a 100 utilizando un bucle for. */
    public static void multiplosFor() {
        System.out.println("Números múltiplos de 5 de 0 a 100:");

        for (int numero = 0; numero <= 100; numero++) {
            if (numero % 5 == 0) {
                System.out.println(numero);
            }
        }
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
        String resultado = numero1 + ", ";
        for (int i = 0; i < numero; i++) {
            resultado += numero2 + ", ";
            int numero3 = numero1 + numero2;
            numero1 = numero2;
            numero2 = numero3;
        }
        System.out.println("La cadena de la espiral hasta el numero introducido es: "+resultado);
    }

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            int actividad = 1;
            while (actividad > 0){
                System.out.print("Seleccione la actividad a ejecutar: ");
                actividad = scanner.nextInt();
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
                        System.out.print("Introduzca un numero: ");
                        int numero = scanner.nextInt();
                        tablaMultiplicar(numero);
                        break;
                    case 9:
                        System.out.print("Introduzca un numero: ");
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
                        
                        break;
                    case 14:
                        
                        break;
                    case 15:
                        
                        break;
                    case 16:
                        
                        break;
                    case 17:
                        
                        break;
                    case 18:
                        
                        break;
                    case 19:
                        
                        break;
                    case 20:
                        
                        break;
                    case 21:
                        
                        break;
                    case 22:

                        break;
                }
            }
        }
    }
}