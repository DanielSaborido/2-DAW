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
            System.out.print("Ingresa el primer numero a multriplicar: ");
            double x = scanner.nextDouble();
            System.out.println("Ingresa el segundo numero a multriplicar: ");
            double y = scanner.nextDouble();
            multriplicacion(x,y);

            /*Actividad 2*/
            System.out.println("Ingresa la cantidad en euros: ");
            double euros = scanner.nextDouble();
            pasapesetas(euros);

            /*Actividad 3*/
            System.out.println("Ingresa la cantidad en pesetas: ");
            double pesetas = scanner.nextDouble();
            pasaeuros(pesetas);

            /*Actividad 4*/
            System.out.println("Ingresa el primer numero a multriplicar: ");
            x = scanner.nextDouble();
            System.out.println("Ingresa el segundo numero a multriplicar: ");
            y = scanner.nextDouble();
            suma(x,y);
            resta(x,y);
            multriplicacion(x,y);
            division(x,y);

            /*Actividad 5*/
            System.out.println("Ingresa la base del rectángulo: ");
            double base= scanner.nextDouble();
            System.out.println("Ingresa la altura del rectángulo: ");
            double altura= scanner.nextDouble();
            arectangulo(base, altura);

            /*Actividad 6*/
            System.out.println("Ingresa la base del triangulo: ");
            base= scanner.nextDouble();
            System.out.println("Ingresa la altura del triangulo: ");
            altura= scanner.nextDouble();
            atriangulo(base, altura);

            /*Actividad 7*/
            System.out.println("Ingresa la base imponible (IVA 21%): ");
            double baseimponible = scanner.nextDouble();
            factura(baseimponible);

            /*Actividad 8*/
            System.out.println("Ingresa las horas trabajadas en la semana: ");
            double horastrabajadas = scanner.nextDouble();
            salario(horastrabajadas);

            /*Actividad 9*/
            System.out.println("Ingresa el radio del cono: ");
            double radio= scanner.nextDouble();
            System.out.println("Ingresa la altura del cono: ");
            altura= scanner.nextDouble();
            volcono(radio, altura);

            /*Actividad 10*/
            System.out.println("Ingresa los Mb a traspasar: ");
            double Mb = scanner.nextDouble();
            pasoKb(Mb);

            /*Actividad 11*/
            System.out.println("Ingresa los Kb a traspasar: ");
            double Kb = scanner.nextDouble();
            pasoMb(Kb);

            /*Actividad 12*/
            System.out.println("Introduzca la base imponible: ");
            baseimponible = scanner.nextDouble();
            System.out.println("Introduzca el tipo de IVA (general, reducido o superreducido): ");
            String IVA = scanner.next().toLowerCase();
            System.out.println("Introduzca el código promocional (nopro, mitad, meno5 o 5porc): ");
            String desc = scanner.next().toLowerCase();
            CalcularPrecio(baseimponible,IVA,desc);

            /*Actividad 13*/
            System.out.println("Introduce la nota del primer examen: ");
            double examen = scanner.nextDouble();
            System.out.println("¿Qué nota quieres sacar en el trimestre? ");
            double trimestre = scanner.nextDouble();
            notamed(examen, trimestre);
        }
    }
}