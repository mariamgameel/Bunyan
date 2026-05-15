import CardStatus from "../../ui/CardStatus/CardStatus";
function Status() {
    return (
        <section className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <CardStatus counter="120" title="Projects" icon={<i className="fa-solid fa-building"></i>} />
                    </div>
                    <div className="col-12 col-md-3">
                        <CardStatus counter="150" title="Users" icon={<i class="fa-solid fa-users"></i>} />
                    </div>
                    <div className="col-12 col-md-3">
                        <CardStatus counter="200" title="Developers" icon={<i class="fa-solid fa-users"></i>} />
                    </div>
                    <div className="col-12 col-md-3">
                        <CardStatus counter="50" title="Blogs" icon={<i class="fa-solid fa-blog"></i>} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Status;