grammar Metadata;

// ----------- Reglas sintácticas ------------------

metadata    : campo+ ;

campo       : nombreCampo ':' valorCampo finCampo ;

nombreCampo
    : 'nombre'
    | 'tipo'
    | 'tamaño'
    | 'creado'
    | 'modificado'
    | 'autor'
    | 'descripcion'
    | 'etiquetas' ;

valorCampo  : texto
            | numero
            | fecha
            | listaTextos ;

texto       : caracter+ ;

caracter    : LETRA
            | DIGITO
            | ' '
            | '_'
            | '-'
            | '.'
            | '\''
            | ':'
            | ','
            | 'á' | 'é' | 'í' | 'ó' | 'ú'
            | 'Á' | 'É' | 'Í' | 'Ó' | 'Ú'
            | 'ñ' | 'Ñ' ;

numero      : DIGITO+ ;

fecha       : DIGITO DIGITO DIGITO DIGITO '-' DIGITO DIGITO '-' DIGITO DIGITO
              ( ' ' DIGITO DIGITO ':' DIGITO DIGITO
                ( ':' DIGITO DIGITO )? )? ;

listaTextos : '[' texto ( ',' texto )* ']' ;

finCampo    : ';' ;

// ----------- Reglas léxicas (tokens) ------------------

fragment LETRA_BASE : [a-zA-Z] ;

LETRA : LETRA_BASE;

DIGITO      : [0-9] ;

// Ignorar espacios y saltos de línea
WS          : [ \t\r\n]+ -> skip ;
