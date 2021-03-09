# fibonacci

This repository contains two important folders:

1) **fibonacci-server**: contains the server side (backend) files for the fibonacci calculator. 
  - **service-caller.php**: the entry point for the clients' HTTP calls. The code in this file will verify the HTTP function parameters and invoke the corresponding service.
  - **src/fibonacci.php**: the code to get the n-th fibonacci number; it will be invoked by service-caller.php. This implementation simply uses Binet's formula to calculate the n-th number in the Fibonacci sequence. By doing so, we avoid resorting to a recursive solution which would be largely inefficient in terms of execution speed and memory consumption. Furthermore, this implementation can also calculate Fibonacci values for negative indices. As of right now, a solution for large values of index n is pending, since starting from around n = 1300 the value for powers of the Golden Ratio become so large that they can no longer be represented by the double data type. The recursive solution could theoretically fix the issue but the use of the stack memory would become prohibitive.

2) **fibonacci-app**: contains the client side (frontend) files for the fibonacci calculator. Its organization is that of a typical React project, save that there is no node_modules (for obvious reasons). Two files are noteworthy:
  - **src/service-caller/service-caller.js**: contains the code that performs the asynchronous calls to the backend files.
  - **src/components/components.js**: a very simple react component that will receive input from the user. As of right now, it is missing CSS styling. 


