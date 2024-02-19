using System;

class Program
{
    const int MAX = 100;

    /// <summary>
    /// Calculates the sum of the elements in the array.
    /// </summary>
    static int Sum(int[] arr)
    {
        int result = 0;
        for (int i = 0; i < arr.Length; i++)
        {
            result += arr[i];
        }
        return result;
    }

    /// <summary>
    /// Reads an integer array from the console input.
    /// </summary>
    static int[] ReadInput()
    {
        Console.Write("Enter the number of elements (1-100): ");
        if (!int.TryParse(Console.ReadLine(), out int n) || n < 1 || n > MAX)
        {
            Console.WriteLine("Invalid input. Please provide a digit ranging from 1 to 100.");
            Environment.Exit(1);
        }

        int[] arr = new int[n];

        Console.WriteLine($"Enter {n} integers:");
        for (int i = 0; i < n; i++)
        {
            if (!int.TryParse(Console.ReadLine(), out arr[i]))
            {
                Console.WriteLine("Invalid input. Please enter valid integers.");
                Environment.Exit(1);
            }
        }

        return arr;
    }

    static void Main()
    {
        int[] arr = ReadInput();
        int total = Sum(arr);

        Console.WriteLine($"Sum of the numbers: {total}");
    }
}