# str_split: convert a string to an array

## str_split(str, [split_length])

If the optional split_length parameter is specified, the returned array will 
be broken down into chunks with each being split_length in length, otherwise 
each chunk will be one character in length. 

If split_length is positive, splitting will be started from the begining of 
the string, otherwise splitting will be started from the ending of 
the string.

If the split_length length exceeds the length of string, the entire string 
is returned as the first (and only) array element.

If the split_length length equal to 0 or has incorrect format, split_length 
will be setted to 1 (default value);

FALSE is returned if str is not a string.


## Examples

    > str_split('This is test string');
    [ "T", "h", "i", "s", " ", "i", "s", " ", "t", "e", "s", "t", " ", "s", "t", "r", "i", "n", "g" ]

    > str_split('This is test string', 6);
    [ "This i", "s test", " strin", "g" ]

    > str_split('5963986', -3);
    [ "5", "963", "986" ]
