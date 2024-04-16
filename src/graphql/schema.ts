import { buildSchema } from 'graphql';
import { SCALAR } from '../constants/scalar.constant';
import { QUERY } from '../constants/query.constant';
import { INPUT } from '../constants/input.constant';
import { TYPE } from '../constants/type.constant';

export const graphQLSchema = buildSchema(INPUT + QUERY + SCALAR + TYPE);

exports.module = {
    graphQLSchema
}