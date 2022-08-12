var express = require("express");
var path = require("path");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var { Prisma, PrismaClient } = require("@prisma/client");

var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");

var corsOptions = {
	origin: process.env.CLIENT_URL,
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	credentials: true,
};

var app = express();
var prisma = new PrismaClient();
app.set("db", prisma);
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/auth", authRouter);

module.exports = app;
