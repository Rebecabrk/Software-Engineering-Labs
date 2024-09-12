#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Animal  {
    string name;
    string type;
public:
    Animal(std::string name) : name(name) {}
    std::string getName() {
        return name;
    }
    void setType(std::string type) {
        this->type = type;
    }
    std::string getType() {
        return type;
    }
};

class Dog : public Animal {
    string name;
    public:
    Dog (string name) : Animal(name) {
        setType("dog");
    }
};

class Cat : public Animal {
public:
    Cat(string name) : Animal(name) {
        setType("cat");
    }
};

class Person  {
    string catName {"does not have a cat"};
    string dogName {"does not have a dog"};

    vector<Animal> pets;

    int numberOfPets;
public:
    Person(string dogName, string catName)
            : dogName(dogName), catName(catName), numberOfPets(2) {
        pets.push_back(Dog(dogName));
        pets.push_back(Cat(catName));
    }
    Person(string dogName)
            : dogName(dogName), numberOfPets(1) {
        pets.push_back(Dog(dogName));
    }

    int getNumberOfPets() {
        return numberOfPets;
    }
    bool hasDog() {
        if (dogName == "does not have a dog") {
            return false;
        }
        return true;
    }
    bool hasCat() {
        if (catName == "does not have a cat") {
            return false;
        }
        return true;
    }
    string getDogName() {
        return dogName;
    }
    string getCatName() {
        return catName;
    }
    void printPets() {
        for (auto pet : pets) {
            cout << pet.getName() << " is a " << pet.getType() <<endl;
        }
    }
};

int main() {

    Person Ionescu("Azorel", "Mia");
    Person Vasilescu("Pufi");
    cout<<"Ionescu's pets:"<<endl;
    Ionescu.printPets();
    cout << std::endl;
    cout<<"Vasilescu's pets:"<<endl;
    Vasilescu.printPets();

    return 0;
}
