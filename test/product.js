//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
const Product = require('../models/product.model');


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
const API = 'http://localhost:4000'

chai.use(chaiHttp);
//Our parent block
describe('Products', () => {
     
/*
  * Test the /GET route
  */
  describe('/GET all products', () => {
      it('it should GET all products', (done) => {
        chai.request(API)
            .get('/api/product')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.data.length.should.be.eql(35);
              done();
            });
      });
  });

  describe('/GET All_large_machines', () => {
    it('it should GET all large machine', (done) => {
      chai.request(API)
          .get('/api/product?product_type=COFFEE_MACHINE_LARGE')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.data.length.should.be.eql(3);
            done();
          });
    });
});

describe('/GET All_large_Pods', () => {
    it('it should GET all large pods', (done) => {
      chai.request(API)
          .get('/api/product?product_type=COFFEE_POD_LARGE')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.data.length.should.be.eql(10);
            done();
          });
    });
});

describe('/GET All_esspresso_Vanilla_Pods', () => {
    it('it should GET all  esspresso Vanilla Pods', (done) => {
      chai.request(API)
          .get('/api/product?product_type=ESPRESSO_POD&coffe_flavor=COFFEE_FLAVOR_VANILLA')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.data.length.should.be.eql(3);
            done();
          });
    });
});

describe('/GET All_esspresso_machine', () => {
    it('it should GET all  esspresso machine', (done) => {
      chai.request(API)
          .get('/api/product?product_type=ESPRESSO_MACHINE')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.data.length.should.be.eql(3);
            done();
          });
    });
});

describe('/GET All_small_Pods', () => {
    it('it should GET all small Pods', (done) => {
      chai.request(API)
          .get('/api/product?product_type=COFFEE_POD_SMALL')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.data.length.should.be.eql(10);
            done();
          });
    });
});

describe('/GET All_Pods_in7Dozen ', () => {
    it('it should GET All Pods in 7 Dozen', (done) => {
      chai.request(API)
          .get('/api/product?pack_size=7')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.data.length.should.be.eql(2);
            done();
          });
    });
});

});