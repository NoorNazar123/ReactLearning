import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService{
   client = new Client();
   account;

   constructor(){
      this.client
          .setEndpoint(config.appwriteUrl)
          .setProject(config.appwriteProjectId)
      this.account = Account(this.client)
   }
   // it will always same above you can change what every may be firebase custom etc.
   //in future if we need to make any website with appwrite so we can used this code.  
   async createAccount({email, password, name }){
      try {
        const userAccount = await this.account.create(ID.unique(),email, password, name);
        if(userAccount){
         //   return userAccount
         //another if user account created so it will auta sign in
         await this.login({email,password});

        }else {
           return userAccount 
        }
      } catch (error) {
         throw error;
      }
   }
   // we can use now more method we need.
   async login({email,password}){
      try {
         await await this.account.createEmailSession(email,password) // this method coming from appwrite docs
      } catch (error) {
         throw error;
      }
   }

   async getCurrentUser(){
      try {
         await this.account.get()
      } catch (error) {
         console.log(`Appwrite Error :: getCurrentUser:${error}` );
      }
      return null //its use if acout does not created or null
   }

   async logOut(){
      try {
         await this.account.deleteSessions();
      } catch (error) {
         throw error
      }
   }
};

const authService = new AuthService();

export default authService