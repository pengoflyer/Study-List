#ifndef KFC_WAITER_HPP
#define KFC_WAITER_HPP

#include"MealBuilder.hpp"

class KFCWaiter
{
private:
    MealBuilder* m_builder;
public:
    KFCWaiter(MealBuilder* builder): 
        m_builder(builder){};
    ~KFCWaiter(){
        delete m_builder;
    };

    Meal* construct(string food, string drink, string meal){
        m_builder->build_food(food);
        m_builder->build_drink(drink);
        m_builder->build_meal(meal);

        return m_builder->get_meal();
    };
};

#endif // KFC_WAITER_HPP