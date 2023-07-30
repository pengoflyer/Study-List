print("Hello Lua...")


function Test_If()
    if 1 > 2 then
        print("1 < 2 ")
    elseif 1 == 1 then
        print("1 == 1")
    end
end

-- Test_If()

function Test_For()
    for i = 1, 10, 1 do
        print("i:", i)
    end
    local array = {1,2,3,4,5,6,7,8,9}
    print("ipairs:-----------------")
    for index, value in ipairs(array) do
        print(index, value)
    end

    print("pairs:-----------------")
    for key, value in pairs(array) do
        print(key, value)
    end
end

-- Test_For()


function Test_String_Format()
    local str = string.format("%02d", 1)
    print(str)
end

Test_String_Format()