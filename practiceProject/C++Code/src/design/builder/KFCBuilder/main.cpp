#include<iostream>
#include"KFCWaiter.hpp"
#include"SubMealBuilder.hpp"
#include"MealBuilder.hpp"
#include"Meal.hpp"

using namespace std;


int main() {
    Meal* meal_a = new Meal();

    SubMealBuilderA* sub_a = new SubMealBuilderA(meal_a);
    KFCWaiter* kfcw = new KFCWaiter(sub_a);
    string food = "tudou";
    string drink = "kele";
    string meal = "mifan";
    kfcw->construct(food, drink, meal);
    meal_a->show();

    cout << "================================" << endl;
    
    Meal* meal_b = new Meal();
    SubMealBuilderB* sub_b = new SubMealBuilderB(meal_b);
    kfcw = new KFCWaiter(sub_b);
    food = "mianbao";
    drink = "chengzhi";
    meal = "miantiao";
    kfcw->construct(food, drink, meal);
    meal_b->show();

    return 0;
}