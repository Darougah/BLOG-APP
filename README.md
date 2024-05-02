Individuell uppgift : Backend1
Blogg (User, Post, Comment) (Lättare)

En användare ska kunna Registrera sig och Logga in
En användare ska kunna läsa blogg inlägg
En inloggad användare ska kunna skapa blogg inlägg
En inloggad användare ska kunna kommentera ett blogg inlägg
VG: en administratör ska kunna ta bort både blogg inlägg och kommentarer
VG: Ett blogg inlägg eller kommentar innehållande “opassande språk” ska automatiskt censureras.
Opassande språk bestämmer ni själva men det skulle kunna vara “banan” eller “rengöringsmedel”



Starta projektet:


Tanka ner ZIP fil eller klona ner projektet.

Skapa en .env fil i backend mappen och skriv in: 

MONGO_URL="din mongo db "
# MONGO_URL="mongodb://localhost:27017" (ifall du kör local)
PORT ="5000"
SECRET="lösenord"

Öppna två terminaler och gå navigera in i frontend mappen i ena och backend i den andra och skriv:
npm install

skapa en image mapp under backend så du får in alla bilder som du lägger in.

npm start i båda terminalerna för att starta projektet.



