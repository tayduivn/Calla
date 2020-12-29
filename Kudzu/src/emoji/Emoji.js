/**
 * Unicode-standardized pictograms.
 **/
export class Emoji {
    /**
     * Creates a new Unicode-standardized pictograms.
     * @param value - a Unicode sequence.
     * @param desc - an English text description of the pictogram.
     * @param props - an optional set of properties to store with the emoji.
     */
    constructor(value, desc, props = null) {
        this.value = value;
        this.desc = desc;
        this.value = value;
        this.desc = desc;
        this.props = props || {};
    }
    /**
     * Determines of the provided Emoji or EmojiGroup is a subset of
     * this emoji.
     */
    contains(e) {
        return this.value.indexOf(e.value) >= 0;
    }
}
/**
 * Shorthand for `new Emoji`, which saves significantly on bundle size.
 * @param v - a Unicode sequence.
 * @param d - an English text description of the pictogram.
 * @param [o] - an optional set of properties to set on the Emoji object.
 */
export function e(v, d, o = null) {
    return new Emoji(v, d, o);
}
//# sourceMappingURL=Emoji.js.map