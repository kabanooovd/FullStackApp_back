import PersonService from "./PersonService.js";

class PersonController {
	async create(req, res) {
		try {
			const person = await PersonService.create(req.body);
			res.json(person);
		} catch (err) {
			res.status(500).join(err);
		}
	}
	async getAll(req, res) {
		try {
			const person = await PersonService.getAll();
			res.json(person);
		} catch (err) {
			res.status(500).join(err);
		}
	}
	async getOne(req, res) {
		try {
			const person = await PersonService.getOne(req.params.id);
			res.json(person);
		} catch (err) {
			res.status(500).join(err);
		}
	}
	async update(req, res) {
		try {
			const updatePerson = await PersonService.update(req.body);
			res.json(updatePerson);
		} catch (err) {
			res.status(500).join(err.message);
		}
	}
	async remove(req, res) {
		try {
			const person = await PersonService.remove(req.params.id);
			res.json(person);
		} catch (err) {
			res.status(500).join(err);
		}
	}
}

export default new PersonController();
