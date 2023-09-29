import java.util.Objects;
import java.util.Random;
import java.util.Scanner;

public class actividad04 {
    static Random random = new Random();
    static Scanner scanner = new Scanner(System.in);
    /*Escribe un programa que muestre la tirada de tres dados. Se debe mostrar también la suma total
    (los puntos que suman entre los tres dados).*/
    public static void dados(){
        int dado1 = random.nextInt(6) + 1;
        int dado2 = random.nextInt(6) + 1;
        int dado3 = random.nextInt(6) + 1;
        int sumaTotal = dado1 + dado2 + dado3;

        System.out.println("Tirada del primer dado: " + dado1);
        System.out.println("Tirada del segundo dado: " + dado2);
        System.out.println("Tirada del tercer dado: " + dado3);
        System.out.println("Suma total: " + sumaTotal);
    }

    /*Realiza un programa que muestre al azar el nombre de una carta de la baraja francesa. Esta baraja
    está dividida en cuatro palos: picas, corazones, diamantes y tréboles. Cada palo está formado por
    13 cartas, de las cuales 9 cartas son numerales y 4 literales: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K y A (que
    sería el 1). Para convertir un número en una cadena de caracteres podemos usar String.valueOf(n).*/
    public static void baraja(){
        String[] palos = {"Picas", "Corazones", "Diamantes", "Tréboles"};
        String[] cartas = {"A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"};

        int indicePalo = random.nextInt(palos.length);
        int indiceCarta = random.nextInt(cartas.length);

        System.out.println("Carta seleccionada: " + cartas[indiceCarta] + " de " + palos[indicePalo]);
    }

    /*Igual que el ejercicio anterior pero con la baraja española. Se utilizará la baraja de 40 cartas: 2, 3,
    4, 5, 6, 7, sota, caballo, rey y as.*/
    public static void barajaEspanola(){
        String[] palos = {"Espadas", "Bastos", "Copas", "Oros"};
        String[] cartas = {"1", "2", "3", "4", "5", "6", "7", "Sota", "Caballo", "Rey"};

        int indicePalo = random.nextInt(palos.length);
        int indiceCarta = random.nextInt(cartas.length);

        System.out.println("Carta seleccionada: " + cartas[indiceCarta] + " de " + palos[indicePalo]);
    }

    /*Muestra 20 números enteros aleatorios entre 0 y 10 (ambos incluidos) separados por espacios.*/
    public static void numerosRandoms(){
        int contador = 0;
        StringBuilder numeros = new StringBuilder("Los 20 números aleatorios son: \n");
        do{
            int numero = random.nextInt(11);
            numeros.append(numero).append(" ");
            contador++;
        }while (contador < 20);

        System.out.println(numeros);
    }

    /*Muestra 50 números enteros aleatorios entre 100 y 199 (ambos incluidos) separados por espacios.
    Muestra también el máximo, el mínimo y la media de esos números.*/
    public static void numerosRandomsExtendido(){
        StringBuilder numeros = new StringBuilder("Los 50 números aleatorios son\n");
        int contador = 0;
        int sumatoria = 0;
        int max = 0;
        int min = 200;

        do{
            int numero = random.nextInt(100) + 100;
            numeros.append(numero).append(" ");
            if (numero > max){
                max = numero;
            }
            if (numero < min){
                min = numero;
            }
            sumatoria+=numero;
            contador++;
        }while (contador < 20);

        System.out.println(numeros+"\nEl número máximo es: "+max+"\nEl número mínimo es: "+min+"\nLa media de los números es: "+(sumatoria/contador));
    }

    /*Escribe un programa que piense un número al azar entre 0 y 100. El usuario debe adivinarlo
    y tiene para ello 5 oportunidades. Después de cada intento fallido, el programa dirá cuántas
    oportunidades quedan y si el número introducido es menor o mayor que el número secreto.*/
    public static void adivinarNumero(){
        int numero = random.nextInt(101);
        int intentos = 4;
        System.out.print("Di un número del 0 al 100: ");
        int prueba = scanner.nextInt();
        while (numero != prueba){
            intentos--;
            System.out.println("Te has equivocado. Tienes "+(intentos+1)+" intento(s)");
            if (numero > prueba){
                System.out.println("El número a adivinar es más grande");
            }
            if (numero < prueba){
                System.out.println("El número a adivinar es más pequeño");
            }
            System.out.println("Di un número del 0 al 100: ");
            prueba = scanner.nextInt();
        }
        System.out.println("Felicidades, adivinaste el número.");
    }

    /*Escribe un programa que muestre tres apuestas de la quiniela en tres columnas para los 14 partidos y el pleno al quince (15 filas)*/
    public static void quiniela(){
        String[] resultados = {"1", "X", "2"};
        int numPartidos = 14;
        int numFilas = 15;
        System.out.println("Quiniela:");

        for (int fila = 1; fila <= numFilas; fila++) {
            System.out.print(fila + ": ");
            for (int partido = 1; partido <= numPartidos; partido++) {
                int resultadoAleatorio = random.nextInt(resultados.length);
                System.out.print(resultados[resultadoAleatorio] + " ");
            }
            System.out.println();
        }
    }

    /*Modifica el programa anterior para que la probabilidad de que salga un 1 sea de 1/2, la probabilidad de que salga x
     sea de 1/3 y la probabilidad de que salga 2 sea de 1/6. Pista: 1/2 = 3/6 y 1/3 = 2/6.*/
    public static void quinielaModificada(){
        int numPartidos = 14;
        int numFilas = 15;
        System.out.println("Quiniela:");

        for (int fila = 1; fila <= numFilas; fila++) {
            System.out.print(fila + ": ");
            for (int partido = 1; partido <= numPartidos; partido++) {
                int numeroAleatorio = random.nextInt(6) + 1;
                String resultado;
                if (numeroAleatorio <= 3) {
                    resultado = "1";
                } else if (numeroAleatorio <= 5) {
                    resultado = "X";
                } else {
                    resultado = "2";
                }

                System.out.print(resultado + " ");
            }
            System.out.println();
        }
    }

    /*Realiza un programa que vaya generando números aleatorios pares entre 0 y 100 y que no termine
    de generar números hasta que no saque el 24. El programa deberá decir al final cuántos números
    se han generado.*/
    public static void aleatorioHasta24(){
        int numeroGenerado;
        int contador = 0;

        do {
            numeroGenerado = random.nextInt(51) * 2; // Genera números pares entre 0 y 100
            System.out.println("Número generado: " + numeroGenerado);
            contador++;
        } while (numeroGenerado != 24);

        System.out.println("Se generaron " + contador + " números hasta obtener el 24.");
    }

    /*Realiza un programa que pinte por pantalla diez líneas formadas por caracteres. El carácter con
    el que se pinta cada línea se elige de forma aleatoria entre uno de los siguientes: *, -, =, ., |, @. Las
    líneas deben tener una longitud aleatoria entre 1 y 40 caracteres.*/
    public static void cadenaAleatoria(){
        char[] caracteres = {'*', '-', '=', '.', '|', '@'};

        for (int i = 0; i < 10; i++) {
            int longitud = random.nextInt(40) + 1;

            for (int j = 0; j < longitud; j++) {
                int indiceCaracter = random.nextInt(caracteres.length);
                char caracterAleatorio = caracteres[indiceCaracter];
                System.out.print(caracterAleatorio);
            }

            System.out.println();
        }
    }

    /*Escribe un programa que muestre 20 notas generadas al azar. Las notas deben aparecer de la
    forma: suspenso, suficiente, bien, notable o sobresaliente. Al final aparecerá el número de suspensos, el número de suficientes, el número de bienes, etc.*/
    public static void notas(){
        String[] nota = {"suspenso", "suficiente", "bien", "notable", "sobresaliente"};
        int cantSuspenso = 0;
        int cantSuficiente = 0;
        int cantBien = 0;
        int cantNotable = 0;
        int cantSobresaliente = 0;

        for (int i = 0; i < 20; i++){
            int indiceNota = random.nextInt(nota.length);
            System.out.print(nota[indiceNota] + ", ");
            switch (indiceNota){
                case 0: cantSuspenso++;
                case 1: cantSuficiente++;
                case 2: cantBien++;
                case 3: cantNotable++;
                case 4: cantSobresaliente++;
            }
        }

        System.out.println("\nCantidad de notas aparecidas:\nSuspenso: "+cantSuspenso+"\nSuficiente: " +
                cantSuficiente+"\nBien: "+cantBien+"\nNotable: "+cantNotable+"\nSobresaliente: "+cantSobresaliente);
    }

    /*Realiza un programa que llene la pantalla de caracteres aleatorios (a lo Matrix) con el código ascii
    entre el 32 y el 126. Puedes hacer casting con (char) para convertir un entero en un carácter.*/
    public static void matrix(){
        System.out.println("No lo he hecho");
    }

    /*Escribe un programa que simule la tirada de dos dados. El programa deberá continuar tirando los
    dados una y otra vez hasta que en alguna tirada los dos dados tengan el mismo valor.*/
    public static void dadosExtra(){
        int dado1 = random.nextInt(6) + 1;
        int dado2 = random.nextInt(6) + 1;
        System.out.println("Tirada del primer dado: " + dado1);
        System.out.println("Tirada del segundo dado: " + dado2);
        while (dado1 != dado2){
            dado1 = random.nextInt(6) + 1;
            dado2 = random.nextInt(6) + 1;

            System.out.println("Tirada del primer dado: " + dado1);
            System.out.println("Tirada del segundo dado: " + dado2);
        }

        System.out.println("Los dados se han emparejado.");
    }

    /*Realiza un programa que haga justo lo contrario a lo que hace el ejercicio 6. El programa intentará
    adivinar el número que estás pensando - un número entre 0 y 100 - teniendo para ello 5 oportunidades. En cada intento fallido, el programa debe preguntar si el número que estás pensando es
    mayor o menor que el que te acaba de decir. 59Números aleatorios 60*/
    public static void adivinarNumeroModificado(){
        int intentos = 4;
        String respuesta;
        int reducirArriba = 101;
        int reducirAbajo = 0;

        while (true){
            int numero = random.nextInt(reducirArriba)+reducirAbajo;
            System.out.println("¿El número que piensas es "+(numero)+"?");
            respuesta = scanner.next();
            if (Objects.equals(respuesta.toLowerCase(), "si")){
                System.out.println("Logré adivinarlo quedandome "+intentos+" intentos");
                break;
            } else {
                System.out.println("¿El número es mayor o menor al mencionado?");
                respuesta = scanner.next();
                if (Objects.equals(respuesta.toLowerCase(), "mayor")){
                    reducirAbajo+=numero;
                }
                reducirArriba-=numero;
                intentos--;
                if (intentos == 0) {
                    System.out.println("Me quedé sin intentos");
                    break;
                }
            }
        }
    }

    /*Realiza un generador de melodía con las siguientes condiciones:
    1. Las notas deben estar generadas al azar. Las 7 notas son do, re, mi, fa, sol, la y si.
    1. Una melodía está formada por un número aleatorio de notas mayor o igual
    a 4, menor o igual a 28 y siempre múltiplo de 4 (4, 8, 12...).
    1. Cada grupo de 4 notas será un compás y estará separado del siguiente
    compás mediante la barra vertical “|” (Alt + 1). El final de la melodía se marca con dos barras.
    1. La última nota de la melodía debe coincidir con la primera.*/
    public static void melodia(){
        String[] notas = {"do", "re", "mi", "fa", "sol", "la", "si"};
        int tamano = (random.nextInt(7) + 1)*4;
        int conteo = 1;
        int notaRepetida=random.nextInt(notas.length);
        StringBuilder resultado = new StringBuilder(notas[notaRepetida]+" ");
        for (int i = 0; i<tamano-2; i++){
            int nota = random.nextInt(notas.length);
            conteo++;
            if (conteo == 4){
                resultado.append(notas[nota]).append(" | ");
                conteo=0;
            } else {
                resultado.append(notas[nota]).append(" ");
            }
        }
        System.out.println(resultado+notas[notaRepetida]+" ||");
    }

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            int actividad = 1;
            while (actividad > 0){
                System.out.print("Seleccione la actividad a ejecutar: ");
                actividad = scanner.nextInt();
                switch(actividad){
                    case 0:
                        System.out.println("Dejando las actividades del pdf 04.");
                        break;
                    case 1:
                        dados();
                        break;
                    case 2:
                        baraja();
                        break;
                    case 3:
                        barajaEspanola();
                        break;
                    case 4:
                        numerosRandoms();
                        break;
                    case 5:
                        numerosRandomsExtendido();
                        break;
                    case 6:
                        adivinarNumero();
                        break;
                    case 7:
                        quiniela();
                        break;
                    case 8:
                        quinielaModificada();
                        break;
                    case 9:
                        aleatorioHasta24();
                        break;
                    case 10:
                        cadenaAleatoria();
                        break;
                    case 11:
                        notas();
                        break;
                    case 12:
                        matrix();
                        break;
                    case 13:
                        dadosExtra();
                        break;
                    case 14:
                        adivinarNumeroModificado();
                        break;
                    case 15:
                        melodia();
                        break;
                }
            }
        }
    }
}
