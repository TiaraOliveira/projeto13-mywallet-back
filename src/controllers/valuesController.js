import { db, objectId } from '../dbStrategy/mongo.js';
import joi from 'joi';
import dayjs from "dayjs"

export async function getSolds(req, res) {
  const session = res.locals.session;
    const extrato = await db
      .collection('sold')
      .find({userId: new objectId(session.userId)})
      .toArray();
  
    res.send(extrato);
}

export async function Cashin(req, res) {
  const entry = req.body;
  const dia = dayjs().format("DD-MM");
  const entrySchema = joi.object({
    soldin: joi.number().required(),
    description: joi.string().required()
  });
  const { error } = entrySchema.validate(entry);
  if (error) {
    return res.sendStatus(422);
  }

  await db.collection('sold').insertOne({ ...entry, type: "increase", dia:dia });
  res.status(201).send('Entrada criada com sucesso');
}


export async function Cashout(req, res) {
  const entry = req.body;
  const dia = dayjs().format("DD-MM");
  const entrySchema = joi.object({
    soldin: joi.number().required(),
    description: joi.string().required()
  });
  const { error } = entrySchema.validate(entry);
  if (error) {
    return res.sendStatus(422);
  }

  await db.collection('sold').insertOne({ ...entry, type: "decrease", dia:dia });
  res.status(201).send('Entrada criada com sucesso');
}
