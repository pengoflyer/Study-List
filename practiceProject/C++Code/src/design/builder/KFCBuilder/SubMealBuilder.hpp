#ifndef SUB_MEAL_BUILDER
#define SUB_MEAL_BUILDER

#include<iostream>
#include"MealBuilder.hpp"
#include"Meal.hpp"
using namespace std;

// 具体套餐A
class SubMealBuilderA: public MealBuilder
{
public:
    SubMealBuilderA(Meal* meal): MealBuilder(meal){};
    ~SubMealBuilderA(){};

    void build_drink(string drink){
        cout << "SubMealBuilderA::build_drink" << endl;
        get_meal()->set_drink(drink);
    };

    void build_meal(string meal){
        cout << "SubMealBuilderA::build_meal" << endl;
        get_meal()->set_meal(meal);
    };

    void build_food(string food) {

    }
};

// 具体套餐B
class SubMealBuilderB: public MealBuilder
{
public:
    SubMealBuilderB(Meal* meal): MealBuilder(meal){};
    ~SubMealBuilderB(){};

    void build_drink(string drink){
        cout << "SubMealBuilderB::build_drink" << endl;
        get_meal()->set_food(drink);
    };

    void build_meal(string meal){
        cout << "SubMealBuilderB::build_meal" << endl;
        get_meal()->set_meal(meal);
    };

    void build_food(string food) {
        cout << "SubMealBuilderB::build_food" << endl;
        get_meal()->set_food(food);
    }
};

#endif // SUB_MEAL_BUILDER