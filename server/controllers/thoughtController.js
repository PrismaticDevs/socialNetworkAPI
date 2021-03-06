const { Thought } = require('../model');

module.exports = {
    createThought: async(req, res) => {
        const { thought, username } = req.body;
        try {
            const newThought = await Thought.create({ thought, username, });
            res.json(newThought);
        } catch (error) {
            res.json(error);
        }
    },
    getAllThoughts: async(req, res) => {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (error) {
            res.json(error);
        }
    },
    getThoughtById: async(req, res) => {
        const { thoughtId } = req.params;
        try {
            const thought = await Thought.findById((thoughtId));
            res.json(thought);
        } catch (error) {
            res.json(error);
        }
    },
    updateThoughtById: async(req, res) => {
        const { thoughtId } = req.params;
        try {
            const updatedThought = await Thought.findByIdAndUpdate(thoughtId, {...req.body }, { new: true });
            res.json(updatedThought);
        } catch (error) {
            res.json(error);
        }
    },
    deleteThoughtById: async(req, res) => {
        const { thoughtId } = req.params;
        try {
            const deletedThought = await Thought.findByIdAndDelete(thoughtId);
            res.json(deletedThought);
        } catch (error) {
            res.json(error);
        }
    },
}