const express = require('express');
const app = express();
const PORT = 4021;

app.use(express.static('dist/jewelry-resume-app'));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));