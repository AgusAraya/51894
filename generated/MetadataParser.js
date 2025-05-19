// Generated from Metadata.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MetadataListener from './MetadataListener.js';
const serializedATN = [4,1,21,87,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,4,0,22,8,0,11,0,12,0,23,1,1,
1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,3,3,37,8,3,1,4,4,4,40,8,4,11,4,12,
4,41,1,5,1,5,1,6,4,6,47,8,6,11,6,12,6,48,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,70,8,7,3,7,72,8,7,1,8,1,
8,1,8,1,8,5,8,78,8,8,10,8,12,8,81,9,8,1,8,1,8,1,9,1,9,1,9,0,0,10,0,2,4,6,
8,10,12,14,16,18,0,2,1,0,2,9,2,0,10,13,19,20,85,0,21,1,0,0,0,2,25,1,0,0,
0,4,30,1,0,0,0,6,36,1,0,0,0,8,39,1,0,0,0,10,43,1,0,0,0,12,46,1,0,0,0,14,
50,1,0,0,0,16,73,1,0,0,0,18,84,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,23,
1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,1,1,0,0,0,25,26,3,4,2,0,26,27,5,1,
0,0,27,28,3,6,3,0,28,29,3,18,9,0,29,3,1,0,0,0,30,31,7,0,0,0,31,5,1,0,0,0,
32,37,3,8,4,0,33,37,3,12,6,0,34,37,3,14,7,0,35,37,3,16,8,0,36,32,1,0,0,0,
36,33,1,0,0,0,36,34,1,0,0,0,36,35,1,0,0,0,37,7,1,0,0,0,38,40,3,10,5,0,39,
38,1,0,0,0,40,41,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,9,1,0,0,0,43,44,
7,1,0,0,44,11,1,0,0,0,45,47,5,20,0,0,46,45,1,0,0,0,47,48,1,0,0,0,48,46,1,
0,0,0,48,49,1,0,0,0,49,13,1,0,0,0,50,51,5,20,0,0,51,52,5,20,0,0,52,53,5,
20,0,0,53,54,5,20,0,0,54,55,5,11,0,0,55,56,5,20,0,0,56,57,5,20,0,0,57,58,
5,11,0,0,58,59,5,20,0,0,59,71,5,20,0,0,60,61,5,14,0,0,61,62,5,20,0,0,62,
63,5,20,0,0,63,64,5,1,0,0,64,65,5,20,0,0,65,69,5,20,0,0,66,67,5,1,0,0,67,
68,5,20,0,0,68,70,5,20,0,0,69,66,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,
60,1,0,0,0,71,72,1,0,0,0,72,15,1,0,0,0,73,74,5,15,0,0,74,79,3,8,4,0,75,76,
5,16,0,0,76,78,3,8,4,0,77,75,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,
0,0,0,80,82,1,0,0,0,81,79,1,0,0,0,82,83,5,17,0,0,83,17,1,0,0,0,84,85,5,18,
0,0,85,19,1,0,0,0,7,23,36,41,48,69,71,79];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MetadataParser extends antlr4.Parser {

    static grammarFileName = "Metadata.g4";
    static literalNames = [ null, "':'", "'nombre'", "'tipo'", "'tama\\u00C3\\u00B1o'", 
                            "'creado'", "'modificado'", "'autor'", "'descripcion'", 
                            "'etiquetas'", "'_'", "'-'", "'.'", "'''", "' '", 
                            "'['", "','", "']'", "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "LETRA", "DIGITO", "WS" ];
    static ruleNames = [ "metadata", "campo", "nombreCampo", "valorCampo", 
                         "texto", "caracter", "numero", "fecha", "listaTextos", 
                         "finCampo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MetadataParser.ruleNames;
        this.literalNames = MetadataParser.literalNames;
        this.symbolicNames = MetadataParser.symbolicNames;
    }



	metadata() {
	    let localctx = new MetadataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MetadataParser.RULE_metadata);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.campo();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1020) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MetadataParser.RULE_campo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.nombreCampo();
	        this.state = 26;
	        this.match(MetadataParser.T__0);
	        this.state = 27;
	        this.valorCampo();
	        this.state = 28;
	        this.finCampo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreCampo() {
	    let localctx = new NombreCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MetadataParser.RULE_nombreCampo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1020) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valorCampo() {
	    let localctx = new ValorCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MetadataParser.RULE_valorCampo);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.texto();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.numero();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 34;
	            this.fecha();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 35;
	            this.listaTextos();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MetadataParser.RULE_texto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 38;
	            this.caracter();
	            this.state = 41; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1588224) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MetadataParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1588224) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MetadataParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 45;
	            this.match(MetadataParser.DIGITO);
	            this.state = 48; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===20);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fecha() {
	    let localctx = new FechaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MetadataParser.RULE_fecha);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(MetadataParser.DIGITO);
	        this.state = 51;
	        this.match(MetadataParser.DIGITO);
	        this.state = 52;
	        this.match(MetadataParser.DIGITO);
	        this.state = 53;
	        this.match(MetadataParser.DIGITO);
	        this.state = 54;
	        this.match(MetadataParser.T__10);
	        this.state = 55;
	        this.match(MetadataParser.DIGITO);
	        this.state = 56;
	        this.match(MetadataParser.DIGITO);
	        this.state = 57;
	        this.match(MetadataParser.T__10);
	        this.state = 58;
	        this.match(MetadataParser.DIGITO);
	        this.state = 59;
	        this.match(MetadataParser.DIGITO);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 60;
	            this.match(MetadataParser.T__13);
	            this.state = 61;
	            this.match(MetadataParser.DIGITO);
	            this.state = 62;
	            this.match(MetadataParser.DIGITO);
	            this.state = 63;
	            this.match(MetadataParser.T__0);
	            this.state = 64;
	            this.match(MetadataParser.DIGITO);
	            this.state = 65;
	            this.match(MetadataParser.DIGITO);
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 66;
	                this.match(MetadataParser.T__0);
	                this.state = 67;
	                this.match(MetadataParser.DIGITO);
	                this.state = 68;
	                this.match(MetadataParser.DIGITO);
	            }

	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listaTextos() {
	    let localctx = new ListaTextosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MetadataParser.RULE_listaTextos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(MetadataParser.T__14);
	        this.state = 74;
	        this.texto();
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 75;
	            this.match(MetadataParser.T__15);
	            this.state = 76;
	            this.texto();
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 82;
	        this.match(MetadataParser.T__16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	finCampo() {
	    let localctx = new FinCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MetadataParser.RULE_finCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(MetadataParser.T__17);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MetadataParser.EOF = antlr4.Token.EOF;
MetadataParser.T__0 = 1;
MetadataParser.T__1 = 2;
MetadataParser.T__2 = 3;
MetadataParser.T__3 = 4;
MetadataParser.T__4 = 5;
MetadataParser.T__5 = 6;
MetadataParser.T__6 = 7;
MetadataParser.T__7 = 8;
MetadataParser.T__8 = 9;
MetadataParser.T__9 = 10;
MetadataParser.T__10 = 11;
MetadataParser.T__11 = 12;
MetadataParser.T__12 = 13;
MetadataParser.T__13 = 14;
MetadataParser.T__14 = 15;
MetadataParser.T__15 = 16;
MetadataParser.T__16 = 17;
MetadataParser.T__17 = 18;
MetadataParser.LETRA = 19;
MetadataParser.DIGITO = 20;
MetadataParser.WS = 21;

MetadataParser.RULE_metadata = 0;
MetadataParser.RULE_campo = 1;
MetadataParser.RULE_nombreCampo = 2;
MetadataParser.RULE_valorCampo = 3;
MetadataParser.RULE_texto = 4;
MetadataParser.RULE_caracter = 5;
MetadataParser.RULE_numero = 6;
MetadataParser.RULE_fecha = 7;
MetadataParser.RULE_listaTextos = 8;
MetadataParser.RULE_finCampo = 9;

class MetadataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_metadata;
    }

	campo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CampoContext);
	    } else {
	        return this.getTypedRuleContext(CampoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterMetadata(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitMetadata(this);
		}
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_campo;
    }

	nombreCampo() {
	    return this.getTypedRuleContext(NombreCampoContext,0);
	};

	valorCampo() {
	    return this.getTypedRuleContext(ValorCampoContext,0);
	};

	finCampo() {
	    return this.getTypedRuleContext(FinCampoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitCampo(this);
		}
	}


}



class NombreCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_nombreCampo;
    }


	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterNombreCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitNombreCampo(this);
		}
	}


}



class ValorCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_valorCampo;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	fecha() {
	    return this.getTypedRuleContext(FechaContext,0);
	};

	listaTextos() {
	    return this.getTypedRuleContext(ListaTextosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterValorCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitValorCampo(this);
		}
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_texto;
    }

	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitTexto(this);
		}
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(MetadataParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(MetadataParser.DIGITO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitCaracter(this);
		}
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MetadataParser.DIGITO);
	    } else {
	        return this.getToken(MetadataParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitNumero(this);
		}
	}


}



class FechaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_fecha;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MetadataParser.DIGITO);
	    } else {
	        return this.getToken(MetadataParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterFecha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitFecha(this);
		}
	}


}



class ListaTextosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_listaTextos;
    }

	texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextoContext);
	    } else {
	        return this.getTypedRuleContext(TextoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterListaTextos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitListaTextos(this);
		}
	}


}



class FinCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_finCampo;
    }


	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterFinCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitFinCampo(this);
		}
	}


}




MetadataParser.MetadataContext = MetadataContext; 
MetadataParser.CampoContext = CampoContext; 
MetadataParser.NombreCampoContext = NombreCampoContext; 
MetadataParser.ValorCampoContext = ValorCampoContext; 
MetadataParser.TextoContext = TextoContext; 
MetadataParser.CaracterContext = CaracterContext; 
MetadataParser.NumeroContext = NumeroContext; 
MetadataParser.FechaContext = FechaContext; 
MetadataParser.ListaTextosContext = ListaTextosContext; 
MetadataParser.FinCampoContext = FinCampoContext; 
