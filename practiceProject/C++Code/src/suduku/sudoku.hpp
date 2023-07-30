#ifndef SUDOKU_CPP
# define SUDOKU_CPP

#include<iostream>
#include<map>
#include<vector>
#include<cstdlib>
#include<cstdio>
#include<ctime>

using namespace std;

enum Pos{
    PosCenterRatio = 3,
    PosMaxLength = 9,
    PosKeyRatio = 10
};

int get_key(int x, int y) {
    return x*PosKeyRatio+y;
}

int get_x(int key) {
    return key/PosKeyRatio;
}

int get_y(int key) {
    return key%PosKeyRatio;
}

struct sudokuval
{
    int val;
    sudokuval(int v=0):val(v){}

    bool equal(sudokuval* sval) {
        return val == sval->val;
    }
};

struct pos
{
    int x;
    int y;

    pos(int key=0){
        x = get_x(key);
        y = get_y(key);
    }

    int get_center_val(int val) {
        return val/Pos::PosCenterRatio*Pos::PosCenterRatio+1;
    }

    void get_center_pos(pos* center) {
        if (!center) {
            cout << "center is nil.." << endl;
            return;
        }
        center->x = get_center_val(this->x);
        center->y = get_center_val(this->y);
    }

    void get_nine_grid_keys(vector<int>& keys) {
        pos center;
        get_center_pos(&center);

        for (x = -1; x <= 1; x++) {
            for (y = -1; y <= 1; y++) {
                keys.push_back(get_key(center.x+x, center.y+y));
                // cout << "get_nine_grid_keys:" << get_key(center.x+x, center.y+y) << endl;
            }
        }
    }

    bool valid() {
        bool x_valid = x >=0 && x < PosMaxLength;
        bool y_valid = y >=0 && y < PosMaxLength;
        return x_valid && y_valid;
    }
};

class sudoku{
private:
    vector<int> m_bkey;
    vector<int> m_curkey;
    map<int, sudokuval*> m_fill;  // key = x*PosKeyRatio+y(x,y始于0)
public:
    sudoku(){
        init_nine_grid();
    }

    ~sudoku(){
        for (auto it = m_fill.begin(); it != m_fill.end(); ++it) {
            delete(it->second);
            it->second = nullptr;
        }
        m_fill.clear();
    }
    
    void init_nine_grid() {
        int ck_arr[9] = {11, 14, 17, 41, 44, 47, 71, 74, 77};
        for (int val = 1; val <= PosMaxLength; val++) {
            for (int i = 0; i < sizeof(ck_arr)/sizeof(ck_arr[0]); i++) {
                pos center_pos(ck_arr[i]);
                vector<int> keys;
                center_pos.get_nine_grid_keys(keys);
                cout << "init_nine_grid:" <<  val << "<->" << i <<  "<->" << keys.size() << endl;
                for(int k = 0; k < keys.size(); k++) {
                    int key = keys.at(k);
                    srand(time(0)+key);
                    int rnum = rand();
                    if (rnum%2 == 0) {
                        key = keys.at(keys.size()-k-1);
                    }
                    if (init_val(key, val)) {
                        break;
                    }
                }
            }
        }
    }


    void print() {
        for (int x = 0; x < PosMaxLength; x++) {
            for (int y = 0; y < PosMaxLength; y++) {
                sudokuval* sval = get_val(get_key(x,y));
                int val = 0;
               
                if (sval != nullptr) {
                    val = sval->val;
                }
                printf("%4d", val);
                if ((y+1)%PosCenterRatio == 0) {
                    printf("  |");
                }
            }
            printf("\n");
            if ((x+1)%PosCenterRatio == 0) {
                printf("---------------------------------------------\n");
            }
        }
    }

    bool val_valid(int val) {
        return val > 0 && val <= PosMaxLength;
    }

    bool set_val(int key, int val) {
        if (!val_valid(val)) {
            return false;
        }

        auto it = m_fill.find(key);
        if (it != m_fill.end()) {
            it->second->val = val;  
        }

        m_fill[key] = new sudokuval(val);
        // cout << key << "<->" << val << endl;
        return is_correct_val(key, val);
    }

    bool init_val(int key, int val) {
        if (!val_valid(val)) {
            return false;
        }

        if (!is_correct_val(key, val)) {
            return false;
        }

        auto it = m_fill.find(key);
        if (it != m_fill.end()) {
            return false;  
        }

        m_fill[key] = new sudokuval(val);
        cout << "init_val:" << key << "<->" << val << endl;
        return true;
    }

    sudokuval* get_val(int key) {
        auto it = m_fill.find(key);
        if (it == m_fill.end()) {
            return nullptr;
        }

        return it->second;
    }

    // 1、x方向值唯一
    bool direct_x_right(int sx, int y, sudokuval* val) {
        for (int x = 0; x < PosMaxLength; x++) {
            if (sx == x) {
                continue;
            }

            int key = get_key(x, y);
            sudokuval* old_val = get_val(key);
            if (old_val != nullptr) {
                if (old_val->equal(val)) {
                    return false;
                }
            }
        }
        return true;
    }

    // 2、y方向值唯一
   bool direct_y_right(int x, int sy, sudokuval* val) {
        for (int y = 0; y < PosMaxLength; y++) {
            if (sy == y) {
                continue;
            }
            int key = get_key(x, y);
            sudokuval* old_val = get_val(key);
            if (old_val != nullptr) {
                if (old_val->equal(val)) {
                    return false;
                }
            }
        }
        return true;
    }

    // 3、九宫格值唯一 
    bool nine_grid_right(int key, sudokuval* val) {
        pos center(key);
        vector<int> keys;
        center.get_nine_grid_keys(keys);

        for (auto it = keys.begin(); it != keys.end(); ++it) {
            int _key = *it;
            if (key == _key) {
                continue;
            }

            sudokuval* old_val = get_val(_key);
            if (old_val == nullptr) {
                continue;
            } 
            if (old_val->equal(val)) {
                return false;
            }
        }
        return true;
    }

    bool key_valid(int key) {
        pos p(key);
        return p.valid();
    }

    bool is_correct_val(int key, int v) {
        sudokuval val(v);
        if (!key_valid(key)) {
            printf("key_valid:%d\n", key);
            return false;
        }

        // 1、x方向值唯一
        if (!direct_x_right(get_x(key), get_y(key), &val)) {
            printf("direct_x_right:%d %d\n", key, val);
            return false;
        }
        // 2、y方向值唯一
        if (!direct_y_right(get_x(key), get_y(key), &val)) {
            printf("direct_y_right:%d %d\n", key, val);
            return false;
        }
        // 3、九宫格值唯一
        if (!nine_grid_right(key, &val)) {
            printf("nine_grid_right:%d %d\n", key, val);
            return false;
        }
        return true;
    }

    // int tip(int key) {
    //     pos p(key);
    // }
};

#endif // SUDOKU_CPP
