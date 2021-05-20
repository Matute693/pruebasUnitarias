import { Jugador } from './clase'



describe('Prueba de clase', () => {

    // const jugador = new Jugador();
    let jugador = new Jugador();

    beforeAll( ()=>{
        // console.log('beforeAll')
    });
    beforeEach( ()=>{
        // console.log('beforeEach')
        // jugador.hp =100;
        jugador = new Jugador();
    });

    afterAll( ()=>{
        // console.log('afterAll')
    });
    afterEach( ()=>{
        // console.log('afterEach')
    });
    
    
    it('Debe retornar 80 de hp, si recibe 20 de daño', ()=> {

        // const jugador = new Jugador(); //Variables locales pierdo memoria declarandola dos veces  (declarada linea 7)
        const res = jugador.recibeDaño(20);
        
        expect(res).toBe(80);
    })

      it('Debe retornar 50 de hp, si recibe 50 de daño', ()=> {

        // const jugador = new Jugador(); //Variables locales pierdo memoria declarandola dos veces  (declarada linea 7)
        const res = jugador.recibeDaño(50);
        
        expect(res).toBe(50);
    })

          it('Debe retornar 0 de hp, si recibe 100 de daño o mas', ()=> {

        // const jugador = new Jugador(); //Variables locales pierdo memoria declarandola dos veces  (declarada linea 7)
        const res = jugador.recibeDaño(100);
        
        expect(res).toBe(0);
    });


})