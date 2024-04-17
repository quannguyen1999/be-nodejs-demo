import { buildSchema } from 'graphql';
import { INPUT, QUERY, TYPE, SCALAR } from '../constants/graphql.constant';

export const graphQLSchema = buildSchema(INPUT + QUERY + SCALAR + TYPE);

exports.module = {
    graphQLSchema
}