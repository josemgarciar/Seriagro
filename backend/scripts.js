const { BrowserWindow, Notification } = require("electron");
const { getConnection } = require("./backend/database.js");

let window;

const createClient = async (client) => {
  try {
    const conn = await getConnection();
    product.price = parseFloat(product.price);
    const result = await conn.query("INSERT INTO product SET ?", client);
    product.id = result.insertId;

    new Notification({
      title: "Electron Mysql",
      body: "New Product Saved Successfully",
    }).show();

    return product;
  } catch (error) {
    console.log(error);
  }
};

const getClients = async () => {
  const conn = await getConnection();
  const results = await conn.query("SELECT * FROM product ORDER BY id DESC");
  return results;
};

const deleteClient = async (id) => {
  const conn = await getConnection();
  const result = await conn.query("DELETE FROM product WHERE id = ?", id);
  return result;
};

const getClientByNIF = async (NIF) => {
  const conn = await getConnection();
  const result = await conn.query("SELECT * FROM product WHERE id = ?", id);
  return result[0];
};

const getClientByName = async (NAME) => {
    const conn = await getConnection();
    const result = await conn.query("SELECT * FROM product WHERE id = ?", id);
    return result[0];
  };


const updateClient = async (id, client) => {
  const conn = await getConnection();
  const result = await conn.query("UPDATE product SET ? WHERE Id = ?", [
    client,
    id,
  ]);
  console.log(result)
};

function createWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  window.loadFile("src/ui/index.html");
}

module.exports = {
    createClient,
    getClients,
    deleteClient,
    getClientByNIF,
    getClientByName,
    updateClient,
    createWindow

};