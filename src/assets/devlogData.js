const devlogData = [
    {
        id: 1,
        title: 'Personalized, Health-Aware Recipe Recommendation',
        status: 'In Progress',
        update: 'Working on data extraction from https://www.food.com...',
        issues: 'Potentially increased risk of IP blocking or rate limiting...',
        deadline: '2024-09-01',
        done: false,
        problemStatement: ['Processing Time: Each page takes 3 seconds to scrape, leading to excessive total processing time for 200,000+ recipes.', 'Resource Usage: Headless browser requires significant resources, further impacting performance.']
    },
    {
        id: 2,
        title: 'Deploying Facial Emotion Project on render.com',
        status: 'Completed',
        update: 'Resolved latency issues due to resource limitations.',
        issues: 'High latency and frequent application crashes',
        deadline: 'None',
        done: true,
    },
    // Add more items as needed
];

export default devlogData;
