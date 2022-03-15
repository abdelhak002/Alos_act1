# ALOS Activity 1

## **installation**
clone the repository 
```bash
git clone https://github.com/abdelhak002/Alos_act1.git
```
```
cd Alos_act1
```
## **Start server**

start the server in development mode by running the cmmnade 

```basg
npm run watch
```
## visit [http://localhost:3000](http://localhost:3000) 

## Informations

### Endpoints

GET all records [http://localhost:3000/recipes](http://localhost:3000/recipes)

GET first ten records [http://localhost:3000/recipes?_limit=10](http://localhost:3000/recipes?_limit=10)

GET records that starts with "M" [http://localhost:3000/recipes?title_like=M](http://localhost:3000/recipes?title_like=M)

GET single record [http://localhost:3000/recipes/{id}](http://localhost:3000/recipes/{id})

### **cache-control**

```bash
req.headers({
  "cache-control": "no-cache",
})
```
- The `no-cache` response directive indicates that the response can be stored in caches, but the response must be validated with the origin server before each reuse, even when the cache is disconnected from the origin server.  