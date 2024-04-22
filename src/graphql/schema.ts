import { buildSchema } from 'graphql';
import { INPUT, QUERY, TYPE, SCALAR } from '../constants/graphql.constant';

export const graphQLSchema = buildSchema(TYPE + INPUT + QUERY + SCALAR);

exports.module = {
    graphQLSchema
}