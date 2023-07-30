#ifndef BUILDER_HPP
#define BUILDER_HPP

// 抽象建造接口
class builder
{
public:
    virtual ~builder(){};
    virtual void build_partA(){};
    virtual void build_partB(){};
    virtual void build_partC(){};
    
    virtual product* get_product(){ return nullptr; };
};

#endif // BUILDER_HPP




