# PrismaJS Blog

Descrizione: <br>
Create un nuovo progetto Node.js (senza Express) ed installate la Prisma CLI e il Prisma Client. Successivamente definite i modelli **Post**, **Category** e **Tag** nel file `schema.prisma`.

### Modelli

#### Post
Il **Post** deve contenere le seguenti proprietà:
- `title`
- `slug` (deve essere univoco)
- `image` (non obbligatoria)
- `content`
- `published` (boolean)
- `createdAt`
- `updatedAt`

#### Category
Per **Category** è sufficiente la proprietà:
- `name`

#### Tag
Per **Tag** è sufficiente la proprietà:
- `name`

### Relazioni fra i modelli:
- **Category (one-to-many)**: Ogni Post deve avere una categoria associata, e una categoria può avere più Post associati.
- **Tag (many-to-many)**: Ogni Post può avere uno o più tag associati, e ogni Tag può avere uno o più Post associati.

## Funzionalità

Dopo aver definito i modelli, implementare le seguenti funzioni:

### Funzioni CRUD per il modello Post:
- Una funzione che consente di **creare un Post**.
- Una funzione che permette di **leggere un Post usando lo slug**.
- Una funzione che restituisce l'elenco di **tutti i Post**.
- Una funzione che consente di **modificare un Post**.
- Una funzione che **elimina un Post**.

### Funzioni per Category e Tag:
- Aggiungere le funzioni per **creare una Categoria** e **creare un Tag**.

## Bonus
- Crea una funzione che restituisca **solo i Post pubblicati**.
- Crea una funzione che restituisca solo i Post che contengono una determinata parola nel contenuto.

## Istruzioni
1. Creare un nuovo progetto Node.js.
2. Installare **Prisma CLI** e **Prisma Client**.
3. Definire i modelli `Post`, `Category` e `Tag` nel file `schema.prisma`.
4. Implementare tutte le funzioni CRUD e bonus.

