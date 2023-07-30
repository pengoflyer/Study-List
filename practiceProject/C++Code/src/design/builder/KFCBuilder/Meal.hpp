#ifndef MEAL_HPP
#define MEAL_HPP

#include<string>
#include<iostream>
using namespace std;

class Meal
{
private:
    string m_food;
    string m_meal;
    string m_drink;
public:
    Meal(string food="", string meal="", string drink=""): 
        m_food(food), m_meal(meal), m_drink(drink){}
    ~Meal(){}

    string get_food() {
        return m_food;
    }

    string get_meal() {
        return m_meal;
    }

    string get_drink() {
        return m_drink;
    }

    void set_food(string food) {
        m_food = food;
    }

    void set_meal(string meal) {
        m_meal = meal;
    }

    void set_drink(string drink) {
        m_drink = drink;
    }

    void show() {
        cout << "food:" << m_food << endl;
        cout << "meal:" << m_meal << endl;
        cout << "drink:" << m_drink << endl;
    }
};


#endif // MEAL_HPP