import express from 'express';
import tutorialController from '../controllers/tutorialController.js';

const router = express.Router();
router.get('/', tutorialController.getAllTutorials);
router.post('/', tutorialController.createTutorial);
router.get('/:id', tutorialController.getTutorialById);
router.delete('/:id', tutorialController.removeTutorial);
router.delete('/', tutorialController.removeAllTutorials);
router.put('/:id', tutorialController.updateTutorial);
router.get('/tutorials/published', tutorialController.getPublishedTutorials);
router.get('/title/:title', tutorialController.getTutorialByTitle);

export default router;