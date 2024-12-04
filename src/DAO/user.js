const { runQuery } = require("../lib/database");

const getByUsername = async username => {
    const sql = 'SELECT id, display_name AS DisplayName, password, is_active AS isActive, is_staff AS isStaff' +
    ' FROM users WHERE username = ?';

    const result = await runQuery(sql, [username]);
    return result[0];
};

const create = async (username, password, displayName) => {
    const sql = 'INSERT INTO users (username, password, displayName) VALUES (?, ?, ?)';
    await runQuery(sql, [username, password, displayName]);
};


module.exports = {
getByUsername,
create,
};