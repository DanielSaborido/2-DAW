import java.util.Arrays;
import java.util.Random;
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

    /*Escribe un programa que lea 15 números por teclado y que los almacene en un array. Rota los
    elementos de ese array, es decir, el elemento de la posición 0 debe pasar a la posición 1, el de la 1 a
    la 2, etc. El número que se encuentra en la última posición debe pasar a la posición 0. Finalmente,
    muestra el contenido del array*/
    public static void rotacion(){
        int[] numeros = new int[15];
        int[] rotado = new int[15];

        for (int i = 0; i < 15; i++) {
            System.out.print("Introduce un número: ");
            int opcion = scanner.nextInt();
            numeros[i] = opcion;
        }
        rotado[0] = numeros[14];
        System.arraycopy(numeros, 0, rotado, 1, 14);

        System.out.print(Arrays.toString(numeros));
        System.out.print(Arrays.toString(rotado));
    }

    /*Escribe un programa que genere 100 números aleatorios del 0 al 20 y que los muestre por pantalla
    separados por espacios. El programa pedirá entonces por teclado dos valores y a continuación
    cambiará todas las ocurrencias del primer valor por el segundo en la lista generada anteriormente.
    Los números que se han cambiado deben aparecer entrecomillados*/
    public static void intercambio(){
        int[] numeros = new int[100];

        for (int i = 0; i < 100; i++) {
            numeros[i] = random.nextInt(21);
        }
        for (int numero : numeros) {
            System.out.print(numero+" ");
        }
        System.out.print("\nIntroduce el numero que quieres cambiar: ");
        int opcion = scanner.nextInt();
        System.out.print("\nIntroduce el numero por el que vas a cambiar: ");
        int cambio = scanner.nextInt();
        for (int numero : numeros) {
            if (numero == opcion){
                System.out.print("\""+cambio+"\" ");
            }else {
                System.out.print(numero+" ");
            }
        }
    }

    /*Realiza un programa que pida la temperatura media que ha hecho en cada mes de un determinado
    año y que muestre a continuación un diagrama de barras horizontales con esos datos. Las barras
    del diagrama se pueden dibujar a base de asteriscos o cualquier otro carácter.*/
    public static void clima(){
        int[] temperaturas = new int[12];
        String[] meses = {"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"};

        for (int i = 0; i < 12; i++) {
            System.out.print("Ingrese la temperatura media del " + meses[i] + ": ");
            temperaturas[i] = scanner.nextInt();
        }

        System.out.println("Diagrama de Barras:");

        for (int i = 0; i < 12; i++) {
            System.out.printf("%12s: ", meses[i]);
            for (int j = 0; j < temperaturas[i]; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    /*Realiza un programa que pida 8 números enteros y que luego muestre esos números junto con la
    palabra “par” o “impar” según proceda*/
    public static void parImparManual(){
        int[] numeros = new int[8];

        for (int i = 0; i < 8; i++) {
            System.out.print("Introduce un número: ");
            int opcion = scanner.nextInt();
            numeros[i] = opcion;
        }
        for (int numero : numeros) {
            if (numero % 2 == 0){
                System.out.print("Par: "+numero+" ");
            }else {
                System.out.print("Impar: "+numero+" ");
            }
        }
    }

    /*Escribe un programa que genere 20 números enteros aleatorios entre 0 y 100 y que los almacene en
    un array. El programa debe ser capaz de pasar todos los números pares a las primeras posiciones
    del array (del 0 en adelante) y todos los números impares a las celdas restantes. Utiliza arrays
    auxiliares si es necesario.*/
    public static void parImpar(){
        int[] numeros = new int[20];
        int[] par = new int[20];
        int[] impar = new int[20];
        int indicePar = 0;
        int indiceImpar = 0;

        for (int i = 0; i < 20; i++) {
            int numero = random.nextInt(101);
            if (numero % 2 == 0){
                par[indicePar] = numero;
                indicePar++;
            }else {
                System.out.print("Impar: "+numero+" ");
                impar[indiceImpar] = numero;
                indiceImpar++;
            }
        }
        System.arraycopy(par, 0, numeros, 0, indicePar);
        System.arraycopy(impar, 0, numeros, indicePar, indiceImpar);
        System.out.println(Arrays.toString(numeros));
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
                        rotacion();
                        break;
                    case 7:
                        intercambio();
                        break;
                    case 8:
                        clima();
                        break;
                    case 9:
                        parImparManual();
                        break;
                    case 10:
                        parImpar();
                        break;
                }
            }
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
