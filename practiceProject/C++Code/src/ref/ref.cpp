#include<iostream>
#include<cstdio>
#include<string>

using namespace std;

enum ratio {
    ratio_one = 1,
    ratio_two = 2,
};

struct ref{
    bool    first;
    int     num;
    string  name;

    // 构造函数
    ref(int num, string name, bool first = false){
        this->first = first;
        this->num = num;
        this->name = name;
    }
    // 拷贝构造函数
    ref(ref& r) {
        this->first = r.first;
        this->num = r.num;
        this->name = r.name;
    }
    
    // 析构函数
    ~ref() {
        printf("----------------");
        print();
        cout << "~ref()" << endl;
    }

    void print() {
        printf("num=%d, name=%s\n", this->num, this->name.c_str());
    }
};

void ref_struct_test() {
    ref r(13, "pf");
    r.print();

    ref rf(14,  "wr");
    rf.print();

    ref crf(rf);
    crf.print();
}


// ================================================

void change(int& n) {
    n += 4;
}

void ref_test() {
    int i = 10;
    int& ri  = i;
    change(ri);
    printf("i = %d, ri = %d\n", i, ri);
    
    change(i);
    printf("i = %d, ri = %d\n", i, ri);
}

int main() {
    // ref_test();
    ref_struct_test();
    return 0;
}