#ifndef llmr_util_vec2_
#define llmr_util_vec2_

namespace llmr {

template <typename T = double>
struct vec2 {
    T x, y;

    inline vec2() {}
    inline vec2(const vec2& o) : x(o.x), y(o.y) {}
    inline vec2(T x, T y) : x(x), y(y) {}
    inline bool operator==(const vec2& rhs) const {
        return x == rhs.x && y == rhs.y;
    }
};

template <typename T = double>
struct vec3 {
    T x, y, z;

    inline vec3() {}
    inline vec3(const vec3& o) : x(o.x), y(o.y), z(o.z) {}
    inline vec3(T x, T y, T z) : x(x), y(y), z(z) {}
    inline bool operator==(const vec3& rhs) const {
        return x == rhs.x && y == rhs.y && z == rhs.z;
    }
};

template <typename T = double>
struct vec4 {
    T x, y, z, w;

    inline vec4() {}
    inline vec4(const vec4& o) : x(o.x), y(o.y), z(o.z), w(o.w) {}
    inline vec4(T x, T y, T z, T w) : x(x), y(y), z(z), w(w) {}
    inline bool operator==(const vec4& rhs) const {
        return x == rhs.x && y == rhs.y && z == rhs.z && w == rhs.w;
    }
};


struct box {
    vec2<double> tl, tr, bl, br;
};

}

#endif