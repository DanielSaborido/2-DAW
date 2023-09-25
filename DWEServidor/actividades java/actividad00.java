public class actividad00 {
    /*Escribe un programa en el que se declaren las variables enteras x e y. Asignales los valores 144 y
    999 respectivamente. A continuación, muestra por pantalla el valor de cada variable, la suma, la
    resta, la división y la multiplicación.*/
    public static void suma(double x, double y) {
        System.out.println(x+" + "+y+" = "+(x+y));
    }
    public static void resta(double x, double y) {
        System.out.println(x+" - "+y+" = "+(x-y));
    }
    public static void multriplicacion(double x, double y) {
        System.out.println(x+" X "+y+" = "+(x*y));
    }
    public static void division(double x, double y) {
        System.out.println(x+" / "+y+" = "+(x/y));
    }

    /*Crea la variable nombre y asígnale tu nombre completo. Muestra su valor por pantalla de tal
    forma que el resultado del programa sea el mismo que en el ejercicio 1 del capítulo 1.*/
    public static void presentacion(String nombre) {
        System.out.println("\n"+nombre);
    }

    /*Crea las variables nombre, direccion y telefono y asígnale los valores corres- pondientes. Muestra
    los valores de esas variables por pantalla de tal forma que el resultado del programa sea el mismo
    que en el ejercicio 2.*/
    public static void datos(String nombre, String direccion, int telefono) {
        System.out.println("\n"+nombre+"\n"+direccion+"\n"+telefono);
    }

    /*Realiza un conversor de euros a pesetas. La cantidad en euros que se quiere convertir deberá estar
    almacenada en una variable*/
    public static void pasapesetas(double euros) {
        System.out.println("\nLa cantidad introducida en pesetas son: "+((euros*1000)/6)+" pesetas.");
    }

    /*Realiza un conversor de pesetas a euros. La cantidad en pesetas que se quiere convertir deberá estar
    almacenada en una variable*/
    public static void pasaeuros(double pesetas) {
        System.out.println("\nLa cantidad introducida en euros son: "+((pesetas*6)/1000)+" euros.");
    }

    /*Escribe un programa que calcule el total de una factura a partir de la base imponible (precio sin
    IVA). La base imponible estará almacenada en una variable.*/

    public static void factura(double baseimponible) {
        System.out.println("\nLa factura total es de "+(baseimponible+(baseimponible*21/100))+" euros.");
    }

    public static void main(String[] args) {
        /*Actividad 1*/
        double x = 144;
        double y = 999;
        suma(x,y);
        resta(x,y);
        multriplicacion(x,y);
        division(x,y);

        /*Actividad 2*/
        String nombre = "Daniel Saborido Torres";
        presentacion(nombre);

        /*Actividad 3*/
        String direccion = "Urbanizacion San Antonio";
        int telefono = 623307563;
        datos(nombre, direccion, telefono);

        /*Actividad 4*/
        double euros = 6;
        pasapesetas(euros);

        /*Actividad 5*/
        double pesetas = 1000;
        pasaeuros(pesetas);

        /*Actividad 6*/
        double baseimponible = 247.93;
        factura(baseimponible);
    }
}