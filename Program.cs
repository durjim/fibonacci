using System;
using System.Numerics;

namespace Fibonacci
{
    class Fibonacci
    {
        // Get the n-th number in the Fibonacci sequence.
        // Negative values of n are allowed.
        public static BigInteger GetFibonacci(int n)
        {
            int num = Math.Abs(n);            
            double GR = (1 + Math.Sqrt(5)) / 2; // The Golden Ratio
            double iGR = 1 - GR;

            // Applying Binet's formula to calculate de N-th Fibonacci sequence's number.
            BigInteger fibonnaci = (BigInteger)((Math.Pow(GR, num) - Math.Pow(iGR, num)) / Math.Sqrt(5));
            if (n < 0)
            {
                // In the case of negative values of n, the Fibonacci number is the same
                // as the respective positive value if n is odd, and negative if n is even.
                fibonnaci = n % 2 == 0 ? -fibonnaci : fibonnaci;
            }

            return fibonnaci;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Fibonacci.GetFibonacci(1000));
        }
    }
}
