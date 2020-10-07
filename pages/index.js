const paragraphs = [
  "We provide unmatched quality, comfort, and style for property owners across the country.\n" +
  "  Our experts combine form andnfunction in bringing your vision to life. Create a room in your\n" +
  "  own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business.\n" +
  "  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our\n" +
  "  store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology\n" +
  "  to ensure that every product is made as perfect and as consistent as possible. With three decades of\n" +
  "  experience in this industry, we understand what customers want for their home and office."
]

const titles = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
]

export default class Home extends React.Component{

  constructor(props) {
    super(props);
    this.page = 1;
    this.state = {
      page: 1,
    };
  }

  prevPage() {
    this.page === 1 ? this.page = 3 : this.page--;
    this.setState({page: this.page});

    document.getElementById('top-left-section').style.backgroundImage = "url('./images/desktop-image-hero-" + this.page + ".jpg')";
    document.getElementById('title').innerText = titles[this.page - 1];
    document.getElementById('paragraph').innerText = paragraphs[this.page - 1];
  }

  nextPage() {
    this.page === 3 ? this.page = 1 : this.page++;
    this.setState({page: this.page});

    document.getElementById('top-left-section').style.backgroundImage = "url('./images/desktop-image-hero-" + this.page + ".jpg')";
    document.getElementById('title').innerText = titles[this.page - 1];
    document.getElementById('paragraph').innerText = paragraphs[this.page - 1];
  }

  render() {
    return (
        <div>
          <div className="row">
            <div id="top-left-section" className="top-left-section">
              <div className="row nav-bar">
                <div className="heading">room</div>
                <div className="nav-items">home
                  <hr/>
                </div>
                <div className="nav-items">shop
                  <hr/>
                </div>
                <div className="nav-items">about
                  <hr/>
                </div>
                <div className="nav-items">contact
                  <hr/>
                </div>
              </div>
            </div>
            <div className="top-right-section">
              <div className="center-top">
                <h2 id="title">Discover innovative ways to decorate</h2>
                <p id="paragraph">
                  We provide unmatched quality, comfort, and style for property owners across the country.
                  Our experts combine form andnfunction in bringing your vision to life. Create a room in your
                  own style with our collection and make your property a reflection of you and what you love.
                </p>
                <div className="shop">
                  <span>Shop now</span>
                  <img className="arrow-right" src="images/icon-arrow.svg"/>
                </div>
              </div>
              <div className="row arrow-container">
                <div className="arrow" onClick={this.prevPage.bind(this)}>
                  <img src="images/icon-angle-left.svg"/>
                </div>
                <div className="arrow" onClick={this.nextPage.bind(this)}>
                  <img src="images/icon-angle-right.svg"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="bottom-left-section">
            </div>
            <div className="bottom-middle-section">
              <div className="center-bottom">
                <h3>About our furniture</h3>
                <p>
                  Our multifunctional collection blends design and function to suit your individual taste.
                  Make each room unique, or pick a cohesive theme that best express your interests and what
                  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                  or anything in between. Product specialists are available to help you create your dream space.
                </p>
              </div>
            </div>
            <div className="bottom-right-section">
            </div>
          </div>
        </div>
    )
  }
}
