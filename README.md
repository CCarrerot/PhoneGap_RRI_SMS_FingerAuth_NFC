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
 3.  Allez dans le fichier platforms\android\app\src\main\AndroidManifest.xml 
 et rajoutez  ```<uses-permission android:name="android.permission.SEND_SMS" />```
 
 ```
 4. cordova run android
```
