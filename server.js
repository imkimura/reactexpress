const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [{
            "id": 1,
            "firstName": "Jonhy",
            "lastName": "Smith"
        },
        {
            "id": 2,
            "firstName": "Christopher",
            "lastName": "The First"
        },
        {
            "id": 3,
            "firstName": "Sarah",
            "lastName": "Smith"
        }
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server rodando na porta ${port}`))