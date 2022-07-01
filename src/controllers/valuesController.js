import { db, objectId } from '../dbStrategy/mongo.js';
import joi from 'joi';

export async function getSolds(req, res) {
    const session = res.locals.session;
  
    const posts = await db
      .collection('posts')
      .find({ userId: new objectId(session.userId) })
      .toArray();
  
    res.send(posts);
}

export async function Cashin(req, res) {
  const entry = req.body;
  const entrySchema = joi.object({
    soldin: joi.number().required(),
    description: joi.string().required()
  });
  const { error } = entrySchema.validate(entry);
  if (error) {
    return res.sendStatus(422);
  }

  await db.collection('sold').insertOne({ ...entry, type: "increase" });
  res.status(201).send('Entrada criada com sucesso');
}
