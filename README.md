# Programme de réduction du risque phoneGap & Cordova.
Lecture tag NFC
Lecture Empreinte digitale
Envoi de SMS

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
