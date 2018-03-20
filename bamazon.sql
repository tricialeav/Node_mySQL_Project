
DROP DATABASE IF EXISTS bamazonDB; 
CREATE DATABASE bamazonDB; 
USE bamazonDB; 

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NULL, 
    department_name VARCHAR(50) NULL, 
    price DECIMAL(10,2) NULL, 
    stock_quantity INT(10) NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fishtank", "Pet Supplies", 99.99, 25); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Entertainment", 1070.95, 10); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fitness Tracker", "Health & Wellness", 150.00, 20); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cast Iron Pan", "Kitchen", 74.99, 35); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer", "Technology", 500.00, 30); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Towel Set", "Bath", 50.00, 50); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Watering Can", "Garden", 15.00, 75); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Throw Pillow", "Bedroom", 20.00, 30); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lamp", "Home & Office", 60.00, 45); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee Table", "Home & Office", 150.00, 40); 

SELECT * FROM products;
