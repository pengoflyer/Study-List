#ifndef PRODUCT_HPP
#define PRODUCT_HPP

#include<iostream>
using namespace std;

// 产品
class product{
public:
    product(){};
    ~product(){};

    void set_A() {
        cout << "product::set_A" << endl;
    };

    void set_B() {
        cout << "product::set_B" << endl;
    };

    void set_C() {
        cout << "product::set_C" << endl;
    };

    void show(){
        cout << "product::show" << endl;
    };
};

#endif // PRODUCT_HPP