import db from './config/db.js';

const queryOnDb = async (query, message) => {
    try {
        const result = await db.query(query);
        return { message: message.success, data: result[0], error: null };
    } catch (error) {
        return { message: message.error, data: null, error: error };
    }
}

const createTableTutorials = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS tutorials(
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            published BOOLEAN DEFAULT FALSE
        )
    `;
    const message = {
        success: 'Table tutorials created',
        error: 'Error creating table tutorials'
    }
    return await queryOnDb(query, message);
}

const getAllTutorials = async () => {
    const query = 'SELECT * FROM tutorials';
    const message = {
        success: 'List of tutorials',
        error: 'Error getting tutorials'
    }
    return await queryOnDb(query, message);
}

const getTutorialById = async (id) => {
    const query = `SELECT * FROM tutorials WHERE id=${id}`;
    const message = {
        success: 'Tutorial found',
        error: `Error getting tutorial with id=${id}`
    }
    return await queryOnDb(query, message);
}

const addTutorial = async (tutorial) => {
    const query = `
            INSERT INTO tutorials (title, description, published) 
            VALUES ('${tutorial.title}', '${tutorial.description}', ${tutorial.published !== undefined ? tutorial.published : false})
        `;

    const message = {
        success: `Tutorial added successfully`,
        error: `Error adding tutorial`
    };

    return await queryOnDb(query, message);
};

const updateTutorial = async (id, tutorial) => {
    let updateFields = [];

    if (tutorial.title) updateFields.push(`title='${tutorial.title}'`);
    if (tutorial.description) updateFields.push(`description='${tutorial.description}'`);
    if (tutorial.published !== undefined) updateFields.push(`published=${tutorial.published}`);

    if (updateFields.length === 0) {
        return { message: `No fields provided for update`, data: null, error: true };
    }

    const query = `UPDATE tutorials SET ${updateFields.join(', ')} WHERE id=${id}`;

    const message = {
        success: `Tutorial updated with id=${id}`,
        error: `Error updating tutorial with id=${id}`
    };

    return await queryOnDb(query, message);
};

const removeTutorial = async (id) => {
    const query = `DELETE FROM tutorials WHERE id=${id}`;
    const message = {
        success: `Tutorial removed with id=${id}`,
        error: `Error removing tutorial with id=${id}`
    }
    return await queryOnDb(query, message);
}

const removeAllTutorials = async () => {
    const query = 'DELETE FROM tutorials';
    const message = {
        success: 'All tutorials removed',
        error: 'Error removing all tutorials'
    }
    return await queryOnDb(query, message);
}

const getPublishedTutorials = async (req, res) => {
    const query = `SELECT * FROM tutorials WHERE published= true`;
    const message = {
        success: 'List of published tutorials',
        error: 'Error getting published tutorials'
    }
    return await queryOnDb(query, message);
}

const getTutorialByTitle = async (title) => {
    const query = `SELECT * FROM tutorials WHERE title LIKE '%${title}%'`;
    const message = {
        success: 'List of tutorials matching title',
        error: `Error getting tutorials with title=${title}`
    }
    return await queryOnDb(query, message);
}

export {
    createTableTutorials,
    getAllTutorials,
    getTutorialById,
    addTutorial,
    updateTutorial,
    removeTutorial,
    removeAllTutorials,
    getPublishedTutorials,
    getTutorialByTitle
}

export default queryOnDb;