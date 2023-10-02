import java.util.Arrays;
import java.util.HashSet;
import java.util.Random;
import java.util.Set;
import java.util.Scanner;

public class actividad05_1 {
    static Random random = new Random();
    static Scanner scanner = new Scanner(System.in);
    /*Define un array de números enteros de 3 filas por 6 columnas con nombre num y asigna los
    valores según la siguiente tabla. Muestra el contenido de todos los elementos del array dispuestos
    en forma de tabla como se muestra en la figura*/
    public static void tabla(){
        //int[][] num = {{0, 30, 2, , , 5}, {75, , , , 0, }, { , , -2, 9, , 11}};No permite tener partes vacias o null
        String[][] num = {{"0", "30", "2", " ", " ", "5"}, {"75", " ", " ", " ", "0", " "}, {" ", " ", "-2", "9", " ", "11"}};
        for (String[] fila : num) {
            for (String elemento : fila) {
                System.out.print(elemento+"\t|");
            }
            System.out.println();
        }
    }

    /*Escribe un programa que pida 20 números enteros. Estos números se deben introducir en un array
    de 4 filas por 5 columnas. El programa mostrará las sumas parciales de filas y columnas igual que
    si de una hoja de cálculo se tratara. La suma total debe aparecer en la esquina inferior derecha.*/
    public static void tablaEnterosManual(){
        int[][] tabla = new int[5][6];
        int sumatoria = 0;
        int sumaTotal = 0;
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 5;j++){
                System.out.print("Introduce un número: ");
                tabla[i][j] = scanner.nextInt();
                sumatoria += tabla[i][j];
            }
            tabla[i][5] = sumatoria;
            sumaTotal += sumatoria;
            sumatoria = 0;
        }
        for (int j = 0; j < 5;j++){
            for (int i = 0; i < 4; i++) {
                sumatoria += tabla[i][j];
            }
            tabla[4][j] = sumatoria;
            sumatoria = 0;
        }
        tabla[4][5] = sumaTotal;
        for (int[] fila : tabla) {
            for (int numero : fila) {
                System.out.print(numero+"\t|");
            }
            System.out.println();
        }
    }

    /*Modifica el programa anterior de tal forma que los números que se introducen en el array se
    generen de forma aleatoria (valores entre 100 y 999).*/
    public static void tablaEnteros(){
        int[][] tabla = new int[5][6];
        int sumatoria = 0;
        int sumaTotal = 0;
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 5;j++){
                tabla[i][j] = random.nextInt(900)+100;
                sumatoria += tabla[i][j];
            }
            tabla[i][5] = sumatoria;
            sumaTotal += sumatoria;
            sumatoria = 0;
        }
        for (int j = 0; j < 5;j++){
            for (int i = 0; i < 4; i++) {
                sumatoria += tabla[i][j];
            }
            tabla[4][j] = sumatoria;
            sumatoria = 0;
        }
        tabla[4][5] = sumaTotal;
        for (int[] fila : tabla) {
            for (int numero : fila) {
                System.out.print(numero+"\t\t|");
            }
            System.out.println();
        }
    }

    /*Modifica el programa anterior de tal forma que las sumas parciales y la suma total aparezcan en la
    pantalla con un pequeño retardo, dando la impresión de que el ordenador se queda “pensando”
    antes de mostrar los números.*/
    public static void tablaEnterosRetardado() throws InterruptedException {
        int[][] tabla = new int[5][6];
        int sumatoria = 0;
        int sumaTotal = 0;
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 5;j++){
                tabla[i][j] = random.nextInt(900)+100;
                sumatoria += tabla[i][j];
            }
            tabla[i][5] = sumatoria;
            sumaTotal += sumatoria;
            sumatoria = 0;
        }
        for (int j = 0; j < 5;j++){
            for (int i = 0; i < 4; i++) {
                sumatoria += tabla[i][j];
            }
            tabla[4][j] = sumatoria;
            sumatoria = 0;
        }
        tabla[4][5] = sumaTotal;
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 6;j++){
                if (tabla[i][j] == tabla[i][5]){
                    Thread.sleep(1000);
                }
                if (tabla[i][j] == tabla[4][j]){
                    Thread.sleep(1000);
                }
                System.out.print(tabla[i][j]+"\t\t|");
            }
            System.out.println();
        }
    }

    /*Realiza un programa que rellene un array de 6 filas por 10 columnas con números enteros positivos comprendidos entre 0 y 1000 (ambos incluidos).
    A continuación, el programa deberá dar la posición tanto del máximo como del mínimo.*/
    public static void maxminTabla(){
        int[][] tabla = new int[6][10];
        for (int i = 0; i < 6; i++) {
            for (int j = 0; j < 10;j++){
                tabla[i][j] = random.nextInt(1001);
            }
        }
        int max = Arrays.stream(tabla).flatMapToInt(Arrays::stream).max().getAsInt();
        int min = Arrays.stream(tabla).flatMapToInt(Arrays::stream).min().getAsInt();
        StringBuilder resultadoMax = new StringBuilder("El número maximo está en la posición: ");
        StringBuilder resultadoMin = new StringBuilder("El número mínimo está en la posición: ");

        for (int[] fila : tabla) {
            for (int numero : fila) {
                System.out.print(numero+"\t\t|");
            }
            System.out.println();
        }
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 6;j++){
                if (tabla[i][j] == max){
                    resultadoMax.append("{").append(i).append(", ").append(j).append("} ");
                }
                if (tabla[i][j] == min){
                    resultadoMin.append("{").append(i).append(", ").append(j).append("} ");
                }
            }
        }

        System.out.println(resultadoMax+"\n"+resultadoMin);
    }

    /*Modifica el programa anterior de tal forma que no se repita ningún número en el array.*/
    public static void maxminTablaSinRepetir(){
        int[][] tabla = new int[6][10];
        Set<Integer> numerosGenerados = new HashSet<>();
        for (int i = 0; i < 6; i++) {
            for (int j = 0; j < 10; j++) {
                int numero;
                do {
                    numero = random.nextInt(1001);
                } while (numerosGenerados.contains(numero));

                numerosGenerados.add(numero);
                tabla[i][j] = numero;
            }
        }
        int max = Arrays.stream(tabla).flatMapToInt(Arrays::stream).max().getAsInt();
        int min = Arrays.stream(tabla).flatMapToInt(Arrays::stream).min().getAsInt();
        StringBuilder resultadoMax = new StringBuilder("El número maximo está en la posición: ");
        StringBuilder resultadoMin = new StringBuilder("El número mínimo está en la posición: ");

        for (int[] fila : tabla) {
            for (int numero : fila) {
                System.out.print(numero+"\t\t|");
            }
            System.out.println();
        }
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 6;j++){
                if (tabla[i][j] == max){
                    resultadoMax.append("{").append(i).append(", ").append(j).append("} ");
                }
                if (tabla[i][j] == min){
                    resultadoMin.append("{").append(i).append(", ").append(j).append("} ");
                }
            }
        }

        System.out.println(resultadoMax+"\n"+resultadoMin);
    }

    /*mejora el juego “Busca el tesoro” de tal forma que si hay una mina a una casilla de distancia, el
    programa avise diciendo ¡Cuidado! ¡Hay una mina cerca!*/
    public static void tesoro(){
        int[][] tablero = new int[5][5];
        int tesoroX = random.nextInt(5);
        int tesoroY = random.nextInt(5);
        tablero[tesoroX][tesoroY] = 1;

        for (int i = 0; i < 3; i++) {
            int minaX, minaY;
            do {
                minaX = random.nextInt(5);
                minaY = random.nextInt(5);
            } while (tablero[minaX][minaY] == 1 || tablero[minaX][minaY] == 2);
            tablero[minaX][minaY] = 2;
        }

        boolean encontrado = false;
        int intentos = 0;
        while (!encontrado) {
            System.out.println("Busca el tesoro. Ingresa la coordenada X (0-4):");
            int x = scanner.nextInt();
            System.out.println("Ingresa la coordenada Y (0-4):");
            int y = scanner.nextInt();
            boolean mina=false;

            if (x < 0 || x > 4 || y < 0 || y > 4) {
                System.out.println("Coordenadas fuera del rango. Debes ingresar valores entre 0 y 4.");
            } else {
                intentos++;
                if (tablero[x][y] == 1) {
                    System.out.println("¡Encontraste el tesoro en " + intentos + " intentos!");
                    encontrado = true;
                }
                for (int i = x - 1; i <= x + 1; i++) {
                    for (int j = y - 1; j <= y + 1; j++) {
                        if (i >= 0 && i < 5 && j >= 0 && j < 5 && tablero[i][j] == 2) {
                            mina = true;
                            break;
                        }
                    }
                }
                if (mina){
                    System.out.println("¡Cuidado! ¡Hay una mina cerca!");
                } else {
                    System.out.println("No hay nada aquí. Sigue buscando.");
                }
            }
        }
    }

    /*Escribe un programa que, dada una posición en un tablero de ajedrez, nos diga a qué casillas
    podría saltar un alfil que se encuentra en esa posición. Como se indica en la figura, el alfil se
    mueve siempre en diagonal. El tablero cuenta con 64 casillas. Las columnas se indican con las
    letras de la “a” a la “h” y las filas se indican del 1 al 8.*/
    public static void alfil(){
        System.out.print("Ingrese la posición del alfil (por ejemplo, 'c4'): ");
        String posicion = scanner.next();

        if (posicion.length() != 2 || !Character.isLetter(posicion.charAt(0)) || !Character.isDigit(posicion.charAt(1))) {
            System.out.println("Entrada no válida. Debe ingresar una posición válida, por ejemplo, 'c4'.");
            scanner.close();
            return;
        }

        int fila = 8 - Character.getNumericValue(posicion.charAt(1));
        int columna = posicion.charAt(0) - 'a';
        System.out.println("El alfil en " + posicion + " podría saltar a las siguientes casillas:");

        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                if (Math.abs(fila - i) == Math.abs(columna - j) && (fila != i || columna != j)) {
                    char columnaSalto = (char) (j + 'a');
                    int filaSalto = 8 - i;
                    System.out.print(columnaSalto + "" + filaSalto + " ");
                }
            }
        }
    }

    /*Realiza un programa que sea capaz de rotar todos los elementos de una matriz cuadrada una
    posición en el sentido de las agujas del reloj. La matriz debe tener 12 filas por 12 columnas y debe
    contener números generados al azar entre 0 y 100. Se debe mostrar tanto la matriz original como
    la matriz resultado, ambas con los números convenientemente alineados.*/
    public static void reloj(){
        int[][] matrizOriginal = new int[12][12];
        int[][] matrizResultado = new int[12][12];

        for (int i = 0; i < 12; i++) {
            for (int j = 0; j < 12; j++) {
                matrizOriginal[i][j] = random.nextInt(101); // Números entre 0 y 100
            }
        }
        for (int i = 0; i < 12; i++) {
            for (int j = 0; j < 12; j++) {
                matrizResultado[j][11 - i] = matrizOriginal[i][j];
            }
        }

        System.out.println("Matriz Original:");
        for (int i = 0; i < 12; i++) {
            for (int j = 0; j < 12; j++) {
                System.out.printf("%3d ", matrizOriginal[i][j]);
            }
            System.out.println();
        }
        System.out.println("\nMatriz Rotada:");
        for (int i = 0; i < 12; i++) {
            for (int j = 0; j < 12; j++) {
                System.out.printf("%3d ", matrizResultado[i][j]);
            }
            System.out.println();
        }
    }

    /*Realiza el juego de las tres en raya.*/
    public static void tresRayas(){
        char[][] tablero = {
                {' ', ' ', ' '},
                {' ', ' ', ' '},
                {' ', ' ', ' '}
        };
        char jugadorActual = 'X';
        boolean juegoTerminado = false;
        int movimientos = 0;
        System.out.println("¡Bienvenido al juego de Tres en Línea!");

        while (!juegoTerminado && movimientos < 9) {
            System.out.println("-------------");
            for (int i = 0; i < 3; i++) {
                System.out.print("| ");
                for (int j = 0; j < 3; j++) {
                    System.out.print(tablero[i][j] + " | ");
                }
                System.out.println("\n-------------");
            }
            int fila, columna;
            boolean victoria = false;
            boolean valido;

            do {
                valido = true;
                System.out.print("Jugador " + jugadorActual + ", ingresa fila (0-2): ");
                fila = scanner.nextInt();
                System.out.print("Jugador " + jugadorActual + ", ingresa columna (0-2): ");
                columna = scanner.nextInt();
                if (fila < 0 || fila >= 3 || columna < 0 || columna >= 3 || tablero[fila][columna] != ' ') {
                    System.out.println("Movimiento inválido. Inténtalo de nuevo.");
                    valido = false;
                }
            } while (!valido);
            tablero[fila][columna] = jugadorActual;
            movimientos++;
            for (int i = 0; i < 3; i++) {
                if (tablero[i][0] == jugadorActual && tablero[i][1] == jugadorActual && tablero[i][2] == jugadorActual) {
                    victoria = true;
                    break;
                }
            }
            for (int j = 0; j < 3; j++) {
                if (tablero[0][j] == jugadorActual && tablero[1][j] == jugadorActual && tablero[2][j] == jugadorActual) {
                    victoria = true;
                    break;
                }
            }
            if (tablero[0][0] == jugadorActual && tablero[1][1] == jugadorActual && tablero[2][2] == jugadorActual) {
                victoria = true;
            }
            if (tablero[0][2] == jugadorActual && tablero[1][1] == jugadorActual && tablero[2][0] == jugadorActual) {
                victoria = true;
            }
            if (victoria) {
                System.out.println("-------------");
                for (int i = 0; i < 3; i++) {
                    System.out.print("| ");
                    for (int j = 0; j < 3; j++) {
                        System.out.print(tablero[i][j] + " | ");
                    }
                    System.out.println("\n-------------");
                }
                System.out.println("¡El jugador " + jugadorActual + " ha ganado!");
                juegoTerminado = true;
            } else {
                jugadorActual = (jugadorActual == 'X') ? 'O' : 'X';
            }
        }
        if (!juegoTerminado) {
            System.out.println("-------------");
            for (int i = 0; i < 3; i++) {
                System.out.print("| ");
                for (int j = 0; j < 3; j++) {
                    System.out.print(tablero[i][j] + " | ");
                }
                System.out.println("\n-------------");
            }
            System.out.println("¡Empate! El juego ha terminado en empate.");
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
                        System.out.println("Dejando las actividades del pdf 05.1.");
                        break;
                    case 1:
                        tabla();
                        break;
                    case 2:
                        tablaEnterosManual();
                        break;
                    case 3:
                        tablaEnteros();
                        break;
                    case 4:
                        tablaEnterosRetardado();
                        break;
                    case 5:
                        maxminTabla();
                        break;
                    case 6:
                        maxminTablaSinRepetir();
                        break;
                    case 7:
                        tesoro();
                        break;
                    case 8:
                        alfil();
                        break;
                    case 9:
                        reloj();
                        break;
                    case 10:
                        tresRayas();
                        break;
                }
            }
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
