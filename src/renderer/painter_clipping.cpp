#include <llmr/renderer/painter.hpp>
#include <llmr/renderer/fill_bucket.hpp>
#include <llmr/map/map.hpp>
#include <llmr/map/source.hpp>
#include <llmr/util/clip_ids.hpp>

using namespace llmr;

void Painter::drawClippingMasks(const Sources &sources) {
    gl::group group("clipping masks");

    useProgram(plainShader->program);
    glDisable(GL_DEPTH_TEST);
    depthMask(false);
    glDepthRange(1.0f, 1.0f);
    glStencilMask(0xFF);

    const BackgroundProperties &properties = map.getStyle()->computed.background;
    Color background = properties.color;
    const float opacity = properties.opacity;
    background[0] *= opacity;
    background[1] *= opacity;
    background[2] *= opacity;
    background[3] *= opacity;
    plainShader->setColor(background);

    coveringPlainArray.bind(*plainShader, tileStencilBuffer, BUFFER_OFFSET(0));

    for (const auto &pair : sources) {
        Source &source = *pair.second;
        if (source.enabled) {
            source.drawClippingMasks();
        }
    }

    glEnable(GL_DEPTH_TEST);
    depthMask(true);
    glStencilMask(0x0);
}

void Painter::drawClippingMask(const mat4& matrix, const ClipID &clip) {
    plainShader->setMatrix(matrix);

    GLint id = static_cast<GLint>(clip.mask.to_ulong());
    GLuint mask = clipMask[clip.length];
    glStencilFunc(GL_ALWAYS, id, mask);

    glDrawArrays(GL_TRIANGLES, 0, (GLsizei)tileStencilBuffer.index());
}
