#ifndef MEAL_BUILDER_HPP
#define MEAL_BUILDER_HPP

#include"Meal.hpp"

class MealBuilder
{
private:
    Meal* m_meal;
public:
    MealBuilder(Meal* meal): m_meal(meal){};
    virtual ~MealBuilder(){
        delete m_meal;
    };

    virtual void build_drink(string drink){};
    virtual void build_meal(string meal){};
    virtual void build_food(string food){};

    Meal* get_meal(){ return m_meal; };
};

#endif // MEAL_BUILDER_HPP