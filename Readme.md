# ProjetWebCIR2
Développement d'un serious game sur le thème du smart bulding en CIR2 à l'ISEN

----------------
#Emploie du temps :

--------
-> Réunion du Vendredi 10/02 :
- Commencer le cahier des charges (Voir TO DO LIST pour préparation de la réunion) 

#Le jeu :

--------
##DONE :

--------
-> Mardi 31/01 :
- Commencer recherche définition Batiments Intelligents
- Recherche des jeux serious sur le sujet
- Mise en place du git (https://github.com/LucasDenele/ProjetWebCIR2.git)
- Mise en place du require.js
- Mise en place d'une backup qui sera fait tous les 2 jours environs

--------
##TO DO LIST :

--------
-> EN URGENCE! :
- Winter is comming


--------
-> Dans les 2/3 prochaines semaines :
- Finir cachier des charges
- Mise en place des rôles
- Cahier des Charges au complet
- Commencer recherches design
- Commencer le menu du jeu

----------------
#Tuto git :

--------
**Créer un dépot git :**
- Créer un dossier dans le répertoire apache (Pour démarrer apache2 : Ubuntu : "`sudo service apache2 start`"; Fedora : "`sudo systemctl start httpd`")
- Ouvrir le terminal et se placer dans le dossier créer
- Taper "`git init`"
- Taper "`git remote add NomDuProjet LienDuDépotGit`" (ici de préférence : "`git remote add origin https://github.com/LucasDenele/ProjetWebCIR2.git`")

--------
**Récupérer le dépot git ainsi que les changements :**
- Ouvrir le terminal et se placer dans le dossier du dépot git
- Taper "`git pull NomDuProjet NomDeLaBranche`" (ici de préférence : "`git pull origin master`")

--------
**Ajouter/Changements d'un (ou plusieurs) fichier(s) sur le dépot git :**
- Toujours pareil
- Vérifier que l'on a bien *pull* avant
- Taper "`git commit -a -m "MettreUnCommentaireIci`" " (Je ne demande pas des commentaires ultra précis mais au moins de quoi comprendre ce qui a été changer)
- Taper "`git push NomDuProjet NomDeLaBranche`" (ici de préférence : "`git push origin master`")
- Taper vos identifiants git (Pseudo/MDP)

--------
**Ajouter un fichier sur le dépot git :**
- Toujours pareil
- Taper "`git add NomDuFichier`" ("`git add .`" permet de tout ajouter)
- Voir *Ajouter/Changements d'un fichier sur le dépot git*

--------
**Supprimer un fichier sur le dépot git :**
- T'as toujours pas compris?!
- Taper "`git rm NomDuFichier`" (Par pitier pas de "`git rm .`" car ça efface TOUS les fichiers)
- Voir *Ajouter/Changements d'un fichier sur le dépot git*