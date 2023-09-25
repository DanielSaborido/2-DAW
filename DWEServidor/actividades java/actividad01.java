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

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            /*Actividad 1*/
            System.out.print("Ingresa el primer numero a multriplicar: ");
            double x = scanner.nextDouble();
            System.out.print("Ingresa el segundo numero a multriplicar: ");
            double y = scanner.nextDouble();
            multriplicacion(x,y);

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
            x = scanner.nextDouble();
            System.out.print("Ingresa el segundo numero a multriplicar: ");
            y = scanner.nextDouble();
            suma(x,y);
            resta(x,y);
            multriplicacion(x,y);
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
        }
    }
}