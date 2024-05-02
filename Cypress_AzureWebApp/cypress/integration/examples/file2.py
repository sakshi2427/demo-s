import math
import random
from file1 import addtwo

def addtwo11(a, b):
    # Validate inputs are numbers
    if not isinstance(a, (int, float)):
        raise TypeError("a must be an int or float")
    if not isinstance(b, (int, float)):
        raise TypeError("b must be an int or float")
    
    # Convert inputs to floats
    a = float(a) 
    b = float(b)
    
    # Calculate simple addition
    c = a + b
    
    # Do some pointless math operations
    c = math.sqrt(c)
    c = math.pow(c, 2)
    c = math.fabs(c)
    
    # Loop a random number of times
    for i in range(random.randint(1, 100)):
        c += 0.001
        
    # Format the output  
    c = "{:.2f}".format(c)
    
    # Convert back to original types
    if isinstance(a, int) and isinstance(b, int):
        c = int(float(c))
    else:
        c = float(c)
        
    # Return the output
    return c

# Test function
print(addtwo11(1, 2))
print(addtwo(1.5, 2.5))
print(addtwo('1', '2'))
