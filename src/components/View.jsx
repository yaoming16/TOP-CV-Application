function View({cvData}) {
    return (
        <div>
            <section>
                <h2>{cvData.name} {cvData.lastName}</h2>
                <div>
                    <p>{cvData.email}</p>
                    <p>{cvData.phoneNumber}</p>
                    <p>{cvData.city} {cvData.country}</p>
                </div>
            </section>
        </div>
    )
}

export default View;