import Person from "./Person.js";

class PersonService {
	async create(person) {
		// const fileName = fileService.saveFile(picture);
		// const createdPost = await Post.create({ ...post, picture: fileName });
		const createdPerson = await Person.create(person);
		return createdPerson;
	}
	async getAll() {
		const person = await Person.find();
		return person;
	}
	async getOne(id) {
		if (!id) {
			throw new Error("no id...");
		}
		const person = await Person.findById(id);
		return person;
	}
	async update(person) {
		if (!person._id) {
			throw new Error("no id...");
		}
		const updatedPerson = await Person.findByIdAndUpdate(person._id, person, {
			new: true,
		});
		return updatedPerson;
	}
	async remove(id) {
		if (!id) {
			throw new Error("no id...");
		}
		const person = await Person.findByIdAndDelete(id);
		return person;
	}
}

export default new PersonService();
