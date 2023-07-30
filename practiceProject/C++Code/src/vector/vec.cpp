#include<iostream>
#include<vector>
using namespace std;

void print_vector(vector<int>& v);

void vector_test() {
    vector<int> vi;
    for (int i = 0; i < 10; i++){
        // vi.assign(i, i*i);
        vi.push_back(i);
    }

    print_vector(vi);
}

void print_vector(vector<int>& v) {
    for (auto it = v.begin(); it != v.end(); ++it) {
        cout << *it << endl;
    }
}

int main(){
    vector_test();
    return 0;
}