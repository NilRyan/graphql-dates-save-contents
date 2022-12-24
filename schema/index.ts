import {
  buildSchema,
} from "graphql";

const schema = `
type TimeBetween {
  num_days: Int!
}
type Query {
  dates(start_date: String!, end_date: String!): TimeBetween
}
type FileSize {
  file_size: Int!
}
type Mutation {
  saveContents(contents: String!): FileSize
}
`

export default buildSchema(schema);