insert into problems(problem_description, function_description, returns, input_format, sample_input, sample_output,
                     explanation, starter_code)
values ('<p>A greeting function is provided for you in the editor below. It has one parameter, <b>parameterVariable</b>. Perform the following tasks to complete this challenge:</p>
        <ol>
          <li>Use console.log() to print Hello, World! on a new line in the console, which is also known as stdout or standard output. The code for this portion of the task is already provided in the editor.</li>
          <li>Use console.log() to print the contents of <b>parameterVariable</b> (i.e., the argument passed to main).</li>
        </ol>',
        null, null,
        '<p><b>Input Format</b></p>
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>Data type</th>
            <th>Parameter</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>string</td>
            <td><b>parameterVariable</b></td>
            <td>A single line of text containing one or more space-separated words.</td>
          </tr>
          </tbody>
        </table>',
        '<p><b>Sample Input</b></p><p>Welcome to 10 Days of JavaScript!</p>',
        '<p><b>Sample Output</b></p><p>Hello, World!<br/>Welcome to 10 Days of JavaScript!</p>',
        '<p><b>Explanation</b></p>
        <p>We printed two lines of output:</p>
        <ol>
          <li>We printed the literal string Hello, World! using the code provided in the editor.</li>
          <li>The value of <b>parameterVariable</b> passed to our main function in this Sample Case was Welcome to 10 Days of JavaScript!. We then passed our variable to console.log, which printed the contents of <b>parameterVariable</b>.</li>
        </ol>',
        '/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor.
*   Write a second line of code that prints the contents of ''parameterVariable'' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    // This line prints ''Hello, World!'' to the console:
    console.log(''Hello, World!'');

    // Write a line of code that prints parameterVariable to stdout using console.log:

}

process.stdin.on(''data'', data => {
    let line = data.toString();
    greeting(line);
});
'),
       ('<p>Variables named <b>firstInteger</b>, <b>firstDecimal</b>, and <b>firstString</b> are declared for you in the
          editor below. You must use the <b>+</b> operator to perform the following sequence of operations:</p>
        <ol>
          <li>Convert <b>secondInteger</b> to an integer (Number type), then sum it with <b>firstInteger</b> and print
            the result on a new line using console.log.
          </li>
          <li>Convert <b>secondDecimal</b> to a floating-point number (Number type), then sum it with
            <b>firstDecimal</b> and print the result on a new line using console.log.
          </li>
          <li>Print the concatenation of <b>firstString</b> and <b>secondString</b> on a new line using console.log.
            Note that <b>firstString</b> must be printed first.
          </li>
        </ol>', null, null, '<p><b>Input Format</b></p>
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>Data type</th>
            <th>Parameter</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>string</td>
            <td>secondInteger</td>
            <td>The string representation of an integer you must sum with <b>firstInteger</b>.</td>
          </tr>
          <tr>
            <td>string</td>
            <td>secondDecimal</td>
            <td>The string representation of an floating-point number you must sum with <b>firstDecimal</b>.</td>
          </tr>
          <tr>
            <td>string</td>
            <td>secondString</td>
            <td>A string of one or more space-separated words you must append to <b>firstString</b>.</td>
          </tr>
          </tbody>
        </table>', '<p><b>Sample Input</b></p><p>12<br/>4.32<br/>is the best place to learn and practice coding!</p>',
        '<p><b>Sample Output</b></p><p>16<br/>8.32<br/>HackerRank is the best place to learn and practice coding!</p>',
        '<p><b>Explanation</b></p>
        <p>When we sum the integers <b>4</b> and <b>12</b>, we get the integer <b>16</b>.
          When we sum the floating-point numbers <b>4.0</b> and <b>4.32</b>, we get <b>8.32</b>. When we concatenate <b>Learn to code</b>
          with <b>is the best place to learn and practice coding!</b>, we get <b>Learn to code is the best place to learn
            and practice coding!.</b></p>',
        '/*
*   The variables ''firstInteger'', ''firstDecimal'', and ''firstString'' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of ''firstInteger'' and the Number representation of ''secondInteger''.
*   2. The sum of ''firstDecimal'' and the Number representation of ''secondDecimal''.
*   3. The concatenation of ''firstString'' and ''secondString'' (''firstString'' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;

    const firstDecimal = 4.0;

    const firstString = ''Learn to code '';

    // Write your code here
}

process.stdin.on(''data'', data => {
    let lines = data.toString().split(''\n'');
    performOperation(lines[0], lines[1], lines[2]);
});
'),
       ('<p>Complete the following functions in the editor below:</p>
<ol>
  <li>getArea(length, width): Calculate and return the area of a rectangle having sides <b>length</b> and <b>width</b>.
  </li>
  <li>getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides <b>length</b> and <b>width</b>.
  </li>
</ol>', null, null, '<p><b>Input format</b></p>
<table class="table table-bordered">
  <thead>
  <tr>
    <th>Data type</th>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>number</td>
    <td><b>length</b></td>
    <td>A number denoting the length of the rectangle</td>
  </tr>
  <tr>
    <td>number</td>
    <td><b>height</b></td>
    <td>A number denoting the height of the rectangle</td>
  </tr>
  </tbody>
</table>', '<p><b>Sample input</b></p><p>3<br/>4.5</p>', '<p><b>Sample output</b></p><p>13.5<br/>15</p>',
        '<p><b>Explanation</b></p>
    <p>The area of the rectangle is <b>length X width = 3 X 4.5 = 13.5</b>.</p>
    <p>The perimeter of the rectangle is <b>2 X (length + width) = 2 X (3 + 4.5) = 15</b>.</p>',
        '/**
    *   Calculate the area of a rectangle.
    *
    *   length: The length of the rectangle.
    *   width: The width of the rectangle.
    *
    *	Return a number denoting the rectangle''s area.
    **/
    function getArea(length, width) {
        let area;
        // Write your code here

        return area;
    }

    /**
    *   Calculate the perimeter of a rectangle.
    *
    *	length: The length of the rectangle.
    *   width: The width of the rectangle.
    *
    *	Return a number denoting the perimeter of a rectangle.
    **/
    function getPerimeter(length, width) {
        let perimeter;
        // Write your code here

        return perimeter;
    }

    process.stdin.on(''data'', data => {
        let lines = data.toString().split(''\n'');
        let length = +lines[0];
        let width = +lines[1];
        console.log(getArea(length, width));
        console.log(getPerimeter(length, width));
    });
    '),
       ('<p>Complete the getGrade(score) function in the editor. It has one parameter: an integer, <b>score</b>, denoting the number of points Julia earned on an exam. It must return the letter corresponding to her <b>grade</b> according to the following rules:</p>
<ul>
  <li>If <b>25 < score &le; 30</b>, then <b>grade = A</b>.</li>
  <li>If <b>20 < score &le; 25</b>, then <b>grade = B</b>.</li>
  <li>If <b>15 < score &le; 20</b>, then <b>grade = C</b>.</li>
  <li>If <b>10 < score &le; 15</b>, then <b>grade = D</b>.</li>
  <li>If <b>5 < score &le; 10</b>, then <b>grade = E</b>.</li>
  <li>If <b>0 &le; score &le; 5</b>, then <b>grade = F</b>.</li>
</ul>', null, null, null, '<p><b>Sample input</b></p><p>11</p>', '<p><b>Sample output</b></p><p>D</p>', '<p><b>Explanation</b></p><p>Because <b>score = 11</b>, it satisfies the condition <b>10 < score &le; 15</b> (which corresponds to D). Thus, we return D as our answer.</p>',
        'function getGrade(score) {
    let grade;
    // Write your code here

    return grade;
}

process.stdin.on(''data'', data => {
    let line = data.toString();
    console.log(getGrade(+line));
});
'),
       ('<p>Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:</p>
<ul>
  <li>If the first character in string <b>s</b> is in the set <b>{a, e, i, o, u}</b>, then return A.</li>
  <li>If the first character in string <b>s</b> is in the set <b>{b, c, d, f, g}</b>, then return B.</li>
  <li>If the first character in string <b>s</b> is in the set <b>{h, j, k, l, m}</b>, then return C.</li>
  <li>If the first character in string <b>s</b> is in the set <b>{n, p, q, r, s, t, v, w, x, y, z}</b>, then return D.</li>
</ul>', null, null, null, '<p><b>Sample input</b></p><p>adfgt</p>', '<p><b>Sample output</b></p><p>A</p>', '<p>The first character of string <b>s = adfgt</b> is a. Because the given criteria stipulate that we print A any time the first character is in <b>{a, e, i, o, u}</b>, we return A as our answer.</p>',
        '/*
 * Complete the vowelsAndConsonants function.
 * Print your output using ''console.log()''.
 */
function getLetter(s) {
    let letter;
    // Write your code here

}

process.stdin.on(''data'', data => {
    let line = data.toString();
    getLetter(line);
});
'),
       ('<ul>
  <li>First, print each vowel in <b>s</b> on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in <b>s</b>.</li>
  <li>Second, print each consonant (i.e., non-vowel) in <b>s</b> on a new line in the same order as it appeared in <b>s</b>.</li>
</ul>', null, null, null, '<p><b>Sample input</b></p><p>javascriptloops</p>',
        '<p><b>Sample output</b></p><p>a</p><p>a</p><p>i</p><p>o</p><p>o</p><p>j</p><p>v</p><p>s</p><p>c</p><p>r</p><p>p</p><p>t</p><p>l</p><p>p</p><p>s</p>', '<p>Observe the following:</p>
<ul>
  <li>Each letter is printed on a new line.</li>
  <li>Then the vowels are printed in the same order as they appeared in <b>s</b>.</li>
  <li>Then the consonants are printed in the same order as they appeared in <b>s</b>.</li>
</ul>',
        '/*
 * Complete the vowelsAndConsonants function.
 * Print your output using ''console.log()''.
 */
function vowelsAndConsonants(s) {

}

process.stdin.on(''data'', data => {
    let line = data.toString();
    vowelsAndConsonants(line);
});
'),
       ('<p>Complete the getSecondLargest function in the editor below.</p>
<p>getSecondLargest has the following parameters:</p>
<ul>
  <li>int nums[n]: an array of integers</li>
</ul>', null, null, null, '<p><b>Sample input</b></p><p>5</p><p>2 3 6 6 5</p>', '<p><b>Sample output</b></p><p>5</p>', '<p>Given the array <b>nums = [2, 3, 6, 6, 5]</b>, we see that the largest value in the array is <b>6</b> and the second largest value is <b>5</b>. Thus, we return <b>5</b> as our answer.</p>',
        '/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
}

process.stdin.on(''data'', data => {
 let d = +data.toString().split(''\n'')[0].split('' '')[1];
 let a = data.toString().split(''\n'')[1].split('' '').map(el => +el);
 let result = getSecondLargest(a);
 console.log(result);
});
'),
       ('<p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
<p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>', null, null, null,
        '<p><b>Sample input</b></p><p>9</p><p>2 7 11 15</p>', '<p><b>Sample output</b></p><p>0 1</p>', null,
        'function twoSum(nums, target) {

}

process.stdin.on(''data'', data => {
 let d = +data.toString().split(''\n'')[0];
 let a = data.toString().split(''\n'')[1].split('' '').map(el => +el);
 let result = twoSum(a, d);
 console.log(''[''+ result.join('','') + '']'');
});
'),
       ('<p>A left rotation operation on an array shifts each of the array''s elements 1 unit to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array. Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.</p>',
        '<p><b>Function description</b></p><p>Complete the function rotLeft in the editor below. rotLeft has the following parameter(s):</p><ul><li>int a[n]: the array to rotate</li><li>int d: the number of rotations</li></ul>',
        '<p><b>Returns</b></p><ul><li>int a''[n]: the rotated array</li></ul>',
        '<p><b>Input format</b></p><p>The first line contains two space-separated integers n and d, the size of a and the number of left rotations. The second line contains n space-separated integers, each an a[i].</p>',
        '<p><b>Sample Input</b></p><p>5 4<br/>1 2 3 4 5</p>',
        '<p><b>Sample Output</b></p><p>5 1 2 3 4</p>',
        '<p><b>Explanation</b></p><p>When we perform left rotations, the array undergoes the following sequence of changes:<br/>[1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2,] -> [4,5,1,2,3] -> [5,1,2,3,4]</p>',
        '/*
* Complete the ''rotLeft'' function below.
*
* The function is expected to return an INTEGER_ARRAY.
* The function accepts following parameters:
*  1. INTEGER_ARRAY a
*  2. INTEGER d
*/

function rotLeft(a, d) {
    // Write your code here
}

process.stdin.on(''data'', data => {
 let d = +data.toString().split(''\n'')[0].split('' '')[1];
 let a = data.toString().split(''\n'')[1].split('' '').map(el => +el);
 let result = rotLeft(a, d);
 console.log(''[''+ result.join('','') + '']'');
});'),
       ('<p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p>', null, null, null,
        '<p><b>Sample input</b></p><p>5</p><p>1 3 5 6</p>', '<p><b>Sample output</b></p><p>2</p>', '',
        'function searchInsert(nums, target) {

}

process.stdin.on(''data'', data => {
 let d = +data.toString().split(''\n'')[0];
 let a = data.toString().split(''\n'')[1].split('' '').map(el => +el);
 let result = searchInsert(a, d);
 console.log(result);
});
');

insert into test_cases(input, expected, problem_id)
values ('Welcome to 10 Days of JavaScript!',
        'Hello, World!
Welcome to 10 Days of JavaScript!', 1);

insert into test_cases(input, expected, problem_id)
values ('12
4.32
is the best place to learn and practice coding!',
        '16
8.32
Learn to code is the best place to learn and practice coding!',
        2),
       ('17
5.13
is the best place to learn and practice coding!',
        '21
9.13
Learn to code is the best place to learn and practice coding!',
        2);

insert into test_cases(input, expected, problem_id)
values ('3
4.5', '13.5
15', 3),
       ('5
12', '60
34', 3),
       ('12.5
4.5', '56.25
34', 3);

insert into test_cases(input, expected, problem_id)
values ('11', 'D', 4),
       ('0', 'F', 4),
       ('16', 'C', 4),
       ('25', 'B', 4),
       ('26', 'A', 4);

insert into test_cases(input, expected, problem_id)
values ('adfgt', 'A', 5),
       ('dvasd', 'B', 5),
       ('hjkl', 'C', 5),
       ('xyz', 'D', 5),
       ('ua', 'A', 5);

insert into test_cases(input, expected, problem_id)
values ('javascriptloops', 'a
a
i
o
o
j
v
s
c
r
p
t
l
p
s', 6),
       ('learntocode', 'e
a
o
o
e
l
r
n
t
c
d', 6);

insert into test_cases (input, expected, problem_id)
values ('5
2 3 6 6 5', '5', 7),
       ('7
2 3 6 6 5 7 7', '6', 7),
       ('1
1', '1', 7),
       ('3
2 3 1', '2', 7),
       ('5
1 2 3 4 5', '4', 7);

insert into test_cases(input, expected, problem_id)
values ('9
2 7 11 15',
        '[0,1]',
        8),
       ('10
1 3 6 7 8',
        '[1,3]',
        8),
       ('10
',
        '[]',
        8);

insert into test_cases(input, expected, problem_id)
values ('5 4
1 2 3 4 5',
        '[5,1,2,3,4]',
        9),
       ('3 0
1 2 3',
        '[1,2,3]',
        9),
       ('5 5
1 2 3 4 5',
        '[1,2,3,4,5]',
        9);

insert into test_cases(input, expected, problem_id)
values ('5
1 3 5 6',
        '2',
        10),
       ('2
1 3 5 6',
        '1',
        10),
       ('7
1 3 5 6',
        '4',
        10);

insert into home_items(type, title, link, part)
values ('Topic', 'Basics of javascript', '/topic/1', 1),
       ('Problem', 'Hello World!', '/problem/1', 1),
       ('Topic', 'Data types', '/topic/2', 1),
       ('Problem', 'Data types', '/problem/2', 1),
       ('Topic', 'Arithmetic operators', '/topic/3', 1),
       ('Problem', 'Arithmetic operators', '/problem/3', 1),
--        ('Topic', 'Functions in javascript', '/topic/4', 2),
--        ('Problem', 'Functions', '/problem/4', 2),
--        ('Topic', 'Variable Declaration Keywords', '/topic/5', 2),
--        ('Problem', 'Let and const', '/problem/5', 2),
       ('Topic', 'If-else Conditional Statements', '/topic/4', 2),
       ('Topic', 'Switch Conditional Statements', '/topic/5', 2),
       ('Topic', 'Loops', '/topic/6', 2),
       ('Problem', 'Conditional Statements: If-else', '/problem/4', 2),
       ('Problem', 'Conditional Statements: Switch', '/problem/5', 2),
       ('Problem', 'Loops', '/problem/6', 2),
       ('Topic', 'Arrays', '/topic/7', 3),
       ('Problem', 'Arrays', '/problem/7', 3);
--        ('Topic', 'String Basics', '/topic/10', 4),
--        ('Topic', 'Error Handling', '/topic/11', 4),
--        ('Problem', 'Try, Catch and Finally', '/problem/10', 4),
--        ('Topic', 'Objects in javascript', '/topic/12', 5),
--        ('Problem', 'Iterating over arrays', '/problem/11', 5),
--        ('Topic', 'Create a Rectangle Object', '/topic/13', 5),
--        ('Problem', 'Count Objects', '/problem/12', 5);

insert into topics(content)
values ('<div class="container">
  <h1 class="">JavaScript Basics</h1>
  <hr>
  <h3>Lexical Structure</h3>
  <div>
    The lexical structure of a programming language is the set of elementary rules that tells you how to write programs
    in that language. It''s essentially the lowest-level syntax of a language and specifies such things as what variable
    names look like, the delimiter characters for comments, and how one program statement is separated from the next.
  </div>
  <hr>
  <h3>Character Set</h3>
  <div id="character_set">
    <ul>
      <li>JavaScript programs are written using the Unicode character set. Unicode is a superset of ASCII and Latin-1.
      </li>
      <li>JavaScript is a case-sensitive language.</li>
      <li>JavaScript ignores spaces that appear between tokens in programs. For the most part, JavaScript also ignores
        line breaks.
      </li>
    </ul>
  </div>
  <hr>
  <h3>Printing Output</h3>
  <div id="printing">
    <p>We use the <b>console.log</b> method to write data to standard output in JavaScript.</p>
  </div>
  <hr>
  <h3>Comments</h3>
  <div id="comments">
    <p>JavaScript supports two styles of comments, as demonstrated below.</p>
    <h5>Inline Comments</h5>
    <p>Any text between a // and the end of a line is ignored by JavaScript and treated as a comment:</p>
    <app-non-editable [query]="''console.log(\"This is an instruction that won''t be ignored.\");
// This is an inline comment and will be ignored''"></app-non-editable>
    <h5>Block Comments</h5>
    <p>Any text between /* and */ is also treated as a comment:</p>
    <app-non-editable [query]="''console.log(\"This is an instruction that won''t be ignored.\");
/*
* This is a block comment and will be ignored
*/

 console.log(\"This is an instruction that won''t be ignored.\");

/*
* This is part of our block comment and will be ignored
* This is part of the same block comment and will be ignored
*/''"></app-non-editable>
  </div>
  <hr>
  <h3>Literals</h3>
  <div id="literals">
    <p>A literal is a data value that appears directly in a program. For example:</p>
    <app-non-editable [query]="''// The integer number twelve:
12

// The floating-point number one-point-two:
1.2

// A string of text:
\"Hello, World.\"

// Another string:
''Hi!''

// A boolean value:
true

// The absence of an object:
null''"></app-non-editable>
    <p>More complex expressions can serve as array and object literals.</p>
    <app-non-editable [query]="''// An object initializer:
{x: 1, y: 2}

// An array initializer:
[1, 2, 3, 4, 5]''"></app-non-editable>
  </div>
  <hr>
  <h3>Identifiers</h3>
  <div id="identifiers">
    <p>An identifier is simply a name that you can specify and use as a means of referring back to a specific value or
      other piece of code. In JavaScript, identifiers are used to name variables and functions, as well as to provide
      labels for certain code loops.

      A JavaScript identifier must begin with a letter, an underscore (_), or a dollar sign ($). Subsequent characters
      can be letters, underscores, dollar signs, or digits (i.e., the numbers 0 through 9). Like many other languages,
      JavaScript doesn''t allow digits as the first character of an identifier because it makes them more easily
      distinguishable from numbers.</p>
    <app-non-editable [query]="''// Some valid identifiers are:
x
variable_name
sum13
_variable
$variable''"></app-non-editable>
    <p>A number of identifiers are reserved words or keywords, meaning they are part of a set of predefined words that
      have special meaning in the language itself. You cannot use these words as identifiers in your programs. For
      example, for and function are reserved words in JavaScript. In addition, there are a number of predefined global
      variables and functions; it''s important to avoid using these predefined names for your own variables and
      functions.</p>
  </div>
  <hr>
  <h3>Optional Semicolon</h3>
  <div id="semicolon">
    <p>Like many programming languages, JavaScript uses the semicolon (;) to separate statements from each other. This
      is important as it makes the meaning of your code clear; without a separator, the end of one statement might
      appear to be the beginning of the next (and vice versa). In JavaScript, you can usually omit the semicolon between
      two statements as long as those statements are written on separate lines.</p>
  </div>
</div>
'),
       ('<div class="container">
  <h1 class="">Data types</h1>
  <hr>
  <h3>JavaScript''s Data Types</h3>
  <div>
    <p>The latest ECMAScript standard defines seven data types:</p>
    <ul>
      <li>String</li>
      <li>Number</li>
      <li>Boolean</li>
      <li>Undefined</li>
      <li>Null</li>
      <li>Object</li>
      <li>Symbol</li>
    </ul>
  </div>
  <hr>
  <h3>JavaScript String</h3>
  <div id="string">
    <p>String is used to store text. In JavaScript, strings are surrounded by quotes:</p>
    <ul>
      <li>Single quotes: ''Hello''</li>
      <li>Double quotes: "Hello"</li>
      <li>Backticks: `Hello`</li>
    </ul>
    For example,
    <app-non-editable [query]="''//strings example
const name = ''ram'';
const name1 = \"hari\";
const result = \`The names are ${name} and ${name1}\`;''"></app-non-editable>
    Single quotes and double quotes are practically the same and you can use either of them.

    Backticks are generally used when you need to include variables or expressions into a string. This is done by
    wrapping variables or expressions with ${variable or expression} as shown above.
  </div>
  <hr>
  <h3>JavaScript Number</h3>
  <div id="number">
    <p>Number represents integer and floating numbers (decimals and exponentials). For example,</p>
    <app-non-editable [query]="''const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 // 3 * 10^5''"></app-non-editable>
    <p>A number type can also be +Infinity, -Infinity, and NaN (not a number). For example,</p>
    <app-non-editable [query]="''const number1 = 3/0;
console.log(number1); // Infinity

const number2 = -3/0;
console.log(number2); // -Infinity

// strings can''t be divided by numbers
const number3 = \"abc\"/3;
console.log(number3);  // NaN''"></app-non-editable>
  </div>
  <hr>
  <h3>JavaScript Boolean</h3>
  <div id="boolean">
    <p>This data type represents logical entities. Boolean represents one of two values: true or false. It is easier to
      think of it as a yes/no switch. For example,</p>
    <app-non-editable [query]="''const dataChecked = true;
const valueCounted = false;''"></app-non-editable>
  </div>
  <hr>
  <h3>JavaScript undefined</h3>
  <div id="undefined">
    <p>The undefined data type represents value that is not assigned. If a variable is declared but the value is not
      assigned, then the value of that variable will be undefined. For example,</p>
    <app-non-editable [query]="''let name;
console.log(name); // undefined''"></app-non-editable>
  </div>
  <hr>
  <h3>JavaScript null</h3>
  <div id="null">
    <p>In JavaScript, null is a special value that represents empty or unknown value. For example,</p>
    <app-non-editable [query]="''const number = null;''"></app-non-editable>
  </div>
  <hr>
  <h3>JavaScript Object</h3>
  <div id="object">
    <p>An object is a complex data type that allows us to store collections of data. For example,</p>
    <app-non-editable [query]="''const student = {
  firstName: ''ram'',
  lastName: null,
  class: 10
};''"></app-non-editable>
  </div>
  <hr>
  <h3>JavaScript typeof</h3>
  <div id="typeof">
    <p>To find the type of a variable, you can use the typeof operator. For example,</p>
    <app-non-editable [query]="''const name = ''ram'';
typeof(name); // returns  string

const number = 4;
typeof(number); //returns number

const valueChecked = true;
typeof(valueChecked); //returns boolean

const a = null;
typeof(a); // returns object''"></app-non-editable>
  </div>
  <hr>
</div>
'),
       ('<div class="container">
           <h1 class="">Arithmetic Operators</h1>
           <hr>
           <h2>Operator Types</h2>
           <hr>
           <h3>Unary</h3>
           <div>
           <p>A unary operator requires a single operand, either before or after the operator, following this format:</p>
    <app-non-editable [query]="''operand operator
operator operand''"></app-non-editable>
    <p>For example, in the expression a++, ++ is a unary operator.</p>
  </div>
  <h3>Binary</h3>
  <div>
    <p>A binary operator requires two operands, one before the operator and one after the operator, following this format:</p>
    <app-non-editable [query]="''operand1 operator operand2''"></app-non-editable>
    <p>For example, in the expression a + b = c, + is a binary operator.</p>
  </div>
  <h3>Ternary</h3>
  <div>
    <p>There is one ternary operator, the conditional operator. For example, in the expression a ? b : c, the use of ? and : in this manner constitutes the ternary operator. We''ll discuss this operator more in the Conditional Statements tutorial.</p>
  </div>
  <h3>Arithmetic Operators</h3>
  <div>
    <p>An arithmetic operator takes numeric values (either literals or variables) as its operands and returns a single numeric value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/). Other arithmetic operators are remainder (%), unary negation (-), unary plus (+), increment (++), decrement (--), and exponentiation (**).</p>
    <h5>Addition (+)</h5>
    <p>We use this operator in the form operand1 + operand_2. For example:</p>
    <app-non-editable [query]="''2 + 3 // evaluates to 5
4 + 10 // evaluates to 14''"></app-non-editable>
    <h5>Subtraction (-)</h5>
    <p>We use this operator in the form operand1 - operand2. For example:</p>
    <app-non-editable [query]="''3 - 2 // evaluates to 1
4 - 10 // evaluates to -6''"></app-non-editable>
    <h5>Multiplication (*)</h5>
    <p>We use this operator in the form operand1 * operand2. For example:</p>
    <app-non-editable [query]="''3 * 2 // evaluates to 6
4 * 10 // evaluates to 40''"></app-non-editable>
    <h5>Division (/)</h5>
    <p>We use this operator in the form operand1 / operand2. For example:</p>
    <app-non-editable [query]="''6 / 3 // evaluates to 2
3 / 2 // evaluates to 1.5
4 / 10 // evaluates to 0.4''"></app-non-editable>
    <h5>Remainder (%)</h5>
    <p>We use this operator in the form operand1 % operand2. For example:</p>
    <app-non-editable [query]="''6 % 3 // evaluates to 0
3 % 2 // evaluates to 1
4 % 10 // evaluates to 4''"></app-non-editable>
    <h5>Exponentiation (**)</h5>
    <p>We use this operator in the form operand1 ** operand2. This operator is a part of ECMAScript2016 feature set. For example:</p>
    <app-non-editable [query]="''2 ** 3 // evaluates to 8
3 ** 2 // evaluates to 9
5 ** 4 // evaluates to 625''"></app-non-editable>
    <h5>Unary Negation (-)</h5>
    <p>We use this operator in the form -operand. For example:</p>
    <app-non-editable [query]="''-4 // evaluates to -4
-(-5) // evaluates to 5 (not --5)''"></app-non-editable>
    <h5>Unary Plus (+)</h5>
    <p>We use this operator in the form +operand. For example:</p>
    <app-non-editable [query]="''+4 // evaluates to 4
+(-4) // evaluates to -4''"></app-non-editable>
    <h5>Increment (++)</h5>
    <p>We use this operator in the prefix and postfix forms, forms ++operand and operand++. The prefix form, ++operand, increments the operand by 1 and then returns the value of the operand. The postfix form, operand++, returns the value of the operand and then increments the operand''s value by 1.</p>
    <h5>Decrement (--)</h5>
    <p>We use this operator in the prefix and postfix forms, forms --operand and operand--. The prefix form, --operand, decrements the operand by 1 and then returns the value of the operand. The postfix form, operand--, returns the value of the operand and then decrements the operand''s value by 1.</p>
  </div>'),
       ('<div class="container">
  <h1 class="">If-Else Conditional Statements</h1>
  <hr>
  <h2>Equality Operators</h2>
  <hr>
  <h3>Equality (==)</h3>
  <div>
    <p>The equality operator is a binary operator that compares two operands, returning true if they are deemed to be equal. It works by converting the operands if they are not of the same type, then applying strict comparison. If both operands are primitive types, it will compare their values (i.e., 1 == 1 evaluates to true). If both operands are objects, then JavaScript compares their internal references; this means it checks to see if both operands point to the same object (i.e., location) in memory. For example:</p>
    <app-non-editable [query]="''console.log(1 == 1);  // true
console.log(1 == \"1\");  // true
console.log(''1'' == 1);  // true
console.log(0 == false);  // true
console.log(0 == null);  // false
console.log(0 == undefined); // false
console.log(null == undefined);  //true''"></app-non-editable>
  </div>
<h3>Equality (==)</h3>
<div>
  <p>The inequality operator is a binary operator that returns true if the operands are not equal. If the two operands are of different types, JavaScript attempts to convert the operands to an appropriate type to compare them. If both operands are objects, then JavaScript compares the internal references to see if they are not equal (i.e., refer to different objects in memory).</p>
  <app-non-editable [query]="''console.log(1 != 1);  // false
console.log(1 != \"1\");  // false
console.log(''1'' != 1);  // false
console.log(0 != false);  // false
console.log(0 != null);  // true
console.log(0 != undefined); // true
console.log(null != undefined);  // false''"></app-non-editable>
</div>
  <h3>Identity or Strict Equality (===)</h3>
  <div>
    <p>The identity operator returns true if both of the following conditions are satisfied:</p>
    <ul>
      <li>The operands are strictly equal.</li>
      <li>The operands are of the same type.</li>
    </ul>
    <app-non-editable [query]="''console.log(1 === 1);  // true
console.log(1 === \"1\");  // false
console.log(''1'' === 1);  // false
console.log(0 === false);  // false
console.log(0 === null);  // false
console.log(0 === undefined); // false
console.log(null === undefined);  // false''"></app-non-editable>
  </div>
<h3>Non-Identity or Strict Inequality (!==)</h3>
<div>
  <p>The non-identity operator returns true if the operands satisfy any of the following conditions:</p>
  <ul>
    <li>The operands are not equal.</li>
    <li>The operands are not of the same type.</li>
  </ul>
  <app-non-editable [query]="''console.log(1 !== 1);  // false
console.log(1 !== \"1\");  // true
console.log(''1'' !== 1);  // true
console.log(0 !== false);  // true
console.log(0 !== null);  // true
console.log(0 !== undefined); // true
console.log(null !== undefined);  // true''"></app-non-editable>
</div>
<h2>Relational Operators</h2>
<h3>Greater Than Operator (>)</h3>
<div>
  <p>This binary operator returns true if the left operand is greater than the right operand; otherwise, it returns false.</p>
</div>
<h3>Greater Than or Equal Operator (>=)</h3>
<div>
  <p>This binary operator returns true if the left operand is greater than or equal to the right operand; otherwise, it returns false.</p>
</div>
<h3>Less Than Operator (<)</h3>
<div>
  <p>This binary operator returns true if the left operand is less than the right operand; otherwise, it returns false.</p>
</div>
<h3>Less Than or Equal Operator (<=)</h3>
<div>
  <p>This binary operator returns true if the left operand is less than or equal to the right operand; otherwise, it returns false.</p>
</div>
<h2>Logical Operators</h2>
<h3>Logical AND (&&)</h3>
<div>
  <p>Usage: expression1 && expression2</p>
  <p>If both expressions evaluate to true, then it returns true; otherwise, it returns false.</p>
</div>
<h3>Logical OR (||)</h3>
<div>
  <p>Usage: expression1 || expression2</p>
  <p>If both expressions evaluate to false, then it returns false; otherwise, it returns true.</p>
</div>
<h3>Logical NOT (!)</h3>
<div>
  <p>Usage: !expression If the expression (by itself) evaluates to false, it returns true (i.e., the logical negation of false); otherwise, it returns false.</p>
  <app-non-editable [query]="''console.log((5 < 7) && (4 < 4))  // false
console.log((5 < 7) && (4 >= 4)) // true
console.log((5 < 7) || (4 < 4))  // true
console.log((5 >= 7) || (4 > 4))  // false
console.log(!(2**3))  // false''"></app-non-editable>
</div>
</div>'),
       ('<div class="container">
  <h1 class="">Switch Conditional Statements</h1>
  <hr>
  <h3>JavaScript Switch Statements</h3>
  <div>
    <p>A switch statement allows a program to evaluate an expression by attempting to match the expression''s value to a case label. If a match is found, the program jumps to the statement(s) associated with the matched label and continues executing at that point. Note that execution will continue sequentially through all the statements starting at the jump point unless there is a call to break;, which exits the switch statement. A switch statement looks like this:</p>
    <p>The program first looks for a case clause with a label matching the value of expression, then transfers control to the matching clause and executes the associated statements. If no matching label is found, the program looks for the optional default clause and, if found, transfers control to that clause and executes the statements associated with it. If no default clause is found, the program continues executing after the end of the switch statement.</p>
  </div>
  <hr>
  <h3>The default Clause</h3>
  <div>
    <p>By convention, the default clause is always listed last. This is because the statements are checked sequentially, so you run into the following issues if you use the default label in an earlier clause:</p>
    <ul>
      <li>If the default case is listed before (above) a case that matches expression, it will match the default case instead. This means the statements associated with the programmed match case won''t be executed.
      </li>
      <li>If the default case doesn''t have a break statement, any statements in the case label immediately following it will be executed.</li>
    </ul>
  </div>
  <hr>
  <h3>The break; Statement</h3>
  <div>
    <p>The break statement is optional, but you''ll typically see one at the end of each case clause to ensure that the program breaks out of the switch statement once the statements associated with a matched case are executed. Once the flow of execution hits break;, it exits the switch statement and continues executing at the next line following the end of the switch statement; if the break statement is omitted, the program continues executing the next statement in the switch statement — even if its case label doesn''t match expression.</p>
  </div>
  <hr>
  <h3>Example</h3>
  <div>
    <p>Given an integer, n, such that 0 < n < 11, do the following:</p>
    <ol>
      <li>If n is equal to 2, print A.</li>
      <li>If n is equal to 3, print B.</li>
      <li>If n is equal to 4, print B.</li>
      <li>If n is equal to 5, print D</li>
      <li>For all the other values of n, print E.</li>
    </ol>
    <app-non-editable [query]="''switch (n) {
  case 2:
    console.log(\"A\");
    break;
  case 3:
    console.log(\"B\");
    break;
  case 4:
    console.log(\"C\");
    break;
  case 5:
    console.log(\"D\");
    break;
  default:
    console.log(\"E\");
}''"></app-non-editable>
  </div>
</div>'),
       ('<div class="container">
  <h1 class="">Loops</h1>
  <hr>
  <h3>JavaScript Loops</h3>
  <div>
    <p>Loops are a quick and easy way to repeatedly perform a series of instructions, and they are typically run a finite number of times. JavaScript has the following types of loops:</p>
    <ul>
      <li>for</li>
      <li>while</li>
      <li>do-while</li>
      <li>for-of</li>
      <li>for-in</li>
    </ul>
  </div>
  <hr>
  <h3>for</h3>
  <div>
    <p>The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by one or more statements that will be executed in the loop.</p>
    <app-non-editable [query]="''for (initialization; condition; finalExpression) {
  statement(s);
}''"></app-non-editable>
    <ul>
      <li>initialization: An expression or variable declaration that is typically used to initialize a counter variable.</li>
      <li>condition: This is the termination condition, which is an expression that''s evaluated before each pass through the loop. If this expression evaluates to true, then statement is executed. If the expression evaluates to false, execution jumps to the first line of code after the end of the loop. If this statement is omitted, then condition always evaluates to true.</li>
      <li>finalExpression: An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition.</li>
      <li>statement: The statement (or statements) that is executed each time  evaluates to true.</li>
    </ul>
    <p>It''s important to note that:</p>
    <ul>
      <li>The initialization, condition, and finalExpression in the head of the for loop are optional, but are generally always used.</li>
      <li>The head of a for loop typically looks like for (var i = 0; i < maxValue; i++), where maxValue is the maximum value you wish to iterate until.</li>
    </ul>
    <app-non-editable [query]="''for (var i = 1; i <= 5; i++) {
  process.stdout.write(i + \" \");  // 1 2 3 4 5
}''"></app-non-editable>
  </div>
  <hr>
  <h3>while</h3>
  <div>
    <p>The while statement creates a loop that executes its internal statement(s) as long as the specified condition evaluates to true. The condition is evaluated before executing the statement.</p>
    <app-non-editable [query]="''while (condition) {
  statement(s);
}''"></app-non-editable>
        <br>
    <app-non-editable [query]="''var i = 1;
while (i <= 5) {
  process.stdout.write(i + \" \");  // 1 2 3 4 5
  i++;
}''"></app-non-editable>
  </div>
  <hr>
  <h3>do-while</h3>
  <div>
    <p>The do-while statement creates a loop that executes its internal statement(s) until the specified condition evaluates to false. The condition is evaluated after executing the internal statement(s), so the contents of the loop always execute at least once.</p>
    <app-non-editable [query]="''do {
  statement(s);
} while (condition);''"></app-non-editable>
        <br>
    <app-non-editable [query]="''var i = 1;
do {
  process.stdout.write(i + \" \");  // 1 2 3 4 5
  i++;
} while (i <= 5);''"></app-non-editable>
  </div>
</div>'),
       ('<div class="container">
  <h1>Arrays in JavaScript</h1>
  <hr>
  <h3>Create an Array</h3>
  <div>
    <app-non-editable [query]="''var a = [''first'', ''second''];
console.log(''a\''s contents:'', a);
console.log(''a\''s length:'', a.length);''"></app-non-editable>
  </div>
  <hr>
  <h3>Access (Index Into) an Array Item</h3>
  <div>
    <app-non-editable [query]="''let a = [''first'', ''second''];

// first = ''first''
let first = a[0];

// last = ''second''
let last = a[a.length - 1];

console.log(''a[0]:'', first);
console.log(''a[a.length - 1]:'', last);''"></app-non-editable>
  </div>
  <hr>
  <h3>Loop Over an Array</h3>
  <div>
    <app-non-editable [query]="''var a = [''first'', ''second''];

a.forEach(function(e, i, array) {
    // ''i'' is the index
    // ''e'' is the element
    console.log(i + '' '' + e);
});''"></app-non-editable>
  </div>
  <hr>
  <h3>Append to the End of an Array</h3>
  <div>
    <app-non-editable [query]="''var a = [''first'', ''second''];

// Append ''third'' to array ''a''
a.push(''third'');

console.log(''a:'', a);''"></app-non-editable>
  </div>
  <hr>
  <h3>Remove From the end of an Array</h3>
  <div>
    <app-non-editable [query]="''var a = [''first'', ''second'', ''third''];
console.log(''Original Array:'', a);

// Remove the last element from the array
let removed = a.pop();

console.log(''Modified Array:'', a);
console.log(''Removed Element:'', removed);''"></app-non-editable>
  </div>
  <hr>
  <h3>Remove From the Front of an Array</h3>
  <div>
    <app-non-editable [query]="''var a = [''first'', ''second'', ''third''];
console.log(''Original Array:'', a);

// Remove the first element from the array
let removed = a.shift();

console.log(''Modified Array:'', a);
console.log(''Removed Element:'', removed);''"></app-non-editable>
  </div>
  <hr>
  <h3>Add to the Front of an Array</h3>
  <div>
    <app-non-editable [query]="''var a = [''first'', ''second'', ''third''];
console.log(''Original Array:'', a);

// Insert element at the beginning of the array
a.unshift(''fourth'');

console.log(''Modified Array:'', a);''"></app-non-editable>
  </div>
  <hr>
  <h3>Find the Index of an Item in the Array</h3>
  <div>
    <app-non-editable [query]="''var a = [''first'', ''second'', ''third'', ''fourth''];

let position = a.indexOf(''second'');

console.log(''a:'', a);
console.log(''position:'', position);''"></app-non-editable>
  </div>
  <hr>
  <h3>Remove an Item by Index Position</h3>
  <div>
    <app-non-editable [query]="''var a = [''first'', ''second'', ''third'', ''fourth'', ''fifth''];
console.log(''Original Array:'', a);

let position = 1;
let elementsToRemove = 2;
// Remove ''elementsToRemove'' element(s) starting at ''position''
a.splice(position, elementsToRemove);

console.log(''Modified Array:'', a);''"></app-non-editable>
  </div>
  <hr>
  <h3>Copy an Array</h3>
  <div>
    <app-non-editable [query]="''var a = [''first'', ''second'', ''third'', ''fourth''];
console.log(''a:'', a);

// Shallow copy array ''a'' into a new object
let b = a.slice();

console.log(''b:'', b);''"></app-non-editable>
  </div>
  <hr>
  <h3>Sort an Array</h3>
  <div>
    <app-non-editable [query]="''var a = [''c'', ''a'', ''d'', ''b'', ''aa''];
var b = [9, 2, 13, 7, 1, 12, 123];

// Sort in ascending lexicographical order using a built-in
a.sort();
b.sort();

console.log(''a:'', a);
console.log(''b:'', b);''"></app-non-editable>
    <br>
    <app-non-editable [query]="''var a = [''c'', ''a'', ''d'', ''b'', ''aa''];
var b = [9, 2, 13, 7, 1, 12, 123];

// Sort in descending lexicographical order using a compare function
a.sort(function(x, y) { return x < y; } );
b.sort(function(x, y) { return x < y; } );

console.log(''a:'', a);
console.log(''b:'', b);''"></app-non-editable>
  </div>
  <hr>
  <h3>Iterate over an Array</h3>
  <div>
    <app-non-editable [query]="''var a = [''first'', ''second'', ''third'', ''fourth''];

for (let e of a) {
    console.log(''e:'', e);
}''"></app-non-editable>
  </div>
</div>
');

insert into certifications(title, time_limit_seconds)
values ('Javascript Array Certification', 3600);

insert into certifications_problems(certification_id, problems_id)
values (1, 8),
       (1, 9),
       (1, 10);

insert into app_users(username, first_name, last_name, email, password, is_enabled)
values ('kosta', 'kosta', 'kosta', 'kosta@mail.com', '$2a$10$GmtqmHUPt4SSJcpoPVBxnOjzrFhSDAXmNNafslxVXonqOir6BpaV.',
        true);