# Definition
The NOT gate simply "flips" the input, so TRUE becomes FALSE, and FALSE becomes TRUE.

$$
\documentclass{article}
\usepackage{circuitikz}
\begin{document}

\begin{circuitikz} \draw
(0,2) node[and port] (myand1) {}
(0,0) node[and port] (myand2) {}
(2,1) node[xnor port] (myxnor) {}
(myand1.out) -- (myxnor.in 1)
(myand2.out) -- (myxnor.in 2);
\end{circuitikz}

\end{document}
$$
# Example/s
