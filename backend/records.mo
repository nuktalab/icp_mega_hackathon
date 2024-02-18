import RBTree "mo:base/RBTree";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import None "mo:base/None";
import Array "mo:base/Array";

actor {
  type MedicalRecord = { userId: Text; doctorName: Text; hospitalName: Text; date: Text; title: Text;description: Text;  category: Text; treatment: Text};

  // RBTree to store medical records with userId as the key
  var medicalRecords: RBTree.RBTree<Text, [MedicalRecord]> = RBTree.RBTree(Text.compare);

  // Function to add a medical record by userId
  public func addMedicalRecord(
    userId: Text,
    doctorName: Text,
    hospitalName: Text,
    date: Text,
    title: Text,
    description: Text,
    category: Text,
    treatment: Text
  ) : async Text {
    let record: MedicalRecord = {
      userId = userId;
      doctorName = doctorName;
      hospitalName = hospitalName;
      date = date;
      title = title;
      description = description;
      category = category;
      treatment = treatment
    };
    let existingRecords = switch (medicalRecords.get(userId)) {
      case (null) { [] };
      case (?records) { records };
    };
    let updatedRecords = Array.append<MedicalRecord>(existingRecords, [record]);
    medicalRecords.put(userId, updatedRecords);
    return "Medical record added successfully.";
  };

  // Function to get a medical record by userId
  public query func getMedicalRecord(userId: Text) : async ?[MedicalRecord] {
    medicalRecords.get(userId);
  };

  public query func getAllrecords() : async [(Text, [MedicalRecord])] {
    Iter.toArray(medicalRecords.entries())
  };

  public func deleteAllRecords() : async () {
    medicalRecords := RBTree.RBTree(Text.compare);
  };
};
