<?php
ini_set('error_log', './php-error.log');

class Fibonacci {
    // Get the n-th number in the Fibonacci sequence.
    // Negative values of n are allowed.
    public static function GetFibonacciValue($n) {        
        $num = abs($n);
        $GR = (1 + sqrt(5)) / 2;    // The Golden Ratio
        $iGR = 1 - $GR;

        // Applying Binet's formula to calculate de N-th Fibonacci sequence's number
        $fibonacci = round((pow($GR, $num) - pow($iGR, $num)) / sqrt(5));
        
        // In the case of negative values of n, the Fibonacci number is the same
        // as the respective positive value if n is odd, and negative if n is even.
        if ($n < 0) {
            $fibonacci = $n % 2 == 0 ? -$fibonacci : $fibonacci;
        }        
        return $fibonacci;
    }
}

?>