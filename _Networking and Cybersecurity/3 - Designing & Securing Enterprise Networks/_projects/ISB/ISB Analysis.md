
> [!note] The purpose of this course is to develop a Capture The Flag (CTF) game. In order to do so, you will need to understand what that involves. To do so, you'll analyse existing CTF games available and identify key elements.

# Capture The Flag

A **Cyber Security Capture The Flag (CTF) game** is an educational and competitive exercise where participants, often in teams, apply their cyber security skills to solve a variety of challenging problems or **"flags"** hidden within simulated environments or systems. These challenges can range from **cryptography** puzzles, **web application exploitation**, **forensics analysis**, and **reverse engineering** to testing knowledge of general **security principles**. The goal is to find a specific string of text (the "flag"), which is then submitted to a scoring server to earn points. CTF events are a dynamic, hands-on way for high school students to practice technical skills, learn new attack and defense techniques, and test their problem-solving abilities in a legal and risk-free environment, effectively bridging the gap between theoretical knowledge and real-world application.
## CTF Challenge Examples

CTF challenges typically fall into different categories, requiring distinct skills.

- **Web Exploitation:** These involve finding and exploiting security flaws in web applications. An example would be a challenge where you need to perform a **SQL Injection** attack to bypass a login page and find the flag in the database, or locating a flag hidden in the page's source code or a JavaScript file.
- **Cryptography:** These challenges require you to decode or "crack" messages. For instance, you might be given an encoded message (ciphertext) and hints that lead you to use a common cipher like a **Caesar Cipher** or a more complex one like **RSA** to reveal the plaintext flag.
- **Forensics:** You might be given a digital file like a disk image, a memory dump, or a network traffic capture and asked to analyze it to uncover hidden information. An example is using tools like `strings` on an image file to extract hidden text or using a tool like **Wireshark** to analyze network packets to find login credentials.
- **Reverse Engineering (Reversing):** This involves taking a compiled program (a binary file) and analyzing it to figure out what it does. A common challenge is a **"crackme"**, where you have to reverse-engineer a program's logic to find the correct input (like a serial key or password) that makes it print the flag.
- **Binary Exploitation (Pwn):** These are more advanced challenges where you exploit vulnerabilities in compiled programs, such as **buffer overflows**, to hijack the program's control flow and make it execute code that retrieves the flag.
- **General Skills/Scripting:** These often test basic command-line skills (like using Linux tools such as `grep` or `find`) or require writing a small script (e.g., in Python) to process data or automate a task to reveal the flag.

---

## Beginner-Friendly CTF Sites

Several excellent platforms offer persistent, student-focused CTFs.

|**Platform Name**|**Best For**|**Link to Site**|**Key Features**|
|---|---|---|---|
|**picoCTF**|Middle & High School Students|[picoCTF.org](https://picoctf.org/)|Free, game-based competition by Carnegie Mellon University; excellent beginner-friendly learning labs.|
|**TryHackMe**|Guided Learning/Beginners|[TryHackMe](https://tryhackme.com/)|Interactive, browser-based labs ("Rooms") with clear, structured learning paths and guided tutorials.|
|**OverTheWire**|Linux Command Line Skills|[OverTheWire Wargames](http://overthewire.org/wargames/)|Provides a series of "wargames" like the **Bandit** series, which is specifically designed to teach you the fundamentals of the Linux command line and security concepts.|
|**CTFlearn**|Practice Challenges|[CTFlearn](https://ctflearn.com/)|A community-driven platform offering a variety of challenges in all major categories for practice.|
|**316ctf**|Beginner/Persistent Practice|[316ctf](https://316ctf.com/)|A free, persistent, and growing CTF game intended for middle school and high school students.|

---

For an example of how to tackle a beginner-level challenge in Web Exploitation, you can watch a walkthrough of a PicoCTF problem.

Here is a video demonstrating how to solve a web exploitation challenge from PicoCTF. This video provides a detailed walkthrough that illustrates the practical steps involved in solving a web exploitation CTF challenge.

![PicoCTF: Crack the Gate 1 (Web Exploitation)](https://www.youtube.com/watch?v=t_jMl7afitA).