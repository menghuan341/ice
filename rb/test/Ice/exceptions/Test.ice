// **********************************************************************
//
// Copyright (c) 2003-2012 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************

#pragma once

module Test
{

interface Empty
{
};

interface Thrower;

exception Base {};

exception A extends Base
{
    int aMem;
};

exception B extends A
{
    int bMem;
};

exception C extends B
{
    int cMem;
};

exception D
{
    int dMem;
};

module Mod
{
    exception A extends ::Test::A
    {
        int a2Mem;
    };
};


["ami"] interface Thrower
{
    void shutdown();
    bool supportsUndeclaredExceptions();
    bool supportsAssertException();

    void throwAasA(int a) throws A;
    void throwAorDasAorD(int a) throws A, D;
    void throwBasA(int a, int b) throws A;
    void throwCasA(int a, int b, int c) throws A;
    void throwBasB(int a, int b) throws B;
    void throwCasB(int a, int b, int c) throws B;
    void throwCasC(int a, int b, int c) throws C;

    void throwModA(int a, int a2) throws Mod::A;

    void throwUndeclaredA(int a);
    void throwUndeclaredB(int a, int b);
    void throwUndeclaredC(int a, int b, int c);
    void throwLocalException();
    void throwNonIceException();
    void throwAssertException();
};

["ami"] interface WrongOperation
{
    void noSuchOperation();
};

};
