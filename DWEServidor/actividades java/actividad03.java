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

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            int actividad = 1;
            while (actividad > 0){
                System.out.print("Seleccione la actividad a ejecutar: ");
                actividad = scanner.nextInt();
                switch(actividad){
                    case 0:
                        System.out.println("Dejando las actividades del pdf 03.");
                        
                    case 1:
                        multiplosFor();
                    case 2:
                        multiplosWhile();
                    case 3:
                        multiplosDoWhile();
                    case 4:
                        conteoFor20();
                    case 5:
                        conteoWhile20();
                    case 6:
                        conteoDoWhile20();
                    case 7:

                    case 8:

                    case 9:

                    case 10:

                    case 11:

                    case 12:

                    case 13:

                    case 14:

                    case 15:

                    case 16:

                    case 17:

                    case 18:

                    case 19:

                    case 20:

                    case 21:

                    case 22:
                }
            }
        }
    }
}