const mysql = require('mysql');
const inquirer = require('inquirer');

// Create connection to DB

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazonDB'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProducts();
});

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT item_id, product_name, department_name, price FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        inquire();
    });
}

function inquire() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'product',
            message: 'Please type the number of the product you would like to purchase.'
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many would you like to purchase?'
        }
    ]).then(answers => {
        checkInventory(answers.product, answers.quantity);
    });
}

function checkInventory(selection, quantity) {
    connection.query("SELECT stock_quantity, product_name, price FROM products WHERE ?", [{ item_id: selection }], function (err, res) {
        if (err) throw err;
        else if (res[0].stock_quantity - quantity > 0) {
            let total = parseFloat(res[0].price * quantity);
            let newInv = res[0].stock_quantity - quantity;
            console.log('You ordered ' + quantity + ' ' + res[0].product_name + '(s). Your total is $' + total);
            updateProduct(newInv, res[0].product_name);
            newOrder();
        } else {
            console.log("We only have " + res[0].stock_quantity + ' in stock. Please try your order again.');
            inquire();
        }
    }
    )
};

function updateProduct(inventory, name) {
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: inventory
            },
            {
                product_name: name
            }
        ],
        function (err, res) {
        }
    )
};

function newOrder() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'newOrder',
            choices: ['Yes', 'No'],
            message: 'Would you like to place another order?'
        }
    ]).then(answers => {
        if (answers.newOrder === 'Yes') {
            inquire();
        } else {
            console.log('Thanks for visiting!');
            connection.end();
        }
    });
}

