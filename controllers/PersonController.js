import PersonService from "../services/PersonService.js";

class PersonController {
	async getAll(req, res) {
		try {
			const person = await PersonService.getAll();
			res.json(person);
		} catch (err) {
			res.status(500).json(err);
		}
	}
	async getOne(req, res) {
		try {
			const person = await PersonService.getOne(req.params.id);
			res.json(person);
		} catch (err) {
			res.status(500).json(err);
		}
	}
	async update(req, res) {
		try {
			const updatePerson = await PersonService.update(req.body);
			res.json(updatePerson);
		} catch (err) {
			res.status(500).json(err.message);
		}
	}
	async remove(req, res) {
		try {
			const person = await PersonService.remove(req.params.id);
			res.json(person);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}

export default new PersonController();
