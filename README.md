# Инструкция по запуску
## 1
 Соберите образ
   ```
   docker build -t server-nodejs .
   ```
 Запустите контейнер
   ```
   docker run -p 8080:8080 server-nodejs
   ```
 Перейдите по адресу
   ```
   localhost:8080
   ```

 > ![image](https://user-images.githubusercontent.com/43496655/218293951-95c26a93-abec-467e-8663-0b47fd899484.png)

---
## 2
 Соберите и запустите контейнер (в фоновом режиме)
 ```
 docker-compose up -d
 ```
 Перейдите по адресу
 ```
 localhost:8080
 ```
 
 > ![image](https://user-images.githubusercontent.com/43496655/218293921-1e3bdfa6-eb90-4278-905f-6ac83364256f.png)
