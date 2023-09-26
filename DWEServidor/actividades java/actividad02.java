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
    public static void pasapesetas(double euros) {
        System.out.println("La cantidad introducida en pesetas son: "+((euros*1000)/6)+" pesetas.");
    }

    /*Escribe un programa en que dado un número del 1 a 7 escriba el correspon- diente nombre del día
    de la semana.*/
    public static void pasaeuros(double pesetas) {
        System.out.println("La cantidad introducida en euros son: "+((pesetas*6)/1000)+" euros.");
    }

    /*Vamos a ampliar uno de los ejercicios de la relación anterior para considerar las horas extras.
    Escribe un programa que calcule el salario semanal de un trabajador teniendo en cuenta que las
    horas ordinarias (40 primeras horas de trabajo) se pagan a 12 euros la hora. A partir de la hora 41,
    se pagan a 16 euros la hora.*/
    public static void suma(double x, double y) {
        System.out.println(x+" + "+y+" = "+(x+y));
    }
    public static void resta(double x, double y) {
        System.out.println(x+" - "+y+" = "+(x-y));
    }
    public static void division(double x, double y) {
        System.out.println(x+" / "+y+" = "+(x/y));
    }

    /*Escribe un programa que calcule el área de un rectángulo.*/
    public static void arectangulo(double base, double altura) {
        System.out.println("El area del rectángulo es de "+(base*altura));
    }

    /*Escribe un programa que calcule el área de un triangulo.*/
    public static void atriangulo(double base, double altura) {
        System.out.println("El area del triangulo es de "+(base*altura)/2);
    }

    /*Escribe un programa que calcule el total de una factura a partir de la base imponible.*/
    public static void factura(double baseimponible) {
        System.out.println("La factura total es de "+(baseimponible+(baseimponible*21/100))+" euros.");
    }

    /*Escribe un programa que calcule el salario semanal de un empleado en base a las horas trabajadas,
    a razón de 12 euros la hora.*/
    public static void salario(double horastrabajadas) {
        System.out.println("El salario total es de "+(horastrabajadas*12)+" euros semanales.");
    }

    /*Escribe un programa que calcule el volumen de un cono según la fórmula.*/
    public static void volcono(double radio, double altura) {
        System.out.println("El volumen del cono es "+(Math.PI*(radio*radio)*altura)/3);
    }

    /*Realiza un conversor de Mb a Kb. */
    public static void pasoKb(double Mb) {
        System.out.println(Mb+"Mb traspasados a Kb son "+(Mb*1000)+" Kb.");
    }

    /*Realiza un conversor de Kb a Mb. */
    public static void pasoMb(double Kb) {
        System.out.println(Kb+"Kb traspasados a Mb son "+(Kb/1000)+" Mb.");
    }

    /*Escribe un programa que calcule el precio final de un producto según su base imponible (precio antes de impuestos), el tipo de IVA aplicado (general, reducido o superreducido) y el código
    promocional. Los tipos de IVA general, reducido y superreducido son del 21%, 10% y 4% respectivamente. Los códigos promocionales pueden ser nopro, mitad, meno5 o 5porc que significan
    respectivamente que no se aplica promoción, el precio se reduce a la mitad, se descuentan 5 euros
    o se descuenta el 5%. El ejercicio se da por bueno si se muestran los valores correctos, aunque los
    números no estén tabulados. */
    public static void CalcularPrecio(double baseimponible, String IVA, String desc) {
        double ivaG = 0.21;
        double ivaR = 0.10;
        double ivaS = 0.04;

        double tasaIva;
        switch (IVA) {
            case "general":
                tasaIva = ivaG;
                break;
            case "reducido":
                tasaIva = ivaR;
                break;
            case "superreducido":
                tasaIva = ivaS;
                break;
            default:
                System.out.println("Tipo de IVA no válido");
                return;
        }
        double precioConIva = baseimponible * (1 + tasaIva);

        double descuento = 0.0;
        switch (desc) {
            case "mitad":
                descuento = precioConIva / 2;
                break;
            case "meno5":
                descuento = 5.0;
                break;
            case "5porc":
                descuento = precioConIva * 0.05;
                break;
        }
        double precioFinal = precioConIva - descuento;

        System.out.println("Base imponible:\n" + baseimponible + "\nIVA (" + (tasaIva * 100) + "%):\n" 
        + (baseimponible * tasaIva) + "\nPrecio con IVA:\n"+ precioConIva + "\nCód. promo. (" + desc + "):\n-" 
        + descuento + "\nTOTAL\n" + precioFinal);
    }

    /*Realiza un programa que calcule la nota que hace falta sacar en el segundo examen de la asignatura
    Programación para obtener la media deseada. Hay que tener en cuenta que la nota del primer
    examen cuenta el 40% y la del segundo examen un 60%.*/
    public static void notamed(double examen, double trimestre) {
        System.out.println("Para tener un " + trimestre + " en el trimestre necesitas sacar un " + (((trimestre*2) - (examen*0.4))/0.6) + " en el segundo examen.");
    }

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            /*Actividad 1*/
            System.out.print("Ingresa el dia de la semana: ");
            String dia = scanner.nextLine();
            horario(dia);

            /*Actividad 2*/
            System.out.print("\nIngresa la cantidad en euros: ");
            double euros = scanner.nextDouble();
            pasapesetas(euros);

            /*Actividad 3*/
            System.out.print("\nIngresa la cantidad en pesetas: ");
            double pesetas = scanner.nextDouble();
            pasaeuros(pesetas);

            /*Actividad 4*/
            System.out.print("\nIngresa el primer numero a multriplicar: ");
            double x = scanner.nextDouble();
            System.out.print("Ingresa el segundo numero a multriplicar: ");
            double y = scanner.nextDouble();
            suma(x,y);
            resta(x,y);
            division(x,y);

            /*Actividad 5*/
            System.out.print("\nIngresa la base del rectángulo: ");
            double base= scanner.nextDouble();
            System.out.print("Ingresa la altura del rectángulo: ");
            double altura= scanner.nextDouble();
            arectangulo(base, altura);

            /*Actividad 6*/
            System.out.print("\nIngresa la base del triangulo: ");
            base= scanner.nextDouble();
            System.out.print("Ingresa la altura del triangulo: ");
            altura= scanner.nextDouble();
            atriangulo(base, altura);

            /*Actividad 7*/
            System.out.print("\nIngresa la base imponible (IVA 21%): ");
            double baseimponible = scanner.nextDouble();
            factura(baseimponible);

            /*Actividad 8*/
            System.out.print("\nIngresa las horas trabajadas en la semana: ");
            double horastrabajadas = scanner.nextDouble();
            salario(horastrabajadas);

            /*Actividad 9*/
            System.out.print("\nIngresa el radio del cono: ");
            double radio= scanner.nextDouble();
            System.out.print("Ingresa la altura del cono: ");
            altura= scanner.nextDouble();
            volcono(radio, altura);

            /*Actividad 10*/
            System.out.print("\nIngresa los Mb a traspasar: ");
            double Mb = scanner.nextDouble();
            pasoKb(Mb);

            /*Actividad 11*/
            System.out.print("\nIngresa los Kb a traspasar: ");
            double Kb = scanner.nextDouble();
            pasoMb(Kb);

            /*Actividad 12*/
            System.out.print("\nIntroduzca la base imponible: ");
            baseimponible = scanner.nextDouble();
            System.out.print("Introduzca el tipo de IVA (general, reducido o superreducido): ");
            String IVA = scanner.next().toLowerCase();
            System.out.print("Introduzca el código promocional (nopro, mitad, meno5 o 5porc): ");
            String desc = scanner.next().toLowerCase();
            CalcularPrecio(baseimponible,IVA,desc);

            /*Actividad 13*/
            System.out.print("\nIntroduce la nota del primer examen: ");
            double examen = scanner.nextDouble();
            System.out.print("¿Qué nota quieres sacar en el trimestre? ");
            double trimestre = scanner.nextDouble();
            notamed(examen, trimestre);
        }
    }
}