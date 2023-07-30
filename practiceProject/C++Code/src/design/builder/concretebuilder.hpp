#ifndef CONCRETE_BUILDER_HPP
#define CONCRETE_BUILDER_HPP

#include<iostream>
#include"product.hpp"
#include"builder.hpp"
using namespace std;

// 具体建造类
class concretebuilderABC: public builder
{
private:
    product* m_product;
public:
    concretebuilderABC(product* pro): m_product(pro){};
    ~concretebuilderABC(){
        delete m_product;
    };

    void build_partA(){
        cout << "concretebuilderABC::build_partA" << endl;
        m_product->set_A();
    };

    void build_partB(){
        cout << "concretebuilderABC::build_partB" << endl;
        m_product->set_B();
    };

    void build_partC(){
        cout << "concretebuilderABC::build_partC" << endl;
        m_product->set_C();
    };

    product* get_product() {
        return m_product;
    };
};

// 具体建造类
class concretebuilderAC: public builder
{
private:
    product* m_product;
public:
    concretebuilderAC(product* pro): m_product(pro){};
    ~concretebuilderAC(){
        delete m_product;
    };

    void build_partA(){
        cout << "concretebuilderAC::build_partA" << endl;
        m_product->set_A();
    };

    void build_partB(){
       
    };

    void build_partC(){
        cout << "concretebuilderAC::build_partC" << endl;
        m_product->set_C();
    };

    product* get_product() {
        return m_product;
    };
};

#endif // CONCRETE_BUILDER_HPP
