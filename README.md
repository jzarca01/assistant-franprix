# assistant-franprix

Ce plugin de [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/) permet de consulter le solde de sa carte de fidélité [Franprix](https://www.franprix.fr/) et d'y ajouter automatiquement toutes les promotions disponibles.

**Attention**, vous devez avoir une version supérieure ou égale à Node v8 pour utiliser ce plugin.

## Installation

Si vous n'avez pas installé [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/), alors il faut le faire.

Ensuite, pour ajouter ce plugin :
  - Pour Windows, télécharger [`install_franprix.bat`](https://github-proxy.kodono.info/?q=https://raw.githubusercontent.com/jzarca01/assistant-franprix/master/install_franprix.bat&download=install_franprix.bat) dans le répertoire `assistant-plugins`, puis l'exécuter en double-cliquant dessus.  
  - Pour Linux/MacOS, ouvrir une console dans le répertoire `assistant-plugins` et taper :  
  `npm install assistant-franprix@latest --save && npm run-script postinstall`
  
## Configuration

Deux paramètres sont obligatoires : `login` et `password`. Ils correspondent à vos identifiants [Franprix](https://www.franprix.fr/fidelite/compte/identification#login-section).

## Utilisation

Deux applets ont été créés :

- [Consulter le solde de sa carte](https://ifttt.com/applets/SDzNjucC-assistant-plugins-quel-est-le-solde-de-ma-carte-franprix) --> https://ifttt.com/applets/SDzNjucC-assistant-plugins-quel-est-le-solde-de-ma-carte-franprix
- [Ajouter les promos à sa carte](https://ifttt.com/applets/EiGjfApN-assistant-plugins-ajoute-les-promos-a-ma-carte-franprix) --> https://ifttt.com/applets/EiGjfApN-assistant-plugins-ajoute-les-promos-a-ma-carte-franprix
