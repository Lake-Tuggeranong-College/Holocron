---
isCurrent: true
needsUpdating: false
---
**Units:** 
- [BSBXTW301 Work in a Team](https://training.gov.au/training/details/BSBXTW301/unitdetails)
- [ICTSAS305 - Provide ICT advice to clients](https://training.gov.au/Training/Details/ICTSAS305/unitdetails)

This guide outlines exactly what you need to do on **GitHub Project board**, **Live Observations** and **Discussions** to be marked as Competent. Your Assessor is acting as your **Client**. Each student should prepare the jobs board prior to the scheduled assessment sessions to avoid a rush on the day.

## Phase 1: Planning & Requirements

- [ ] **Define Roles:** On your GitHub Project Board, every task (Issue) must have an **Assignee** (Owner).
- [ ] **Client Interview:** Schedule a time during the specified assessment sessions to ask the "Client" (Assessor) about **specific** requirements for your project task.
- [ ] **Research Issues:** Create Issues to compare at least two technical solutions. Tag the client to ask: "Does this approach meet your needs?"

## Phase 2: Execution & Collaboration

- [ ] **Assign a Job to Yourself:** For every task you work on, you must officially assign it to yourself on the GitHub Project Board.
    - _Example:_ Don't just start coding the login page; create the "Login Page" Issue, assign your avatar to it, and move it to "In Progress."
- [ ] **Prioritise Tasks:** Use GitHub Labels (e.g., `High Priority`, `Medium Priority`) to identify the importance of the job. 
- [ ] **Identify Prerequisites:** In the Issue description, state if other tasks must be finished first (e.g., "Prerequisite: Database setup must be completed before starting this job").
- [ ] **Active Communication & Discussions:** Use the **Comments** section in GitHub Issues for task-specific updates and the **GitHub Discussions** tab for general team brainstorming, troubleshooting, or project-wide decisions.
- [ ] **Peer Support:** If a teammate is stuck, leave a comment offering help.
- [ ] **The Jargon Check:** When you explain your progress to the client, use **Plain English**. Avoid acronyms like SQL, API, or LAN without explaining them.

## Phase 3: Completion & Sign-off

- [ ] **Deliver Advice:** Present your final solution to the client. Explain the "Pros and Cons" of the choice you made.
- [ ] **User Manual:** Provide a guide in the particular job on the GitHub project. This must be written for the client, not a developer.
- [ ] **Sign-off:** Create a final Issue or Pull Request. Tag the client and ask: "Are you satisfied with this solution? Please provide feedback for sign-off."

## Example of a Satisfactory Job (Issue)

To help you understand the "Paper Trail" required, here is a detailed example of a well-documented Issue showing the full lifecycle of a task:

> **Issue Title:** Research and Implement Data Storage Strategy
> **Labels:** `High Priority`, `ICT Advice Required`, `In Progress`
> **Assignee:** @StudentName
> **Description:** > We need a way to store user profiles. I am investigating two options: **Option A (Local JSON files)** and **Option B (Cloud Database)**.
> **Prerequisites:** #12 (Server Environment Setup) must be completed first.
> 
> **Activity Log / Comments:**
> - **@StudentName (Post 1 - Research):** "@Assessor (Client), I have compared the storage options. Local storage is cheaper but risks data loss if the computer fails. Cloud storage is more reliable and allows multiple users to log in at once, but it requires an internet connection. Given our need for reliability, I recommend **Option B (Cloud)**. Does this meet your specific requirements?"
> - **@Assessor (Client):** "Reliability is our priority. Let's go with the Cloud option, provided it's easy for us to manage later."
> - **@StudentName (Post 2 - Peer Support):** "@TeammateName, I noticed you labeled your Login Page task as 'Blocked' because you're waiting for my database credentials. I have just finished the setup. You can find the access keys and a 'how-to' guide in the project Wiki under 'Database Connection.' I'm happy to jump on a call if you're still having trouble connecting!"
> - **@StudentName (Post 3 - Completion):** "@Assessor (Client), the Cloud storage is now live. I've updated the Wiki with a simple 'User Manual' that explains how to back up your data in plain English. I've also created a feedback form here [Link]. Could you please review and let me know if you are satisfied so we can close this job?"

## Rubric: What the Assessor is looking for

| Task          | To get a "Satisfactory" result, you must...                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Teamwork**      | Show a "Paper Trail" on GitHub (Issues and Discussions) of you helping others and managing your assigned jobs daily. |
| **ICT Advice**    | Prove you researched options and didn't just pick the first thing you found.                                         |
| **Communication** | Actively seek feedback from both your team and your client throughout the project.                                   |
| **Feedback**      | Show that you changed something in the project based on feedback received.                                           |
