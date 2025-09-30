export default function handler(req, res) {
    if (req.method === 'POST') {
        const {name} = req.body;

        if (!name || name.length <= 3) {
            return res.status(422).json({message: 'Missing name', status: 'failed'});
        }

        res.status(201).json({message: "Successfully created data", status: "success", data: name});
    }
}