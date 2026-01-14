//IMMEDIATELY INVOCKED FUNCTION EXPRESSION (IIFE)--------()()

//JAISE HI FUNCTION LIKHA VAISE HI TURANT EXECUTE KARNA
// ; SEMI-COLON IS REQUIRED HERE
//USED TO PREVENT GLOBAL SCOPE POLLUTION

(function hi(){
    console.log(`HIII`);
    
})();

(
    (name) => {
        console.log(`BYE ${name}`);
        
    }
)("Aryan");
