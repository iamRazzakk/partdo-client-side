

const FAQ = () => {
    return (
        <div>
            <div className="flex">
                <div className="flex-1">
                    <h3>FREQUENTLY ASKED QUESTIONS</h3>
                    <h1>Here Our Most Question</h1>
                    <p>Nam in massa feugiat, varius est ut, molestie purus. Maecenas non turpis in nibh tincidunt posuere. Mauris ligula nunc, pulvinar sit amet tempor a, mattis in libero. Aenean non lectus auctor, aliquet neque a, vestibulum enim. Integer in dui leo. Phasellus sit amet laoreet ex.</p>
                </div>
                <div className="flex-1">
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;