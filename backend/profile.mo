import RBTree "mo:base/RBTree";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Iter "mo:base/Iter";

actor {

  // RBTree to store user data with ID as the key
  var userData: RBTree.RBTree<Text, { name: Text; id: Text; location: Text; dateOfBirth: Text; heigh: Nat; weight: Nat  }> = RBTree.RBTree(Text.compare);

  // Function to add user data
  public func addUserData(name: Text, id: Text, location: Text, dateOfBirth: Text, heigh: Nat, weight: Nat) : async Text {
    let userInfo = { name = name; id = id; location = location; dateOfBirth = dateOfBirth; heigh = heigh; weight = weight };
    userData.put(id, userInfo);
    "User data added successfully.";
  };

  // Function to get user data by ID
  public query func getUserData(id: Text) : async ?{ name: Text; id: Text; location: Text; dateOfBirth: Text; heigh: Nat; weight: Nat } {
    userData.get(id);
  };

  // Function to get all user data
  public query func getAllUserData() : async [(Text, { name: Text; id: Text; location: Text; dateOfBirth: Text })] {
    Iter.toArray(userData.entries());
  };

  // Function to reset user data
  public func resetUserData() : async Text {
    userData := RBTree.RBTree(Text.compare);
    "User data reset successfully.";
  };
};
