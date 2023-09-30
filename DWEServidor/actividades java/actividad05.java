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

    /*scribe un programa que pida 10 números por teclado y que luego muestre los números introducidos junto con
    las palabras “máximo” y “mínimo” al lado del máximo y del mínimo respectivamente*/
    public static void maxminArrayManual(){
        int[] numeros = new int[10];

        for (int i = 0; i < 10; i++) {
            System.out.print("Introduce un número: ");
            int opcion = scanner.nextInt();
            numeros[i] = opcion;
        }
        for (int numero : numeros) {
            System.out.print(numero+" ");
        }
        int max = Arrays.stream(numeros).max().getAsInt();
        for (int numero : numeros) {
            if (numero == max){
                System.out.print("Máimo: "+numero+" ");
            }else {
                System.out.print(numero+" ");
            }
        }
        int min = Arrays.stream(numeros).min().getAsInt();
        for (int numero : numeros) {
            if (numero == min){
                System.out.print("Mínimo: "+numero+"** ");
            }else {
                System.out.print(numero+" ");
            }
        }
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

    /*Realiza un programa que pida 10 números por teclado y que los almacene en un array. A continuación se mostrará el contenido de ese array junto al índice (0 – 9) utilizando para ello una tabla.
    Seguidamente el programa pasará los primos a las primeras posiciones, desplazando el resto de
    números (los que no son primos) de tal forma que no se pierda ninguno. Al final se debe mostrar
    el array resultante*/
    public static void primos(){
        int[] numeros = new int[10];

        for (int i = 0; i < 10; i++) {
            System.out.print("Ingrese un número: ");
            numeros[i] = scanner.nextInt();
        }

        System.out.println("Contenido del array original:");
        System.out.println("Índice\tNúmero");
        for (int i = 0; i < 10; i++) {
            System.out.println(i + "\t" + numeros[i]);
        }

        int[] resultado = new int[10];
        int primerIndice = 0;
        int ultimoIndice = 9;

        for (int i = 0; i < 10; i++) {
            boolean primo = numeros[i] > 1;
            for (int j = 2; i * j <= numeros[i]; j++) {
                if (numeros[i] % j == 0) {
                    primo = false;
                    break;
                }
            }
            if (primo) {
                resultado[primerIndice] = numeros[i];
                primerIndice++;
            } else {
                resultado[ultimoIndice] = numeros[i];
                ultimoIndice--;
            }
        }

        System.out.println("Contenido del array resultante:");
        System.out.println("Índice\tNúmero");
        for (int i = 0; i < 10; i++) {
            System.out.println(i + "\t" + resultado[i]);
        }
    }

    /*Realiza un programa que pida 10 números por teclado y que los almacene en un array. A continuación se mostrará el contenido de ese array junto al índice (0 – 9).
    Seguidamente el programapedirá dos posiciones a las que llamaremos “inicial” y “final”. Se debe comprobar que inicial es
    menor que final y que ambos números están entre 0 y 9. El programa deberá colocar el número de
    la posición inicial en la posición final, rotando el resto de números para que no se pierda ninguno.
    Al final se debe mostrar el array resultante.*/
    public static void cadena(){
        int[] numeros = new int[10];

        for (int i = 0; i < 10; i++) {
            System.out.print("Ingrese un número: ");
            numeros[i] = scanner.nextInt();
        }

        System.out.println("Contenido del array original:");
        System.out.println("Índice\tNúmero");
        for (int i = 0; i < 10; i++) {
            System.out.println(i + "\t" + numeros[i]);
        }

        int inicial, finalPos;
        do {
            System.out.print("Ingrese la posición inicial (0-9): ");
            inicial = scanner.nextInt();
            System.out.print("Ingrese la posición final (0-9): ");
            finalPos = scanner.nextInt();
        } while (!(inicial >= 0 && finalPos >= 0 && finalPos <= 9 && inicial < finalPos));

        // Realizar la rotación de elementos en el array
        int temp = numeros[inicial];
        for (int i = inicial; i < finalPos; i++) {
            numeros[i] = numeros[i + 1];
        }
        numeros[finalPos] = temp;

        System.out.println("Contenido del array resultante:");
        System.out.println("Índice\tNúmero");
        for (int i = 0; i < 10; i++) {
            System.out.println(i + "\t" + numeros[i]);
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
                        maxminArrayManual();
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
                    case 11:
                        primos();
                        break;
                    case 12:
                        cadena();
                        break;
                    case 13:
                        maxminArray();
                        break;
                    case 14:
                        ordenarCadena();
                        break;
                    case 15:
                        restaurante();
                        break;
                    case 16:
                        multiploArray();
                        break;
                }
            }
        }
    }
}
