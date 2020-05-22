# Programme de réduction du risque phoneGap & Cordova.
- Lecture tag NFC \( plugin [phonegap-nfc](https://www.npmjs.com/package/phonegap-nfc)\)
- Lecture Empreinte digitale \(plugin [cordova-plugin-fingerprint-aio-criterion](https://www.npmjs.com/package/cordova-plugin-fingerprint-aio-criterion)\)
- Envoi de SMS \(plugin [cordova-sms-plugin](https://www.npmjs.com/package/cordova-sms-plugin)\)

Pour l'installation, saisissez :
 ```
 1. cordova platform add android
 2. cordova build android
```
### ATTENTION 
Pour l'envoi de SMS, deux modes sont disponibles 
   - intent: 'INTENT'  *envoi d'un sms avec l'application native de sms*
   - intent: '' *envoi un SMS avec notre code sans ouvrir d'autre application de sms*
       - Dans cette deuxième situation, il faut  aller dans le fichier **platforms\android\app\src\main\AndroidManifest.xml** 
       - et rajouter  **\<uses-permission android:name="android.permission.SEND_SMS" />**
 ```
 3. cordova run android
```
