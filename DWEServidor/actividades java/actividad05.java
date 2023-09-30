import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class actividad05 {
    static Random random = new Random();
    static Scanner scanner = new Scanner(System.in);
    /*Define un array de 12 números enteros con nombre num y asigna los valores según la tabla que se
    muestra a continuación. Muestra el contenido de todos los elementos del array.*/
    public static void numeros(){
        //int[] num = {39, -2, , , 0, , 14, , 5, 120, , }; No funciona por los espacios sin valor asignado
        int[] num = {39, -2, 0, 14, 5, 120};
        for (int numero : num) {
            System.out.println(numero);
        }
    }

    /*Define un array de 10 caracteres con nombre símbolo y asigna valores a los elementos según la
    tabla que se muestra a continuación. Muestra el contenido de todos los elementos del array.*/
    public static void simbolos(){
        //char[] signos = {'a', 'x', , , '@', , ' ', '+', 'Q', }; No funciona por los espacios sin valor asignado
        char[] signos = {'a', 'x', '@', ' ', '+','Q'};
        for (char signo : signos) {
            System.out.println(signo);
        }
    }

    /*Escribe un programa que lea 10 números por teclado y que luego los muestre en orden inverso, es
    decir, el primero que se introduce es el último en mostrarse y viceversa.*/
    public static void invertirCadena(){
        int[] numeros = new int[10];
        for (int i = 0; i < 10; i++) {
            System.out.print("Introduce el número " + (i + 1) + "º: ");
            numeros[i] = scanner.nextInt();
        }

        System.out.println("Números en orden inverso:");
        for (int i = 9; i >= 0; i--) {
            System.out.print(numeros[i]+" ");
        }
    }

    /*Define tres arrays de 20 números enteros cada una, con nombres numero, cuadrado y cubo. Carga
    el array numero con valores aleatorios entre 0 y 100. En el array cuadrado se deben almacenar los
    cuadrados de los valores que hay en el array numero. En el array cubo se deben almacenar los
    cubos de los valores que hay en numero. A continuación, muestra el contenido de los tres arrays
    dispuesto en tres columnas.*/
    public static void numerosCuadradoCubo(){
        int[] numero = new int[20];
        int[] cuadrado = new int[20];
        int[] cubo = new int[20];

        for (int i = 0; i < 20; i++) {
            numero[i] = random.nextInt(101);
        }
        for (int i = 0; i < numero.length; i++) {
            cuadrado[i] = numero[i] * numero[i];
            cubo[i] = numero[i] * numero[i] * numero[i];
        }
        System.out.println("Número\tCuadrado\tCubo");
        for (int i = 0; i < numero.length; i++) {
            System.out.println(numero[i] + "\t" + cuadrado[i] + "\t\t" + cubo[i]);
        }
    }

    /*Escribe un programa que rellene un array de 100 elementos con números enteros aleatorios comprendidos entre 0 y 500 (ambos incluidos).
    A continuación el programa mostrará el array y preguntará si el usuario quiere destacar el máximo o el mínimo. Seguidamente se volverá a mostrar
    el array escribiendo el número destacado entre dobles asteriscos.*/
    public static void maxminArray(){
        int[] numeros = new int[100];

        for (int i = 0; i < 100; i++) {
            numeros[i] = random.nextInt(501);
        }
        for (int numero : numeros) {
            System.out.print(numero+" ");
        }
        System.out.print("\n¿Quieres destacar el máximo o el mínimo? (1 - máximo, 2- mínimo): ");
        int opcion = scanner.nextInt();
        switch (opcion){
            case 1:
                int max = Arrays.stream(numeros).max().getAsInt();
                for (int numero : numeros) {
                    if (numero == max){
                        System.out.print("**"+numero+"** ");
                    }else {
                        System.out.print(numero+" ");
                    }
                }
                break;
            case 2:
                int min = Arrays.stream(numeros).min().getAsInt();
                for (int numero : numeros) {
                    if (numero == min){
                        System.out.print("**"+numero+"** ");
                    }else {
                        System.out.print(numero+" ");
                    }
                }
                break;
            default:
                System.out.println("Opción no valida.");
        }
    }

    /*Escribe un programa que pida 8 palabras y las almacene en un array. A continuación, las palabras
    correspondientes a colores se deben almacenar al comienzo y las que no son colores a continuación.
    Puedes utilizar tantos arrays auxiliares como quieras. Los colores que conoce el programa
    deben estar en otro array y son los siguientes: verde, rojo, azul, amarillo, naranja, rosa, negro,
    blanco y morado.*/
    public static void ordenarCadena(){
        String[] colores = {"verde", "rojo", "azul", "amarillo", "naranja", "rosa", "negro", "blanco", "morado"};
        String[] cadena = new String[8];
        String[] palabrasColores = new String[8];
        String[] palabrasNoColores = new String[8];
        int indiceColores = 0;
        int indiceNoColores = 0;

        for (int i = 0; i < 8; i++) {
            System.out.print("Ingresa una palabra: ");
            cadena[i] = scanner.next().toLowerCase();
            boolean esColor = false;
            for (String color : colores) {
                if (cadena[i].equals(color)) {
                    esColor = true;
                    break;
                }
            }
            if (esColor) {
                palabrasColores[indiceColores] = cadena[i];
                indiceColores++;
            } else {
                palabrasNoColores[indiceNoColores] = cadena[i];
                indiceNoColores++;
            }
        }
        String[] cadenaOrdenada = new String[indiceColores + indiceNoColores];
        System.arraycopy(palabrasColores, 0, cadenaOrdenada, 0, indiceColores);
        System.arraycopy(palabrasNoColores, 0, cadenaOrdenada, indiceColores, indiceNoColores);
        System.out.println(Arrays.toString(cadenaOrdenada));
    }

    /*Un restaurante nos ha encargado una aplicación para colocar a los clientes en sus mesas. En una
    mesa se pueden sentar de 0 (mesa vacía) a 4 comensales (mesa llena). Cuando llega un cliente
    se le pregunta cuántos son. De momento el programa no está preparado para colocar a grupos
    mayores a 4, por tanto, si un cliente dice por ejemplo que son un grupo de 6, el programa dará el
    mensaje “Lo siento, no admitimos grupos de 6, haga grupos de 4 personas como máximo e intente
    de nuevo”. Para el grupo que llega, se busca siempre la primera mesa libre (con 0 personas). Si no
    quedan mesas libres, se busca donde haya un hueco para todo el grupo, por ejemplo si el grupo
    es de dos personas, se podrá colocar donde haya una o dos personas. Inicialmente, las mesas se
    cargan con valores aleatorios entre 0 y 4. Cada vez que se sientan nuevos clientes se debe mostrar
    el estado de las mesas. Los grupos no se pueden romper aunque haya huecos sueltos suficientes.*/
    public static void restaurante(){
        int[] mesas = new int[10];

        for (int i = 0; i < mesas.length; i++) {
            mesas[i] = random.nextInt(5);
        }
        System.out.println("Estado de las mesas:");
        for (int i = 0; i < mesas.length; i++) {
            System.out.println("Mesa " + (i + 1) + ": " + mesas[i] + " personas");
        }
        while (true) {
            System.out.print("¿Cuántos son en su grupo? (0 para salir): ");
            int cantidadClientes = scanner.nextInt();
            if (cantidadClientes == 0) {
                System.out.println("Gracias por visitarnos. ¡Hasta luego!");
                break;
            } else if (cantidadClientes > 4) {
                System.out.println("Lo siento, no admitimos grupos de " + cantidadClientes +
                        " personas. Haga grupos de 4 personas como máximo e intente de nuevo.");
            } else {
                boolean mesaAsignada = false;
                for (int i = 0; i < mesas.length; i++) {
                    if (mesas[i] + cantidadClientes <= 4) {
                        mesas[i] += cantidadClientes;
                        mesaAsignada = true;
                        System.out.println("Mesa " + (i + 1) + ": Se ha asignado el grupo de " +
                                cantidadClientes + " personas.");
                        System.out.println("Estado de las mesas:");
                        for (int j = 0; j < mesas.length; j++) {
                            System.out.println("Mesa " + (j + 1) + ": " + mesas[j] + " personas");
                        }
                        break;
                    }
                }
                if (!mesaAsignada) {
                    System.out.println("Lo siento, no hay mesas disponibles para su grupo.");
                }
            }
        }
    }

    /*Escribe un programa que rellene un array de 20 elementos con números enteros aleatorios comprendidos entre 0 y 400 (ambos incluidos).
    A continuación el programa mostrará el array y preguntará si el usuario quiere resaltar los múltiplos de 5 o los múltiplos de 7.
    Seguidamente se volverá a mostrar el array escribiendo los números que se quieren resaltar entre corchetes.*/
    public static void multiploArray(){
        int[] numeros = new int[20];

        for (int i = 0; i < 20; i++) {
            numeros[i] = random.nextInt(401);
        }
        for (int numero : numeros) {
            System.out.print(numero+" ");
        }

        System.out.print("\n¿Quieres destacar los multiplos de 5 o los de 7? (5 - multiplos 5, 7 - multiplos 7): ");
        int opcion = scanner.nextInt();

        switch (opcion){
            case 5:
                for (int numero : numeros) {
                    if (numero%5==0){
                        System.out.print("["+numero+"] ");
                    }else {
                        System.out.print(numero+" ");
                    }
                }
                break;
            case 7:
                for (int numero : numeros) {
                    if (numero%7==0){
                        System.out.print("["+numero+"] ");
                    }else {
                        System.out.print(numero+" ");
                    }
                }
                break;
            default:
                System.out.println("Opción no valida.");
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
                        System.out.println("Dejando las actividades del pdf 05.");
                        break;
                    case 1:
                        numeros();
                        break;
                    case 2:
                        simbolos();
                        break;
                    case 3:
                        invertirCadena();
                        break;
                    case 4:
                        numerosCuadradoCubo();
                        break;
                    case 5:
                        maxminArray();
                        break;
                    case 6:
                        ordenarCadena();
                        break;
                    case 7:
                        restaurante();
                        break;
                    case 8:
                        multiploArray();
                        break;
                }
            }
        }
    }
}
