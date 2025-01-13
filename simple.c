#include "emscripten.h"

EMSCRIPTEN_KEEPALIVE

int addNumbers(int a, int b) {
        return a + b;
}