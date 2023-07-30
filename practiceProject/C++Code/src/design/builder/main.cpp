#include<iostream>
#include"product.hpp"
#include"concretebuilder.hpp"
#include"director.hpp"

using namespace std;

int main() {
    cout << "==============concretebuilderABC=======================" << endl;
    product* pro_abc = new product();
    concretebuilderABC* builder_abc = new concretebuilderABC(pro_abc);
   
    director drc_abc;
    drc_abc.set_builder(builder_abc);
    pro_abc = drc_abc.construct();
    pro_abc->show();

    cout << "==============concretebuilderAC=======================" << endl;
    product* pro_ac = new product();
    concretebuilderAC* builder_ac = new concretebuilderAC(pro_ac);
    
    director drc_ac;
    drc_ac.set_builder(builder_ac);
    pro_ac = drc_ac.construct();
    pro_ac->show();

    return 0;
}