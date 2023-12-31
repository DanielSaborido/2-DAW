import java.util.Scanner;

public class actividad01 {
    /*Realiza un programa que pida dos números y que luego muestre el resultado de su multiplicación.*/
    public static void multriplicacion(double x, double y) {
        System.out.println(x+" X "+y+" = "+(x*y));
    }

    /*Realiza un conversor de euros a pesetas. La cantidad en euros que se quiere convertir debe ser
    introducida por teclado*/
    public static void pasapesetas(double euros) {
        System.out.println("La cantidad introducida en pesetas son: "+((euros*1000)/6)+" pesetas.");
    }

    /*Realiza un conversor de pesetas a euros. La cantidad en pesetas que se quiere convertir debe ser
    introducida por teclado*/
    public static void pasaeuros(double pesetas) {
        System.out.println("La cantidad introducida en euros son: "+((pesetas*6)/1000)+" euros.");
    }

    /*Escribe un programa que sume, reste, multiplique y divida dos números introducidos por teclado.*/
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

        double descuento = switch (desc) {
            case "mitad" -> precioConIva / 2;
            case "meno5" -> 5.0;
            case "5porc" -> precioConIva * 0.05;
            default -> 0.0;
        };
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
            System.out.print("\nSeleccione la actividad a ejecutar: ");
            int actividad = scanner.nextInt();
            double x;
            double y;
            double base;
            double altura;
            double baseimponible;
            switch(actividad){
                case 0:
                    System.out.println("Dejando las actividades del pdf 02.");
                    break;
                case 1:
                    System.out.print("Ingresa el primer numero a multriplicar: ");
                    x = scanner.nextDouble();
                    System.out.print("Ingresa el segundo numero a multriplicar: ");
                    y = scanner.nextDouble();
                    multriplicacion(x,y);

                    break;
                case 2:
                    System.out.print("\nIngresa la cantidad en euros: ");
                    double euros = scanner.nextDouble();
                    pasapesetas(euros);

                    break;
                case 3:
                    System.out.print("\nIngresa la cantidad en pesetas: ");
                    double pesetas = scanner.nextDouble();
                    pasaeuros(pesetas);

                    break;
                case 4:
                    System.out.print("\nIngresa el primer numero a multriplicar: ");
                    x = scanner.nextDouble();
                    System.out.print("Ingresa el segundo numero a multriplicar: ");
                    y = scanner.nextDouble();
                    suma(x,y);
                    resta(x,y);
                    multriplicacion(x,y);
                    division(x,y);

                    break;
                case 5:
                    System.out.print("\nIngresa la base del rectángulo: ");
                    base= scanner.nextDouble();
                    System.out.print("Ingresa la altura del rectángulo: ");
                    altura= scanner.nextDouble();
                    arectangulo(base, altura);

                    break;
                case 6:
                    System.out.print("\nIngresa la base del triangulo: ");
                    base= scanner.nextDouble();
                    System.out.print("Ingresa la altura del triangulo: ");
                    altura= scanner.nextDouble();
                    atriangulo(base, altura);

                    break;
                case 7:
                    System.out.print("\nIngresa la base imponible (IVA 21%): ");
                    baseimponible = scanner.nextDouble();
                    factura(baseimponible);

                    break;
                case 8:
                    System.out.print("\nIngresa las horas trabajadas en la semana: ");
                    double horastrabajadas = scanner.nextDouble();
                    salario(horastrabajadas);

                    break;
                case 9:
                    System.out.print("\nIngresa el radio del cono: ");
                    double radio= scanner.nextDouble();
                    System.out.print("Ingresa la altura del cono: ");
                    altura= scanner.nextDouble();
                    volcono(radio, altura);

                    break;
                case 10:
                    System.out.print("\nIngresa los Mb a traspasar: ");
                    double Mb = scanner.nextDouble();
                    pasoKb(Mb);

                    break;
                case 11:
                    System.out.print("\nIngresa los Kb a traspasar: ");
                    double Kb = scanner.nextDouble();
                    pasoMb(Kb);

                    break;
                case 12:
                    System.out.print("\nIntroduzca la base imponible: ");
                    baseimponible = scanner.nextDouble();
                    System.out.print("Introduzca el tipo de IVA (general, reducido o superreducido): ");
                    String IVA = scanner.next().toLowerCase();
                    System.out.print("Introduzca el código promocional (nopro, mitad, meno5 o 5porc): ");
                    String desc = scanner.next().toLowerCase();
                    CalcularPrecio(baseimponible,IVA,desc);

                    break;
                case 13:
                    System.out.print("\nIntroduce la nota del primer examen: ");
                    double examen = scanner.nextDouble();
                    System.out.print("¿Qué nota quieres sacar en el trimestre? ");
                    double trimestre = scanner.nextDouble();
                    notamed(examen, trimestre);

                    break;
            }
        }
    }
}