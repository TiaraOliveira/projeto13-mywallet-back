import { db, objectId } from '../dbStrategy/mongo.js';
import joi from 'joi';
import dayjs from "dayjs"

export async function getSolds(req, res) {
 
    const extrato = await db
      .collection('sold')
      .find({})
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

export async function Delete(req, res) {
  const { id } = req.params;

  

  try {
    const usersColection = db.collection("sold");
    await usersColection.deleteOne({ _id: new ObjectId(id) })
        
    res.sendStatus(200)
   
   } catch (error) {
    res.status(500).send(error)
  
   }
}; 
