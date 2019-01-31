import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FireServiceService {
  
  users: FirebaseListObservable<any[]>;

  constructor(private database : AngularFireDatabase) { 
    this.users = database.list('users');
  }

  public getUsers() {
    return this.users;
  }

  public getUser(key: string) {
    return this.database.object('users/' + key);
  }

  public addUser(newUser: Object){
    this.users.push(newUser);
  }

  updateUser(localUpdatedUser){
    var userEntryInFirebase = this.getUser(localUpdatedUser.key);
    userEntryInFirebase.update({name: localUpdatedUser.name,
                                email: localUpdatedUser.email,
                                website: localUpdatedUser.website});
  }

  deleteUser(userKey){
    this.getUser(userKey).remove();
  }

  
}
