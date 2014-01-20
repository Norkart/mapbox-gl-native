#ifndef LLMR_RENDERER_SHADER_OUTLINE
#define LLMR_RENDERER_SHADER_OUTLINE

#include "shader.hpp"

namespace llmr {

class OutlineShader : public Shader {
public:
    OutlineShader();

    int32_t a_pos;
    int32_t u_matrix;
    int32_t u_color;
    int32_t u_world;
};

}

#endif