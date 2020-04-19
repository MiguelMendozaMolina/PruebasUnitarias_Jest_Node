const request = require("supertest"); /* Esto simulara las peticiones del usuario */
const app = require("../app"); /* Archivo de la aplicación || llamado a app.js || archivo donde se realizara la prueba*/

/* La finalidad de JEST no es evaluar la aplicación completa sino que ir evaluando partes importantes */
/* Definición de grupo de pruebas 
   Para incluir mas pruebas se debe agregar mas rutas segun la aplicacion creada */

/* Evaluación de la respuesta */

describe("Ruta inicial", () => {
    test("debe devolver una respuesta por GET", (done) => {
        /* request realizado */
        request(app)
            .get("/")
            .then((response) => {
                expect(response.statusCode).toBe(200); /* Resultado esperado */
                done(); /* callback de respuesta */
            });
    });

    /* Evaluación de la respuesta */

    test("no debe devolver una respuesta por POST", (done) => {
        /* request realizado */
        request(app)
            .post("/")
            .then((response) => {
                expect(response.statusCode).toBe(404); /* Resultado esperado 404 */
                expect(response.statusCode).not.toBe(200);
                /* Resultado esperado 404 || != 200 */
                done(); /* callback de respuesta */
            });
    });

    /* Evaluación del contenido */

    test("debe mostrar Bienvenido", (done) => {
        /* request realizado */
        request(app)
            .post("/")
            .then((response) => {
                expect(response.text).toMatch(/Bienvenido/);
                done(); /* Busqueda de palabra por medio de una expresión regular /Bienvenido/ */
                /* callback de respuesta */
            });
    });
});