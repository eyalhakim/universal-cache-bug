export class Utilities {
    static convertNewLineToBr(text: string) {
        return text ? text.replace(new RegExp('\n', 'g'), '<br />') : text;
    }

    static isMobile() {
        return ("ontouchstart" in document.documentElement);
    }
}