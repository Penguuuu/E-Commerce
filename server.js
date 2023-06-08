const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and use the routes
app.use('/api/categories', require('./routes/category-routes'));
app.use('/api/products', require('./routes/product-routes'));
app.use('/api/tags', require('./routes/tag-routes'));
app.use('/api/product-tags', require('./routes/product-tag-routes'));

// Sync Sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
