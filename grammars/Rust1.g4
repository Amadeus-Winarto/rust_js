grammar Rust1;

program: program_element (program_element)* EOF;
program_element: (constant_declaration | function_declaration);
statement:
	constant_declaration
	| variable_declaration
	| return_expression ';' // We treat return_expression separately 
	| expression ';';

constant_declaration:
	'const' const_name ':' type '=' expression ';';
variable_declaration:
	'let' var_name ':' type '=' expression ';';
function_declaration:
	'fn' function_name parameter_list '->' type function_body;
return_expression: 'return' expression;
expression:
	literal
	| name
	| block
	| expression binary_operator expression
	| expression binary_logical_operator expression
	| unary_operator expression
	| function_application
	| parens_expression
	| if_expression;

parens_expression: '(' expression ')';
if_expression:
	'if' cond_expr block ('else' (block | if_expression))?;
cond_expr: expression;

args_list: '()' | '(' args ')';
args: (expression (',' expression)*)?;
function_application: function_name args_list;

block: '{' (statement)* (expression)? '}';
function_body: block;

parameter_list: '()' | '(' parameters ')';
parameter: IDENTIFIER ':' type;
parameters: (parameter (',' parameter)*)?;

binary_operator:
	'+'
	| '-'
	| '*'
	| '/'
	| '%'
	| '=='
	| '!='
	| '<'
	| '>'
	| '<='
	| '>=';

unary_operator: '-' | '!';

binary_logical_operator: '&&' | '||';

literal:
	integer_literal
	| float_literal
	| boolean_literal
	| string_literal;

integer_literal: NUMBER;
float_literal: NUMBER '.' NUMBER;
boolean_literal: 'true' | 'false';
string_literal: '"' (string_characters)* '"';

string_characters: ~( '"' | '\\');

type: 'i32' | 'f32' | 'bool' | '()';

print_macro: 'println!';
name: const_name | var_name | function_name | print_macro;

const_name: IDENTIFIER;
var_name: IDENTIFIER;
function_name: IDENTIFIER | print_macro;

JUNK: [ \t\n\r]+ -> skip;

NUMBER: DIGIT+;
IDENTIFIER: LETTER ( LETTER | DIGIT | '_')*;
fragment LETTER: [a-zA-Z];
fragment DIGIT: [0-9];