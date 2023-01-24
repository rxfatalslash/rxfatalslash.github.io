function reloj() {
    var now = new Date();;
    var hora = now.getHours();
    var minuto = now.getMinutes();
    var segundo = now.getSeconds();

    var str_segundo = new String(segundo);
    if (str_segundo.length == 1) {
        segundo = "0" + segundo;
    }

    var str_minuto = new String();
    if (str_minuto.length == 1) {
        minuto = "0" + minuto;
    }

    var str_hora = new String();
    if (str_hora.length == 1) {
        hora = "0" + hora;
    }

    var imprimirHora = hora + " : " + minuto + " : " + segundo;

    document.form_reloj.reloj.value = imprimirHora;

    setTimeout("reloj()", 1000);
}