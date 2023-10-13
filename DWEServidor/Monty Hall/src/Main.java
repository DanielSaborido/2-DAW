import java.util.Random;
import java.util.Scanner;

/**Como presentador del programa de juegos de televisión Let’s Make a Deal, Monty Hall mostraba
 a los concursantes tres puertas cerradas y les pedía elegir una. Detrás de una puerta había un
 premio valioso; detrás de los otros dos había cabras viejas y malolientes. Tan pronto como el
 concursante eligía una puerta, Monty abría una de las puertas restantes y mostrar una cabra.
 Al concursante se le daba una opción final: cambiar puertas o quedarse con su elección inicial.
 En 1990, Marilyn vos Savant, "la mujer más inteligente del mundo", declaró en su columna semanal de la revista Parade,
 "Pregúntale a Marilyn",que el concursante debe elegir cambiar puertas.
 Aunque su respuesta fue correcta, encendió una tormenta de correos de odio, ataques de género y persecución académica.
 Muchos profesores de matemáticas quedaron en ridículo en el proceso, pero había un lado positivo del feo asunto.
 La acalorada discusión expuso al público la ciencia de la estadística, y un ejercicio que vos Savant propuso encontró su camino en miles de aulas.
 Estas pruebas manuales, luego duplicadas por computadoras, todas reivindicaron su ridiculizada "lógica femenina".
 Utilizaremos la simulación de Monte Carlo (MCS), un método para modelar probabilidad de diferentes resultados
 de un rango de entradas aleatorias, para verificar que vos Savant tenía razón.*/
public class Main {
    static Random random = new Random();

    public static int concurso(int intentos, boolean cambiar){
        int aciertos = 0;

        for (int i = 0; i < intentos; i++) {
            int eleccion = random.nextInt(3) + 1;
            int premio = random.nextInt(3) + 1;
            if (cambiar){
                int apertura;
                do {
                    apertura = random.nextInt(3) + 1;
                } while (apertura == eleccion || apertura == premio);
                int nuevaEleccion;
                do {
                    nuevaEleccion = random.nextInt(3) + 1;
                } while (nuevaEleccion == apertura || nuevaEleccion == eleccion);
                eleccion = nuevaEleccion;
            }
            if (eleccion == premio){
                aciertos++;
            }
        }

        return aciertos;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese cuantos intentos hará el jugador: ");
        int intentos = scanner.nextInt();
        int resultSinCambio = concurso(intentos,false);
        double division1 = (double) resultSinCambio/intentos;
        int resultConCambio = concurso(intentos,true);
        double division2 = (double) resultConCambio/intentos;

        System.out.println("El jugador ha obtenido el premio sin cambiar de puerta "+resultSinCambio+" veces de "+intentos+" intentos.");
        System.out.println("Su porcentaje en este caso es de "+String.format("%.2f", division1));
        System.out.println("El jugador ha obtenido el premio cambiando de puerta "+resultConCambio+" veces de "+intentos+" intentos.");
        System.out.println("Su porcentaje en este caso es de "+String.format("%.2f", division2));

        scanner.close();
    }
}