import { config } from 'dotenv';
import { executeStudentCrudOperations } from './demo.js';

config();
console.log('process.env.DB_URI='+process.env.DB_URI);

await executeStudentCrudOperations();