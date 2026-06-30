import { useState, useEffect } from 'react'

const questionBank = {
  'class8-science': [
    { question: "Which type of fabric absorbs less water and dries faster?", options: ["Cotton", "Wool", "Synthetic", "Silk"], answer: "Synthetic" },
    { question: "Why are synthetic fibers preferred for raincoats?", options: ["They are cheaper", "They absorb less water", "They are heavier", "They are natural"], answer: "They absorb less water" },
    { question: "What is formed when magnesium burns in air?", options: ["Magnesium chloride", "Magnesium oxide", "Magnesium sulfate", "Magnesium nitrate"], answer: "Magnesium oxide" },
    { question: "What color flame does magnesium burn with?", options: ["Red", "Blue", "Bright white", "Yellow"], answer: "Bright white" },
    { question: "What are the unburnt carbon particles in a flame called?", options: ["Ash", "Soot", "Smoke", "Dust"], answer: "Soot" },
    { question: "Which zone of a flame contains unburnt carbon particles?", options: ["Dark zone", "Outer zone", "Luminous zone", "Inner zone"], answer: "Luminous zone" },
    { question: "How does heat travel along a metal wire?", options: ["Radiation", "Convection", "Conduction", "Reflection"], answer: "Conduction" },
    { question: "Why does wet filter paper not catch fire easily?", options: ["It is too thick", "Water increases ignition temperature", "It has no carbon", "It reflects heat"], answer: "Water increases ignition temperature" },
    { question: "What happens when like poles of magnets are brought together?", options: ["They attract", "They repel", "Nothing happens", "They stick"], answer: "They repel" },
    { question: "What happens when opposite poles of magnets are brought together?", options: ["They repel", "Nothing happens", "They attract", "They explode"], answer: "They attract" },
    { question: "How does water pressure change with depth?", options: ["Decreases", "Stays the same", "Increases", "Becomes zero"], answer: "Increases" },
    { question: "Which surface creates more friction?", options: ["Glass", "Plastic", "Sandpaper", "Ice"], answer: "Sandpaper" },
    { question: "What do ball bearings do to friction?", options: ["Increase it", "Eliminate it completely", "Reduce it", "Double it"], answer: "Reduce it" },
    { question: "What causes a tuning fork to produce sound?", options: ["Heat", "Light", "Vibration", "Pressure"], answer: "Vibration" },
    { question: "What type of wave is formed when a slinky is pushed and pulled?", options: ["Transverse", "Longitudinal", "Electromagnetic", "Surface"], answer: "Longitudinal" },
    { question: "What type of wave is formed when a slinky is moved side to side?", options: ["Longitudinal", "Transverse", "Sound", "Radio"], answer: "Transverse" },
    { question: "What does the First Law of Reflection state?", options: ["Angle of incidence equals angle of reflection", "Light travels in curves", "Reflection depends on color", "Light slows down on reflection"], answer: "Angle of incidence equals angle of reflection" },
    { question: "What happens to the number of images as the angle between two mirrors decreases?", options: ["Decreases", "Stays the same", "Increases", "Becomes zero"], answer: "Increases" },
    { question: "What optical device uses multiple reflections to create symmetrical patterns?", options: ["Telescope", "Microscope", "Kaleidoscope", "Periscope"], answer: "Kaleidoscope" },
    { question: "What does a smooth surface do to friction?", options: ["Increases friction", "Creates more resistance", "Reduces friction", "Has no effect"], answer: "Reduces friction" },
    { question: "Which material is flammable?", options: ["Iron", "Copper", "Aluminum", "Paper"], answer: "Paper" },
    { question: "What do lower holes in a water container demonstrate?", options: ["Less pressure", "Greater pressure and stronger flow", "Same pressure", "No flow"], answer: "Greater pressure and stronger flow" },
    { question: "Why are metals good conductors of heat?", options: ["They are heavy", "They have free electrons", "They are shiny", "They are hard"], answer: "They have free electrons" },
    { question: "Why is magnesium ribbon cleaned with sandpaper before burning?", options: ["To make it longer", "To remove the oxide layer", "To make it shine", "To increase weight"], answer: "To remove the oxide layer" },
    { question: "What practical device uses the law of reflection?", options: ["Battery", "Thermometer", "Periscope", "Compass"], answer: "Periscope" },
  ],
  'class8-math': [
    { question: "What is the sum of interior angles of any triangle?", options: ["90°", "180°", "270°", "360°"], answer: "180°" },
    { question: "What is the sum of interior angles of any quadrilateral?", options: ["180°", "270°", "360°", "450°"], answer: "360°" },
    { question: "What does (a + b)² expand to?", options: ["a² + b²", "a² + ab + b²", "a² + 2ab + b²", "2a² + 2b²"], answer: "a² + 2ab + b²" },
    { question: "What does (a² - b²) factor into?", options: ["(a-b)²", "(a+b)(a-b)", "(a+b)²", "(a-b)(a-b)"], answer: "(a+b)(a-b)" },
    { question: "What is the probability of getting heads on a fair coin toss?", options: ["1/4", "1/3", "1/2", "2/3"], answer: "1/2" },
    { question: "What is the sum of all probabilities in a probability distribution?", options: ["0", "0.5", "1", "2"], answer: "1" },
    { question: "In coordinate geometry, what does the x-axis represent?", options: ["Vertical axis", "Horizontal axis", "Diagonal axis", "Circular axis"], answer: "Horizontal axis" },
    { question: "What is the expanded form of (x + y)³?", options: ["x³ + y³", "x³ + 3x²y + 3xy² + y³", "x³ + 2xy + y³", "3x³ + 3y³"], answer: "x³ + 3x²y + 3xy² + y³" },
    { question: "How many faces does a cube have?", options: ["4", "5", "6", "8"], answer: "6" },
    { question: "What is a net of a 3D shape?", options: ["A 3D model", "A 2D layout of all faces", "A graph of the shape", "A shadow of the shape"], answer: "A 2D layout of all faces" },
    { question: "What is the value of x in: x + 5 = 12?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "In a bar graph, what must be true about the width of bars?", options: ["Different widths", "Equal width", "Increasing width", "Decreasing width"], answer: "Equal width" },
    { question: "What does a line graph best show?", options: ["Categories", "Changes over time", "Proportions", "Frequency"], answer: "Changes over time" },
    { question: "What is the product of (x + a)(x + b)?", options: ["x² + ab", "x² + (a+b)x + ab", "x² + ax + b", "x² + abx"], answer: "x² + (a+b)x + ab" },
    { question: "What does experimental probability mean?", options: ["Calculated from theory", "Based on actual trials", "Always equals 0.5", "Based on guessing"], answer: "Based on actual trials" },
    { question: "In algebra tiles, what shape represents x²?", options: ["Rectangle", "Triangle", "Square", "Circle"], answer: "Square" },
    { question: "What is the degree of a polynomial with highest power 2?", options: ["0", "1", "2", "3"], answer: "2" },
    { question: "How many vertices does a quadrilateral have?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "What type of relationship does a straight line on a graph show?", options: ["Exponential", "Quadratic", "Linear", "Circular"], answer: "Linear" },
    { question: "What is the value of x in: 2x = 14?", options: ["5", "6", "7", "8"], answer: "7" },
  ],
  'class9-science': [
    { question: "Why are gases more compressible than liquids?", options: ["Gases are lighter", "Gases have larger spaces between particles", "Gases are hotter", "Gases have smaller particles"], answer: "Gases have larger spaces between particles" },
    { question: "What is sublimation?", options: ["Liquid to gas", "Solid directly to gas", "Gas to liquid", "Solid to liquid"], answer: "Solid directly to gas" },
    { question: "Which substance is a common example of sublimation?", options: ["Ice", "Salt", "Camphor", "Sugar"], answer: "Camphor" },
    { question: "What does a saturated NaCl solution have compared to pure water?", options: ["Lower boiling point", "Same boiling point", "Higher boiling point", "No boiling point"], answer: "Higher boiling point" },
    { question: "What is the Tyndall effect?", options: ["Absorption of light", "Scattering of light by colloidal solutions", "Reflection of light", "Refraction of light"], answer: "Scattering of light by colloidal solutions" },
    { question: "What do atoms combine to form?", options: ["Elements", "Molecules", "Compounds only", "Mixtures"], answer: "Molecules" },
    { question: "What determines an atom's chemical properties?", options: ["Neutrons", "Protons", "Valence electrons", "Mass number"], answer: "Valence electrons" },
    { question: "What shape are plant cells typically?", options: ["Circular", "Irregular", "Rectangular", "Triangular"], answer: "Rectangular" },
    { question: "What is osmosis?", options: ["Movement of solutes", "Movement of water through a membrane due to concentration gradient", "Movement of gases", "Movement of heat"], answer: "Movement of water through a membrane due to concentration gradient" },
    { question: "What happens to potato cells in saltwater?", options: ["They gain water", "They stay the same", "They lose water", "They dissolve"], answer: "They lose water" },
    { question: "What type of cells have thick walls for structural support in plants?", options: ["Parenchyma", "Sclerenchyma", "Nerve cells", "Blood cells"], answer: "Sclerenchyma" },
    { question: "What keeps a ball moving in a circular path?", options: ["Gravitational force", "Centripetal force", "Magnetic force", "Friction"], answer: "Centripetal force" },
    { question: "What happens to a ball when its thread in circular motion is released?", options: ["It stops immediately", "It moves in a circle", "It moves in a straight line", "It falls down"], answer: "It moves in a straight line" },
    { question: "What does Newton's First Law state?", options: ["F = ma", "Every action has equal reaction", "Object at rest stays at rest unless acted upon", "Gravity pulls objects down"], answer: "Object at rest stays at rest unless acted upon" },
    { question: "What does Newton's Third Law state?", options: ["F = ma", "Objects fall at same rate", "Every action has an equal and opposite reaction", "Inertia resists motion"], answer: "Every action has an equal and opposite reaction" },
    { question: "What is the formula for gravitational force?", options: ["F = mv", "F = ma", "F = mg", "F = mgh"], answer: "F = mg" },
    { question: "In free fall ignoring air resistance, how do heavy and light objects fall?", options: ["Heavy falls faster", "Light falls faster", "Both fall at same rate", "Neither falls"], answer: "Both fall at same rate" },
    { question: "How is density calculated?", options: ["Mass x Volume", "Mass / Volume", "Volume / Mass", "Mass + Volume"], answer: "Mass / Volume" },
    { question: "What is work calculated as?", options: ["Force + Distance", "Force x Time", "Force x Distance", "Mass x Speed"], answer: "Force x Distance" },
    { question: "At which point of a pendulum is potential energy maximum?", options: ["At the bottom", "At the middle", "At the highest point", "At all points equally"], answer: "At the highest point" },
    { question: "What happens to sound in a vacuum?", options: ["Travels faster", "Travels slower", "Cannot travel", "Travels at light speed"], answer: "Cannot travel" },
    { question: "In which medium does sound travel fastest?", options: ["Gas", "Liquid", "Vacuum", "Solid"], answer: "Solid" },
    { question: "What is an echo?", options: ["Original sound", "Absorbed sound", "Reflected sound heard after delay", "Louder sound"], answer: "Reflected sound heard after delay" },
    { question: "What type of cells transmit signals in the body?", options: ["Muscle cells", "Nerve cells", "Blood cells", "Skin cells"], answer: "Nerve cells" },
    { question: "What does rubbing a comb with cloth generate?", options: ["Heat only", "Magnetic force", "Static electricity", "Sound waves"], answer: "Static electricity" },
  ],
  'class9-math': [
    { question: "What is the sum of angles in any triangle?", options: ["90°", "180°", "270°", "360°"], answer: "180°" },
    { question: "What is the sum of interior angles of a quadrilateral?", options: ["180°", "270°", "360°", "540°"], answer: "360°" },
    { question: "What is the expanded form of (x + y + z)²?", options: ["x² + y² + z²", "x² + y² + z² + 2xy + 2yz + 2xz", "x² + y² + z² + xy + yz", "2x² + 2y² + 2z²"], answer: "x² + y² + z² + 2xy + 2yz + 2xz" },
    { question: "What is the curved surface area of a cylinder?", options: ["πr²h", "2πrh", "2πr²", "πrh"], answer: "2πrh" },
    { question: "What is the total surface area of a cube with side a?", options: ["4a²", "5a²", "6a²", "8a²"], answer: "6a²" },
    { question: "What is the volume relationship between cylinder and cone with same base and height?", options: ["Equal volumes", "Cylinder is twice cone", "Cylinder is three times cone", "Cone is twice cylinder"], answer: "Cylinder is three times cone" },
    { question: "What is the volume of a cone?", options: ["πr²h", "2πr²h", "⅓πr²h", "½πr²h"], answer: "⅓πr²h" },
    { question: "What is the curved surface area of a cone?", options: ["πrl", "2πrl", "πr²l", "2πr²"], answer: "πrl" },
    { question: "What is the remainder theorem used for?", options: ["Finding factors", "Finding remainder when dividing polynomials", "Multiplying polynomials", "Graphing polynomials"], answer: "Finding remainder when dividing polynomials" },
    { question: "If (x + 2) is a factor, what is the remainder when divided by (x + 2)?", options: ["1", "2", "0", "-2"], answer: "0" },
    { question: "What does a coordinate grid help us do?", options: ["Measure angles", "Plot points representing values", "Calculate area", "Find volume"], answer: "Plot points representing values" },
    { question: "What is the expanded form of (x + y)³?", options: ["x³ + y³", "x³ + 3x²y + 3xy² + y³", "x³ + 2x²y + 2xy² + y³", "3x³ + 3y³"], answer: "x³ + 3x²y + 3xy² + y³" },
    { question: "What is the total surface area of a cylinder?", options: ["2πrh", "πr²h", "2πr(h+r)", "πr(h+r)"], answer: "2πr(h+r)" },
    { question: "What is the total surface area of a cone?", options: ["πrl", "πr(l+r)", "2πrl", "2πr(l+r)"], answer: "πr(l+r)" },
    { question: "What is the surface area formula for a cuboid?", options: ["lb + bh + lh", "2(lb + bh + lh)", "2lb + bh", "lbh"], answer: "2(lb + bh + lh)" },
    { question: "In coordinate geometry, what is the y-axis?", options: ["Horizontal axis", "Diagonal axis", "Vertical axis", "Circular axis"], answer: "Vertical axis" },
    { question: "What type of relationship does a straight line graph show?", options: ["Quadratic", "Exponential", "Linear", "Cubic"], answer: "Linear" },
    { question: "What is a polynomial of degree 1 called?", options: ["Constant", "Linear", "Quadratic", "Cubic"], answer: "Linear" },
    { question: "What is a polynomial of degree 2 called?", options: ["Linear", "Constant", "Cubic", "Quadratic"], answer: "Quadratic" },
    { question: "What does factorizing a polynomial mean?", options: ["Adding polynomials", "Breaking it into simpler expressions multiplied together", "Dividing by a constant", "Squaring the polynomial"], answer: "Breaking it into simpler expressions multiplied together" },
  ]
}

const subjects = {
  'class8': [
    { id: 'class8-science', name: 'Science', emoji: '🔬', desc: 'Fibres, combustion, force, friction, sound and light', color: '#6366f1', questions: 25 },
    { id: 'class8-math', name: 'Mathematics', emoji: '🔢', desc: 'Equations, quadrilaterals, algebra and data handling', color: '#a855f7', questions: 20 },
  ],
  'class9': [
    { id: 'class9-science', name: 'Science', emoji: '⚗️', desc: 'Matter, atoms, cells, motion, force and sound', color: '#06b6d4', questions: 25 },
    { id: 'class9-math', name: 'Mathematics', emoji: '📐', desc: 'Polynomials, geometry, surface areas and volumes', color: '#10b981', questions: 20 },
  ]
}

const letters = ['A', 'B', 'C', 'D']
const TIME_PER_QUESTION = 20
const QUESTIONS_PER_QUIZ = 10

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function getRandom(arr, n) { return shuffle(arr).slice(0, n) }
function shuffleOptions(q) { return { ...q, options: shuffle(q.options) } }

function getEmoji(score, total) {
  const p = (score / total) * 100
  if (p === 100) return '🏆'
  if (p >= 80) return '🎉'
  if (p >= 60) return '😊'
  if (p >= 40) return '😅'
  return '💪'
}

function getMessage(score, total) {
  const p = (score / total) * 100
  if (p === 100) return 'Perfect score! Incredible!'
  if (p >= 80) return 'Amazing work, well done!'
  if (p >= 60) return 'Good job, keep it up!'
  if (p >= 40) return 'Not bad, keep practicing!'
  return 'Keep going, you will get there!'
}

function getInitials(name) {
  if (!name) return 'U'
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
}

export default function App() {
  const [page, setPage] = useState('signin')
  const [user, setUser] = useState(null)
  const [selectedClass, setSelectedClass] = useState(null)
  const [quizCategory, setQuizCategory] = useState(null)
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)

  // Auth form state
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '' })

  useEffect(() => {
    if (page !== 'quiz' || selected) return
    if (timeLeft === 0) {
      setSelected('__timeout__')
      setTimeout(() => goNext(), 1000)
      return
    }
    const t = setTimeout(() => setTimeLeft(x => x - 1), 1000)
    return () => clearTimeout(t)
  }, [timeLeft, page, selected])

  function handleSignUp(e) {
  e.preventDefault()
  const existing = JSON.parse(localStorage.getItem('prastuti_users') || '[]')
  const alreadyExists = existing.find(u => u.email === authForm.email)
  if (alreadyExists) {
    alert('An account with this email already exists. Please sign in.')
    setPage('signin')
    return
  }
  const newUser = { name: authForm.name, email: authForm.email, password: authForm.password }
  localStorage.setItem('prastuti_users', JSON.stringify([...existing, newUser]))
  alert('Account created! Please sign in.')
  setAuthForm({ name: '', email: '', password: '' })
  setPage('signin')
}

function handleSignIn(e) {
  e.preventDefault()
  const existing = JSON.parse(localStorage.getItem('prastuti_users') || '[]')
  const found = existing.find(
    u => u.email === authForm.email && u.password === authForm.password
  )
  if (!found) {
    alert('Invalid email or password. Please sign up first if you don\'t have an account.')
    return
  }
  setUser({ name: found.name, email: found.email })
  setPage('home')
}

  function startQuiz(catId) {
    const raw = getRandom(questionBank[catId], QUESTIONS_PER_QUIZ)
    const shuffled = raw.map(shuffleOptions)
    setQuestions(shuffled)
    setQuizCategory(catId)
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setTimeLeft(TIME_PER_QUESTION)
    setPage('quiz')
  }

  function handleAnswer(option) {
    if (selected) return
    setSelected(option)
    if (option === questions[current].answer) setScore(s => s + 1)
    setTimeout(() => goNext(), 1000)
  }

  function goNext() {
    setSelected(null)
    setTimeLeft(TIME_PER_QUESTION)
    if (current + 1 < questions.length) {
      setCurrent(c => c + 1)
    } else {
      setPage('result')
    }
  }

  function goHome() {
    setPage('home')
    setSelectedClass(null)
    setQuizCategory(null)
    setQuestions([])
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setTimeLeft(TIME_PER_QUESTION)
  }

  const timerPercent = (timeLeft / TIME_PER_QUESTION) * 100
  const timerColor = timeLeft > 15 ? '#6366f1' : timeLeft > 10 ? '#f59e0b' : '#ef4444'
  const activeCat = quizCategory ? [...subjects.class8, ...subjects.class9].find(s => s.id === quizCategory) : null

  // ── SIGN IN ──
  if (page === 'signin') return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-logo">🧠</div>
        <h2>Welcome back</h2>
        <p>Sign in to continue to Prastuti Quiz</p>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label className="form-label">Your name</label>
            <input className="form-input" type="text" placeholder="Enter your name"
              value={authForm.name}
              onChange={e => setAuthForm({ ...authForm, name: e.target.value })}
              required />
          </div>
          <div className="form-group">
            <label className="form-label">Email address</label>
            <input className="form-input" type="email" placeholder="you@example.com"
              value={authForm.email}
              onChange={e => setAuthForm({ ...authForm, email: e.target.value })}
              required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" type="password" placeholder="Enter password"
              value={authForm.password}
              onChange={e => setAuthForm({ ...authForm, password: e.target.value })}
              required />
          </div>
          <button type="submit" className="btn-primary" style={{ marginTop: 8 }}>
            Sign In →
          </button>
        </form>
        <p className="auth-divider">
          Don't have an account? <span onClick={() => setPage('signup')}>Sign Up</span>
        </p>
      </div>
    </div>
  )

  // ── SIGN UP ──
  if (page === 'signup') return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-logo">🧠</div>
        <h2>Create account</h2>
        <p>Join Prastuti and start your quiz journey</p>
        <form onSubmit={handleSignUp}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First name</label>
              <input className="form-input" type="text" placeholder="First name"
                value={authForm.name}
                onChange={e => setAuthForm({ ...authForm, name: e.target.value })}
                required />
            </div>
            <div className="form-group">
              <label className="form-label">Last name</label>
              <input className="form-input" type="text" placeholder="Last name" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email address</label>
            <input className="form-input" type="email" placeholder="you@example.com"
              value={authForm.email}
              onChange={e => setAuthForm({ ...authForm, email: e.target.value })}
              required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" type="password" placeholder="Create a password"
              value={authForm.password}
              onChange={e => setAuthForm({ ...authForm, password: e.target.value })}
              required />
          </div>
          <button type="submit" className="btn-primary" style={{ marginTop: 8 }}>
            Create Account →
          </button>
        </form>
        <p className="auth-divider">
          Already have an account? <span onClick={() => setPage('signin')}>Sign In</span>
        </p>
      </div>
    </div>
  )

  // ── NAVBAR (shared) ──
  const Navbar = () => (
    <nav className="navbar">
      <div className="navbar-brand" style={{ cursor: 'pointer' }} onClick={goHome}>
        <div className="navbar-logo">🧠</div>
        <div>
          <div className="navbar-title">Prastuti</div>
          <div className="navbar-subtitle">Quiz Platform</div>
        </div>
      </div>
      <div className="navbar-right">
        <button className="nav-btn nav-btn-outline" onClick={() => setPage('signin')}>Sign Out</button>
        <div className="avatar">{getInitials(user?.name)}</div>
      </div>
    </nav>
  )

  // ── HOME ──
  if (page === 'home') return (
    <>
      <Navbar />
      <div className="page">
        <div className="welcome-banner">
          <h1>Hello, {user?.name?.split(' ')[0]} 👋</h1>
          <p>Ready to test your knowledge? Pick a class to get started.</p>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#f0f0ff' }}>📝</div>
            <div className="stat-value">90</div>
            <div className="stat-label">Total Questions</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#fff0f9' }}>📚</div>
            <div className="stat-value">4</div>
            <div className="stat-label">Subjects</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#f0fdf4' }}>⏱️</div>
            <div className="stat-value">20s</div>
            <div className="stat-label">Per Question</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#fff7ed' }}>🎯</div>
            <div className="stat-value">10</div>
            <div className="stat-label">Questions per Quiz</div>
          </div>
        </div>

        <p className="section-heading">Select your Class</p>
        <p className="section-sub">Choose a class to explore subjects and start your quiz</p>

        <div className="class-grid">
          <button className="class-card" onClick={() => { setSelectedClass('class8'); setPage('subjects') }}>
            <div className="class-card-banner class-card-banner-8">
              <div className="class-card-icon">📗</div>
              <div className="class-card-pills">
                <span className="class-pill">2 Subjects</span>
                <span className="class-pill">45 Questions</span>
              </div>
              <div className="class-card-arrow">→</div>
            </div>
            <div className="class-card-body">
              <div className="class-card-title">Class 8</div>
              <div className="class-card-desc">Science and Mathematics curriculum with chapter-wise questions</div>
            </div>
          </button>

          <button className="class-card" onClick={() => { setSelectedClass('class9'); setPage('subjects') }}>
            <div className="class-card-banner class-card-banner-9">
              <div className="class-card-icon">📙</div>
              <div className="class-card-pills">
                <span className="class-pill">2 Subjects</span>
                <span className="class-pill">45 Questions</span>
              </div>
              <div className="class-card-arrow">→</div>
            </div>
            <div className="class-card-body">
              <div className="class-card-title">Class 9</div>
              <div className="class-card-desc">Science and Mathematics curriculum with chapter-wise questions</div>
            </div>
          </button>
        </div>
      </div>
    </>
  )

  // ── SUBJECTS ──
  if (page === 'subjects') return (
    <>
      <Navbar />
      <div className="page">
        <button className="back-btn" onClick={() => setPage('home')}>← Back to Home</button>
        <p className="section-heading">
          {selectedClass === 'class8' ? '📗 Class 8' : '📙 Class 9'} — Select Subject
        </p>
        <p className="section-sub">Choose a subject to start your 10-question quiz</p>
        <div className="subject-grid">
          {subjects[selectedClass].map(subj => (
            <button
              key={subj.id}
              className="subject-card"
              style={{ '--subj-color': subj.color }}
              onClick={() => startQuiz(subj.id)}
            >
              <div className="subject-icon" style={{ background: subj.color + '18' }}>
                {subj.emoji}
              </div>
              <div>
                <div className="subject-name">{subj.name}</div>
                <div className="subject-desc">{subj.desc}</div>
              </div>
              <div className="subject-meta">{subj.questions} questions · 10 random per quiz →</div>
            </button>
          ))}
        </div>
      </div>
    </>
  )

  // ── QUIZ ──
  if (page === 'quiz') {
    const q = questions[current]
    const progress = (current / questions.length) * 100
    return (
      <>
        <Navbar />
        <div className="quiz-wrapper">
          <button className="back-btn" onClick={goHome}>← Exit Quiz</button>
          <div className="quiz-card">
            <div className="quiz-header">
              <span className="question-counter">
                {activeCat?.emoji} {activeCat?.name} · Question {current + 1}/{questions.length}
              </span>
              <span className="score-badge">⭐ {score} pts</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>

            <div className="timer-row">
              <div className="timer-bar">
                <div className="timer-fill" style={{
                  width: `${timerPercent}%`,
                  background: timerColor,
                  transition: 'width 1s linear, background 0.3s'
                }} />
              </div>
              <span className="timer-number" style={{ color: timerColor }}>{timeLeft}s</span>
            </div>

            <p className="question-text">{q.question}</p>

            <div className="options">
              {q.options.map((option, i) => {
                let cls = 'option-btn'
                if (selected) {
                  if (option === q.answer) cls += ' correct'
                  else if (option === selected) cls += ' wrong'
                  else cls += ' disabled'
                }
                return (
                  <button key={i} className={cls} onClick={() => handleAnswer(option)}>
                    <span className="option-letter">{letters[i]}</span>
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </>
    )
  }

  // ── RESULT ──
  if (page === 'result') return (
    <>
      <Navbar />
      <div className="quiz-wrapper">
        <div className="result-card">
          <span className="result-emoji">{getEmoji(score, questions.length)}</span>
          <h1>{getMessage(score, questions.length)}</h1>
          <p>{activeCat?.emoji} {activeCat?.name} · {questions.length} questions completed</p>
          <div className="score-circle">
            <span className="score-number">{score}/{questions.length}</span>
            <span className="score-label">SCORE</span>
          </div>
          <div className="result-stats">
            <div className="result-stat">
              <span className="result-stat-value">✅ {score}</span>
              <span className="result-stat-label">Correct</span>
            </div>
            <div className="result-stat">
              <span className="result-stat-value">❌ {questions.length - score}</span>
              <span className="result-stat-label">Wrong</span>
            </div>
            <div className="result-stat">
              <span className="result-stat-value">🎯 {Math.round((score / questions.length) * 100)}%</span>
              <span className="result-stat-label">Accuracy</span>
            </div>
          </div>
          <button className="btn-primary" onClick={() => { setSelectedClass(quizCategory.includes('class8') ? 'class8' : 'class9'); setPage('subjects') }}>
            Try Another Subject →
          </button>
          <button className="btn-secondary" onClick={goHome}>Back to Home</button>
        </div>
      </div>
    </>
  )
}