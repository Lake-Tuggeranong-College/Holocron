# Tutorial: Understanding Diffie-Hellman Key Exchange

The **Diffie-Hellman (DH)** key exchange is a fundamental cryptographic protocol that allows two parties to establish a shared secret over an insecure channel. This secret can then be used to encrypt subsequent communications using symmetric-key cryptography.

![https://www.youtube.com/watch?v=NmM9HA2MQGI](https://www.youtube.com/watch?v=NmM9HA2MQGI)

## 1. The Core Concept

The beauty of DH is that the two parties (traditionally called **Alice** and **Bob**) create a shared secret without ever actually transmitting it. An eavesdropper (**Eve**) can see all the exchanged messages but cannot calculate the secret within a reasonable timeframe.

It relies on the **Discrete Logarithm Problem**:
- It is easy to calculate $g^a \pmod p$.
- It is extremely difficult to calculate $a$ if you only know the result, $g$, and $p$.

## 2. Example 1: Standard Small Primes

### Setup (Public Parameters)

To begin, Alice and Bob agree on two non-secret, public numbers:

1. $p$ **(Prime Number):** $23$.
2. $g$ **(Generator):** $5$.

### Step 1: Private Selections

- **Alice** chooses $a = 6$.
- **Bob** chooses $b = 15$.

### Step 2: Calculate Public Values

- **Alice calculates** $A$:
- $$A = 5^6 \pmod{23} = 15,625 \pmod{23} = \mathbf{8}$$
_Alice sends **8** to Bob._

- **Bob calculates** $B$:$$B = 5^{15} \pmod{23} = \mathbf{19}$$
_Bob sends **19** to Alice._

### Step 3: Compute the Shared Secret

- **Alice receives** $B=19$:
    
      
    
    $$s = 19^6 \pmod{23} = \mathbf{2}$$
- **Bob receives** $A=8$:
    
      
    
    $$s = 8^{15} \pmod{23} = \mathbf{2}$$

## 3. Example 2: Ultra-Simple Numbers

This example uses very small numbers so you can verify the modular math manually.

### Setup (Public Parameters)

1. $p = 11$  
    
2. $g = 2$  
    

### Step 1: Private Selections

- **Alice** chooses $a = 3$.
    
- **Bob** chooses $b = 4$.
    

### Step 2: Calculate Public Values

- **Alice calculates** $A$:
    
      
    
    $$A = 2^3 \pmod{11} = 8 \pmod{11} = \mathbf{8}$$
    
    _Alice sends **8** to Bob._
    
- **Bob calculates** $B$:
    
      
    
    $$B = 2^4 \pmod{11} = 16 \pmod{11} = \mathbf{5}$$
    
    _Bob sends **5** to Alice._
    

### Step 3: Compute the Shared Secret

- **Alice receives** $B=5$:
    
      
    
    $$s = 5^3 \pmod{11} = 125 \pmod{11} = \mathbf{4}$$
    
    _(Calculation:_ $11 \times 11 = 121$_;_ $125 - 121 = 4$_)_
    
- **Bob receives** $A=8$:
    
      
    
    $$s = 8^4 \pmod{11} = 4096 \pmod{11} = \mathbf{4}$$
    
    _(Calculation:_ $4096 / 11 = 372.36$_;_ $11 \times 372 = 4092$_;_ $4096 - 4092 = 4$_)_
    

**Result:** Both established the shared secret **4**.

## 4. Why does the math work?

Both Alice and Bob end up with the same number because of the power-to-a-power rule in algebra:

$$(g^a)^b = g^{ab} = (g^b)^a$$

In modular arithmetic:

$$(g^a \pmod p)^b \pmod p = g^{ab} \pmod p$$

## 5. Summary Table (Example 1)

| **Step**        | **Alice**         | **Bob**           | **Visible to Eve** |
| --------------- | ----------------- | ----------------- | ------------------ |
| **1. Setup**    | Knows $p=23, g=5$ | Knows $p=23, g=5$ | $p=23, g=5$        |
| **2. Secret**   | $a = 6$           | $b = 15$          | (Hidden)           |
| **3. Exchange** | Sends $A=8$       | Sends $B=19$      | $A=8, B=19$        |
| **4. Result**   | **Secret = 2**    | **Secret = 2**    | (Cannot calculate) |

## 6. Real-World Security

In this example, we used small numbers. In real-world applications (like HTTPS or VPNs), the prime number $p$ is typically at least **2048 bits long**.

Calculating the secret from the public values $A$ and $B$ would require a computer to try billions of combinations for thousands of years, making the exchange secure against modern classical computers.