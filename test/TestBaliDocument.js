/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var baliDocument = require('../BaliDocument');
var parser = require('../transformers/DocumentParser');
var fs = require('fs');
var mocha = require('mocha');
var expect = require('chai').expect;

describe('Bali Document Notation™', function() {
    var file = 'test/source/document.bali';
    var source = fs.readFileSync(file, 'utf8');
    expect(source).to.exist;  // jshint ignore:line
    var document = baliDocument.fromSource(source);

    describe('Test Document Creation', function() {

        it('should create a document from source', function() {
            expect(document).to.exist;  // jshint ignore:line
            expect(baliDocument.isDocument(document)).to.equal(true);
            var formatted = document.toSource();
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(source);
        });

        it('should create a copy of a document', function() {
            document = document.copy();
            expect(document).to.exist;  // jshint ignore:line
            expect(baliDocument.isDocument(document)).to.equal(true);
            var formatted = document.toSource();
            expect(formatted).to.equal(source);
        });

        it('should create a draft of a document', function() {
            document.notarySeals = [];
            var draft = document.draft(document.previousReference);
            expect(draft).to.exist;  // jshint ignore:line
            expect(baliDocument.isDocument(draft)).to.equal(true);
            expect(draft.toSource()).to.equal(document.toSource());
            document = baliDocument.fromSource(source);
        });

        it('should create an unsealed copy of a document', function() {
            var unsealed = document.unsealed();
            expect(unsealed).to.exist;  // jshint ignore:line
            expect(baliDocument.isDocument(unsealed)).to.equal(true);
            expect(unsealed.notarySeals.length).to.equal(1);
            expect(document.notarySeals[0].toSource()).to.equal(unsealed.notarySeals[0].toSource());
        });

    });

    describe('Test Document List Access', function() {
        var item;
        var list = document.getValue('$list');
        expect(list).to.exist;  // jshint ignore:line

        it('should retrieve list items', function() {
            item = list.getItem(0);
            expect(item).to.exist;  // jshint ignore:line
            var iterator = list.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(item.toSource()).to.equal(iterator.getNext().toSource());
        });

        it('should add list items', function() {
            var newItem = parser.parseComponent('$element2');
            list.addItem(newItem);
            item = list.getItem(2);
            expect(item.toSource()).to.equal(newItem.toSource());
        });

        it('should update list items', function() {
            item = list.getItem(1);
            expect(item).to.exist;  // jshint ignore:line
            var newItem = parser.parseComponent('$element');
            var oldItem = list.setItem(1, newItem);
            expect(oldItem).to.exist;  // jshint ignore:line
            expect(oldItem.toSource()).to.equal(item.toSource());
            item = list.getItem(1);
            expect(item.toSource()).to.equal(newItem.toSource());
        });

        it('should remove list items', function() {
            item = list.getItem(2);
            expect(item).to.exist;  // jshint ignore:line
            var oldItem = list.removeItem(2);
            expect(oldItem).to.exist;  // jshint ignore:line
            expect(oldItem.toSource()).to.equal(item.toSource());
        });

    });

    describe('Test Document Catalog Access', function() {
        var stringKey = '$foo';
        var key = parser.parseElement(stringKey);
        expect(key).to.exist;  // jshint ignore:line
        var value;

        it('should retrieve attribute values', function() {
            var stringValue = document.getString(key);
            value = document.getValue(stringKey);
            expect(value).to.exist;  // jshint ignore:line
            expect(value.toSource()).to.equal(stringValue);
        });

        it('should set new attribute values', function() {
            var newKey = parser.parseElement('$new');
            var stringValue = value.toSource();
            var oldValue = document.setValue(newKey, value);
            expect(oldValue).to.not.exist;  // jshint ignore:line
            value = document.getValue(newKey);
            expect(value).to.exist;  // jshint ignore:line
            expect(value.toSource()).to.equal(stringValue);
        });

        it('should update attribute values', function() {
            var stringValue = '$baz';
            var oldValue = document.setValue(stringKey, stringValue);
            expect(oldValue).to.exist;  // jshint ignore:line
            expect(oldValue.toSource()).to.equal(value.toSource());
            value = document.getValue(stringKey);
            expect(value).to.exist;  // jshint ignore:line
            expect(value.toSource()).to.equal(stringValue);
        });

        it('should delete attribute values', function() {
            var oldValue = document.deleteKey(key);
            expect(oldValue).to.exist;  // jshint ignore:line
            expect(oldValue.toSource()).to.equal(value.toSource());
        });

    });

    describe('Test Document Seal Access', function() {

        it('should retrieve the last notary seal', function() {
            var seal = document.getLastSeal();
            expect(seal).to.exist;  // jshint ignore:line
            expect(seal.certificateReference.toSource()).to.equal(document.notarySeals[document.notarySeals.length - 1].certificateReference.toSource());
            expect(seal.digitalSignature.toSource()).to.equal(document.notarySeals[document.notarySeals.length - 1].digitalSignature.toSource());
        });

        it('should add a new notary seal', function() {
            var previousReference = "<bali:[$protocol:v1,$tag:#4Z46DL76YDRSSYW6HNDVSL66XV69TTS6,$version:v1,$digest:'C3RXCMQ1YJH2TPP7CJNAHRW9JH103ZW8XC26KY47NNQKCF969GBS076NZ7G2DG18KLP5K55H4Q8GSSK1MJJYT5BZX8BMQ1WXDDWKSZH']>";
            var digitalSignature = "'\n" +
                    "    620RF0K2049Z3JCBCK512JWMNQVW5NLAL8Q3N76XKXCJ2HDKA44QPGFNTYTANX5XRS0FLHB4FDTMC69H\n" +
                    "    DYMVAKDQ0RLZF5RP25W8PRTVY45TCYZ7N0142PMAKPWSJT3LZC078VY2HH104826PP9XX56PCT0S0YT0\n" +
                    "    PLQGACSS3BCJX4JAWX892H71JL3HKXYSFSC78G7YM2DJKPYZXBCBLPBSJLN9Y\n" +
                    "'";
            document.addSeal(previousReference, digitalSignature);
            expect(document.notarySeals.length).to.equal(3);
        });

        it('should retrieve all the notary seals', function() {
            var seals = document.getSeals();
            expect(seals).to.exist;  // jshint ignore:line
            expect(seals.length).to.equal(3);
            for (var i = 0; i < seals.length; i++) {
                var seal = seals[i];
                expect(seal.certificateReference.toSource()).to.equal(document.notarySeals[i].certificateReference.toSource());
                expect(seal.digitalSignature.toSource()).to.equal(document.notarySeals[i].digitalSignature.toSource());
            }
        });

    });

});
