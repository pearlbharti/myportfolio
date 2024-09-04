const devlogData = [
    {
        "id": 1,
        "title": "Metrics for Recipe Recommendation System",
        "status": "In Progress",
        "update": "Working on defining and implementing evaluation metrics to assess recommendation accuracy and relevance.",
        "issues": [
            "Evaluating recommendation systems can be complex as traditional accuracy metrics do not apply directly.",
            "Challenges in determining relevant metrics for diverse recipe content and user preferences.",
            "Difficulty in setting up meaningful offline evaluations due to the lack of ground truth data."
        ],
        "deadline": "2024-09-01",
        "done": false,
        "replit-link": "https://replit.com/@snehsuresh02/recipeextraction?embed=true&v=1",
        "problemStatement": [
            "Offline Metrics: Accurate assessment of precision, recall, and F1 score requires a reliable ground truth, which is challenging to establish for diverse recipes.",
            "User-Centric Metrics: Measuring user satisfaction and click-through rates can be difficult without real-time user feedback and engagement data.",
            "Similarity and Ranking Metrics: Ensuring that topic modeling and content-based recommendations align well with user preferences involves complex evaluation of ranking accuracy."
        ]
    },
    {
        id: 2,
        title: 'Personalized, Health-Aware Recipe Recommendation',
        status: 'In Progress',
        update: 'Working on data extraction from https://www.food.com...',
        issues: 'Potentially increased risk of IP blocking or rate limiting...',
        deadline: '2024-09-01',
        "replit-link": "https://replit.com/@snehsuresh02/recipeextraction?embed=true",
        done: true,
        problemStatement: ['Processing Time: Each page takes 3 seconds to scrape, leading to excessive total processing time for 200,000+ recipes.', 'Resource Usage: Headless browser requires significant resources, further impacting performance.']
    },
    {
        id: 3,
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
