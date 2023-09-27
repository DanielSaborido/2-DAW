import java.util.Scanner;

public class actividad02 {
    /*Escribe un programa que pida por teclado un día de la semana y que diga qué asignatura toca a
    primera hora ese día.*/
    public static void horario(String dia) {
        switch (dia) {
            case "lunes":
                System.out.println("Los lunes a primera hay Desarrollo web en entorno servidor.");
                break;
            case "martes":
                System.out.println("Los martes a primera hay Desarrollo web en entorno cliente.");
                break;
            case "miercoles":
                System.out.println("Los miercoles a primera hay Desarrollo web en entorno cliente.");
                break;
            case "miércoles":
                System.out.println("Los miércoles a primera hay Desarrollo web en entorno cliente.");
                break;
            case "jueves":
                System.out.println("Los jueves a primera hay Emprese e iniciativa emprendedora.");
                break;
            case "viernes":
                System.out.println("Los viernes a primera hay Desarrollo web en entorno cliente.");
                break;
            case "sabado":
                System.out.println("No hay clases en este día de la semana");
                break;
            case "sábado":
                System.out.println("No hay clases en este día de la semana");
                break;
            case "domingo":
                System.out.println("No hay clases en este día de la semana");
                break;
            default:
                System.out.println("Lo introducido no es un dia de la semana");
                return;
        }
    }

    /*Realiza un programa que pida una hora por teclado y que muestre luego buenos días, buenas
    tardes o buenas noches según la hora. Se utilizarán los tramos de 6 a 12, de 13 a 20 y de 21 a
    5. respectivamente. Sólo se tienen en cuenta las horas, los minutos no se deben introducir por
    teclado.*/
    public static void saludo(int hora) {
        String saludo;
        switch (hora) {
            case 11:
                saludo = "Buenos días";
                break;
            case 20:
                saludo = "Buenas tardes";
                break;
            default:
                saludo = "Buenas noches";
                break;
        }
        System.out.println(saludo);
    }

    /*Escribe un programa en que dado un número del 1 a 7 escriba el correspondiente nombre del día
    de la semana.*/
    public static void semana(int numeroDia) {
        String nombreDia;
        
        switch (numeroDia) {
            case 1:
                nombreDia = "Lunes";
                break;
            case 2:
                nombreDia = "Martes";
                break;
            case 3:
                nombreDia = "Miércoles";
                break;
            case 4:
                nombreDia = "Jueves";
                break;
            case 5:
                nombreDia = "Viernes";
                break;
            case 6:
                nombreDia = "Sábado";
                break;
            case 7:
                nombreDia = "Domingo";
                break;
            default:
                nombreDia = "Número fuera de rango";
                break;
        }
        
        System.out.println("El día correspondiente es: " + nombreDia);
    }

    /*Vamos a ampliar uno de los ejercicios de la relación anterior para considerar las horas extras.
    Escribe un programa que calcule el salario semanal de un trabajador teniendo en cuenta que las
    horas ordinarias (40 primeras horas de trabajo) se pagan a 12 euros la hora. A partir de la hora 41,
    se pagan a 16 euros la hora.*/
    public static void salario(int horas) {
        double salarioSemanal = 0;

        switch (horas) {
            case 0:
                salarioSemanal = 0;
                break;
            case 40:
                salarioSemanal = horas * 12;
                break;
            default:
                if (horas > 40) {
                    salarioSemanal = (40 * 12) + ((horas - 40) * 16);
                }
                break;
        }

        System.out.println("El salario semanal del trabajador es: " + salarioSemanal + " euros");
    }

    /*Realiza un programa que resuelva una ecuación de primer grado (del tipo ax + b = 0)*/
    public static void ecuacion1º(double a, double b) {
        double x;

        switch ((int) a) {
            case 0:
                if (b == 0) {
                    System.out.println("La ecuación tiene infinitas soluciones.");
                } else {
                    System.out.println("La ecuación no tiene solución.");
                }
                break;
            default:
                x = -b / a;
                System.out.println("La solución de la ecuación es x = " + x);
                break;
        }
    }

    /*Realiza un programa que calcule el tiempo que tardará en caer un objeto desde una altura h.
    Aplica la fórmula t = √2h/g siendo g = 9.81m/s*/
    public static void tiempocaida(double altura) {
        double tiempoDeCaida = Math.sqrt((2 * altura) / 9.81);
        switch (tiempoDeCaida) {
            case 0.0:
                System.out.println("La altura debe ser mayor que cero.");
                break;
            default:
                System.out.println("El tiempo que tardará en caer el objeto es de " + tiempoDeCaida + " segundos.");
                break;
        }
    }

    /*Realiza un programa que calcule la media de tres notas.*/
    public static void medianotas(double nota1, double nota2, double nota3) {
        double media = (nota1 + nota2 + nota3) / 3.0;
        System.out.println("La media de las tres notas es: " + media);

        if (media >= 5.0) {
            System.out.println("El estudiante ha aprobado.");
        } else {
            System.out.println("El estudiante ha suspendido.");
        }
    }

    /*Amplía el programa anterior para que diga la nota del boletín (insuficiente, suficiente, bien, notable
    o sobresaliente).*/
    public static void medianotasyboletin(double nota1, double nota2, double nota3) {
        double media = (nota1 + nota2 + nota3) / 3.0;
        System.out.println("La media de las tres notas es: " + media);

        String notaBoletin;

        if (media < 5.0) {
            notaBoletin = "Insuficiente";
        } else if (media >= 5.0 && media < 6.0) {
            notaBoletin = "Suficiente";
        } else if (media >= 6.0 && media < 7.0) {
            notaBoletin = "Bien";
        } else if (media >= 7.0 && media < 9.0) {
            notaBoletin = "Notable";
        } else {
            notaBoletin = "Sobresaliente";
        }

        System.out.println("La nota del boletín es: " + notaBoletin);
    }

    /*Realiza un programa que resuelva una ecuación de segundo grado (del tipo ax 2 + bx + c = 0)*/
    public static void ecuacion2º(double a, double b, double c) {
        double raiz = b * b - 4 * a * c;
        switch((int) a) {
            case 0:
                System.out.println("La ecuación tiene infinitas soluciones.");
                break;
            default:
                if (raiz > 0) {
                    double x1 = (-b + Math.sqrt(raiz)) / (2 * a);
                    double x2 = (-b - Math.sqrt(raiz)) / (2 * a);
                    System.out.println("Las soluciones son x1 = " + x1 + " y x2 = " + x2);
                } else if (raiz == 0) {
                    double x = -b / (2 * a);
                    System.out.println("La solución única es x = " + x);
                } else {
                    System.out.println("La ecuación no tiene soluciones reales.");
                }
        }
    }

    /*Escribe un programa que nos diga el horóscopo a partir del día y el mes de nacimiento.*/
    public static void horoscopo(int dia, int mes) {
        String horoscopo = "";

        switch (mes) {
            case 1:
                if (dia >= 1 && dia <= 20) {
                    horoscopo = "Capricornio";
                } else {
                    horoscopo = "Acuario";
                }
                break;
            case 2:
                if (dia >= 1 && dia <= 18) {
                    horoscopo = "Acuario";
                } else {
                    horoscopo = "Piscis";
                }
                break;
            case 3:
                if (dia >= 1 && dia <= 20) {
                    horoscopo = "Piscis";
                } else {
                    horoscopo = "Aries";
                }
                break;
            case 4:
                if (dia >= 1 && dia <= 21) {
                    horoscopo = "Aries";
                } else {
                    horoscopo = "Tauro";
                }
                break;
            case 5:
                if (dia >= 1 && dia <= 21) {
                    horoscopo = "Tauro";
                } else {
                    horoscopo = "Gemini";
                }
                break;
            case 6:
                if (dia >= 1 && dia <= 22) {
                    horoscopo = "Gemini";
                } else {
                    horoscopo = "Cancer";
                }
                break;
            case 7:
                if (dia >= 1 && dia <= 23) {
                    horoscopo = "Cancer";
                } else {
                    horoscopo = "Leo";
                }
                break;
            case 8:
                if (dia >= 1 && dia <= 23) {
                    horoscopo = "Leo";
                } else {
                    horoscopo = "Virgo";
                }
                break;
            case 9:
                if (dia >= 1 && dia <= 23) {
                    horoscopo = "Virgo";
                } else {
                    horoscopo = "Libra";
                }
                break;
            case 10:
                if (dia >= 1 && dia <= 23) {
                    horoscopo = "Libra";
                } else {
                    horoscopo = "Escorpio";
                }
                break;
            case 11:
                if (dia >= 1 && dia <= 22) {
                    horoscopo = "Escorpio";
                } else {
                    horoscopo = "Sagitario";
                }
                break;
            case 12:
                if (dia >= 1 && dia <= 22) {
                    horoscopo = "Sagitario";
                } else {
                    horoscopo = "Capricornio";
                }
                break;
            default:
                horoscopo = "Fecha de nacimiento no válida";
                break;
        }

        System.out.println("Su horóscopo es: " + horoscopo);
    }

    /*Escribe un programa que dada una hora determinada (horas y minutos), calcule los segundos que
    faltan para llegar a la medianoche.*/
    public static void medianoche(int hora, int minutos){
        int segundosMedianoche = 0;

        if (hora >= 0 && hora <= 23 && minutos >= 0 && minutos <= 59) {
            segundosMedianoche = (23 - hora) * 3600 + (59 - minutos) * 60 + 60;
            System.out.println("Faltan " + segundosMedianoche + " segundos para medianoche.");
        } else {
            System.out.println("Hora o minutos ingresados no válidos.");
        }
    }

    /*Escribe un programa que ordene tres números enteros introducidos por teclado.*/
    public static void ordenarNumeros(int numero1, int numero2, int numero3) {
        int temp;

        if (numero1 > numero2) {
            temp = numero1;
            numero1 = numero2;
            numero2 = temp;
        }
        if (numero2 > numero3) {
            temp = numero2;
            numero2 = numero3;
            numero3 = temp;
        }
        if (numero1 > numero2) {
            temp = numero1;
            numero1 = numero2;
            numero2 = temp;
        }

        System.out.println("Los números ordenados ascendentemente son: " + numero1 + ", " + numero2 + ", " + numero3);
    }

    /*Realiza un programa que diga si un número introducido por teclado es par y/o divisible entre 5. */
    public static void analisis(int numero) {
        boolean esPar = numero % 2 == 0;
        boolean esDivisibleEntre5 = numero % 5 == 0;

        if (esPar && esDivisibleEntre5) {
            System.out.println("El número es par y divisible entre 5.");
        } else if (esPar) {
            System.out.println("El número es par pero no es divisible entre 5.");
        } else if (esDivisibleEntre5) {
            System.out.println("El número no es par pero es divisible entre 5.");
        } else {
            System.out.println("El número no es par ni divisible entre 5.");
        }
    }

    /*Escribe un programa que pinte una pirámide rellena con un carácter introducido por teclado que
    podrá ser una letra, un número o un símbolo como *, +, -, $, &, etc. El programa debe permitir
    al usuario mediante un menú elegir si el vértice de la pirámide está apuntando hacia arriba, hacia
    abajo, hacia la izquierda o hacia la derecha */
    public static void piramide(char caracter, int opcion, int altura) {
        switch (opcion) {
            case 1: // Pirámide hacia arriba
                for (int i = 1; i <= altura; i++) {
                    for (int j = 1; j <= altura - i; j++) {
                        System.out.print(" ");
                    }
                    for (int k = 1; k <= 2 * i - 1; k++) {
                        System.out.print(caracter);
                    }
                    System.out.println();
                }
                break;
            case 2: // Pirámide hacia abajo
                for (int i = altura; i >= 1; i--) {
                    for (int j = 1; j <= altura - i; j++) {
                        System.out.print(" ");
                    }
                    for (int k = 1; k <= 2 * i - 1; k++) {
                        System.out.print(caracter);
                    }
                    System.out.println();
                }
                break;
            case 3: // Pirámide hacia la izquierda
                for (int i = 1; i <= altura; i++) {
                    for (int j = 1; j <= i; j++) {
                        System.out.print(caracter);
                    }
                    System.out.println();
                }
                for (int i = altura - 1; i >= 1; i--) {
                    for (int j = 1; j <= i; j++) {
                        System.out.print(caracter);
                    }
                    System.out.println();
                }
                break;
            case 4: // Pirámide hacia la derecha
                for (int i = 1; i <= altura; i++) {
                    for (int j = 1; j <= altura - i; j++) {
                        System.out.print(" ");
                    }
                    for (int k = 1; k <= i; k++) {
                        System.out.print(caracter);
                    }
                    System.out.println();
                }
                for (int i = altura - 1; i >= 1; i--) {
                    for (int j = 1; j <= altura - i; j++) {
                        System.out.print(" ");
                    }
                    for (int k = 1; k <= i; k++) {
                        System.out.print(caracter);
                    }
                    System.out.println();
                }
                break;
            default:
                System.out.println("Opción no válida. Seleccione una dirección del vértice válida.");
                break;
        }
    }

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            /*Actividad 1*/
            System.out.print("Ingresa el dia de la semana: ");
            String dia = scanner.nextLine();

            horario(dia);

            /*Actividad 2*/
            System.out.print("Ingrese la hora (solo la hora, sin minutos): ");
            int hora = scanner.nextInt();

            saludo(hora);

            /*Actividad 3*/
            System.out.print("Ingrese un número del 1 al 7: ");
            int numeroDia = scanner.nextInt();

            semana(numeroDia);

            /*Actividad 4*/
            System.out.print("\nIngresa el primer numero a multriplicar: ");
            int horas = scanner.nextInt();

            salario(horas);

            /*Actividad 5*/
            System.out.print("Ingrese el valor de a: ");
            double a = scanner.nextDouble();
            System.out.print("Ingrese el valor de b: ");
            double b = scanner.nextDouble();

            ecuacion1º(a, b);

            /*Actividad 6*/
            System.out.print("\nIngresa la altura del objeto: ");
            double altura = scanner.nextDouble();

            tiempocaida(altura);

            /*Actividad 7*/
            System.out.print("Ingrese la primera nota: ");
            double nota1 = scanner.nextDouble();
            System.out.print("Ingrese la segunda nota: ");
            double nota2 = scanner.nextDouble();
            System.out.print("Ingrese la tercera nota: ");
            double nota3 = scanner.nextDouble();

            medianotas(nota1, nota2, nota3);

            /*Actividad 8*/
            System.out.print("Ingrese la primera nota: ");
            nota1 = scanner.nextDouble();
            System.out.print("Ingrese la segunda nota: ");
            nota2 = scanner.nextDouble();
            System.out.print("Ingrese la tercera nota: ");
            nota3 = scanner.nextDouble();

            medianotasyboletin(nota1, nota2, nota3);

            /*Actividad 9*/
            System.out.print("Ingrese el valor de a: ");
            a = scanner.nextDouble();
            System.out.print("Ingrese el valor de b: ");
            b = scanner.nextDouble();
            System.out.print("Ingrese el valor de c: ");
            double c = scanner.nextDouble();

            ecuacion2º(a, b, c);

            /*Actividad 10*/
            System.out.print("\nIngrese el dia: ");
            int numdia = scanner.nextInt();
            System.out.print("\nIngrese el mes: ");
            int nummes = scanner.nextInt();

            horoscopo(numdia, nummes);

            /*Actividad 11*/
            System.out.print("Ingrese la hora (0-23): ");
            hora = scanner.nextInt();
            System.out.print("Ingrese los minutos (0-59): ");
            int minutos = scanner.nextInt();

            medianoche(hora, minutos);

            /*Actividad 12*/
            /*Realiza un minicuestionario con 3 preguntas tipo test sobre las asignaturas que se imparten en
            el curso. Cada pregunta acertada sumará un punto. El programa mostrará al final la calificación
            obtenida. Pásale el minicuestionario a tus compañeros y pídeles que lo hagan para ver qué tal
            andan de conocimientos en las diferentes asignaturas del curso.*/
            System.out.println("Cuestionario de Desarrollo Web en Entorno Servidor");
            System.out.println("Responde a las siguientes preguntas (A, B, C o D).");

            int calificacion = 0;

            System.out.println("\nPregunta 1: ¿Qué significa PHP en el contexto del desarrollo web?");
            System.out.println("A) Personal Hypertext Processor");
            System.out.println("B) Preprocessed Hypertext Pages");
            System.out.println("C) Private Home Page");
            System.out.println("D) Public HTML Page");
            System.out.print("Respuesta: ");
            char respuesta1 = Character.toUpperCase(scanner.next().charAt(0));
            if (respuesta1 == 'A') {
                calificacion++;
            }

            System.out.println("\nPregunta 2: ¿Cuál de las siguientes no es una base de datos relacional?");
            System.out.println("A) MySQL");
            System.out.println("B) MongoDB");
            System.out.println("C) PostgreSQL");
            System.out.println("D) Oracle");
            System.out.print("Respuesta: ");
            char respuesta2 = Character.toUpperCase(scanner.next().charAt(0));
            if (respuesta2 == 'B') {
                calificacion++;
            }

            System.out.println("\nPregunta 3: ¿Qué lenguaje de marcado se utiliza para estructurar el contenido web?");
            System.out.println("A) CSS");
            System.out.println("B) JavaScript");
            System.out.println("C) HTML");
            System.out.println("D) PHP");
            System.out.print("Respuesta: ");
            char respuesta3 = Character.toUpperCase(scanner.next().charAt(0));
            if (respuesta3 == 'C') {
                calificacion++;
            }

            System.out.println("\nCuestionario completado. Tu calificación es: " + calificacion + "/3");

            /*Actividad 13*/
            System.out.println("Ingrese tres números enteros:");
            System.out.print("Número 1: ");
            int numero1 = scanner.nextInt();
            System.out.print("Número 2: ");
            int numero2 = scanner.nextInt();
            System.out.print("Número 3: ");
            int numero3 = scanner.nextInt();

            ordenarNumeros(numero1, numero2, numero3);

            /*Actividad 14*/
            System.out.print("Ingrese un número entero: ");
            int numero = scanner.nextInt();

            analisis(numero);

            /*Actividad 15*/
            System.out.print("Ingrese el carácter para rellenar la pirámide: ");
            char caracter = scanner.nextLine().charAt(0);
            System.out.println("Seleccione la dirección del vértice de la pirámide:");
            System.out.println("1. Arriba");
            System.out.println("2. Abajo");
            System.out.println("3. Izquierda");
            System.out.println("4. Derecha");
            System.out.print("Opción: ");
            int opcion = scanner.nextInt();
            System.out.print("\nIngresa la altura de la piramide: ");
            int alturaP = scanner.nextInt();
            piramide(caracter, opcion, alturaP);

            /*Actividad 16*/

            /*Actividad 17*/

            /*Actividad 18*/

            /*Actividad 19*/

            /*Actividad 20*/

            /*Actividad 21*/

            /*Actividad 22*/
        }
    }
}