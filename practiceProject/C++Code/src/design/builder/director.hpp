#ifndef DIRECTOR_HPP
#define DIRECTOR_HPP

#include"product.hpp"
#include"builder.hpp"

// 指挥者
class director
{
private:
    builder* m_builder;
public:
    director(){};
    ~director(){
        delete m_builder;
    };

    void init_builder(builder* bld){
        if (!bld) {
            return;
        }

        m_builder = bld;
    };

    void set_builder(builder* bld){
        init_builder(bld);
    };

    product* construct() {
        if (!m_builder) {
            return nullptr;
        }

        m_builder->build_partA();
        m_builder->build_partB();
        m_builder->build_partC();
        
        return m_builder->get_product();
    };
};

#endif // DIRECTOR_HPP
