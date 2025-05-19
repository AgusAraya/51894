// Generated from c:/Users/agust/OneDrive/Escritorio/Escritorio/Variados/Santo Grial del Analizador de Sintaxis 2 Version prueba/Metadata.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MetadataParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, LETRA=30, DIGITO=31, 
		WS=32;
	public static final int
		RULE_metadata = 0, RULE_campo = 1, RULE_nombreCampo = 2, RULE_valorCampo = 3, 
		RULE_texto = 4, RULE_caracter = 5, RULE_numero = 6, RULE_fecha = 7, RULE_listaTextos = 8, 
		RULE_finCampo = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"metadata", "campo", "nombreCampo", "valorCampo", "texto", "caracter", 
			"numero", "fecha", "listaTextos", "finCampo"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':'", "'nombre'", "'tipo'", "'tama\\u00C3\\u00B1o'", "'creado'", 
			"'modificado'", "'autor'", "'descripcion'", "'etiquetas'", "' '", "'_'", 
			"'-'", "'.'", "'''", "','", "'\\u00C3\\u00A1'", "'\\u00C3\\u00A9'", "'\\u00C3\\u00AD'", 
			"'\\u00C3\\u00B3'", "'\\u00C3\\u00BA'", "'\\u00C3\\uFFFD'", "'\\u00C3\\u2030'", 
			"'\\u00C3\\u201C'", "'\\u00C3\\u0161'", "'\\u00C3\\u00B1'", "'\\u00C3\\u2018'", 
			"'['", "']'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "LETRA", "DIGITO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Metadata.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MetadataParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MetadataContext extends ParserRuleContext {
		public List<CampoContext> campo() {
			return getRuleContexts(CampoContext.class);
		}
		public CampoContext campo(int i) {
			return getRuleContext(CampoContext.class,i);
		}
		public MetadataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_metadata; }
	}

	public final MetadataContext metadata() throws RecognitionException {
		MetadataContext _localctx = new MetadataContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_metadata);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(20);
				campo();
				}
				}
				setState(23); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 1020L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CampoContext extends ParserRuleContext {
		public NombreCampoContext nombreCampo() {
			return getRuleContext(NombreCampoContext.class,0);
		}
		public ValorCampoContext valorCampo() {
			return getRuleContext(ValorCampoContext.class,0);
		}
		public FinCampoContext finCampo() {
			return getRuleContext(FinCampoContext.class,0);
		}
		public CampoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_campo; }
	}

	public final CampoContext campo() throws RecognitionException {
		CampoContext _localctx = new CampoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_campo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(25);
			nombreCampo();
			setState(26);
			match(T__0);
			setState(27);
			valorCampo();
			setState(28);
			finCampo();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NombreCampoContext extends ParserRuleContext {
		public NombreCampoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nombreCampo; }
	}

	public final NombreCampoContext nombreCampo() throws RecognitionException {
		NombreCampoContext _localctx = new NombreCampoContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_nombreCampo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(30);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1020L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValorCampoContext extends ParserRuleContext {
		public TextoContext texto() {
			return getRuleContext(TextoContext.class,0);
		}
		public NumeroContext numero() {
			return getRuleContext(NumeroContext.class,0);
		}
		public FechaContext fecha() {
			return getRuleContext(FechaContext.class,0);
		}
		public ListaTextosContext listaTextos() {
			return getRuleContext(ListaTextosContext.class,0);
		}
		public ValorCampoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valorCampo; }
	}

	public final ValorCampoContext valorCampo() throws RecognitionException {
		ValorCampoContext _localctx = new ValorCampoContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_valorCampo);
		try {
			setState(36);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(32);
				texto();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(33);
				numero();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(34);
				fecha();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(35);
				listaTextos();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TextoContext extends ParserRuleContext {
		public List<CaracterContext> caracter() {
			return getRuleContexts(CaracterContext.class);
		}
		public CaracterContext caracter(int i) {
			return getRuleContext(CaracterContext.class,i);
		}
		public TextoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_texto; }
	}

	public final TextoContext texto() throws RecognitionException {
		TextoContext _localctx = new TextoContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_texto);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(39); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(38);
					caracter();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(41); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CaracterContext extends ParserRuleContext {
		public TerminalNode LETRA() { return getToken(MetadataParser.LETRA, 0); }
		public TerminalNode DIGITO() { return getToken(MetadataParser.DIGITO, 0); }
		public CaracterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caracter; }
	}

	public final CaracterContext caracter() throws RecognitionException {
		CaracterContext _localctx = new CaracterContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_caracter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 3355442178L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumeroContext extends ParserRuleContext {
		public List<TerminalNode> DIGITO() { return getTokens(MetadataParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(MetadataParser.DIGITO, i);
		}
		public NumeroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numero; }
	}

	public final NumeroContext numero() throws RecognitionException {
		NumeroContext _localctx = new NumeroContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_numero);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(45);
				match(DIGITO);
				}
				}
				setState(48); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==DIGITO );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FechaContext extends ParserRuleContext {
		public List<TerminalNode> DIGITO() { return getTokens(MetadataParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(MetadataParser.DIGITO, i);
		}
		public FechaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fecha; }
	}

	public final FechaContext fecha() throws RecognitionException {
		FechaContext _localctx = new FechaContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_fecha);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			match(DIGITO);
			setState(51);
			match(DIGITO);
			setState(52);
			match(DIGITO);
			setState(53);
			match(DIGITO);
			setState(54);
			match(T__11);
			setState(55);
			match(DIGITO);
			setState(56);
			match(DIGITO);
			setState(57);
			match(T__11);
			setState(58);
			match(DIGITO);
			setState(59);
			match(DIGITO);
			setState(71);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__9) {
				{
				setState(60);
				match(T__9);
				setState(61);
				match(DIGITO);
				setState(62);
				match(DIGITO);
				setState(63);
				match(T__0);
				setState(64);
				match(DIGITO);
				setState(65);
				match(DIGITO);
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(66);
					match(T__0);
					setState(67);
					match(DIGITO);
					setState(68);
					match(DIGITO);
					}
				}

				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ListaTextosContext extends ParserRuleContext {
		public List<TextoContext> texto() {
			return getRuleContexts(TextoContext.class);
		}
		public TextoContext texto(int i) {
			return getRuleContext(TextoContext.class,i);
		}
		public ListaTextosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listaTextos; }
	}

	public final ListaTextosContext listaTextos() throws RecognitionException {
		ListaTextosContext _localctx = new ListaTextosContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_listaTextos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(T__26);
			setState(74);
			texto();
			setState(79);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__14) {
				{
				{
				setState(75);
				match(T__14);
				setState(76);
				texto();
				}
				}
				setState(81);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(82);
			match(T__27);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FinCampoContext extends ParserRuleContext {
		public FinCampoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_finCampo; }
	}

	public final FinCampoContext finCampo() throws RecognitionException {
		FinCampoContext _localctx = new FinCampoContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_finCampo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			match(T__28);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001 W\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002\u0002"+
		"\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002\u0005"+
		"\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002\b\u0007"+
		"\b\u0002\t\u0007\t\u0001\u0000\u0004\u0000\u0016\b\u0000\u000b\u0000\f"+
		"\u0000\u0017\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0003\u0003%\b\u0003\u0001\u0004\u0004\u0004(\b\u0004\u000b\u0004\f\u0004"+
		")\u0001\u0005\u0001\u0005\u0001\u0006\u0004\u0006/\b\u0006\u000b\u0006"+
		"\f\u00060\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0003\u0007F\b\u0007\u0003\u0007H\b\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0005\bN\b\b\n\b\f\bQ\t\b\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\t\u0000\u0000\n\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010"+
		"\u0012\u0000\u0002\u0001\u0000\u0002\t\u0003\u0000\u0001\u0001\n\u001a"+
		"\u001e\u001fU\u0000\u0015\u0001\u0000\u0000\u0000\u0002\u0019\u0001\u0000"+
		"\u0000\u0000\u0004\u001e\u0001\u0000\u0000\u0000\u0006$\u0001\u0000\u0000"+
		"\u0000\b\'\u0001\u0000\u0000\u0000\n+\u0001\u0000\u0000\u0000\f.\u0001"+
		"\u0000\u0000\u0000\u000e2\u0001\u0000\u0000\u0000\u0010I\u0001\u0000\u0000"+
		"\u0000\u0012T\u0001\u0000\u0000\u0000\u0014\u0016\u0003\u0002\u0001\u0000"+
		"\u0015\u0014\u0001\u0000\u0000\u0000\u0016\u0017\u0001\u0000\u0000\u0000"+
		"\u0017\u0015\u0001\u0000\u0000\u0000\u0017\u0018\u0001\u0000\u0000\u0000"+
		"\u0018\u0001\u0001\u0000\u0000\u0000\u0019\u001a\u0003\u0004\u0002\u0000"+
		"\u001a\u001b\u0005\u0001\u0000\u0000\u001b\u001c\u0003\u0006\u0003\u0000"+
		"\u001c\u001d\u0003\u0012\t\u0000\u001d\u0003\u0001\u0000\u0000\u0000\u001e"+
		"\u001f\u0007\u0000\u0000\u0000\u001f\u0005\u0001\u0000\u0000\u0000 %\u0003"+
		"\b\u0004\u0000!%\u0003\f\u0006\u0000\"%\u0003\u000e\u0007\u0000#%\u0003"+
		"\u0010\b\u0000$ \u0001\u0000\u0000\u0000$!\u0001\u0000\u0000\u0000$\""+
		"\u0001\u0000\u0000\u0000$#\u0001\u0000\u0000\u0000%\u0007\u0001\u0000"+
		"\u0000\u0000&(\u0003\n\u0005\u0000\'&\u0001\u0000\u0000\u0000()\u0001"+
		"\u0000\u0000\u0000)\'\u0001\u0000\u0000\u0000)*\u0001\u0000\u0000\u0000"+
		"*\t\u0001\u0000\u0000\u0000+,\u0007\u0001\u0000\u0000,\u000b\u0001\u0000"+
		"\u0000\u0000-/\u0005\u001f\u0000\u0000.-\u0001\u0000\u0000\u0000/0\u0001"+
		"\u0000\u0000\u00000.\u0001\u0000\u0000\u000001\u0001\u0000\u0000\u0000"+
		"1\r\u0001\u0000\u0000\u000023\u0005\u001f\u0000\u000034\u0005\u001f\u0000"+
		"\u000045\u0005\u001f\u0000\u000056\u0005\u001f\u0000\u000067\u0005\f\u0000"+
		"\u000078\u0005\u001f\u0000\u000089\u0005\u001f\u0000\u00009:\u0005\f\u0000"+
		"\u0000:;\u0005\u001f\u0000\u0000;G\u0005\u001f\u0000\u0000<=\u0005\n\u0000"+
		"\u0000=>\u0005\u001f\u0000\u0000>?\u0005\u001f\u0000\u0000?@\u0005\u0001"+
		"\u0000\u0000@A\u0005\u001f\u0000\u0000AE\u0005\u001f\u0000\u0000BC\u0005"+
		"\u0001\u0000\u0000CD\u0005\u001f\u0000\u0000DF\u0005\u001f\u0000\u0000"+
		"EB\u0001\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000FH\u0001\u0000\u0000"+
		"\u0000G<\u0001\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000H\u000f\u0001"+
		"\u0000\u0000\u0000IJ\u0005\u001b\u0000\u0000JO\u0003\b\u0004\u0000KL\u0005"+
		"\u000f\u0000\u0000LN\u0003\b\u0004\u0000MK\u0001\u0000\u0000\u0000NQ\u0001"+
		"\u0000\u0000\u0000OM\u0001\u0000\u0000\u0000OP\u0001\u0000\u0000\u0000"+
		"PR\u0001\u0000\u0000\u0000QO\u0001\u0000\u0000\u0000RS\u0005\u001c\u0000"+
		"\u0000S\u0011\u0001\u0000\u0000\u0000TU\u0005\u001d\u0000\u0000U\u0013"+
		"\u0001\u0000\u0000\u0000\u0007\u0017$)0EGO";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}