const path = require('path');
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

const typesArray = fileLoader(path.join(__dirname, './types'));

const types = mergeTypes(typesArray);

export default types;
