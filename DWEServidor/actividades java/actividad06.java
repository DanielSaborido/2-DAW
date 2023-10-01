import java.util.*;

public class actividad06 {
    static Random random = new Random();
    static Scanner scanner = new Scanner(System.in);
    /*Crea una biblioteca de funciones matemáticas que contenga las siguientes funciones. Recuerda
    que puedes usar unas dentro de otras si es necesario.
    1. esCapicua: Devuelve verdadero si el número que se pasa como parámetro es capicúa y falso en caso contrario.
    1. esPrimo: Devuelve verdadero si el número que se pasa como parámetro
    es primo y falso en caso contrario.
    1. siguientePrimo: Devuelve el menor primo que es mayor al número que
    se pasa como parámetro.
    1. potencia: Dada una base y un exponente devuelve la potencia.
    2. digitos: Cuenta el número de dígitos de un número entero.
    3. voltea: Le da la vuelta a un número.
    4. digitoN: Devuelve el dígito que está en la posición n de un número
    entero. Se empieza contando por el 0 y de izquierda a derecha.
    1. posicionDeDigito: Da la posición de la primera ocurrencia de un dígito
    dentro de un número entero. Si no se encuentra, devuelve -1.
    1. quitaPorDetras: Le quita a un número n dígitos por detrás (por la
    derecha).
    1. quitaPorDelante: Le quita a un número n dígitos por delante (por la
    izquierda).
    1. pegaPorDetras: Añade un dígito a un número por detrás.
    2. pegaPorDelante: Añade un dígito a un número por delante.
    3. trozoDeNumero: Toma como parámetros las posiciones inicial y final
    dentro de un número y devuelve el trozo correspondiente.
    1. juntaNumeros: Pega dos números para formar uno*/
    public static boolean esCapicua(int numero) {
        return numero == voltea(numero);
    }
    public static boolean esPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }
    public static int siguientePrimo(int numero) {
        int siguiente = numero + 1;
        while (true) {
            if (esPrimo(siguiente)) {
                return siguiente;
            }
            siguiente++;
        }
    }
    public static double potencia(double base, int exponente) {
        return Math.pow(base, exponente);
    }
    public static int digitos(int numero) {
        return Integer.toString(numero).length();
    }
    public static int voltea(int numero) {
        int resultado = 0;
        while (numero > 0) {
            resultado = resultado * 10 + numero % 10;
            numero /= 10;
        }
        return resultado;
    }
    public static int digitoN(int numero, int posicion) {
        int volteado = voltea(numero);
        for (int i = 0; i < posicion; i++) {
            volteado /= 10;
        }
        return volteado % 10;
    }
    public static int posicionDeDigito(int numero, int digito) {
        int volteado = voltea(numero);
        int posicion = 0;
        while (volteado > 0) {
            if (volteado % 10 == digito) {
                return posicion;
            }
            volteado /= 10;
            posicion++;
        }
        return -1;
    }
    public static int quitaPorDetras(int numero, int digitos) {
        return numero / (int) potencia(10, digitos);
    }
    public static int quitaPorDelante(int numero, int digitos) {
        return numero % (int) potencia(10, digitos);
    }
    public static int pegaPorDetras(int numero, int digito) {
        return numero * 10 + digito;
    }
    public static int pegaPorDelante(int numero, int digito) {
        int potencia = (int) potencia(10, digitos(digito));
        return numero + potencia * digito;
    }
    public static int trozoDeNumero(int numero, int inicio, int fin) {
        int longitud = digitos(numero);
        int potenciaInicio = (int) potencia(10, longitud - inicio - 1);
        int potenciaFin = (int) potencia(10, longitud - fin - 1);
        return (numero / potenciaInicio) % potenciaFin;
    }
    public static int juntaNumeros(int numero1, int numero2) {
        return numero1 * (int) potencia(10, digitos(numero2)) + numero2;
    }


    /*Muestra los números primos que hay entre 1 y 1000.*/
    public static void primos(){
        System.out.println("Números primos entre 1 y 1000:");

        for (int i = 1; i <= 1000; i++) {
            if (esPrimo(i)) {
                System.out.print(i + " ");
            }
        }
    }

    /*Muestra los números capicúa que hay entre 1 y 99999*/
    public static void capicua(){
        System.out.println("Números capicúa entre 1 y 99999:");

        for (int i = 1; i <= 99999; i++) {
            if (esCapicua(i)) {
                System.out.print(i + " ");
            }
        }
    }

    /*Escribe un programa que pase de binario a decimal*/
    public static void binarioDecimal(){
        System.out.print("Introduzca un numero en binario: ");
        String binario = scanner.next();
        int longitud = binario.length();
        int decimal = 0;

        for (int i = 0; i < longitud; i++) {
            char digito = binario.charAt(i);
            int valor = Character.getNumericValue(digito);
            if (valor != 0 && valor != 1) {
                System.out.println("Número binario no válido.");
                return;
            }

            decimal += (int) (valor * Math.pow(2, longitud - 1 - i));
        }
        System.out.println("El número en decimal es: "+decimal);
    }

    /*Escribe un programa que pase de decimal a binario*/
    public static void decimalBinario(){
        System.out.print("Introduzca un número decimal: ");
        int decimal = scanner.nextInt();

        if (decimal < 0) {
            System.out.println("Número decimal no válido. Debe ser un número no negativo.");
            return;
        }
        StringBuilder binario = new StringBuilder();
        if (decimal == 0) {
            binario.append(0);
        } else {
            while (decimal > 0) {
                int residuo = decimal % 2;
                binario.insert(0, residuo);
                decimal = decimal / 2;
            }
        }

        System.out.println("El número en binario es: " + binario);
    }

    /*Une y amplía los dos programas anteriores de tal forma que se permita convertir un número entre
    cualquiera de las siguientes bases: decimal, binario, hexadecimal y octal.*/
    public static void decimalBinarioHexadecimalOctal(){
        int opcion = 1;
        while (opcion!=0) {
            System.out.println("Elija una opción:");
            System.out.println("0. Salir");
            System.out.println("1. Decimal a Binario");
            System.out.println("2. Binario a Decimal");
            System.out.println("3. Decimal a Hexadecimal");
            System.out.println("4. Hexadecimal a Decimal");
            System.out.println("5. Decimal a Octal");
            System.out.println("6. Octal a Decimal");
            System.out.print("Ingrese el número de la opción: ");
            opcion = scanner.nextInt();

            switch (opcion) {
                case 0:
                    System.out.println("Saliendo de la actividad.");
                    break;
                case 1:
                    decimalBinario();
                    break;
                case 2:
                    binarioDecimal();
                    break;
                case 3:
                    decimalHexadecimal();
                    break;
                case 4:
                    hexadecimalDecimal();
                    break;
                case 5:
                    decimalOctal();
                    break;
                case 6:
                    octalDecimal();
                    break;
                default:
                    System.out.println("Opción no válida. Por favor, seleccione una opción válida.");
                    break;
            }
        }
    }
    public static void decimalHexadecimal() {
        System.out.print("Introduzca un número decimal: ");
        int decimal = scanner.nextInt();
        String hexadecimal = Integer.toHexString(decimal).toUpperCase();
        System.out.println("El número en hexadecimal es: " + hexadecimal);
    }
    public static void hexadecimalDecimal() {
        System.out.print("Introduzca un número en hexadecimal: ");
        String hexadecimal = scanner.next();
        try {
            int decimal = Integer.parseInt(hexadecimal, 16);
            System.out.println("El número en decimal es: " + decimal);
        } catch (NumberFormatException e) {
            System.out.println("Número hexadecimal no válido.");
        }
    }
    public static void decimalOctal() {
        System.out.print("Introduzca un número decimal: ");
        int decimal = scanner.nextInt();
        String octal = Integer.toOctalString(decimal);
        System.out.println("El número en octal es: " + octal);
    }
    public static void octalDecimal() {
        System.out.print("Introduzca un número en octal: ");
        String octal = scanner.next();
        try {
            int decimal = Integer.parseInt(octal, 8);
            System.out.println("El número en decimal es: " + decimal);
        } catch (NumberFormatException e) {
            System.out.println("Número octal no válido.");
        }
    }

    /*Crea una biblioteca de funciones para arrays (de una dimensión) de números enteros que contenga
    las siguientes funciones:
    1. generaArrayInt: Genera un array de tamaño n con números aleatorios
    cuyo intervalo (mínimo y máximo) se indica como parámetro.
    1. minimoArrayInt: Devuelve el mínimo del array que se pasa como
    parámetro.
    1. maximoArrayInt: Devuelve el máximo del array que se pasa como
    parámetro.
    1. mediaArrayInt: Devuelve la media del array que se pasa como parámetro.
    1. estaEnArrayInt: Dice si un número está o no dentro de un array.
    2. posicionEnArray: Busca un número en un array y devuelve la posición
    (el índice) en la que se encuentra.
    1. volteaArrayInt: Le da la vuelta a un array.
    2. rotaDerechaArrayInt: Rota n posiciones a la derecha los números de
    un array.
    1. rotaIzquierdaArrayInt: Rota n posiciones a la izquierda los números de
    un array*/
    public static int[] generaArrayInt() {
        System.out.print("Introduzca tamaño del array: ");
        int n = scanner.nextInt();
        System.out.print("Introduzca un número mínimo del array: ");
        int min = scanner.nextInt();
        System.out.print("Introduzca un número máximo del array: ");
        int max = scanner.nextInt();
        int[] array = new int[n];
        Random rand = new Random();

        for (int i = 0; i < n; i++) {
            array[i] = rand.nextInt((max - min) + 1) + min;
        }

        return array;
    }
    public static int minimoArrayInt(int[] array) {
        int min = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
    public static int maximoArrayInt(int[] array) {
        int max = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
    public static double mediaArrayInt(int[] array) {
        int sum = 0;
        for (int num : array) {
            sum += num;
        }
        return (double) sum / array.length;
    }
    public static boolean estaEnArrayInt(int[] array, int num) {
        for (int i : array) {
            if (i == num) {
                return true;
            }
        }
        return false;
    }
    public static int posicionEnArray(int[] array, int num) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] == num) {
                return i;
            }
        }
        return -1;
    }
    public static int[] volteaArrayInt(int[] array) {
        int left = 0;
        int right = array.length - 1;

        while (left < right) {
            int temp = array[left];
            array[left] = array[right];
            array[right] = temp;

            left++;
            right--;
        }
        return array;
    }
    public static void rotaDerechaArrayInt(int[] array, int n) {
        int len = array.length;
        n = n % len;

        int[] temp = new int[len];

        for (int i = 0; i < len; i++) {
            temp[(i + n) % len] = array[i];
        }

        for (int i = 0; i < len; i++) {
            array[i] = temp[i];
        }
    }
    public static void rotaIzquierdaArrayInt(int[] array, int n) {
        int len = array.length;
        n = n % len;

        int[] temp = new int[len];

        for (int i = 0; i < len; i++) {
            temp[i] = array[(i + n) % len];
        }

        for (int i = 0; i < len; i++) {
            array[i] = temp[i];
        }
    }


    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            int actividad = 1;
            while (actividad > 0){
                System.out.print("\nSeleccione la actividad a ejecutar: ");
                actividad = scanner.nextInt();
                switch(actividad){
                    case 0:
                        System.out.println("Dejando las actividades del pdf 06.");
                        break;
                    case 1:
                        System.out.print("Introduzca un número base: ");
                        int numero = scanner.nextInt();
                        System.out.println("Es capicúa: " + esCapicua(numero));
                        System.out.println("Es primo: " + esPrimo(numero));
                        System.out.println("Siguiente primo: " + siguientePrimo(numero));
                        System.out.print("Introduzca un exponente: ");
                        int exponente = scanner.nextInt();
                        System.out.println("Potencia: " + potencia(numero, exponente));
                        System.out.println("Dígitos: " + digitos(numero));
                        System.out.println("Voltea: " + voltea(numero));
                        System.out.print("Introduzca una posicion: ");
                        int posicion = scanner.nextInt();
                        System.out.println("Dígito en posición: " + digitoN(numero, posicion));
                        System.out.println("Posición de dígito: " + posicionDeDigito(numero, posicion));
                        System.out.print("Introduzca cuantos numeros quitar: ");
                        int numero2 = scanner.nextInt();
                        System.out.println("Quitar por detrás: " + quitaPorDetras(numero, numero2));
                        System.out.println("Quitar por delante: " + quitaPorDelante(numero, numero2));
                        System.out.print("Introduzca que numero juntar: ");
                        numero2 = scanner.nextInt();
                        System.out.println("Juntar por detrás: " + pegaPorDetras(numero, numero2));
                        System.out.println("Juntar por delante: " + pegaPorDelante(numero, numero2));
                        System.out.println("Número juntado: " + juntaNumeros(numero, numero2));
                        System.out.print("Introduzca por donde comenzar a separar: ");
                        int inicio = scanner.nextInt();
                        System.out.print("Introduzca por donde terminar de separar: ");
                        int fin = scanner.nextInt();
                        System.out.println("Troceado: " + trozoDeNumero(numero, inicio, fin));
                        break;
                    case 2:
                        primos();
                        break;
                    case 3:
                        capicua();
                        break;
                    case 4:
                        binarioDecimal();
                        break;
                    case 5:
                        decimalBinario();
                        break;
                    case 6:
                        decimalBinarioHexadecimalOctal();
                        break;
                    case 7:
                        int[] array = generaArrayInt();
                        System.out.println("El mínimo del array es: " + minimoArrayInt(array));
                        System.out.println("El máximo del array es: " + maximoArrayInt(array));
                        System.out.println("La media del array es: " + mediaArrayInt(array));
                        System.out.print("Introduzca un número para buscar en el array: ");
                        numero = scanner.nextInt();
                        System.out.println("El número esta en el array: " + estaEnArrayInt(array, numero));
                        System.out.println("El número esta en la posicion del array: " + posicionEnArray(array, numero));
                        System.out.println("La array invertida es: ");
                        int[] nuevoArray = volteaArrayInt(array);
                        for (int j : nuevoArray) {
                            System.out.print(j + " ");
                        }
                        break;
                }
            }
        }
    }
}
