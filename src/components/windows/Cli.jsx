import React, { useState } from 'react'
import MacWndow from './MacWndow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowname, setwindowState }) => {
    const [promptColor, setPromptColor] = useState('#7cfc00')

    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'I am Ritam Haldar, a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express, Python, Django
Databases: MongoDB, PostgreSQL, MySQL
Tools: Git, Docker, Webpack, Vite
Cloud: AWS, Azure, Heroku`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Portfolio Website - React + Vite
2. E-commerce Platform - MERN Stack
3. Task Management App - Next.js
4. Real-time Chat App - Socket.io
5. Data Dashboard - React + Chart.js`
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `Senior Developer @ Tech Corp (2022 - Present)
  - Led development of 5+ React applications
  - Mentored junior developers

Full Stack Developer @ Web Solutions (2020 - 2022)
  - Built scalable APIs with Node.js
  - Designed responsive UIs with React`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: ritamhaldar@example.com
Phone: +1 (555) 123-4567
Location: San Francisco, CA`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/ritamhaldar', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `Twitter: @ritamhaldar
LinkedIn: /in/ritamhaldar
Portfolio: ritamhaldar.dev`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        },
        cyan: {
            description: 'Change prompt color to cyan',
            usage: 'cyan',
            fn: () => {
                setPromptColor('cyan')
                return 'Prompt color changed to cyan'
            }
        },
        red: {
            description: 'Change prompt color to red',
            usage: 'red',
            fn: () => {
                setPromptColor('red')
                return 'Prompt color changed to red'
            }
        },
        blue: {
            description: 'Change prompt color to blue',
            usage: 'blue',
            fn: () => {
                setPromptColor('blue')
                return 'Prompt color changed to blue'
            }
        },
        green: {
            description: 'Change prompt color to green',
            usage: 'green',
            fn: () => {
                setPromptColor('#7cfc00')
                return 'Prompt color changed to green'
            }
        },
        yellow: {
            description: 'Change prompt color to yellow',
            usage: 'yellow',
            fn: () => {
                setPromptColor('yellow')
                return 'Prompt color changed to yellow'
            }
        },
        magenta: {
            description: 'Change prompt color to magenta',
            usage: 'magenta',
            fn: () => {
                setPromptColor('magenta')
                return 'Prompt color changed to magenta'
            }
        },
        white: {
            description: 'Change prompt color to white',
            usage: 'white',
            fn: () => {
                setPromptColor('white')
                return 'Prompt color changed to white'
            }
        }

    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to Ritam's Portfolio CLI!  ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch
  • cyan, red, blue, green... - Change prompt color

Happy exploring! 🚀
`

    return (
        <MacWndow windowname={windowname} setwindowState={setwindowState}>
            <div className="terminal-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'ritamhaldar:~$'}
                    promptLabelStyle={{ color: promptColor }}
                    style={{ backgroundColor: 'transparent', height: '100%' }}
                    contentStyle={{ color: '#ffffff' }}
                />
            </div>
        </MacWndow>
    )
}

export default Cli