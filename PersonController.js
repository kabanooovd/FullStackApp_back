import PersonService from "./PersonService.js";

class PersonController {
	async create(req, res) {
		try {
			const person = await PersonService.create(
				req.body,
				req.files && req.files.photo
			);
			res.json(person);
		} catch (err) {
			res.status(500).json(err);
		}
	}
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
