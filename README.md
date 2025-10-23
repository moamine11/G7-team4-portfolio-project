# G7 Team 4 Portfolio Project

## Team Members

| Role | Name | GitHub Username |
|------|------|----------------|
| Team Leader | Mohammed Amine Chaouchi | @moamine11 |
| Member | Rabah Boucenna | @Rabah-boucenna |
| Member | Chergui Mohammed | @Mohamed-chergui |
| Member | Sonia Cherbel | @sonia417 |
| Member | Kaouther Bensaddek | @kaoutherbensaddek |

## Deployed Website

🌐 **Live Website**: [https://moamine11.github.io/G7-team4-portfolio-project/](https://moamine11.github.io/G7-team4-portfolio-project/)

## Team Retrospective Analysis

### 1. Significant Technical Challenge

Throughout the collaborative development of our TypeScript-based React project, the team encountered several technical challenges concerning version control and deployment workflows.

The most significant challenge involved managing Git and GitHub workflows while multiple contributors worked concurrently on separate features. Although the project was divided into distinct feature branches, frequent merges often resulted in dependency conflicts, accidental overwrites, and temporary build failures. These synchronization issues led to inconsistencies in key files such as App.tsx, especially during the integration of UI logic and component updates.

However, the most critical obstacle arose during the deployment of the React application on GitHub Pages. While the project operated correctly in local development environments, it repeatedly produced a "404 Page Not Found" error once deployed. This issue stemmed from GitHub Pages' lack of native support for React's client-side routing, which prevents proper handling of deep links or direct URL access.

After researching several community-recommended solutions, the team implemented a custom 404.html file that automatically redirects all requests to index.html. This configuration ensured that React Router could correctly resolve routes regardless of direct URL entry.

This experience provided valuable insights into overcoming static hosting limitations, optimizing single-page application deployment, and understanding the interaction between client-side routing and server configuration.

### 2. Merge Conflict Resolution

A notable merge conflict occurred during the integration of feature branches when two members simultaneously modified App.tsx: one focused on enhancing the interface layout, while the other implemented new functional logic.

Git detected overlapping edits and blocked the automatic merge.

The team followed a structured resolution process:
- Each contributor pulled the latest remote changes from the repository.
- Using Git's visual diff tool in VS Code, the team inspected the conflicting lines.
- A short meeting was held to review both code versions, ensuring that neither contribution was lost.
- The integrated code, combining UI and logic improvements, was tested successfully and committed to the main branch.

This incident reinforced the importance of clear communication, smaller incremental commits, and frequent synchronization to reduce integration complexity and maintain code stability.

### 3. Pull Request and Peer Review Evaluation

The pull request (PR) and peer review processes proved to be essential components of the team's workflow. Each PR required at least one teammate's review to ensure code quality, TypeScript syntax accuracy, and consistency with established project conventions.

Peer reviews often revealed minor issues such as missing type annotations, redundant imports, and minor CSS inconsistencies. These checks not only enhanced technical precision but also encouraged collaborative learning and deeper understanding among team members of each other's work.

Consequently, the final merged codebase became cleaner, more readable, and easier to maintain. The structured PR and review workflow significantly improved the software's reliability, design coherence, and maintainability, exemplifying an effective application of professional software engineering practices.

## Project Overview

This is a collaborative portfolio website built with React, TypeScript, and Tailwind CSS. The project showcases the team members' profiles, skills, and projects in a modern, responsive web application.

### Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **UI Components**: Radix UI, Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

### Features

- Responsive team member profiles
- Interactive skill showcases
- Project portfolios
- Modern UI/UX design
- Client-side routing
- GitHub Pages deployment optimization
