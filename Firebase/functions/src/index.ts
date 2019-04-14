import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
//const firebaseHelper = require('firebase-functions-helper');
import * as express from 'express';
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const main = express();

const clientsCollection = 'clients';
//const cardsCollection = 'cards';
//const banksCollection = 'banks';
//const transactionsCollection = 'transaction_history';
//const foundsCollection = 'founds';
//const foundsMembersCollection = 'founds_members';
//const accountsContactsCollection = 'accounts_contacts';

//main.use('', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

export const webApi = functions.https.onRequest(main);

main.get('/hello', (req, res) => {
  res.send("Hello World"); 
})

main.get('/clients', (req, res) => {
  db.collection(clientsCollection).get()
    .then((snapshot) =>
      res.status(200).send(snapshot.docs.map(doc => doc.data()))
    )
    .catch(() =>
      res.status(400)
    )
})
