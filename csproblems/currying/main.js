
/** @type {Record<string, Record<string, string>>} */
const haskellTypesData = {
    'test': {
        'quicksort': '(Ord a) => [a] -> [a]',
        'smallerSorted': '[a]',
        'biggerSorted': '[a]',
        'xs': '[a]',
        'x': 'a'
    },
    'ex' : {
        'a' : 'a :: Integer',
        '2' : 'Integer',
        'Integer': `Integer :: Type
Arbitrary precision integers. In contrast with fixed-size integral types such as Int , the Integer type represents the entire infinite range of integers.`
    },
    'ex2' : {
        'f': 'f :: Integer -> Integer',
        'x' : 'Integer',
        '*' : '(*) :: Integer -> Integer -> Integer',
        'g': 'g :: Integer -> Integer'
    },
    'ex3' : {
        'f2': 'f2 :: Integer -> Integer -> Integer',
        'x' : 'Integer',
        'y': 'Integer',
        'f' : 'f :: Integer -> Integer',
        'g2' : 'g2 :: Integer -> Integer -> Integer',
        'h2' : 'h2 :: Integer -> Integer -> Integer',
        'z' : 'Integer',
        'partial_f' : 'partial_f :: Integer -> Integer',
        "f2_internal" : "f2_internal :: Integer -> Integer -> Integer"
    },
    'ex4' : {
        'h4': 'h4 :: (Integer -> Integer) -> Integer',
        'a' : 'Integer -> Integer',
        'f' : 'f :: Integer -> Integer'
    },
    'ex5' : {
        'f2' : 'f2 :: (????)',
        'x' : 'Integer',
        'y': 'Integer',

    },
    'ex6' : {
        "f2'" : "f2' :: (Integer,Integer) -> Integer",
        'x' : 'Integer',
        'y': 'Integer',

    },
    'ex7' : {
        'curry' : 'curry :: ((a, b) -> c) -> a -> b -> c',
        'uncurry' : 'uncurry :: (a -> b -> c) -> (a, b) -> c',
        'f2': 'f2 :: Integer -> Integer -> Integer'
    }
};
document.addEventListener('DOMContentLoaded', () => {
    
    // Get all distinct types
    Object.keys(haskellTypesData).forEach(key => attachTypesToBlock(key));
    change_theme();
});

/**
 *
 *
 * @param {String} className
 * @param {String} type
 */
function attachTypesToBlock(type_type) {
    const code_blocks = document.getElementsByClassName('typed');
    // filter by also having class of type type

    /** @type {Array<Element>} */
    let valid_code_blocks = []
    for (let cb of code_blocks) {
        if (cb.classList.contains(`type-${type_type}`)) {
            valid_code_blocks.push(cb);
        }
    }

    if (valid_code_blocks.length == 0) return;

    for (let cb of valid_code_blocks) {
        cb.querySelectorAll('.token').forEach(elem => {
            const token = elem.textContent.trim();
            if (haskellTypesData[type_type][token]) {
                elem.classList.add('type-hover');
                elem.setAttribute('data-type', haskellTypesData[type_type][token])
            }
        })
    }


}



const theme_changer = document.getElementById("theme_changer");
let current_theme = 0; // 0 : Light, 1: Dark
const body = document.body;
function change_theme () {
    current_theme = (current_theme == 0) ? 1 : 0;
    if (current_theme == 0) {
        theme_changer.textContent = "Theme : Light";
        theme_changer.style.color = "black";
        theme_changer.style.backgroundColor = "white";

        body.style.backgroundColor = "white";
        body.style.color = "black";

    } else {
        theme_changer.textContent = "Theme : Dark"
        theme_changer.style.color = "white";
        theme_changer.style.backgroundColor = "black";

        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    console.log("Theme changed!");
    // console.log("TEST");
    
}