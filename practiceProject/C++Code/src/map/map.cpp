#include<iostream>
#include<map>
using namespace std;

void print_map(map<int, int>& m) {
    for (auto it = m.begin(); it != m.end(); ++it) {
        cout << "<" << it->first << ":" << it->second << ">" << endl;
    }
}

void map_test(){
    map<int, int> intMap;
    for (int i = 0; i < 10; i++) {
        intMap[i] = i*i;
    }
    print_map(intMap);
}

int main() {
    map_test();
    return 0;
}