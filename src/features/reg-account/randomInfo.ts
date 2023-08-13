import Chance from "chance";

const chance = new Chance();
const year = chance.year({ min: 1950, max: 2005 });

const randomFristName = chance.first();
const randomLastName = chance.last();
const randomDateOfBirth = chance
	.birthday({ year: year })
	.toLocaleString()
	.split(",")[0];
const randomGender = Math.floor(Math.random() * (2 - 1 + 1) + 1) as 1 | 2;

const RANDOM_INFO = {
	firstName: randomFristName,
	lastName: randomLastName,
	dateOfBirth: randomDateOfBirth,
	gender: randomGender,
};

export default RANDOM_INFO;
