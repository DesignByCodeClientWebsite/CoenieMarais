class LongShadow {
    args

    constructor(args) {

        this.args.element = args.element || '.long-shadow'

        this.init()
    }

    init () {
        console.log(this.args)
    }

}

export default LongShadow