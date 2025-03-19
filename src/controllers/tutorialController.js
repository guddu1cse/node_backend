import {
    getAllTutorials as fetchAllTutorials,
    getTutorialById as fetchTutorialById,
    removeTutorial as fetchRemoveTutorial,
    removeAllTutorials as fetchRemoveAllTutorials,
    updateTutorial as fetchUpdateTutorial,
    getPublishedTutorials as fetchAllPublishedTutorials,
    getTutorialByTitle as fetchTutorialByTitle
} from "../query.js";
import { addTutorial } from "../query.js";

const getAllTutorials = async (req, res) => {
    const response = await fetchAllTutorials();
    res.json(response);
};

const createTutorial = async (req, res) => {
    const body = req.body;
    const response = await addTutorial(body);
    res.json(response);
};

const getTutorialById = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const response = await fetchTutorialById(id);
    res.json(response);
};

const removeTutorial = async (req, res) => {
    const { id } = req.params;
    const response = await fetchRemoveTutorial(id);
    res.json(response);
};

const removeAllTutorials = async (req, res) => {
    const response = await fetchRemoveAllTutorials();
    res.json(response);
};

const updateTutorial = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const response = await fetchUpdateTutorial(id, body);
    res.json(response);
}

const getPublishedTutorials = async (req, res) => {
    const response = await fetchAllPublishedTutorials();
    res.json(response);
}

const getTutorialByTitle = async (req, res) => {
    const { title } = req.params;
    const response = await fetchTutorialByTitle(title);
    res.json(response);
}

export default { getAllTutorials, createTutorial, getTutorialById, removeTutorial, removeAllTutorials, updateTutorial, getPublishedTutorials, getTutorialByTitle }; 
