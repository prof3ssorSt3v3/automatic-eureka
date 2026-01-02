import walks from '../models/walks.js';
import { BadRequestError, NotFoundError } from '../utils/errors.js';

const create = (body) => {
  const { walkDate, city } = body;
  const id = Date.now();

  if (!walkDate || !city) throw new BadRequestError('Invalid input');

  const newWalk = {
    id,
    walkDate: new Date(walkDate),
    city,
  };
  walks.push(newWalk);

  return newWalk;
};

const getAll = () => walks;

const getOne = (id) => {
  const walk = walks.find((walk) => id === walk.id);

  if (!walk) throw new NotFoundError(`Walk with id ${id} not found`);

  return walk;
};

const replace = (id, body) => {
  const { walkDate, city } = body;
  const walkIndex = walks.findIndex((walk) => id === walk.id);

  if (walkIndex < 0) throw new NotFoundError(`Walk with id ${id} not found`);
  if (!walkDate || !city) throw new BadRequestError('Invalid input');

  const updatedWalk = {
    id,
    walkDate: new Date(walkDate),
    city,
  };

  walks[walkIndex] = updatedWalk;

  return updatedWalk;
};

const update = (id, body) => {
  const { walkDate, city } = body;
  const walk = walks.find((walk) => id === walk.id);

  if (!walk) throw new NotFoundError(`Walk with id ${id} not found`);

  if (walkDate) walk.walkDate = walkDate;
  if (city) walk.city = city;

  return walk;
};

const deleteOne = (id) => {
  const walkIndex = walks.findIndex((walk) => id === walk.id);

  if (walkIndex === -1) {
    throw new NotFoundError(`Walk with id ${id} not found`);
  }

  const [deletedWalk] = walks.splice(walkIndex, 1);
  return deletedWalk;
};

const walkService = { create, getAll, getOne, replace, update, deleteOne };

export default walkService;
