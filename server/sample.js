const projects = [
    {
        id: 1,
        clientID: "101",
        name: 'Website Redesign',
        description: 'Complete redesign of the client\'s main website to improve user experience and SEO.',
        status: 'In Progress'
    },
    {
        id: 2,
        clientID: "102",
        name: 'Mobile Application Development',
        description: 'Development of a cross-platform mobile app for online shopping with integrated payment solutions.',
        status: 'Completed'
    },
    {
        id: 3,
        clientID: "103",
        name: 'Data Migration',
        description: 'Migrating legacy data to a new cloud-based storage system, ensuring data integrity and security.',
        status: 'Pending'
    },
    {
        id: 4,
        clientID: "104",
        name: 'Marketing Campaign',
        description: 'Planning and executing a digital marketing campaign for the launch of a new product line.',
        status: 'In Progress'
    },
    {
        id: 5,
        clientID: "105",
        name: 'Security Audit',
        description: 'Conducting a comprehensive security audit to identify potential vulnerabilities in the IT infrastructure.',
        status: 'Completed'
    }
];

const clients = [
    {
        id: "101",
        name: 'Alpha Corp',
        email: 'contact@alphacorp.com',
        phone: '123-456-7890'
    },
    {
        id: "102",
        name: 'Beta LLC',
        email: 'info@betallc.com',
        phone: '123-456-7891'
    },
    {
        id: "103",
        name: 'Gamma Industries',
        email: 'support@gammaindustries.com',
        phone: '123-456-7892'
    },
    {
        id: "104",
        name: 'Delta Services',
        email: 'help@deltaservices.com',
        phone: '123-456-7893'
    },
    {
        id: "105",
        name: 'Epsilon Electronics',
        email: 'sales@epsilonelectronics.com',
        phone: '123-456-7894'
    }
];

module.exports = { projects, clients }